import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form} from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <>
    <section className='container'>
      <h1 className='display-3 text-center'>Buscador de peliculas</h1>
      <div className='text-center'>
        <Form className='form mt-3 row justify-content-lg-center'>
          <input className='col-md-6 me-3'
          placeholder='StarWars, Sherk...'></input>
          <Button className='col-md-2'>Buscar</Button>
        </Form>
      </div>
    </section>
    <section className='my-3 mainSection'>

    </section>

    </>
  )
}

export default App
