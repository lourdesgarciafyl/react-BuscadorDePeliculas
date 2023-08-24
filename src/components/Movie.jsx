import { Row, Card } from "react-bootstrap";

const MovieCard = ({ movies }) => {
    const hasMovies = movies.length > 0
    return (
        <>
        {
        hasMovies 
        ? (<Row className='my-4 justify-content-evenly'>
          {movies.map (movie => ( 

                  <Card className='col-lg-3 col-md-4 mb-4 mx-md-1 p-0 rounded-3' key={movie.id}>
                    <Card.Img className='cardImg' src={movie.poster}></Card.Img>
                    <Card.Body className='text-center'>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.year}</Card.Text>
                    </Card.Body>
                  </Card>
          ))}
        </Row>) : 
        ( <h4>No se encontraron peliculas con ese título</h4>) 
      }
        </>
    )
}
export default MovieCard