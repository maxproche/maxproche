import ActionTypes from '../actionTypes';
import PageNames from 'utils/constants/page-names/PageNames';

const defaultState = {
	pageName: PageNames.HOME,
	detailsPageName: null
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case ActionTypes.UPDATE_PAGE_NAME:
			return {
				...state,
				pageName: action.payload.pageName
			};
		case ActionTypes.UPDATE_DETAILS_PAGE_NAME:
			return {
				...state,
				detailsPageName: action.payload.detailsPageName
			};
		default:
			return {
				...state
			};
	}
};
