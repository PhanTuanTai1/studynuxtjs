import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post){
        state.loadedPosts.push(post);
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get("https://backendfornuxtjs-default-rtdb.firebaseio.com/posts.json")
        .then(Response => {
          const postsArray = [];

          for(const key in Response.data){
            postsArray.push({...Response.data[key], id : key});
          }

          vuexContext.commit('setPosts', postsArray);
        })
        .catch(e => context.error(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      UpdateListPost(vuexContent, post){
        vuexContent.commit("addPost", post);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
