import React from 'react';
import styles from './Home.module.scss';
import { useGetMovies } from '@/hooks/useGetMovies';

export const Home: React.FC = () => {
  const { results, isFetching } = useGetMovies();

  return (
    <>
      <div>Home Page</div>
      {isFetching && <li>Data is Fetching...</li>}
      {JSON.stringify(results)}
    </>
  )
}
