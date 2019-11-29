//import {createStore, applyMiddleware, compose} from 'redux'
import {createStore} from 'redux'
//import thunk from 'redux-thunk'
//import createSagaMiddleware from 'redux-saga';
//const sagaMiddleware = createSagaMiddleware();
import reducer from './reducer'
//import mySaga from './sagas'

/*compose增强函数*/
//const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;
/*加入thunk*/
// const enhancer = composeEnhancers(applyMiddleware(thunk));
//const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
/*创建store并且传入reducer*/
//const store = createStore(reducer, enhancer);
const store = createStore(reducer);

export default store