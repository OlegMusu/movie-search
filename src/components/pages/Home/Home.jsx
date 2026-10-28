import { getTrendingMovies } from "../../../api";
import { useEffect, useState } from "react";

import MovieList from "../../MovieList/MovieList";

export function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const movies = await getTrendingMovies();
      setMovie(movies);
    }

    fetchMovies();
  }, []);

  return (
    <>
      <h1 className="trending-today">Trending today</h1>
      <MovieList movies={movie} />
    </>
  );
}
