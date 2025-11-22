import { createStore } from 'vuex'
import data from './data/json/myjson.json';

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