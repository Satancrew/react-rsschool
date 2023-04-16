import { Character } from '@/common/interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiLink = 'https://rickandmortyapi.com/api/character';

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
  endpoints: (builder) => ({
    getCharactersByName: builder.query<apiType, string>({
      query: (name) => `/?name=${name}`,
    }),
  }),
});

export const { useGetCharactersByNameQuery } = apiSlice;
