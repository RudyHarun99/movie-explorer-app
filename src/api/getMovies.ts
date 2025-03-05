import { AxiosRequestConfig } from "axios";
import { QueryFunction } from "@tanstack/react-query";
import { customAxios } from ".";
import { z } from "zod";
import { movieSchema } from "@/models/movie";

export type MoviesQueryKey = [
  string,
];

export const moviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(movieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type MovieResponse = z.infer<typeof moviesResponseSchema>;

export const getMovies: QueryFunction<MovieResponse, MoviesQueryKey> = async ({
  queryKey,
}) => {
  const [ path ] = queryKey;
  const apiPath = `/${path}`;
  const response = await customAxios.get<MovieResponse>(apiPath);

  return moviesResponseSchema.parse(response.data);
};