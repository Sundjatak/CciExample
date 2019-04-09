
export default class HttpService {

    /**
     * Method that does a fetch request and returns the json response
     * @param {string} url
     * @returns {Promise<any>}
     * @constructor
     */
    static async Request(url){
        const res = await fetch(url);
        return await res.json();
    }
}