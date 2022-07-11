import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
	children: JSX.Element | JSX.Element[];
	//children: ReactNode;
	value: string;
};

const NavigatorComponent = ({ children, value }: Props) => {
	return <Link to={`categories/${value}`}>{children}</Link>;
};

export default NavigatorComponent;
