import React, {Component} from "react";
import {StyleSheet, Text, TouchableHighlight} from "react-native";
import LoadingIndicator from "../dummy/LoadingIndicator";
import {inject, observer} from "mobx-react";
import {action} from "mobx";

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

@inject('jokeStore') @observer
export default class RandomJoke extends Component {

    id = null;

    /**
     * Method that fetches a new joke and adds it to the state
     * @returns {Promise<void>}
     */
    @action.bound
    async handleJoke(){
        const {jokeStore, category} = this.props;
        jokeStore.fetchJoke(category);
    }

    /**
     * Method that stops the current interval and fetches a joke
     * At the end it restarts the interval loop
     * @returns {Promise<void>}
     */
    @action.bound
    async handlePress(){
        clearInterval(this.id);
        await this.handleJoke();
        this.start();
    }

    /**
     * Method that starts the setInterval
     * that will fetch a new joke every 10 seconds
     */
    start(){
        this.id = setInterval(this.handleJoke, 10000);
    }

    /**
     * Render method that is immediately
     *  called after constructor ends and called at any moment setState is invoked
     *
     * @returns {*}
     */
    render(){

        const {jokeStore:{lastJoke:{value}, loaded}} = this.props;

        return (
                loaded ?
                    <TouchableHighlight style={styles.button} onPress={this.handlePress}>
                        <Text style={styles.randomJoke}>{value}</Text>
                    </TouchableHighlight> :
                    <LoadingIndicator title="Joke Loading..."/>

        );
    }

    /**
     * Method called after the first render is called
     *
     * Fetches the initial joke, then sets the loaded to true and starts the interval
     */
    componentDidMount(){

        this.handleJoke().then(()=>{
            //la premiere blague est chargee
            this.start();
        });
    }

    componentWillReact(){
        const {running} = this.props;
        if(!running){
            clearInterval(this.id);
            this.id = null;
        } else if(this.id === null){
            this.start();
        }

        console.log("Component is about to re-render");
    }

    /**
     * Method that is called when the component will unmount.
     * Stops the interval if there is one running
     */
    componentWillUnmount(){
        clearInterval(this.id);
    }

}