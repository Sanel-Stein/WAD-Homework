<script>
export default {
props: {
  post: {
    type: Object,
    required: true
  }
}

};
</script>

<template>
  <div class="post">
    <header class="post-header">
      <img :src="post.icon" class="icon" alt="Author icon" />
      <p class="author">{{ post.author }}</p>
      <p class="date">{{ post.date }}</p>
    </header>

    <img v-if="post.image" :src="post.image" class="post-image" />

    <p class="text">{{ post.text }}</p>

    <a href="#" class="like">
      <img src="/images/like.png" class="icon" alt="Like" />
    </a>
  </div>
</template>



<style scoped>
.post {
  padding: 1em;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
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
