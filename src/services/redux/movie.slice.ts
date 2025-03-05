import { createSlice } from "@reduxjs/toolkit";

type MovieItem = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieState = {
  movies: MovieItem[];
  favourites: MovieItem[];
}

const initialState: MovieState = {
  movies: [],
  favourites: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    addFavourite: (state, action) => {
      state.favourites = [...state.favourites, action.payload];
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const {
  setMovies,
  addFavourite,
  removeFavourite
} = movieSlice.actions;