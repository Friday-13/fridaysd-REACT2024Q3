import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPerson } from '@services/api';

const BASE_URL = 'https://swapi.dev/api/';

export const swApi = createApi({
  reducerPath: 'swApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPersonById: builder.query<IPerson, string>({
      query: (personId) => `people/${personId}`,
    }),
  }),
});

export type { IPerson };

export const useGetPersonByIdQuery: (personId: string) => ReturnType<typeof swApi.endpoints.getPersonById.useQuery> =
  swApi.endpoints.getPersonById.useQuery;
