import { useState, useEffect } from "react"
import { getMovieCast } from "../../../api"
import { useParams } from "react-router-dom"

export default function Cast () {
    const [cast, setCast] = useState([])
    const {movieId} = useParams()

    useEffect(() => {
        async function fetchCast() {
            const data = await getMovieCast(movieId)
            setCast(data)
        }
        fetchCast()
    }, [movieId])

    return (
        <>
            <h1>Cast</h1>
            <ul>
                {cast.map((actor) => {
                    return (
                        <li key={actor.id}>
                            <img src={`http://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                            <h2>{actor.name}</h2>
                            <p>Character: {actor.character}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}