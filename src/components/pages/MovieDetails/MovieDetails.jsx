import { useParams, useLocation, NavLink, Outlet } from "react-router-dom";
import {
  DetailsContainer,
  PicturesContainer,
  BackLink,
  MainInfoWrapper,
  DetailPoster,
  InfoContent,
  InfoTitle,
  InfoSubtitle,
  GenreList,
  AdditionalInfoWrapper,
  InfoLinksList,
  InfoNavLink,
} from "./MovieDetails.style";

import { useEffect, useState } from "react";
import { getMovieDetails } from "../../../api";

export function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    }
    fetchMovie();
  }, [movieId]);

  const imageUrl = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const deafultImg =
    "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg";

  return (
    <>
      <DetailsContainer>
        <PicturesContainer>
          <BackLink to={location.state?.pathname || "/"}>Go back</BackLink>
          {movie.poster_path ? (
            <DetailPoster src={imageUrl} alt={movie.title} />
          ) : (
            <DetailPoster src={deafultImg} alt={movie.title} />
          )}
        </PicturesContainer>
        <InfoContent>
          <InfoTitle>{movie.title}</InfoTitle>
          <InfoSubtitle>Overview</InfoSubtitle>
          <p>{movie.overview}</p>
          <InfoSubtitle>Genres</InfoSubtitle>
          <ul>
            {movie.genres?.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </InfoContent>
      </DetailsContainer>
      <AdditionalInfoWrapper>
        <h2>Additional information</h2>
        <InfoLinksList>
          <li>
            <InfoNavLink to="cast">Cast</InfoNavLink>
          </li>
          <li>
            <InfoNavLink to="reviews">Reviews</InfoNavLink>
          </li>
        </InfoLinksList>
      </AdditionalInfoWrapper>
      <Outlet />
    </>
  );
}
