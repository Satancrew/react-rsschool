import React from 'react';
import { Header } from '@/components/Header/Header';

export const AboutUsPage = () => {
  return (
    <>
      <Header checkAboutBtn={true} checkHomeBtn={false} />
      <h1>About page</h1>
    </>
  );
};
