import React from 'react';
import PropTypes from 'prop-types';
// Styling
import styles from './ContentButton.css';

const ContentButton = (props) => {
	const contentButtonClass = props.lightMode ? styles.contentButtonLight : styles.contentButtonDark;
	return (
		<div className={contentButtonClass} onClick={props.onClick}>
			{props.title}
		</div>
	);
};

ContentButton.propTypes = {
	title: PropTypes.string.isRequired,
	lightMode: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};

export default ContentButton;
