import React from 'react';
import PropTypes from 'prop-types';
// Components
import ContentButton from './content-button/ContentButton';
// Styling
import styles from './Content.css';

class Content extends React.Component {
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
				className={styles.contentContainer}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
			>
				<ContentButton title="One" lightMode={!this.state.hover} />
				<ContentButton title="Two" lightMode={!this.state.hover} />
				<ContentButton title="Three" lightMode={!this.state.hover} />
			</div>
		);
	}
}

export default Content;
