import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

const breakpoints = {
	desktop: '(min-width: 1025px)',
	tablet: '(min-width: 768px) and (max-width: 1024px)',
	phone: '(max-width: 767px)'
};

const Breakpoint = (props) => {
	const { device, children } = props;
	const breakpoint = breakpoints[device] || breakpoints.desktop;
	return (
		<MediaQuery {...props} query={breakpoint}>
			{children}
		</MediaQuery>
	);
};

const { string, object } = PropTypes;

Breakpoint.propTypes = {
	device: string,
	children: object
};

export default Breakpoint;
