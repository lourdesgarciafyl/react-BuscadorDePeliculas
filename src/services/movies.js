const API_KEY="edf1066d&s"

export const serviceMovies = async ({search}) => {
    if(search === "") return null;

    try {
        const resp = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}=${search}`)
        const json = await resp.json()
        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
          }))
      
    } catch (e) {
        throw new Error("Error searching movies");
    }

}