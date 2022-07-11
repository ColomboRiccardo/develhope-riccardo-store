import React from 'react';

type Props = {
	imageLink: string;
};

const ProductComponent = (props: Props) => {
	return (
		<div className='ProductComponent'>
			<img src={props.imageLink} alt='Product' />
			<p>Amazing t-shirt.</p>
			<p>Price: 50$</p>
		</div>
	);
};

export default ProductComponent;
