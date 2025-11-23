<template>
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

<style scoped>

div {
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 75%;
    margin: 0 auto;
    text-align: justify;
}

</style>
