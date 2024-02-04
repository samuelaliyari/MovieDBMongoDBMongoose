import './NavBar.scss';
import star from '../../../public/img/star.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavBar = ({ setMovies, collection }) => {
	const [searchInput, setSearchInput] = useState('');
	const navigate = useNavigate();

	const getSearchResult = async () => {
		event.preventDefault();
		if (searchInput === '') {
			window.location.reload();
		}
		const searchFetchData = await fetch(
			import.meta.env.VITE_SERVER_LINK +
				collection +
				'/search/' +
				searchInput,
		);
		const { success, result, error } = await searchFetchData.json();
		if (!success) console.log(error);
		else setMovies(result);
		if (typeof collection === 'undefined') {
			navigate('/');
		}
	};
	return (
		<header>
			<nav>
				<div>
					<NavLink to='/'>
						<h2>MMDB</h2>
					</NavLink>
					<NavLink to='/favorites'>
						<img
							src={star}
							alt=''
						/>
					</NavLink>
				</div>
				<form>
					<input
						type='text'
						onChange={(e) => setSearchInput(e.target.value)}
					/>
					<button onClick={() => getSearchResult()}>Submit</button>
				</form>
				<NavLink to='/addmovie'>Add your own</NavLink>
			</nav>
			<section className='hero'>
				<h1>
					MovieMagicDatabase has it all. But you can still
					<span> add</span> to it.
				</h1>
			</section>
		</header>
	);
};

export default NavBar;
