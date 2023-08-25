import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button, Form} from 'react-bootstrap'
import { Movies } from './components/Movie';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import Loading from './components/Loading';
import { useCallback, useState } from 'react';
import debounce from 'just-debounce-it';

function App() {
  const [sort, setSort] = useState(false)
  const {search, setSearch , error} = useSearch()
  const {movies, getMovies, loading} = useMovies({ search, sort })
  
  const debauncedGetMovies = useCallback (
    debounce(search => {
    console.log("search")
    getMovies({search})
  }, 300), []
  ) 

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debauncedGetMovies(newSearch)
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

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
    <section className='container'>
      <h1 className='display-3 text-center'>Buscador de peliculas</h1>
      <div className='text-center'>
        <Form onSubmit={handleSubmit} className='form mt-3 row justify-content-center'>
          <input 
          value={search}
          name="inputName"
          className='col-3'
          placeholder='StarWars, Sherk...'
          onChange={handleChange}
         ></input>
          <input 
          type='checkbox'
          onChange={handleSort}
          checked={sort}
          className='col-1 m-1'
         ></input>
          <Button 
          className='w-25' 
          type="submit">Buscar</Button>
        </Form>
        {error && <p className='text-danger fs-6'>{error}</p>}
      </div>
    </section>
    <section className='my-3 mainSection bg-black px-2'>
   { loading? (<Loading />) : (<Movies movies={movies}></Movies>)}
    </section>
    </>
  )
}

export default App
