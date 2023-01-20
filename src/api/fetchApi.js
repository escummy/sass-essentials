import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchApi = createApi({
  reducerPath: "fetchApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3/` }),
  endpoints: (builder) => ({
    getMovies: builder.mutation({
      query: ({ query }) => {
        return {
          url: `/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
          method: "GET",

          // url: `/search/movie?api_key=${import.meta.env.VITE_API_KEY]&language=en-US&page=1&include_adult=false&query=${query}`,
          // method: "GET",
        };
      },
    }),
  }),
});

export const { useGetMoviesMutation } = fetchApi;
