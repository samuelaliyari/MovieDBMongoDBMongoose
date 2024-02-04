import { useEffect, useState } from 'react';
import './Favorites.scss';
import List from '../../components/List/List';
import SliderBtn from '../../components/SliderBtn/SliderBtn';
import NavBar from '../../components/Navbar/NavBar';

const Favorites = () => {
	const [movies, setMovies] = useState([]);
	const [index, setIndex] = useState({ min: 0, max: 9 });
	const [renderMovies, setRenderMovies] = useState([]);
	const fetchData = async () => {
		const fetchData = await fetch(
			import.meta.env.VITE_SERVER_LINK + 'favorites',
		);
		const { success, result, error } = await fetchData.json();
		if (!success) console.log(error);
		setMovies(result);
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setRenderMovies(movies?.slice(index.min, index.max));
	}, [movies, index]);

	const collection = 'favorites';

	return (
		<section>
			<NavBar
				setMovies={setMovies}
				collection={collection}
			/>
			<section className='favorites'>
				<h1>Favorites</h1>
				{renderMovies.length > 10 ? (
					<SliderBtn
						index={index}
						setIndex={setIndex}
					/>
				) : null}
				<List
					movies={renderMovies}
					collection={collection}
					setMovies={setMovies}
				/>
				{renderMovies.length > 10 ? (
					<SliderBtn
						index={index}
						setIndex={setIndex}
					/>
				) : null}
			</section>
		</section>
	);
};

export default Favorites;
