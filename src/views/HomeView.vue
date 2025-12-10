<script>
import ThePosts from '../components/ThePosts.vue'
import auth from "../auth";

export default {
  components: {
    ThePosts
  },
  data: function(){
    return {
      authResult: auth.authenticated()
    }
  },
name: "App",
    methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/api/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  }, 
};
</script>

<template>
  
  <main>
    <ThePosts />
    <button   @click="Logout" class="center">Logout</button>
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
