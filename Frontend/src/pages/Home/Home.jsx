import { useEffect, useState } from 'react';
import './Home.scss';
import List from '../../components/List/List';
import SliderBtn from '../../components/SliderBtn/SliderBtn';
import NavBar from '../../components/Navbar/NavBar';

const Home = () => {
	const [movies, setMovies] = useState([]);
	const [index, setIndex] = useState({ min: 0, max: 9 });
	const [renderMovies, setRenderMovies] = useState([]);

	const fetchData = async () => {
		const fetchData = await fetch(
			import.meta.env.VITE_SERVER_LINK + 'movies',
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

	const collection = 'movies';

	return (
		<section>
			<NavBar
				setMovies={setMovies}
				collection={collection}
			/>
			<main>
				<h1>ALL MOVIES</h1>
				<SliderBtn
					index={index}
					setIndex={setIndex}
				/>
				<List movies={renderMovies} />
				<SliderBtn
					index={index}
					setIndex={setIndex}
				/>
			</main>
		</section>
	);
};

export default Home;
