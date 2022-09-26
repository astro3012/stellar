import React from 'react'
import ReactDOM from 'react-dom'
// import '@fontsource/roboto'
import '@fontsource/montserrat-alternates'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

import App from './App'
import store from './store'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
)
