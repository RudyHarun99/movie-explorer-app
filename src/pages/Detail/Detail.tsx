import React from 'react';
import { useParams } from 'react-router-dom';

type MovieParam = {
  id: string;
}

export const Detail: React.FC = () => {
  const { id } = useParams<MovieParam>();

  return (
    <div>Movie {id} Detail Page</div>
  )
}
