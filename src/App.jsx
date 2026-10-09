import { useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { Movie } from "./components/pages/Movie/Movie";
import { MovieDetails } from "./components/pages/MovieDetails/MovieDetails";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
