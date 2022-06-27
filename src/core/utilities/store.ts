import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));
