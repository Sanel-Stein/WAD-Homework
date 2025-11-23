<template>
  <div class="post">
    <header class="post-header">
      <img :src="post.icon" class="icon" alt="Author icon" />
      <p class="author">{{ post.author }}</p>
      <p class="date">{{ post.date }}</p>
    </header>

    <img v-if="post.image" :src="post.image" class="post-image" />

    <p class="text">{{ post.text }}</p>
    <button class = "like-Btn" v-on:click="IncreaseLikes(post.id)"> Like </button>
    <a class="likes"> {{ post.likes }}</a>

    <a href="#" class="like">
      <img src="/images/like.png" class="icon" alt="Like" />
    </a>
  </div>
</template>

<script>
export default {
props: {
  post: {
    type: Object,
    required: true
  }
},

methods: {
  IncreaseLikes: function(PostID){
    this.$store.dispatch("IncreaseLikesAct", PostID)
  }
}
}
</script>




<style scoped>
.post {
  padding: 1em;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
}

.like-Btn{
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  height: 40px;
  width: 50px;

}

.likes{
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;

}

.post-header {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 0.5em;
}

.icon {
  width: 40px;
  height: 40px;
}

.post-image {
  width: 100%;
  margin: 0.5rem 0;
}

.text {
  margin: 0.5rem 0;
}

.like img {
  width: 32px;
  height: 32px;
}
</style>
