import './AddFavorites.scss';

const AddFavorite = ({ movieId }) => {
	const addToFavorites = async () => {
		const fetchData = await fetch(
			import.meta.env.VITE_SERVER_LINK + 'favorites/' + movieId,
			{ method: 'PATCH' },
		);
		const fetchResult = await fetchData.json();
		console.log(fetchResult);
	};

	return (
		<button
			onClick={() => addToFavorites()}
			className='addFavoriteBtn'>
			<span>+</span> <p>Add to Favorites</p>
		</button>
	);
};

export default AddFavorite;
