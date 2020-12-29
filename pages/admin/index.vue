<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')"
        >Create Post</AppButton
      >
    </section>
    <section>
      <h1>Existing Post</h1>
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import AppButton from "@/components/UI/AppButton";
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: 1,
            title: "First Post",
            previewText: "This is our first post",
          },
          {
            id: 2,
            title: "Second Post",
            previewText: "This is our Second post",
          },
          {
            id: 3,
            title: "Third Post",
            previewText: "This is our Third post",
          },
        ],
      });
    }, 1500);
  },
  created() {},
  // data () {
  //   return {
  //     loadedPosts:[]
  //   }
  // },
  layout: "admin",
  components: {
    PostList,
    AppButton,
  },
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>