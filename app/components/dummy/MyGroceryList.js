import React from "react";
import {FlatList, Text} from "react-native";

const MyGroceryList = props => {
    const {list} = props;

    return (
        <FlatList
            ListHeaderComponent={<Text>Header</Text>}
            data={list}
            keyExtractor={(item, i)=>""+i}
            renderItem={({item, index})=>{
                return <Text>{index + 1}. {item}</Text>
            }}
        />
    )
};

export default MyGroceryList;