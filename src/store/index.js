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
        /*
        IncreaseLikes: function (state, PostID) {
            let post = null;
            for (let i = 0; i < state.posts.length; i++){
                if (state.posts[i].id == PostID){
                    post = state.posts[i];
                    break;
                }
            }
            post.likes++;
        },
        ResetLikes: function (state) {
            let post = null;
            for (let i = 0; i < state.posts.length; i++){
                post = state.posts[i];
                post.likes = 0;
            }
        }
            */
    },
    actions: {
        /*
        IncreaseLikesAct: function (act, PostID) {
            act.commit("IncreaseLikes", PostID)
        },
        ResetLikesAct: function (act) {
            act.commit("ResetLikes")
        }
            */
    }   
})