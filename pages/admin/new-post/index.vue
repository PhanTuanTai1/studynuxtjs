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
    ...mapActions(["addPost"]),
    async onSubmitted(postData) {
      await this.addPost(postData);
      this.$router.push("/admin");
    },
  },
  layout: "admin",
  middleware: ['check-auth','auth']
};
</script>