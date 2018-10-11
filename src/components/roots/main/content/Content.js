import React from 'react';
import PropTypes from 'prop-types';
// Actions
import PageActions from 'store/actions/page';
// Constants
import PageNames from 'utils/constants/page-names/PageNames';
import DetailsPageNames from 'utils/constants/details-page-names/DetailsPageNames';
// Components
import ContentButton from './content-button/ContentButton';
// Helpers
import classNames from 'classnames';
// Redux
import { connect } from 'react-redux';
// Styling
import styles from './Content.css';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		};
	}

	/* ========================= HELPERS  ========================= */
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

	projectsButtons = [
		{
			title: DetailsPageNames.AI
		},
		{
			title: DetailsPageNames.MOBILE
		},
		{
			title: DetailsPageNames.WEB
		}
	];

	toggleHover = () => {
		this.setState({
			hover: !this.state.hover
		});
	};

	/* ========================= CONTENT BUTTONS ========================= */
	renderContentButtons = () => {
		switch (this.props.pageName) {
			case PageNames.HOME:
				return this._renderContentButtons(this.homeButtons);
			case PageNames.EDUCATION:
				return this._renderContentButtons(this.educationButtons);
			case PageNames.EXPERIENCE:
				return this._renderContentButtons(this.experienceButtons);
			case PageNames.PROJECTS:
				return this._renderContentButtons(this.projectsButtons);
			default:
				return null;
		}
	};

	_renderContentButtons = (buttons) => (
		<React.Fragment>
			{buttons.map((button, index) => {
				return (
					<ContentButton
						key={index}
						title={button.title}
						lightMode={!this.state.hover}
						onClick={() => this._handleContentButtonClick(button.title)}
					/>
				);
			})}
		</React.Fragment>
	);

	_handleContentButtonClick = (detailsPageName) => {
		this.props.updateDetailsPageName(detailsPageName);
	};

	render() {
		return (
			<div
				className={styles.contentContainer}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
			>
				{this.renderContentButtons()}
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
