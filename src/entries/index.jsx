import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import thunk from "redux-thunk";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from "../reducers";
import Routes from "../routes";
import "./index.less";

const createStoreWithMiddleware = applyMiddleware(
	thunk
)( createStore );

const store = createStoreWithMiddleware(
	combineReducers( {
		...reducers,
		routing: routerReducer
	} ),
	window.devToolsExtension && window.devToolsExtension()
);

const history = syncHistoryWithStore( browserHistory, store )

render(
	<Provider store={store}>
		<Routes history={history}/>
	</Provider>,
	document.getElementById( 'root' )
);
