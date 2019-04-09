import React, {Component} from "react";
import RandomJoke from "../components/smart/RandomJoke";
import {Container, Content} from "../components/dummy/layout/Layout";

export default class CategoryScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('category', 'N/A');
        return {
            title: title[0].toUpperCase() + title.slice(1),
        };
    };

    render(){

        const category = this.props.navigation.getParam("category", null);

        return (

            <Container>
                <Content>
                    <RandomJoke category={category}/>
                </Content>
            </Container>
        )
    }
}