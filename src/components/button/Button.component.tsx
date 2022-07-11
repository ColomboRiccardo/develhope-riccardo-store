import { ReactComponent as CartIcon } from '../../assets/bx-cart.svg';
import { ReactComponent as HomeIcon } from '../../assets/bxs-home.svg';
import { ReactComponent as ShoppingIcon } from '../../assets/bxs-shopping-bag.svg';
import { ReactComponent as UserIcon } from '../../assets/bxs-user.svg';
import { ReactComponent as WalletIcon } from '../../assets/bxs-user.svg';
import { ReactComponent as HeartIcon } from '../../assets/bxs-heart.svg';
import { ReactComponent as FilterIcon } from '../../assets/sliders.svg';
import './Button.style.scss';

type Props = {
	type: string;
	content?: string;
};

const handleIcon = (type: string, content?: string) => {
	switch (type) {
		case 'cart':
			return <CartIcon />;
		case 'home':
			return <HomeIcon />;
		case 'shopping':
			return <ShoppingIcon />;
		case 'user':
			return <UserIcon />;
		case 'wallet':
			return <WalletIcon />;
		case 'heart':
			return <HeartIcon />;
		case 'filter':
			return <FilterIcon />;
		case 'normal':
			return <p>{content}</p>;
		default:
			return <p>Invalid button</p>;
	}
};

export const ButtonComponent = (props: Props): JSX.Element => {
	return (
		<button className='Button'>{handleIcon(props.type, props.content)}</button>
	);
};
