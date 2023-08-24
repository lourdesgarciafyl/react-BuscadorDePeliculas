import responseMovies from "../mocks/response.json"
// import noResponseMovies from "../mocks/noResponse.json"

export function useMovies () {
    const movies = responseMovies.Search
    const mappedMovies = movies.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
    return { movies: mappedMovies } 
}