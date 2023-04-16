// import { Character } from '@/common/interface';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const apiLink = 'https://rickandmortyapi.com/api';

// const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({
//     baseUrl: apiLink,
//   }),
//   endpoints: (build) => ({
//     searchCharacters: build.query<Character[], string>({
//       query: (search: string) => ({
//         url: '/character',
//         params: {
//           name: search,
//         },
//       }),
//     }),
//   }),
// });

// export const { useSearchCharactersQuery } = apiSlice;
// export default apiSlice;
