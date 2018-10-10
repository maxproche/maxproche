import React from 'react';
// Constants
import PageNames from 'utils/constants/page-names/PageNames';
// Components
import Header from 'roots/main/header/Header';
import Content from 'roots/main/content/Content';
import Breakpoint from 'common/breakpoint/Breakpoint';
import FullImageBackground from 'common/full-image-background/FullImageBackground';
// Redux
import { connect } from 'react-redux';
// Styling
import styles from './MainLayout.css';

class MainLayout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { detailsPageName } = this.props;
		const showBottomView = !!detailsPageName;
		return (
			<div>
				<FullImageBackground>
					<Header />
					<Content />
				</FullImageBackground>
				{showBottomView ? <div className={styles.bottomView}>{detailsPageName}</div> : null}
			</div>
		);
	}
}

const _mapStateToProps = (state) => ({
	pageName: state.page.pageName,
	detailsPageName: state.page.detailsPageName
});

export default connect(_mapStateToProps)(MainLayout);
