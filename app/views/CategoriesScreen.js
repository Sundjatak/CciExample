import React, {Component} from "react";
import {Container, Content} from "../components/dummy/layout/Layout";
import HttpService from "../services/http.service";
import List from "../components/dummy/List";
import {observer} from "mobx-react";
import {observable, runInAction, action} from "mobx";
import Alert from "react-native";

/**
 * Component that is used to show a list of Chuck Norris Joke Categories
 */
@observer
export default class CategoriesScreen extends Component {

    @observable categories = [];
    @observable loaded = false;

    static navigationOptions = { title: "Category" };

    /**
     * Method that fetches all the categories from the API and updates the state
     * @returns {Promise<void>}
     */
    @action.bound
    async fetchCategories(){
        try {
            const category = await HttpService.Request("https://api.chucknorris.io/jokes/categories");
            runInAction(()=>{
                this.categories = category;
            })
        }catch(e){
            console.log(e.message);
        }

    }

    /**
     * Render method that creates the list of categories
     * @returns {*}
     */
    render(){

        const {categories} = this;

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