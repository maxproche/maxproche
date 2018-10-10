import React from 'react';
// Actions
import PageActions from 'store/actions/page';
// Constants
import PageNames from 'utils/constants/page-names/PageNames';
// Components
import Breakpoint from 'common/breakpoint/Breakpoint';
import HeaderButton from './HeaderButton/HeaderButton';
// Redux
import { connect } from 'react-redux';
// Styling
import styles from './Header.css';

class Header extends React.Component {
	constructor(props) {
		console.log(PageActions);
		super(props);
		this.state = {
			hover: false
		};
	}

	toggleHover = () => {
		this.setState({
			hover: !this.state.hover
		});
	};

	handleClick = (pageName) => {
		this.props.updatePageName(pageName);
	};

	render() {
		return (
			<div
				className={styles.defaultHeader}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
			>
				<HeaderButton
					title={PageNames.HOME}
					lightMode={!this.state.hover}
					onClick={() => this.handleClick(PageNames.HOME)}
				/>
				<HeaderButton
					title={PageNames.EDUCATION}
					lightMode={!this.state.hover}
					onClick={() => this.handleClick(PageNames.EDUCATION)}
				/>
				<HeaderButton
					title={PageNames.EXPERIENCE}
					lightMode={!this.state.hover}
					onClick={() => this.handleClick(PageNames.EXPERIENCE)}
				/>
				<HeaderButton
					title={PageNames.PROJECTS}
					lightMode={!this.state.hover}
					onClick={() => this.handleClick(PageNames.PROJECTS)}
				/>
			</div>
		);
	}
}

const _mapDispatchToProps = (dispatch) => ({
	updatePageName: (pageName) => dispatch(PageActions.updatePageName(pageName))
});

export default connect(
	null,
	_mapDispatchToProps
)(Header);
