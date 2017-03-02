import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducer/index.jsx'
import App from './components/app.jsx'

let store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app')
);