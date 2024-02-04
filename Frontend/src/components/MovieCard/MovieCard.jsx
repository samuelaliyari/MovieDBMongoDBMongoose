import { useEffect, useState } from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';
import RemoveFavorite from '../RemoveFavorite/RemoveFavorite';

const MovieCard = ({ movie, collection, setMovies }) => {
	const fallBackImg =
		'https://static.vecteezy.com/system/resources/previews/011/860/693/original/its-movie-time-vector.jpg';
	const [imgSrc, setimgSrc] = useState(
		movie.poster?.replace('http:', 'https:'),
	);

	useEffect(() => {
		setimgSrc(movie.poster?.replace('http:', 'https:'));
	}, [movie]);
	return (
		<>
			<div className='movieCard'>
				<Link to={`/moviedetail/${movie._id}`}>
					<div>
						<img
							src={imgSrc}
							onError={() => setimgSrc(fallBackImg)}
							alt=''
						/>
					</div>
					<h5>{movie.title}</h5>
					<h6>{movie.director}</h6>
				</Link>
				{collection === 'favorites' ? (
					<RemoveFavorite
						movieId={movie._id}
						setMovies={setMovies}
					/>
				) : null}
			</div>
		</>
	);
};

export default MovieCard;
