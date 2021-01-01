<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios";
export default {
  asyncData(context) {
    return axios
      .get(
        "https://backendfornuxtjs-default-rtdb.firebaseio.com/posts/" +
          context.params.postId +
          ".json"
      )
      .then((Response) => {
        return {
          loadedPost: Response.data
        };
      });
  },
  components: {
    AdminPostForm,
  },
  layout: "admin",
};
</script>