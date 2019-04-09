import React, {Component} from "react";
import {Alert} from "react-native";
import {Container, Content} from "../components/dummy/layout/Layout";
import HttpService from "../services/http.service";
import List from "../components/dummy/List";

export default class CategoryScreen extends Component {

    static navigationOptions = { title: "Category" };

    async fetchCategories(){
        const categories = await HttpService.Request("https://api.chucknorris.io/jokes/categories");
        this.setState({ categories });
    }

    constructor(props){
        super(props);

        this.state = { categories: [], loaded: false }
    }

    render(){

        const {categories} = this.state;

        return (
            <Container>
                <Content>
                    <List
                        list={categories}
                        onPress={(item)=>{
                        }}
                    />
                </Content>
            </Container>
        )
    }

    componentDidMount(){
        this
            .fetchCategories()
            .catch(err=>console.log(err));
    }
}