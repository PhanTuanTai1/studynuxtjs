<template>
    <div>
         <nuxt-link :to="postLink">
            <article class="post-preview">
              <div class="post-thumbnail"></div>
              <div class="post-content">
                <h1>{{title}}</h1>
                <p>{{previewText}}</p>
              </div>
            </article>
          </nuxt-link>
    </div>
</template>

<script>
export default {
  props: {
    thumbnail: { 
      type: String,
      default: null,
      required: false
    },
    previewText: { 
      type: String,
      default: null,
      required: true
    },
    title: { 
      type: String,
      default: null,
      required: true
    },
    id: { 
      type: String,
      default: null,
      required: true
    },
    isAdmin:{
      type: Boolean,
      default: false
    }
  },
  computed:{
    postLink(){
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id;
    }
  }
}
</script>

<style scoped>
    .post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>