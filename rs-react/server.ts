import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const app = express();
const port = 3000;
const dirName = path.dirname(fileURLToPath(import.meta.url));
const page = path.resolve(dirName, 'index.html');

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

app.use(vite.middlewares);

app.use('*', async (req, res, next) => {
  const url = req.originalUrl;
  try {
    let template = fs.readFileSync(page, 'utf-8');
    template = await vite.transformIndexHtml(url, template);
    const [htmlStart, htmlEnd] = template.split('<!--html-->');
    const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');
    const { pipe } = await render(url, {
      onShellReady() {
        res.write(htmlStart);
        pipe(res);
      },
      onAllReady() {
        res.write(htmlEnd);
        res.end();
      },
      onShellError(error: Error) {
        console.log(error);
      },
    });
  } catch (e) {
    vite.ssrFixStacktrace(e as Error);
    next(e);
  }
});

app.listen(port, () => {
  console.log(`Server started here http://localhost:${port}`);
});
