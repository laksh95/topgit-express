import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app.jsx'
import store from './store.jsx'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory,IndexRoute} from 'react-router'
import Checkout from './components/checkout.jsx'
import Menu from './components/Menu.jsx'
ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component = {Menu} />
            <Route path="/checkout" component={Checkout}/>
        </Route>
    </Router>
    </Provider>
    , document.getElementById('home'));