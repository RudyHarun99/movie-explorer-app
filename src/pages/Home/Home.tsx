import React from 'react';
import { useSelector } from 'react-redux';
import { movieSelector } from '@/services/redux/movie.selectors';
import { useGetMovies } from '@/hooks/useGetMovies';

export const Home: React.FC = () => {
  const { isFetching } = useGetMovies();
  const { movies } = useSelector(movieSelector);

  return (
    <>
      <div>Home Page</div>
      {
        isFetching ?
        <li>Data is Fetching...</li> :
        JSON.stringify(movies)
      }
    </>
  )
}
