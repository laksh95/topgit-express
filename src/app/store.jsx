import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import updateCart from './reducers/cartReducer.jsx'
import addMenu from './reducers/foodReducer.jsx'
import addItems from './reducers/itemReducer.jsx'
import promise from 'redux-promise-middleware'
const store=createStore(
	combineReducers({
		updateCart,
		addMenu,
        addItems
	}),
	{},
	applyMiddleware(thunk,promise())
)
export default store