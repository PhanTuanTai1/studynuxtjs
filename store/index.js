import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie";


const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state){
        state.token = null;
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
        return axios.put("https://backendfornuxtjs-default-rtdb.firebaseio.com/posts/" + editedPost.id + ".json?auth=" + vuexContent.state.token, editedPost)
        .then(res => {
          vuexContent.commit("editPost", editedPost);
        })
      },
      authenticateUser(vuexContext, authData){
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
       
        if(!authData.isLogin)
        {
          authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
        }
      
        return this.$axios.$post(authUrl + process.env.firebaseApiKey,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(res => {
            vuexContext.commit('setToken', res.idToken);
            vuexContext.dispatch('setLogoutTimer', res.expiresIn * 1000);
            Cookie.set('jwt', res.idToken);
            Cookie.set('expirationDate', new Date().getTime() + res.expiresIn * 1000);
            localStorage.setItem('token', res.idToken);
            localStorage.setItem('expirationDate', new Date().getTime() + res.expiresIn * 1000);
          })
          .catch(err => {
            console.log(err);
          })        
      },
      setLogoutTimer(vuexContext, duration){
        setTimeout(() => {
          vuexContext.commit('clearToken');
        }, duration)
      },
      initAuth(vuexContext, req){
        let token;
        let expirationDate;
        if(req){
          if(!req.headers.cookie){
            return;
          }

          const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
          if(!jwtCookie){
            return;
          }

          token = jwtCookie.split('=')[1];
          expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate=')).split('=')[1];
        }
        else {
          token = localStorage.getItem('token');
          expirationDate = localStorage.getItem('expirationDate');

          if(new Date().getTime() > +expirationDate || !token){
            return;
          }
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state){
        return state.token != null;
      }
    },
  });
};

export default createStore;
