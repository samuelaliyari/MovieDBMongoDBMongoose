import MovieCard from '../MovieCard/MovieCard';
import './List.scss';
const List = ({ movies, collection, setMovies }) => {
	return (
		<section className='list'>
			{movies.map((movie) => (
				<MovieCard
					key={movie._id}
					movie={movie}
					collection={collection}
					setMovies={setMovies}
				/>
			))}
		</section>
	);
};

export default List;
