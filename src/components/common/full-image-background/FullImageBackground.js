import * as React from 'react';
import PropTypes from 'prop-types';
// Assets
import BlueChicagoBackground from 'assets/Blue-Chicago-Background.jpg';
import DarkChicagoBackground from 'assets/Dark-Chicago-Background.jpg';
import ChicagoBackground from 'assets/Chicago-Background.jpg';
import Background from 'assets/Background.jpeg';
// Components

// Styling
import styles from './FullImageBackground.css';

const FullImageBackground = (props) => {
	var containerStyle = {
		backgroundImage: `url(${ChicagoBackground})`
	};
	return (
		<div className={styles.container} style={containerStyle}>
			<div className={styles.overlay}>{props.children}</div>
		</div>
	);
};

export default FullImageBackground;
