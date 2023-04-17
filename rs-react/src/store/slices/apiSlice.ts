import { Character } from '@/common/interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiLink = 'https://rickandmortyapi.com/api/';

type apiType = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};

export const apiSlice = createApi({
  reducerPath: 'RickAndMortyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiLink,
  }),
  endpoints: (build) => ({
    getCharactersByName: build.query<apiType, string>({
      query: (name) => ({
        url: '/character',
        params: {
          name: name,
        },
      }),
    }),
  }),
});

export const { useGetCharactersByNameQuery } = apiSlice;
