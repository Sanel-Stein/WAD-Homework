<template>
  <div class="post">
    <header class="post-header">
      <img :src="post.icon" class="icon" alt="Author icon" />
      <p class="author">{{ post.author }}</p>
      <p class="date">{{ post.date }}</p>
    </header>

    <img v-if="post.image" :src="post.image" class="post-image" />

    <p class="text">{{ post.text }}</p>
    <div class="like-div">
      <img src="/images/like.png" class="icon" alt="Like" v-on:click="IncreaseLikes(post.id)" />
      <p class="likes"> {{ post.likes }} likes</p>
    </div>
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
  background: #1e1e1e;
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

.like-div{
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.post-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.post-header p:first-of-type{
    padding-left: 5px;
    margin-right: auto;
    text-align:left;
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
