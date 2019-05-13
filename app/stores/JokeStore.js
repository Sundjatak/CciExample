import {computed, flow, observable} from "mobx";
import HttpService from "../services/http.service";
import {Alert} from "react-native";

const URLS = {
    joke: "https://api.chucknorris.io/jokes/random",
    category: "https://api.chucknorris.io/jokes/categories"
};

class JokeStore {

    @observable _jokes = new Map();
    @observable _categories = [];

    @observable lastJoke = {
        value: ""
    };

    @computed get categories(){
        return this._categories.slice();
    }

    @computed get jokes(){
        return Array.from(this._jokes.values());
    }

    @computed get loaded(){
        return this.lastJoke.value !== "";
    }

    async fetchAtLeastTen(){
        while(this.jokes.length < 10){
            await this.fetchJoke()
        }
    };

    fetchJoke = flow(function * (category = null){
        const url = category ?
            `${URLS.joke}?category=${category}` :
            URLS.joke;

        const {id, ...rest} = yield HttpService.Request(url);

        this.lastJoke = rest;
        this._jokes.set(id, rest);
    });

    fetchCategories = flow(function * (){
        if(this.categories.length > 0) return;
        this._categories = yield HttpService.Request(URLS.category);
    });

}

export default new JokeStore();