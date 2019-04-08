import React from "react";
import {ActivityIndicator, Text, View, StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    text: {
        fontSize: 25,
        marginBottom: 10
    }
});

const LoadingIndicator = props => {

    const {title} = props;

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
};

export default LoadingIndicator;