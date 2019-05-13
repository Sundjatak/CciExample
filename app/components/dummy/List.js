import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {Button} from "./Button/Button";

const styles = StyleSheet.create({
    list: {
        width: "100%"
    },
    separator: {
        backgroundColor: "white",
        height: 2
    }
});

const TouchableListItem = props => {
    const {onPress, index, item} = props;
    return <Button
        onPress={()=>onPress(item)}
        title={`${index + 1}. ${item}`}
        textAlign="left"
    />
};

const ListItem = props => {
    const {index, item} = props;
    return <Text>`${index + 1}. ${item}`</Text>
};


/**
 * Component that simplifies the usage of a FlatList with onPress features
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const List = props => {
    const {list, onPress = null} = props;

    const ItemComponent = onPress === null ? ListItem : TouchableListItem;

    return (
        <FlatList
            ItemSeparatorComponent={
                ()=><View style={styles.separator}/>
            }
            style={styles.list}
            data={list}
            keyExtractor={(item, i)=>""+i}
            renderItem={({item, index})=>{
                return <ItemComponent
                    onPress={onPress}
                    item={item}
                    index={index}
                />
            }}
        />
    )
};

export default List;