import React, {Component} from "react";
import {Image, StyleSheet, Text} from "react-native";
import {Container, Content, Footer} from "../components/dummy/layout/Layout";
import RandomJoke from "../components/smart/RandomJoke";
import {Button} from "../components/dummy/Button/Button";
import {observable, action} from "mobx";
import {observer} from "mobx-react";

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: 200,
        height: 200
    },
    button: {

    }
});

/**
 * Component that will be initially shown
 *
 * Shows the chuck norris image and gets a new random joke
 */

@observer
export default class HomeScreen extends Component {
    static navigationOptions = { title: "Home" };

    @observable running = true;

    @action.bound
    handlePress(route){
        this.running = false;
        this.props.navigation.navigate(route)
    }

    render(){
        return (
            <Container>
                <Content>
                    <Image
                        style={styles.image}
                        source={{uri: "https://assets.chucknorris.host/img/chucknorris_logo_coloured_small@2x.png"}}
                    />
                    <RandomJoke running={this.running}/>
                </Content>
                <Footer>
                    <Button
                        style={styles.button}
                        onPress={()=>this.handlePress("Categories")}
                        title="Category"
                    />
                    <Button
                        style={styles.button}
                        onPress={()=>this.handlePress('Jokes')}
                        title="Jokes"
                    />
                </Footer>
            </Container>
        )
    }
}