import React, {Component} from "react";
import {Image, StyleSheet} from "react-native";
import {Container, Content, Footer} from "../components/dummy/layout/Layout";
import RandomJoke from "../components/smart/RandomJoke";
import {Button} from "../components/dummy/Button/Button";

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: 200,
        height: 200
    }
});

export default class HomeScreen extends Component {
    static navigationOptions = { title: "Home" };

    render(){
        return (
            <Container>
                <Content>
                    <Image
                        style={styles.image}
                        source={{uri: "https://assets.chucknorris.host/img/chucknorris_logo_coloured_small@2x.png"}}
                    />
                    <RandomJoke/>
                </Content>
                <Footer>
                    <Button
                        onPress={()=>{
                            this.props.navigation.navigate("Category")
                        }}
                        title="Go to Category"
                    />
                </Footer>
            </Container>
        )
    }
}