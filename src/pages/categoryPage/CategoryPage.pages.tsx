import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard.components';

const CategoryPage = () => {
	const path = useParams();
	return (
		<div>
			<h2>{`${path.category}`}</h2>
			<div className='ProductGrid'>
				<ProductCard img='shirt.jpg' />
				<ProductCard img='accessories.jpg' />
				<ProductCard img='phone.jpg' />
				<ProductCard img='electronics.jpg' />
			</div>
		</div>
	);
};

export default CategoryPage;
