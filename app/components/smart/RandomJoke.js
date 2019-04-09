import React, {Component} from "react";
import {StyleSheet, Alert, View, Text, TouchableHighlight, Image} from "react-native";
import LoadingIndicator from "../dummy/LoadingIndicator";
import {Container, Content, Footer, Header} from "../dummy/layout/Layout";

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
    },
    image: {
        resizeMode: 'contain',
        width: 200,
        height: 200
    }
});

export default class RandomJoke extends Component {

    /**
     * Method that fetches a new joke and adds it to the state
     * @returns {Promise<void>}
     */
    async handleJoke(){
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const {value} = await res.json();
        this.setState({joke:value});
    }

    /**
     * Method that stops the current interval and fetches a joke
     * At the end it restarts the interval loop
     * @returns {Promise<void>}
     */
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
        this.id = setInterval(()=>this.handleJoke(), 10000);
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


        /** creating state */
        this.state = { joke: "", loaded: false };
        this.id    = null;
    }

    /**
     * Render method that is immediately
     *  called after constructor ends and called at any moment setState is invoked
     *
     * @returns {*}
     */
    render(){

        const {joke, loaded} = this.state;

        return (
            <Container>
                <Header>
                    <Text>Header</Text>
                </Header>
                <Content>
                    <Image
                        style={styles.image}
                        source={{uri: "https://assets.chucknorris.host/img/chucknorris_logo_coloured_small@2x.png"}}
                    />
                    {
                        loaded ?
                            <TouchableHighlight style={styles.button} onPress={()=>this.handlePress()}>
                                <Text style={styles.randomJoke}>{joke}</Text>
                            </TouchableHighlight> :
                            <LoadingIndicator title="Joke Loading..."/>
                    }
                </Content>
                <Footer>
                    <Text>Footer</Text>
                </Footer>
            </Container>

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
            this.setState({loaded: true});
            this.start();
        });
    }

    /**
     * Method that is called when the component will unmount.
     * Stops the interval if there is one running
     */
    componentWillUnmount(){
        clearInterval(this.id);
    }

}