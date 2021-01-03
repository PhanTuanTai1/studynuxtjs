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
      },
      editPost(state, editedPost){
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
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
      addPost(vuexContent, post){
        return axios.post("https://backendfornuxtjs-default-rtdb.firebaseio.com/posts.json",{ ...post, updatedDate: new Date() })
        .then((res) => {
          vuexContent.commit("addPost", {...post, id: res.data.name});   
        });
        
      },
      editPost(vuexContent, editedPost){
        return axios.put("https://backendfornuxtjs-default-rtdb.firebaseio.com/posts/" + editedPost.id + ".json", editedPost)
        .then(res => {
          vuexContent.commit("editPost", editedPost);
        })
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
