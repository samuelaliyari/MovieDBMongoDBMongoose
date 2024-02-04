import { useState } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import './AddYourMovie.scss';

const AddYourMovie = () => {
	const [newMovie, setNewMovie] = useState({});

	const addNewMovie = async () => {
		event.preventDefault();
		const fetchData = await fetch(
			import.meta.env.VITE_SERVER_LINK + 'movies',
			{
				method: 'POST',
				body: JSON.stringify(newMovie),
				headers: { 'Content-Type': 'application/json' },
			},
		);
		const { success, result, error } = await fetchData.json();
		if (!success) console.log(error);
		else alert('Your Movie is successfully added to the Archive');
	};

	return (
		<>
			<NavBar />
			<section className='newMovie'>
				<h1>Add your own movies</h1>
				<form className='newMovieForm'>
					<input
						type='text'
						required
						placeholder='Title'
						onChange={(e) =>
							setNewMovie({
								...newMovie,
								title: e.target.value,
							})
						}
					/>
					<input
						type='number'
						required
						placeholder='Production year'
						name=''
						id=''
						onChange={(e) =>
							setNewMovie({
								...newMovie,
								year: Number(e.target.value),
							})
						}
					/>
					<input
						type='text'
						required
						placeholder='director'
						onChange={(e) =>
							setNewMovie({
								...newMovie,
								director: e.target.value,
							})
						}
					/>
					<input
						type='text'
						required
						placeholder='genre'
						onChange={(e) =>
							setNewMovie({
								...newMovie,
								genres: e.target.value,
							})
						}
					/>
					<input
						type='number'
						required
						placeholder='imdb rating'
						name=''
						id=''
						onChange={(e) =>
							setNewMovie({
								...newMovie,
								'imdb.rating': Number(e.target.value),
							})
						}
					/>
					<input
						type='text'
						required
						placeholder='URL for movieposter'
						onChange={(e) =>
							setNewMovie({
								...newMovie,
								poster: e.target.value,
							})
						}
					/>
					<textarea
						name=''
						required
						placeholder='Description'
						id=''
						cols='30'
						rows='10'
						onChange={(e) =>
							setNewMovie({
								...newMovie,
								plot: e.target.value,
							})
						}
					/>
					<button onClick={() => addNewMovie()}>Submit</button>
				</form>
			</section>
		</>
	);
};

export default AddYourMovie;
