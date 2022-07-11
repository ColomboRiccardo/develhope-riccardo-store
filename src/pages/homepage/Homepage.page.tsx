import React from 'react';
import Categories from '../../components/categories/Categories.components';
import Header from '../../components/header/Header.components';
import Hero from '../../components/hero/Hero.components';
import ProductCard from '../../components/productCard/ProductCard.components';
import './Homepage.style.scss';

type Props = {};

const Homepage = (props: Props) => {
	return (
		<>
			<Header />
			<div className='CategoriesCarousel'>
				<Categories content='phones' img='phone'></Categories>
				<Categories content='accessories' img='accessories'></Categories>
				<Categories content='fashion' img='fashion'></Categories>
				<Categories content='electronics' img='electronics'></Categories>
			</div>
			<Hero />
			<h2>Our products</h2>
			<div className='ProductGrid'>
				<ProductCard img='shirt.jpg' />
				<ProductCard img='accessories.jpg' />
				<ProductCard img='phone.jpg' />
				<ProductCard img='electronics.jpg' />
			</div>
		</>
	);
};

export default Homepage;
