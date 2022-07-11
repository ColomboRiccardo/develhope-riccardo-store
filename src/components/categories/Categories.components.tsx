import React from 'react';
import { Link } from 'react-router-dom';
import Navigator from '../navigator/Navigator.components';
import './Categories.style.scss';

type Props = {
	content: string;
	img: string;
};

const Categories = ({ content: path, img }: Props): JSX.Element => {
	return (
		<Navigator path={`/categories/${path}`}>
			<div className='Categories'>
				<img src={`/images/${img}.jpg`} alt={img}></img>
				<span>{path}</span>
			</div>
		</Navigator>
	);
};

export default Categories;
