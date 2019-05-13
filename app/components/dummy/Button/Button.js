import React from "react";
import {Text, TouchableHighlight, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 25,
        padding: 10
    }
});

/**
 * Component that takes in a few props
 *   1. onPress
 *   2. title
 *   3. backgroundColor //blue by default
 *   4. color (Text) //white by default
 *
 * @param props
 * @constructor
 */
export const Button = props => {

    const {
        onPress,
        title,
        backgroundColor = "blue",
        color = "white",
        textAlign = "center",
        customStyles = {}
    } = props;

    return (
        <TouchableHighlight
            style={[{backgroundColor}, customStyles]}
            onPress={onPress}
        >
            <Text style={[{color, textAlign}, styles.buttonText]}>{title}</Text>
        </TouchableHighlight>
    )

};