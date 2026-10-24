import axios from "axios";

const API_KEY = "512f66b1e095c83305d1cfca5d34313d"

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export async function getTrendingMovies() {
    const response = await axios.get("trending/movie/day", {
        params: {
            api_key: API_KEY
        }
    })
    return response.data.results
}

export async function getMovieDetails(movieId) {
    const response = await axios.get(`movie/${movieId}`, {
        params: {
            api_key: API_KEY,
        }
    })
    return response.data
}

export async function getMovieCast(id) {
    const response = await axios.get(`movie/${id}/credits`, {
        params: {
            api_key: API_KEY,
        }
    })
    return response.data.cast
}

export async function getMovieReviews(id) {
    const response = await axios.get(`movie/${id}/reviews`, {
        params: {
            api_key: API_KEY,
        }
    })
    return response.data.results
}   

export async function searchMovie(query) {
    const response = await axios.get(`search/movie`, {
        params: {
            api_key: API_KEY,
            query: query,
        }
    })
    return response.data.results
}