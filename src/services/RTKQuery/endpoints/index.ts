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
  }),
});

export const { useGetCountriesQuery } = extendedApi;
