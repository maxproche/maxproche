import * as React from 'react';
import PropTypes from 'prop-types';
// Styling
import styles from './HeaderButtonStyle.css';

const HeaderButton = (props) => {
	const headerButtonClass = props.lightMode ? styles.headerButtonLight : styles.headerButtonDark;
	return <div className={headerButtonClass}>{props.title}</div>;
};

HeaderButton.propTypes = {
	title: PropTypes.string.isRequired,
	lightMode: PropTypes.bool.isRequired
};

export default HeaderButton;
