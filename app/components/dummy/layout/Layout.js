import React from "react";
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        width: "100%"
    },
    header: {
        flexShrink: 0,
        flexBasis: 75,
        backgroundColor: "red",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 10
    },
    headerText: {
        fontSize: 25,
        color: "white"
    },
    content: {
        alignItems: "center",
        justifyContent: "flex-start"
    },
    footer: {
        flexShrink: 0,
        flexBasis: 75,
        backgroundColor: "red"
    }
});

/**
 * Component that acts like a container for all the child components
 * passed between the the XML tags
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const Container = props => {
    //get all children, if they don't exist set children to default "null"
    const {children = null} = props;
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
};

/**
 * Component that acts like the center element to be placed in a container
 * Takes up all room that it can take
 * @param props
 * @returns {*}
 * @constructor
 */
export const Content = props => {
    const {children = null} = props;
    return (
        <View style={[styles.container, styles.content]}>
            {children}
        </View>
    )
};

/**
 * Component that acts like the header of the layout, it is optional.
 * If it is not passed in the container, content will take up it's place
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const Header = props => {
    const {title} = props;
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
};

/**
 * Component that acts like the footer of the layout, it is optional.
 * If it is not passed in the container, content will take up it's place
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const Footer = props => {
    const {children = null} = props;
    return (
        <View style={styles.footer}>
            {children}
        </View>
    )
};
