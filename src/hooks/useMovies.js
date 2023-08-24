import { serviceMovies } from "../services/movies"
import { useMemo, useRef, useState } from "react"

export function useMovies ({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [, setError] = useState(null)
    const prevSearch = useRef(search)

    const getMovies = async () => {
        if (search === prevSearch.current) return

        try{
            setLoading(true)
            setError(null)
            prevSearch.current = search
            const newMovies = await serviceMovies({search})
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    const sortedMovies = useMemo(() => {
        return sort
          ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
          : movies
      }, [sort, movies])

    return { movies: sortedMovies, getMovies, loading } 
}