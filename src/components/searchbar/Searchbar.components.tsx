import React from 'react';
import { ButtonComponent } from '../button/Button.component';

type Props = {};

const Searchbar = (props: Props) => {
	return (
		<div className='Searchbar'>
			<input type='text' />
			<ButtonComponent type='filter' />
		</div>
	);
};

export default Searchbar;
