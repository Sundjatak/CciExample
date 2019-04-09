import React, {Component} from "react";
import {Text} from "react-native";

export default class HomeScreen extends Component {
    static navigationOptions = { title: "Home" };

    render(){
        return <Text>HomeScreen</Text>
    }
}