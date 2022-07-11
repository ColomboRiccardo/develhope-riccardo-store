import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
	//children: React.ReactNode;
	children: JSX.Element | JSX.Element[];
	path: string;
};

const Navigator = (props: Props) => {
	return (
		<>
			<Link to={props.path}>{props.children}</Link>
		</>
	);
};

export default Navigator;
