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
        IncreaseLikes: function (state, PostID) {
            let post = null;
            for (let i = 0; i < state.posts.length; i++){
                if (state.posts[i].id == PostID){
                    post = state.posts[i];
                    break;
                }
            }
            post.likes++;
        }
    },
    actions: {
        IncreaseLikesAct: function (act, PostID) {
            act.commit("IncreaseLikes", PostID)
        }
    }   
})