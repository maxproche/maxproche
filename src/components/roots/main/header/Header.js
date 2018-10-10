import React from 'react';
// Components
import Breakpoint from 'common/breakpoint/Breakpoint';
import HeaderButton from './HeaderButton/HeaderButton';
// Styling
import styles from './Header.css';

class Header extends React.Component {
	constructor(props) {
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

	render() {
		return (
			<div
				className={styles.defaultHeader}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
			>
				<HeaderButton title="Home" lightMode={!this.state.hover} />
				<HeaderButton title="Education" lightMode={!this.state.hover} />
				<HeaderButton title="Work Experience" lightMode={!this.state.hover} />
				<HeaderButton title="Projects" lightMode={!this.state.hover} />
			</div>
		);
	}
}

export default Header;
