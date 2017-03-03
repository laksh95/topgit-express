import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app.jsx'
import store from './store.jsx'
import {Provider} from 'react-redux'
ReactDOM.render(<App />, document.getElementById('home'));