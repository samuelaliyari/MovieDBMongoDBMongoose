import './Footer.scss';
import heart from '../../../public/img/heart.png';
import youtube from '../../../public/img/youtube.png';
import facebook from '../../../public/img/facebook.png';
const Footer = () => {
	return (
		<footer>
			<h5>Imprint</h5>
			<h5>
				Made with love in heart and popcorn in tummy.
				<img
					src={heart}
					alt=''
				/>
			</h5>
			<div>
				<a href=''>
					<img
						src={youtube}
						alt=''
					/>
				</a>
				<a href=''>
					<img
						src={facebook}
						alt=''
					/>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
