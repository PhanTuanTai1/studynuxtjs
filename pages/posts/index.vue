<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import PostList from "@/components/Posts/PostList.vue";
import {mapGetters, mapActions} from "vuex";

export default {
  components: {
    PostList,
  },
  computed:{
    ...mapGetters([
      'loadedPosts'
    ])
  },
  methods:{
    ...mapActions([
      'setPosts'
    ])
  }
};
</script>

