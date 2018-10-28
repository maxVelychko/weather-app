import Expo from 'expo';
import React from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducer from "./reducer";
import AppContainer from "./AppContainer";

const store = createStore(reducer);

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

Expo.registerRootComponent(Root);