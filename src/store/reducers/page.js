import ActionTypes from '../actionTypes';
import PageNames from 'utils/constants/page-names/PageNames';
import DetailsPageNames from 'utils/constants/details-page-names/DetailsPageNames';

const defaultState = {
	pageName: PageNames.HOME,
	detailsPageName: null,
	showBottomView: false
};

const showBottomView = (pageName, detailsPageName) => {
	if (!detailsPageName) {
		return false;
	}

	if (pageName === PageNames.HOME) {
		return false;
	}
	if (
		detailsPageName === DetailsPageNames.CONTACT ||
		detailsPageName === DetailsPageNames.RESUME ||
		detailsPageName === DetailsPageNames.SOCIAL
	) {
		return false;
	}
	return true;
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case ActionTypes.UPDATE_PAGE_NAME:
			return {
				...state,
				pageName: action.payload.pageName,
				showBottomView: showBottomView(action.payload.pageName, state.detailsPageName)
			};
		case ActionTypes.UPDATE_DETAILS_PAGE_NAME:
			return {
				...state,
				detailsPageName: action.payload.detailsPageName,
				showBottomView: showBottomView(state.pageName, action.payload.detailsPageName)
			};
		default:
			return {
				...state
			};
	}
};
