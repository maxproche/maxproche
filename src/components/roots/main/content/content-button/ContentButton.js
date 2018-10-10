import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Assets
import LinkedInLogo from 'assets/LinkedIn-Logo.png';
import GithubLogo from 'assets/Github-Logo.png';
import Resume from 'assets/Resume.pdf';
// Constants
import DetailsPageNames from 'utils/constants/details-page-names/DetailsPageNames';
import Links from 'utils/constants/links/Links';
// Styling
import styles from './ContentButton.css';

class ContentButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayAuxiliary: false
		};
		this.canDisplayAuxiliary =
			props.title == DetailsPageNames.CONTACT || props.title === DetailsPageNames.SOCIAL;
	}

	handleClick = () => {
		if (this.canDisplayAuxiliary) {
			this.setState({
				displayAuxiliary: !this.state.displayAuxiliary
			});
		}
		this.props.onClick();
	};

	renderAuxiliaryContent = () => {
		if (this.props.title === DetailsPageNames.CONTACT) {
			return (
				<div className={styles.auxiliaryContact}>
					<p>Email (school): mroche19@amherst.edu</p>
					<p>Email (personal): maxproche@gmail.com</p>
				</div>
			);
		}
		if (this.props.title === DetailsPageNames.SOCIAL) {
			return (
				<div className={styles.auxiliarySocial}>
					<a href={Links.GITHUB_URL} target="_blank">
						<img src={GithubLogo} />
					</a>
					<a href={Links.LINKEDIN_URL} target="_blank">
						<img src={LinkedInLogo} />
					</a>
				</div>
			);
		}
	};

	render() {
		const { props } = this;
		const darkClass = props.lightMode ? '' : styles.contentButtonDark;
		const classes = classNames(styles.contentButton, darkClass);

		return (
			<React.Fragment>
				<div className={classes} onClick={this.handleClick}>
					{props.title === DetailsPageNames.RESUME ? (
						<a className={styles.resumeLink} href={Resume} download>
							{' '}
							{props.title}{' '}
						</a>
					) : (
						<span>{props.title}</span>
					)}
				</div>
				{this.state.displayAuxiliary ? this.renderAuxiliaryContent() : null}
			</React.Fragment>
		);
	}
}

ContentButton.propTypes = {
	title: PropTypes.string.isRequired,
	lightMode: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};

export default ContentButton;
