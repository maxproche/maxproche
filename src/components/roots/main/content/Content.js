import React from 'react';
import PropTypes from 'prop-types';
// Actions
import PageActions from 'store/actions/page';
// Constants
import PageNames from 'utils/constants/page-names/PageNames';
import DetailsPageNames from 'utils/constants/details-page-names/DetailsPageNames';
// Components
import ContentButton from './content-button/ContentButton';
// Redux
import { connect } from 'react-redux';
// Styling
import styles from './Content.css';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
			content: 'contact'
		};
	}

	homeButtons = [
		{
			title: DetailsPageNames.CONTACT
		},
		{
			title: DetailsPageNames.RESUME
		},
		{
			title: DetailsPageNames.SOCIAL
		}
	];

	educationButtons = [
		{
			title: DetailsPageNames.HIGH_SCHOOL
		},
		{
			title: DetailsPageNames.UNIVERSITY
		}
	];

	experienceButtons = [
		{
			title: DetailsPageNames.SOFTWARE_JOBS
		},
		{
			title: DetailsPageNames.UNIVERSITY_JOBS
		},
		{
			title: DetailsPageNames.OTHER_JOBS
		}
	];

	toggleHover = () => {
		this.setState({
			hover: !this.state.hover
		});
	};

	renderContentButtons = () => {
		switch (this.props.pageName) {
			case PageNames.HOME:
				return this._renderContentButtons(this.homeButtons);
			case PageNames.EDUCATION:
				return this._renderContentButtons(this.educationButtons);
			case PageNames.EXPERIENCE:
				return this._renderContentButtons(this.experienceButtons);
			default:
				return null;
		}
	};

	_handleContentButtonClick = (detailsPageName) => {
		this.props.updateDetailsPageName(detailsPageName);
	};

	_renderContentButtons = (buttons) => (
		<React.Fragment>
			{buttons.map((button) => (
				<ContentButton
					title={button.title}
					lightMode={!this.state.hover}
					onClick={() => this._handleContentButtonClick(button.title)}
				/>
			))}
		</React.Fragment>
	);

	renderContent = () => {
		let innerContent;
		switch (this.state.content) {
			case null:
				return null;
			case 'contact':
				return <p>Contact Me </p>;
		}
	};

	render() {
		return (
			<div
				className={styles.contentContainer}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
			>
				{this.renderContentButtons()}
				{this.renderContent()}
			</div>
		);
	}
}

const _mapStateToProps = (state) => ({
	pageName: state.page.pageName
});

const _mapDispatchToProps = (dispatch) => ({
	updateDetailsPageName: (detailsPageName) =>
		dispatch(PageActions.updateDetailsPageName(detailsPageName))
});

export default connect(
	_mapStateToProps,
	_mapDispatchToProps
)(Content);
