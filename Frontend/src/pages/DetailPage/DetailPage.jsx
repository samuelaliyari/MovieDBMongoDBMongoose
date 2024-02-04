import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailPage.scss';
import AddFavorite from '../../components/addFavorite/AddFavorite';
import EditForm from '../../components/EditForm/EditForm';
import NavBar from '../../components/Navbar/NavBar';

const DetailPage = () => {
	const movieId = useParams().movieid;
	const [movie, setMovie] = useState({});
	const [movieEditor, setMovieEditor] = useState(false);
	const fallBackImg =
		'https://static.vecteezy.com/system/resources/previews/011/860/693/original/its-movie-time-vector.jpg';
	const [imgSrc, setimgSrc] = useState(
		movie.poster?.replace('http:', 'https:'),
	);

	const editor = useRef(null);

	useEffect(() => {
		setimgSrc(movie.poster?.replace('http:', 'https:'));
	}, [movie]);

	const fetchMovieById = async () => {
		const fetchData = await fetch(
			import.meta.env.VITE_SERVER_LINK + 'movies/' + movieId,
		);
		const fetchdataJson = await fetchData.json();
		return fetchdataJson;
	};

	useEffect(() => {
		fetchMovieById().then(({ success, result, error }) => {
			if (!success) console.log(error);
			else setMovie(result);
		});
	}, []);

	const toggleMovieEditor = () => {
		setMovieEditor(!movieEditor);
		if (!movieEditor) editor.current.scrollIntoView('50%');
	};

	return (
		<>
			<NavBar />
			<section className='DetailPages'>
				<h1>{movie.title}</h1>
				<h5>
					{movie.year} | {movie.director}
				</h5>

				<div className='buttonWrapper'>
					<AddFavorite movieId={movie._id} />
					<button onClick={() => toggleMovieEditor()}>
						Edit Movie
					</button>
				</div>
				<section className='infoWrapper'>
					<article className='posterSide'>
						<div>
							<img
								src={imgSrc}
								onError={() => setimgSrc(fallBackImg)}
								alt=''
							/>
						</div>
						<div>
							<p>rating: {movie.imdb?.rating}</p>
							<p>Duration:{movie.runtime}</p>
						</div>
					</article>
					<article className='storySide'>
						<div>
							{movie.genres?.map((genre, index) => (
								<p key={index}>{genre}</p>
							))}
						</div>
						<div>
							<h2>Story</h2>
							<p>{movie.plot}</p>
						</div>
					</article>
				</section>
				<div ref={editor}>
					{movieEditor ? <EditForm movie={movie} /> : null}
				</div>
			</section>
		</>
	);
};

export default DetailPage;
