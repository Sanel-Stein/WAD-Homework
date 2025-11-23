import { createStore } from 'vuex'
import data from "@/assets/json/myjson.json"

export default createStore({
    strict: true,
    state: {
        // data is loaded from json
        // json image path should point to public folder
        posts: data
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
})