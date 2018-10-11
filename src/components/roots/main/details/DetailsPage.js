import React from 'react';
import PropTypes from 'prop-types';
// Components
import HorizontalCard from 'common/cards/horizontal-card/HorizontalCard';
import JumpCard from 'common/cards/jump-card/JumpCard';
// Constants
import DetailsPageNames from 'utils/constants/details-page-names/DetailsPageNames';
// Data
import EducationData from 'data/education/Education';
import JobsData from 'data/jobs/Jobs';
import ProjectsData from 'data/projects/Projects';
// Redux
import { connect } from 'react-redux';
// Styling
import styles from './DetailsPage.css';

class DetailsPage extends React.Component {
	constructor(props) {
		super(props);
		this.currentDetailsPage = props.detailsPageName;
		this.topDivRef = React.createRef();
	}

	componentDidUpdate() {
		const { detailsPageName, shouldDisplay } = this.props;
		if (detailsPageName !== this.currentDetailsPage && shouldDisplay) {
			this.topDivRef.current.scrollIntoView({ behavior: 'smooth' });
		}
		this.currentDetailsPage = detailsPageName;
	}

	renderDetailsPage() {
		const { detailsPageName } = this.props;
		let data = [];
		switch (detailsPageName) {
			case DetailsPageNames.HIGH_SCHOOL:
				data = EducationData.HIGH_SCHOOL.schools;
				break;
			case DetailsPageNames.UNIVERSITY:
				data = EducationData.UNIVERSITY.schools;
				break;
			case DetailsPageNames.SOFTWARE_JOBS:
				data = JobsData.SOFTWARE_JOBS.jobs;
				break;
			case DetailsPageNames.UNIVERSITY_JOBS:
				data = JobsData.UNIVERSITY_JOBS.jobs;
				break;
			case DetailsPageNames.OTHER_JOBS:
				data = JobsData.OTHER_JOBS.jobs;
				break;
			case DetailsPageNames.AI:
				data = ProjectsData.AI.projects;
				break;
			case DetailsPageNames.MOBILE:
				data = ProjectsData.MOBILE.projects;
				break;
			case DetailsPageNames.WEB:
				data = ProjectsData.WEB.projects;
				break;
			default:
				return null;
		}

		return data.map((data, index) => (
			<JumpCard>
				<HorizontalCard
					key={index}
					imageSrc={data.imageSrc}
					title={data.title}
					description={data.description}
					date={data.date}
					details={data.details}
					extra={data.extra}
					link={data.link}
				/>
			</JumpCard>
		));
	}

	render() {
		const { pageName, detailsPageName, shouldDisplay } = this.props;

		if (!shouldDisplay) {
			return null;
		}
		return (
			<div className={styles.container} ref={this.topDivRef}>
				<h1 className={styles.header}>{detailsPageName}</h1>
				<div className={styles.details}>{this.renderDetailsPage()}</div>
			</div>
		);
	}
}

const _mapStateToProps = (state) => ({
	pageName: state.page.pageName,
	detailsPageName: state.page.detailsPageName
});

DetailsPage.propTypes = {
	shouldDisplay: PropTypes.bool.isRequired
};

export default connect(_mapStateToProps)(DetailsPage);
