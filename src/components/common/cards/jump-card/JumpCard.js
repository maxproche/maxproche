import React from 'react';
import PropTypes from 'prop-types';
// Styling
import styles from './JumpCard.css';

const JumpCard = (props) => <div className={styles.card}>{props.children}</div>;

export default JumpCard;
