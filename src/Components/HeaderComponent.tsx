import styled, { useTheme } from 'styled-components';

import ButtonComponent from '../ButtonComponent/ButtonComponent';

const HeaderComponentStyled = styled.header`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	margin: 10px;
	background-color: ${props => props.theme.main};
	div:nth-child(2) {
		margin: 20px 20px;
		grid-column: 2/3;
	}
	div:last-child {
		grid-column: 1/3;
		width: 100%;
	}
	input {
		width: 80%;
	}
`;

const HeaderComponent = () => {
	const theme = useTheme();
	return (
		<HeaderComponentStyled theme={theme}>
			<div>
				<h1>E-shop</h1>
				<p>5000 products and categories</p>
			</div>
			<div>
				<ButtonComponent value='cart' />
				<ButtonComponent value='heart' />
			</div>
			<div className='HeaderComponent__inputs__text'>
				<input type='text' />
				<ButtonComponent value='slider' />
			</div>
		</HeaderComponentStyled>
	);
};

export default HeaderComponent;
