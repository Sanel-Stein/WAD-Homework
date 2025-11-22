import { createStore } from 'vuex'
import data from './assets/json/myjson.json';

export default createStore({
    strict: true,
    state: {
            // Posts from json
            posts: data
    },
  getters: {

  },
  mutations: {

    },
  actions: {

    }
})