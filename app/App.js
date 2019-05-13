/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from "mobx-react";
import AppContainer from "./config";
import stores from "./stores"



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider {...stores}>
            <AppContainer/>
        </Provider>
    )
  }
}