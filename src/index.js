import React from 'react'
import ReactDOM from 'react-dom'
import { Provider} from 'react-redux'
import THUNK from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/reducers'
import App from "./App.js"
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(
				rootReducer,
				applyMiddleware (THUNK) 
				)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();