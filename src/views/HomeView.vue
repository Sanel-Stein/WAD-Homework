<script>
import ThePosts from '../components/ThePosts.vue'
export default {
  components: {
    ThePosts
  },
methods: {
  ResetLikes: function(){
    this.$store.dispatch("ResetLikesAct")
  }
}
};
</script>

<template>
  
  <main>
    <ThePosts />
    <button id="reset" v-on:click="ResetLikes"> Reset likes </button>
  </main>
</template>

<style scoped>

button {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  margin-bottom: 1em;
  background: #43a047;
  border-radius: 5px;
}

button:hover{
  background: #66bb6a;
}

</style>
