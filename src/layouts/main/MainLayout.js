import React from 'react';
// Constants
import PageNames from 'utils/constants/page-names/PageNames';
// Components
import Header from 'roots/main/header/Header';
import Content from 'roots/main/content/Content';
import DetailsPage from 'roots/main/details/DetailsPage';
import Breakpoint from 'common/breakpoint/Breakpoint';
import FullImageBackground from 'common/full-image-background/FullImageBackground';
// Redux
import { connect } from 'react-redux';
// Screens
import MobileScreen from 'screens/mobile/MobileScreen';
// Styling
import styles from './MainLayout.css';

class MainLayout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { pageName, detailsPageName, showBottomView } = this.props;
		return (
			<div className={styles.container}>
				{/** Main Section */}
				<FullImageBackground>
					<Breakpoint device="desktop">
						<Header />
						<Content />
					</Breakpoint>
					<Breakpoint device="tablet">
						<Header />
						<Content />
					</Breakpoint>
					<Breakpoint device="phone">
						<MobileScreen />
					</Breakpoint>
				</FullImageBackground>
				{/** Details Section */}
				<Breakpoint device="desktop">
					<DetailsPage shouldDisplay={showBottomView} />
				</Breakpoint>
				<Breakpoint device="tablet">
					<DetailsPage shouldDisplay={showBottomView} />
				</Breakpoint>
			</div>
		);
	}
}

const _mapStateToProps = (state) => ({
	pageName: state.page.pageName,
	detailsPageName: state.page.detailsPageName,
	showBottomView: state.page.showBottomView
});

export default connect(_mapStateToProps)(MainLayout);
