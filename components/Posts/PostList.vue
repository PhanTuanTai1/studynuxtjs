<template>
    <section class="post-link">
          <PostPreview v-for="post in posts" 
          :key="post.id" 
          :is-admin="isAdmin" 
          :id="post.id" 
          :title="post.title" 
          :previewText="post.previewText"/>
    </section>
</template>

<style scoped>
    .post-link {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    }
</style>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue"
export default {
  props: {
      isAdmin: {
          type: Boolean,
          default: false
      },
      posts: {
          type: Object,
          require: true
      }
  },
    components: {
        PostPreview
    }
}
</script>