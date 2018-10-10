import ActionTypes from '../actionTypes';

const updatePageName = (pageName) => ({
	type: ActionTypes.UPDATE_PAGE_NAME,
	payload: {
		pageName
	}
});

const updateDetailsPageName = (detailsPageName) => ({
	type: ActionTypes.UPDATE_DETAILS_PAGE_NAME,
	payload: {
		detailsPageName
	}
});

export default {
	updatePageName,
	updateDetailsPageName
};
