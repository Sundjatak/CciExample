import React, {Component} from "react";
import {StyleSheet, Alert, View, Text, TouchableHighlight} from "react-native";
import LoadingIndicator from "../dummy/LoadingIndicator";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "grey",
        padding: 10,
        margin: 2,
    },
    randomJoke: {
        color: "white",
        fontSize: 25,
        textAlign: "center"
    }
});

export default class RandomJoke extends Component {

    /** methods */
    async handleJoke(){
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const {value} = await res.json();
        this.setState({joke:value});
    }

    async handlePress(){
        clearInterval(this.id);
        await this.handleJoke();
        this.start();
    }

    start(){
        this.id = setInterval(()=>this.handleJoke(), 10000);
    }

    /** life cycle methods */
    constructor(props){
        super(props);


        /** creating state */
        this.state = { joke: "", loaded: false };
        this.id    = null;
    }

    render(){

        const {joke, loaded} = this.state;

        return (
            <View style={styles.container}>
                {
                    loaded ?
                        <TouchableHighlight style={styles.button} onPress={()=>this.handlePress()}>
                            <Text style={styles.randomJoke}>{joke}</Text>
                        </TouchableHighlight> :
                        <LoadingIndicator title="Joke Loading..."/>
                }
            </View>
        );
    }

    componentDidMount(){
        this.handleJoke().then(()=>{
            this.setState({loaded: true});
            this.start();
        });
    }

    componentWillUnmount(){
        clearInterval(this.id);
    }

}