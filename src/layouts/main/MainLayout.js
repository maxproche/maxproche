import React from 'react';
// Components
import Header from 'roots/main/header/Header';
import Content from 'roots/main/content/Content';
import Breakpoint from 'common/breakpoint/Breakpoint';
import FullImageBackground from 'common/full-image-background/FullImageBackground';
// Styling
import styles from './MainLayout.css';

class MainLayout extends React.Component {
	render() {
		return (
			<FullImageBackground>
				<div className={styles.container}>
					<Header />
					<Content />
				</div>
			</FullImageBackground>
		);
	}
}

export default MainLayout;
