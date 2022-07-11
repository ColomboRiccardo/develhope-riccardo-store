import React from 'react';
import { ReactComponent as CartIcon } from '../assets/bx-cart.svg';
import { ReactComponent as HeartIcon } from '../assets/bxs-heart.svg';
import { ReactComponent as HomeIcon } from '../assets/bxs-home.svg';
import { ReactComponent as ShoppingIcon } from '../assets/bxs-shopping-bag.svg';
import { ReactComponent as Usercon } from '../assets/bxs-user.svg';
import { ReactComponent as WalletIcon } from '../assets/bxs-wallet.svg';
import { ReactComponent as SliderIcon } from '../assets/sliders.svg';

type Props = {
	value: 'cart' | 'heart' | 'slider';
};

const handleButton = (value: string) => {
	switch (value) {
		case 'cart':
			return <CartIcon />;
		case 'heart':
			return <HeartIcon />;
		case 'slider':
			return <SliderIcon />;
		default:
			break;
	}
};

const ButtonComponent = ({ value }: Props): JSX.Element => {
	return <button className='ButtonComponent'>{handleButton(value)}</button>;
};

export default ButtonComponent;
