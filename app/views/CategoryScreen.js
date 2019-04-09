import React, {Component} from "react";
import RandomJoke from "../components/smart/RandomJoke";
import {Container, Content} from "../components/dummy/layout/Layout";

/**
 * Component that picks a random joke from a specific category
 */
export default class CategoryScreen extends Component {

    /**
     * Method that sets the title of the screen header dynamically by getting
     * the title from the parameters.
     *
     * If no title is sent, then the title shown will be "N/A" (Not Available)
     *
     * @param navigation
     * @returns {{title: string}}
     */
    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('category', 'N/A');
        return {
            //Make sure the first character of the title is capitalized
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