import { Row, Card } from "react-bootstrap";

function MovieCard({ movies }) {
  return (
    <Row className="my-4 justify-content-evenly">
      {movies.map(movie => (
        <Card
          className="col-lg-3 col-md-4 mb-4 mx-md-1 p-0 rounded-3"
          key={movie.id}
        >
          <Card.Img className="cardImg" src={movie.poster}></Card.Img>
          <Card.Body className="text-center">
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.year}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
}

function NoMovies() {
  return (
    <h4 className="mt-2 text-warning text-center display-6">
      No se encontraron peliculas con ese título <br /> Intenta nuevamente!
    </h4>
  );
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? (
    <MovieCard movies={movies}></MovieCard>
  ) : (
    <NoMovies></NoMovies>
  );
}
