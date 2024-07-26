import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPerson, TPeopleReponse } from '@services/api';

export interface IPeopleSearchParams {
  name?: string;
  page?: number;
}

const BASE_URL = 'https://swapi.dev/api/';

export const swApi = createApi({
  reducerPath: 'swApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPersonById: builder.query<IPerson, string>({
      query: (personId) => `people/${personId}`,
    }),
    getPeople: builder.query<TPeopleReponse, IPeopleSearchParams>({
      query: ({ name, page }) => {
        const params = new URLSearchParams();
        if (name) {
          params.append('search', name);
        }

        if (page !== undefined) {
          params.append('page', `${page}`);
        }
        return `people?${params.toString()}`;
      },
    }),
  }),
});

export const useGetPersonByIdQuery: (personId: string) => ReturnType<typeof swApi.endpoints.getPersonById.useQuery> =
  swApi.endpoints.getPersonById.useQuery;

export const useGetPeopleQuery: (
  searchParams: IPeopleSearchParams
) => ReturnType<typeof swApi.endpoints.getPeople.useQuery> = swApi.endpoints.getPeople.useQuery;
