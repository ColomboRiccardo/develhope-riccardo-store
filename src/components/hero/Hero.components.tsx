import React from 'react';
import './Hero.style.scss';

type Props = {};

const Hero = (props: Props) => {
	return (
		<div className='Hero'>
			<div>
				<h2>40% off</h2>
				<p>on select sales.</p>
				<button>shop now</button>
			</div>

			<div>
				<img src='/images/black-guy.jpg' alt='black guy' />
			</div>
		</div>
	);
};

export default Hero;
