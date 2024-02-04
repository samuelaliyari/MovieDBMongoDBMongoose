import './RemoveFavorites.scss';

const RemoveFavorite = ({ movieId, setMovies }) => {
	const removeFavorite = async () => {
		const fetchData = await fetch(
			import.meta.env.VITE_SERVER_LINK + 'favorites/delete/' + movieId,
			{ method: 'DELETE' },
		);
		const newFetchData = await fetch(
			import.meta.env.VITE_SERVER_LINK + 'favorites',
		);
		const { success, result, error } = await newFetchData.json();
		if (!success) console.log(error);
		setMovies(result);
	};

	return (
		<button
			onClick={() => removeFavorite()}
			className='removeFavoriteBtn'>
			<span>-</span> <p>Remove from Favorites</p>
		</button>
	);
};

export default RemoveFavorite;
