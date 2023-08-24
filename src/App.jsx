import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button, Form } from 'react-bootstrap'
import MovieCard from './components/Movie';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';


function App() {
  const {search, setSearch , error} = useSearch()
  const {movies, getMovies} = useMovies({ search })

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }
  // FORMA NO CONTROLADA DE MANEJAR EL FORMULARIO
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const data = new window.FormData(event.target)
  //   const movieName = data.get("inputName")
  //   console.log(movieName)
  // }

  return (
    <>
    <section className='container'>
      <h1 className='display-3 text-center'>Buscador de peliculas</h1>
      <div className='text-center'>
        <Form onSubmit={handleSubmit} className='form mt-3 row justify-content-center'>
          <input 
          value={search}
          name="inputName"
          className='w-50 me-3'
          placeholder='StarWars, Sherk...'
          onChange={handleChange}
         ></input>
          <Button 
          className='w-25' 
          type="submit">Buscar</Button>
        </Form>
        {error && <p className='text-danger fs-6'>{error}</p>}
      </div>
    </section>
    <section className='my-3 mainSection bg-black px-2'>
    <MovieCard movies={movies}></MovieCard>
    </section>
    </>
  )
}

export default App
