import React from 'react';
import PropTypes from 'prop-types';
// Styling
import styles from './HorizontalCard.css';

const HorizontalCard = (props) => {
	const { imageSrc, title, description, date, details, extra, link } = props;
	return (
		<a className={styles.anchor} href={link} target="_blank">
			<div className={styles.cardContainer}>
				<div className={styles.imageContainer}>
					<img className={styles.image} src={imageSrc} height={150} width={150} />
				</div>
				<div className={styles.cardInfo}>
					<div className={styles.header}>
						<div className={styles.title}>
							<div>{title}</div>
							<div className={styles.description}>{description}</div>
						</div>
						<div className={styles.date}>{date}</div>
					</div>

					<div className={styles.details}>
						<ul>{details.map((detail) => <li className={styles.detail}>{detail}</li>)}</ul>
					</div>

					<div className={styles.extra}>{extra}</div>
				</div>
			</div>
		</a>
	);
};

HorizontalCard.propTypes = {
	imageSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	details: PropTypes.array.isRequired,
	extra: PropTypes.string.isRequired,
	link: PropTypes.string
};

export default HorizontalCard;
