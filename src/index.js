import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route } from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import Feature from './components/Feature';
import reducers from './reducers'


const store = createStore(
    reducers,
    { auth: {authenticated:localStorage.getItem('token') } },
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App>
            <Route path="/" exact component={Welcome}></Route>
            <Route path="/signup" exact component={Signup}></Route>
            <Route path="/feature" exact component={Feature}></Route>
            <Route path="/signout" exact component={Signout}></Route>
            <Route path="/signin" exact component={Signin}></Route>
        
        </App>
    </BrowserRouter>
    </Provider>
    ,
    document.querySelector('#root')
);