import { useEffect, useState } from "react"
import { searchMovie } from "../../../api"
import { FormMovie, MovieSearch, ButtonMovie } from "./Movie.style";
import MovieList from "../../MovieList/MovieList"

export function Movie() {

    const [qwery, setQwery] = useState("")
    const [movie, setMovie] = useState([])
    // const [movie, setMovie] = useState(() => {
    //     const saveData = localStorage.getItem("movie")
    //     if(saveData) {

    //     }
    // })

    async function handleSubmit(evt) {
        evt.preventDefault()
        if(qwery.trim() === "") {
            return 
        }
        const data = await searchMovie(qwery)
        setMovie(data)
    }

    return (
        <>
            <FormMovie onSubmit={handleSubmit}>
                <MovieSearch onChange={(event) => setQwery(event.target.value)} value={qwery} type="text" placeholder="enter movie"/>
                <ButtonMovie type="submit">Search</ButtonMovie>
            </FormMovie>
            {movie.length > 0 && <MovieList movies={movie} />}
        </>
    )
}