import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  movieDetail: {},
  favourites: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
    addFavourite: (state, action) => {
      state.favourites = [...state.favourites, action.payload];
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
  },
});

export const {
  setMovies,
  setMovieDetail,
  addFavourite,
  removeFavourite
} = movieSlice.actions;