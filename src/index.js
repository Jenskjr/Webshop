import React from 'react'
import ReactDOM from 'react-dom'
import { Provider} from 'react-redux'
import THUNK from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/reducers'
import App from "./App.js"
import 'bootstrap/dist/css/bootstrap.min.css';


const persistedState = localStorage.getItem('state') ? 
JSON.parse(localStorage.getItem('state')) : localStorage.setItem('state', undefined)

const store = createStore(
  rootReducer, 
  persistedState,
  compose(applyMiddleware (THUNK))
)

store.subscribe(()=>{
  localStorage.setItem('state', JSON.stringify(store.getState()))
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();