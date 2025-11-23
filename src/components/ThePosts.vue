
<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>
    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>
  <li class="item" v-for = "post in posts" :key="post.id">
  </li>
    <div>
      <PostItem
      v-for="post in posts"
      :key="index"
      :post="post"
      />
    </div>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
name: "ThePosts",
data: function() {
return {
}},
computed: {
    posts(){
    return this.$store.state.posts;
}
},
components: {
  PostItem
}
};
</script>

