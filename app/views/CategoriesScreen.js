import React, {Component} from "react";
import {Container, Content} from "../components/dummy/layout/Layout";
import HttpService from "../services/http.service";
import List from "../components/dummy/List";
import {inject, observer} from "mobx-react";
import {observable, runInAction, action} from "mobx";

/**
 * Component that is used to show a list of Chuck Norris Joke Categories
 */
@inject('jokeStore') @observer
export default class CategoriesScreen extends Component {
    @observable loaded = false;

    static navigationOptions = { title: "Category" };

    /**
     * Render method that creates the list of categories
     * @returns {*}
     */
    render(){

        const {jokeStore:{categories}} = this.props;

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
        const {jokeStore} = this.props;
        jokeStore.fetchCategories()
    }
}