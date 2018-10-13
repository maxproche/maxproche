import React from 'react';
import PropTypes from 'prop-types';
// Assets
import MyImage from 'assets/image1.jpeg';
import GithubLogo from 'assets/Github-Logo.png';
import LinkedInLogo from 'assets/LinkedIn-Logo.png';
// Constants
import Links from 'utils/constants/links/Links';
// Styling
import styles from './MobileScreen.css';

const MobileScreen = (props) => {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={MyImage} alt="" />
			<div className={styles.title}>Developer. Athlete. Student.</div>
			<div className={styles.details}>Visit my site on a larger device to learn more about me</div>
			<div className={styles.linkContainer}>
				<a href={Links.GITHUB_URL} style={{ float: 'left' }} target="_blank">
					<img src={GithubLogo} alt="Github" />
				</a>
				<a href={Links.LINKEDIN_URL} style={{ float: 'right' }} target="_blank">
					<img src={LinkedInLogo} alt="LinkedIn" />
				</a>
			</div>
		</div>
	);
};

export default MobileScreen;
