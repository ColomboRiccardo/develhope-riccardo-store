import React from 'react';
import { ButtonComponent } from '../button/Button.component';
import Searchbar from '../searchbar/Searchbar.components';
import './Header.style.scss';

const Header = (): JSX.Element => {
	return (
		<header className='Header'>
			<div className='Header__div--1'>
				<h1>E-shop</h1>
				<p>+5000 products and categories</p>
			</div>
			<div className='Header__div--2'>
				<ButtonComponent type='cart' />
				<ButtonComponent type='heart' />
			</div>
			<Searchbar />
		</header>
	);
};

export default Header;
