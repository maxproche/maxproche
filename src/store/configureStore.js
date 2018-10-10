// Redux tools
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Root Reducer
import rootReducer from './reducers/root';

const configureStore = () => createStore(rootReducer, composeWithDevTools());

export default configureStore;
