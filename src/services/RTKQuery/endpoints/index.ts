import { baseApi } from "..";

export const extendedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCountries: builder.query<any, void>({
      query: () => ({
        url: "/all",
        method: "get",
      }),
      providesTags: ["countries"],
    }),
    getCountryByCode: builder.query<any, string>({
      query: (code) => ({
        url: `/alpha/${code}`,
        method: "get",
      }),
    }),
  }),
});

export const { useGetCountriesQuery, useGetCountryByCodeQuery } = extendedApi;
