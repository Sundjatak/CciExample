import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
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

const List = props => {
    const {list, onPress} = props;
    return (
        <FlatList
            ItemSeparatorComponent={
                ()=><View style={styles.separator}/>
            }
            style={styles.list}
            data={list}
            keyExtractor={(item, i)=>""+i}
            renderItem={({item, index})=>{
                return <Button
                            onPress={()=>onPress(item)}
                            title={`${index + 1}. ${item}`}
                            textAlign="left"
                        />
            }}
        />
    )
};

export default List;