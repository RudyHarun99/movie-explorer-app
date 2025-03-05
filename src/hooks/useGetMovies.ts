import { useQuery } from "@tanstack/react-query";
import { getMovies, MoviesQueryKey } from "@/api/getMovies";
import { Movie } from "@/models/movie";
import { ZodError } from "zod";

type UseGetMoviesReturn = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
  isFetching: boolean;
  error: Error | null;
  queryKey: MoviesQueryKey;
};

export const useGetMovies = (): UseGetMoviesReturn => {
  const queryKey: MoviesQueryKey = [ 'popular' ];

  const { data, error, isFetching } = useQuery({
    queryKey,
    queryFn: getMovies,
    retry: (failureCount, error) => {
      if (error instanceof ZodError) {
        console.error('Schema validation error:', error.errors);
        return false;
      }

      return failureCount <= 3;
    },
  });

  const page = data?.page ?? 0;
  const results = data?.results ?? [];
  const total_pages = data?.total_pages ?? 0;
  const total_results = data?.total_results ?? 0;

  return {
    page,
    results,
    total_pages,
    total_results,
    isFetching,
    error,
    queryKey,
  };
};