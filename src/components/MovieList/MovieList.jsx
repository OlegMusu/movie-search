import { useLocation } from "react-router-dom";
import { 
  MovieGrid, 
  MovieCard, 
  MovieCardLink, 
  PosterWrapper, 
  MoviePoster, 
  MovieTitle 
} from "./MovieList.style";

export default function MovieList({ movies }) {
  const location = useLocation();

  const defaultImg =
    "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg";

  return (
    <MovieGrid>
      {movies.map((movie) => {
        const imageUrl = movie.poster_path
          ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
          : defaultImg;

        return (
          <MovieCard key={movie.id}>
            <MovieCardLink
              state={location}
              to={`/movie/${movie.id}`}
            >
              <PosterWrapper>
                <MoviePoster
                  src={imageUrl}
                  alt={movie.title}
                />
              </PosterWrapper>
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieCardLink>
          </MovieCard>
        );
      })}
    </MovieGrid>
  );
}
