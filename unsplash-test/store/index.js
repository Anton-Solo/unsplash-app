import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import photosList from './reducers/photosList';
import photo from './reducers/photo';

const store = createStore( combineReducers({photosList, photo}),
        compose(applyMiddleware(ReduxThunk)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;