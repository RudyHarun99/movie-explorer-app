import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favourites } from './pages/Favourites';
import { Search } from './pages/Search';

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/movie/:id'
          element={<Detail />}
        />
        <Route
          path='/favourites'
          element={<Favourites />}
        />
        <Route
          path='/search'
          element={<Search />}
        />
      </Routes>
      <Footer />
    </>
  )
}
