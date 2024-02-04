import { useState } from 'react';
import './EditForm.scss';

const EditForm = ({ movie }) => {
	const [editedMovie, setEditedMovie] = useState(movie);
	const updateMovie = async () => {
		event.preventDefault();
		fetch(import.meta.env.VITE_SERVER_LINK + 'movies/edit', {
			method: 'PUT',
			body: JSON.stringify(editedMovie),
			headers: { 'Content-Type': 'application/json' },
		});
		fetch(import.meta.env.VITE_SERVER_LINK + 'favorites/edit', {
			method: 'PUT',
			body: JSON.stringify(editedMovie),
			headers: { 'Content-Type': 'application/json' },
		});
	};

	return (
		<form className='editForm'>
			<input
				type='text'
				onChange={(e) =>
					setEditedMovie({ ...editedMovie, title: e.target.value })
				}
				defaultValue={movie.title}
			/>
			<input
				type='number'
				name=''
				id=''
				pla
				defaultValue={movie.year}
				onChange={(e) =>
					setEditedMovie({
						...editedMovie,
						year: Number(e.target.value),
					})
				}
			/>
			<input
				type='text'
				defaultValue={movie.director}
				onChange={(e) =>
					setEditedMovie({ ...editedMovie, director: e.target.value })
				}
			/>
			<input
				type='text'
				defaultValue={movie.genres}
				onChange={(e) =>
					setEditedMovie({ ...editedMovie, genres: e.target.value })
				}
			/>
			<input
				type='number'
				name=''
				id=''
				defaultValue={movie.imdb.rating}
				onChange={(e) =>
					setEditedMovie({
						...editedMovie,
						'imdb.rating': Number(e.target.value),
					})
				}
			/>
			<input
				type='text'
				defaultValue={movie.poster}
				onChange={(e) =>
					setEditedMovie({ ...editedMovie, poster: e.target.value })
				}
			/>
			<textarea
				name=''
				id=''
				cols='30'
				rows='10'
				defaultValue={movie.plot}
				onChange={(e) =>
					setEditedMovie({ ...editedMovie, plot: e.target.value })
				}
			/>
			<button onClick={() => updateMovie()}>Submit</button>
		</form>
	);
};

export default EditForm;
