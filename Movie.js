import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Movie() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=4aff2df98697bc1e8a6a6aaf0657ab22')
      .then(res => res.json())
      .then(json => setMovieList(json.results))
      .catch(error => console.error('Error fetching movies:', error));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className='movie-container' style={{ padding: '20px' }}>
      <Row>
        {movieList.map((movie) => (
          <Col key={movie.id} md={3} sm={4} xs={6} className='mb-4'>
            <Card style={{
              maxWidth: '600px',
              margin: 'auto',
              transition: 'transform 0.4s, box-shadow 0.2s',
              height: '100%',
              cursor: 'pointer',
            }} onClick={() => alert(`Clicked on ${movie.title}`)}>
              <CardImg style={{ height: 'auto', width: '100%' }} variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <CardBody style={{ padding: '10px', display: 'grid' }}>
                <CardTitle style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{movie.title}</CardTitle>
                <CardText>{movie.overview}</CardText>
                <CardText style={{ fontWeight: 'bold', fontSize: '1.0em' }}>Release Date: {movie.release_date}</CardText>
                <CardText style={{ fontWeight: 'bold', fontSize: '1.0em' }}>Rating: {movie.vote_average}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Movie;
