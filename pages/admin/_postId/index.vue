<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  data() {
    return {
      loadedPost: {
        author: "Tai",
        title: "My awesome Post",
        content: "Super amazing, thanks for that!",
        thumnailLink: "",
      },
    };
  },
  components: {
    AdminPostForm,
  },
  layout: 'admin'
};
</script>