import { useState, useEffect } from "react";
import { getMovieCast } from "../../../api";
import { useParams } from "react-router-dom";
import {
  CastTitle,
  CastGrid,
  CastCard,
  CastPhoto,
  CastName,
  CharacterName,
} from "./Cast.style";

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      const data = await getMovieCast(movieId);
      setCast(data);
    }
    fetchCast();
  }, [movieId]);

  return (
    <>
      <CastTitle>Cast</CastTitle>
      <CastGrid>
        {cast.map((actor) => {
          return (
            <CastCard key={actor.id}>
              <CastPhoto
                src={`http://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <CastName>{actor.name}</CastName>
              <CharacterName>Character: {actor.character}</CharacterName>
            </CastCard>
          );
        })}
      </CastGrid>
    </>
  );
}
