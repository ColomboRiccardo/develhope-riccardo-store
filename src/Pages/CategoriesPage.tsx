import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {};

const CategoriesPage = (props: Props) => {
	const params = useParams();
	return (
		<>
			<div>CategoriesPage</div>
			<p>{params.category}</p>
		</>
	);
};

export default CategoriesPage;
