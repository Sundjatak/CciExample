import {computed, flow, observable} from "mobx";
import HttpService from "../services/http.service";

class JokeStore {

    @observable _jokes = new Map();
    @observable lastJoke = {
        value: ""
    };

    @observable categories = new Set();
    url = "https://api.chucknorris.io/jokes/random";

    @computed get jokes(){
        return Array.from(this._jokes.values());
    }

    @computed get loaded(){
        return this.lastJoke.value !== "";
    }

    fetchJoke = flow(function * (category = null){
        const url = category ?
            `${this.url}?category=${category}` :
            this.url;

        const {id, ...rest} = yield HttpService.Request(url);

        this.lastJoke = rest;
        this._jokes.set(id, rest);
    });

}

export default new JokeStore();