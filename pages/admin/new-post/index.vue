<template>
  <div class="admin-new-post-papge">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  components: {
    AdminPostForm,
  },
  methods: {
    ...mapActions(["UpdateListPost"]),
    onSubmitted(postData) {
      axios
        .post(
          "https://backendfornuxtjs-default-rtdb.firebaseio.com/posts.json",
          { ...postData, updatedDate: new Date() }
        )
        .then((res) => {
          this.UpdateListPost(postData);
        });
    },
  },
  layout: "admin",
};
</script>