import React, {Component} from "react";
import JokeStore from "../stores/JokeStore";
import {inject, observer} from "mobx-react";
import {Container, Content} from "../components/dummy/layout/Layout";
import List from "../components/dummy/List";

@inject('jokeStore') @observer
export default class JokesScreen extends Component {
    static navigationOptions = { title: "Jokes" };

    componentDidMount(){
        const {jokeStore} = this.props;

        if(jokeStore.jokes.length < 10){
            jokeStore
                .fetchAtLeastTen()
                .catch(e=>{
                    console.log(e.message);
                })
        }
    }

    render(){

        const {jokeStore:{jokes}} = this.props;

        return (
            <Container>
                <Content>
                    <List
                        list={jokes.map(({value})=>value)}
                    />
                </Content>
            </Container>
        )
    }
}