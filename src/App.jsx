import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button, Form } from 'react-bootstrap'
import MovieCard from './components/Movie';
import { useMovies } from './hooks/useMovies';

function App() {
  const {movies: mappedMovies} = useMovies()
  return (
    <>
    <section className='container'>
      <h1 className='display-3 text-center'>Buscador de peliculas</h1>
      <div className='text-center'>
        <Form className='form mt-3 row justify-content-center'>
          <input className='w-50 me-3'
          placeholder='StarWars, Sherk...'></input>
          <Button className='w-25' type="submit">Buscar</Button>
        </Form>
      </div>
    </section>
    <section className='my-3 mainSection bg-black px-2'>
    <MovieCard movies={mappedMovies}></MovieCard>
    </section>
    </>
  )
}

export default App
