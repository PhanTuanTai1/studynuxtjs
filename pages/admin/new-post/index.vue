<template>
  <div class="admin-new-post-papge">
    <section class="new-post-form">
      <AdminPostForm />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  components: {
    AdminPostForm
  },
  layout: 'admin',
};
</script>