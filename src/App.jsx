import { useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { Movie } from "./components/pages/Movie/Movie";
import { MovieDetails } from "./components/pages/MovieDetails/MovieDetails";
import { Layout } from "./components/Layout/Layout";
import Reviews from "./components/pages/Reviews/Reviews";
import Cast from "./components/pages/Cast/Cast";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
