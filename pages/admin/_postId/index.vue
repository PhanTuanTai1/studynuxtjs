<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios";
export default {
  methods: {
    onSubmitted(editedPost){
      axios.put("https://backendfornuxtjs-default-rtdb.firebaseio.com/posts/" + this.$route.params.postId + ".json", editedPost)
      .then(res => console.log(res))
    }
  },
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