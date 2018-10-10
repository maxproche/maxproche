import ActionTypes from '../actionTypes';
import PageNames from 'utils/constants/page-names/PageNames';
import DetailsPageNames from 'utils/constants/details-page-names/DetailsPageNames';

const defaultState = {
	pageName: PageNames.HOME,
	detailsPageName: null,
	showBottomView: false
};

const showBottomView = (pageName, detailsPageName) => {
	console.log('************');
	console.log(pageName);
	console.log(detailsPageName);
	if (!detailsPageName) {
		console.log('1');
		return false;
	}

	if (pageName === PageNames.HOME) {
		console.log('2');
		return false;
	}
	if (
		detailsPageName === DetailsPageNames.CONTACT ||
		detailsPageName === DetailsPageNames.RESUME ||
		detailsPageName === DetailsPageNames.SOCIAL
	) {
		console.log('3');
		return false;
	}
	console.log('4');
	return true;
};

export default (state = defaultState, action) => {
	console.log(action);
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
