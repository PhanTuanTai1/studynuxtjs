import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
    },
    actions: {
      nuxtServerInit({ commit }, context) {
        return new Promise((resolve, reject) => {
          commit("setPosts", [
            {
              id: "1001",
              title: "Title post  1001",
              previewText: "Preview text for post 1001",
            },
            {
              id: "1002",
              title: "Title post  1002",
              previewText: "Preview text for post 1002",
            },
            {
              id: "1003",
              title: "Title post  1003",
              previewText: "Preview text for post 1003",
            },
          ]);
          resolve();
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
