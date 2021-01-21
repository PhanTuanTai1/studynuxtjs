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
import {mapActions} from "vuex";
export default {
  methods: {
   ...mapActions(["editPost"]),
    async onSubmitted(editedPost){
      console.log(editedPost);
      await this.editPost(editedPost);
      this.$router.push("/admin");
    }
  },
  asyncData(context) {
    return axios.get("https://backendfornuxtjs-default-rtdb.firebaseio.com/posts/" + context.params.postId + ".json").then((Response) => {
        return {
          loadedPost:{...  Response.data, id: context.params.postId}
        };
    });
  },
  components: {
    AdminPostForm,
  },
  layout: "admin",
  middleware: ['check-auth','auth']
};
</script>