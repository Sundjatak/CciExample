import React, {Component} from "react";
import {Container, Content} from "../components/dummy/layout/Layout";
import HttpService from "../services/http.service";
import List from "../components/dummy/List";

/**
 * Component that is used to show a list of Chuck Norris Joke Categories
 */
export default class CategoriesScreen extends Component {

    static navigationOptions = { title: "Category" };

    /**
     * Method that fetches all the categories from the API and updates the state
     * @returns {Promise<void>}
     */
    async fetchCategories(){
        const categories = await HttpService.Request("https://api.chucknorris.io/jokes/categories");
        this.setState({ categories });
    }

    /**
     * Constructor where we initialize the state
     * @param props
     */
    constructor(props){
        super(props);
        this.state = { categories: [], loaded: false }
    }

    /**
     * Render method that creates the list of categories
     * @returns {*}
     */
    render(){

        const {categories} = this.state;

        return (
            <Container>
                <Content>
                    <List
                        list={categories}
                        onPress={(item)=>{
                            this.props.navigation.navigate("Category", { category: item });
                        }}
                    />
                </Content>
            </Container>
        )
    }

    /**
     * After first render we fetch the categories
     */
    componentDidMount(){
        this
            .fetchCategories()
            .catch(err=>console.log(err));
    }
}