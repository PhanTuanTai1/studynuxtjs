<template>
  <div class="posts-page">   
      <PostList :posts="listPosts"/>
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
import PostList from '@/components/Posts/PostList.vue'
export default {
  components:{
    PostList
  },
  asyncData(context, callBack){
    setTimeout(() => {
      callBack(null, {
        listPosts : [
          {
            id: 1001,
            title: "Title post  1001",
            previewText: "Preview text for post 1001"
          },
          {
            id: 1002,
            title: "Title post  1002",
            previewText: "Preview text for post 1002"
          },
          {
            id: 1003,
            title: "Title post  1003",
            previewText: "Preview text for post 1003"
          },
        ]
      })
    }, 1500)
  }
}
</script>

