import React, {Component} from "react";
import {StyleSheet, Text, TouchableHighlight} from "react-native";
import LoadingIndicator from "../dummy/LoadingIndicator";
import HttpService from "../../services/http.service";
import {observer} from "mobx-react";
import {observable, action, runInAction} from "mobx";

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

@observer
export default class RandomJoke extends Component {


    @observable joke = "";
    @observable loaded = false;
    @observable url = "https://api.chucknorris.io/jokes/random";

    /**
     * Method that fetches a new joke and adds it to the state
     * @returns {Promise<void>}
     */
    async handleJoke(){
        const {url} = this;
        const {value} = await HttpService.Request(url);
        runInAction(()=>{
            this.joke = value;
        });
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
     * Entry point of the component
     *  -> creates the state with default values
     *  -> sets the id to null
     *
     * @param props
     */
    constructor(props){
        super(props);

        const {category = null} = this.props;

        if(category){
            this.url += `?category=${category}`
        }

        this.id    = null;
    }

    /**
     * Render method that is immediately
     *  called after constructor ends and called at any moment setState is invoked
     *
     * @returns {*}
     */
    render(){

        const {joke, loaded} = this;

        return (
                loaded ?
                    <TouchableHighlight style={styles.button} onPress={this.handlePress}>
                        <Text style={styles.randomJoke}>{joke}</Text>
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
            this.loaded  = true;
            this.start();
        });
    }

    componentWillReact(){
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