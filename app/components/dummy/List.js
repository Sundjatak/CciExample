import React from "react";
import {FlatList, Text} from "react-native";
import {Button} from "./Button/Button";

const List = props => {
    const {list, onPress} = props;
    return (
        <FlatList
            data={list}
            keyExtractor={(item, i)=>""+i}
            renderItem={({item, index})=>{
                return <Button
                            onPress={()=>onPress(item)}
                            title={`${index + 1}. ${item}`}
                        />
            }}
        />
    )
};

export default List;