import React from 'react';
import NavigatorComponent from '../NavigatorComponent/NavigatorComponent';

const handleCategories = (value: string) => {
	switch (value) {
		case 'shirt':
			return 'shirt.png';
		case 'phone':
			return 'phone.png';
		case 'shoes':
			return 'shoes.png';
		default:
			throw new Error(`${value} is not a valid value for categories component`);
	}
};
const CategoriesComponent = ({ value }: { value: string }) => {
	return (
		<NavigatorComponent value={value}>
			<div className='CategoriesComponent'>
				<img src={`./images/${handleCategories(value)}`} alt='' />
				<span>{value}</span>
			</div>
		</NavigatorComponent>
	);
};

export default CategoriesComponent;
