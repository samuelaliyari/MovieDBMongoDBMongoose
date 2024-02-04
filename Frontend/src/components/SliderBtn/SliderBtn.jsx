import './SliderBtn.scss';
import next from '../../../public/img/next.png';

const SliderBtn = ({ index, setIndex }) => {
	return (
		<div className='SliderBtn'>
			{index.min !== 0 ? (
				<img
					className='previousPage'
					src={next}
					onClick={() =>
						setIndex({
							...index,
							min: index.min - 9,
							max: index.max - 9,
						})
					}
				/>
			) : (
				<img
					className='previousPageDeactive'
					src={next}
				/>
			)}
			<img
				className='nextPage'
				src={next}
				onClick={() =>
					setIndex({
						...index,
						min: index.min + 9,
						max: index.max + 9,
					})
				}
			/>
		</div>
	);
};

export default SliderBtn;
