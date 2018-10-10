import React from 'react';
import { CSSTransition, transit } from 'react-css-transition';

const FadeInOut = (props) => {
	const { enterSpeed, exitSpeed } = props;
	return (
		<CSSTransition
			{...props}
			defaultStyle={{ opacity: 0 }}
			enterStyle={{ opacity: transit(1.0, enterSpeed, 'ease-in-out') }}
			leaveStyle={{ opacity: transit(0, exitSpeed, 'ease-in-out') }}
			activeStyle={{ opacity: 1.0 }}
		>
			{props.children}
		</CSSTransition>
	);
};

export default FadeInOut;
