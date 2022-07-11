import React from 'react';
import './ProductCard.style.scss';
import { useLocation, useMatch } from 'react-router-dom';

const ProductCard = ({ img }: { img: string }): JSX.Element => {
	const location = useLocation();
	console.log(location);
	return (
		<>
			<div className='CardStyle'>
				<img src={`${window.location.origin}/images/${img}`} alt='T-shirt' />
				<span>Balanciaga T-shirt M</span>
				<span>NGN 46,000</span>
			</div>
		</>
	);
};

export default ProductCard;
