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
          
    deleteAllPosts() {
      fetch("http://localhost:3000/api/posts", {
        method: "DELETE",
      })
        .then(() => {
            this.$router.push("/api/posts");
        })
        .catch((e) => {
          console.log(e);
      });
    },
  }, 
};
</script>

<template>
  
  <main>
    <button   @click="Logout" class="center">Logout</button>
    <ThePosts />
    <div class="container">
      <router-link to="/api/addpost">Add post</router-link>
      <button @click="deleteAllPosts">Delete all</button>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
}

button,
a {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  margin-bottom: 1em;
  background: #43a047;
  border-radius: 5px;

  font-family: inherit;
  font-size: 16px;

  color: black;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  border-color: #525252ff;
  cursor: pointer;
}

button:hover{
  background: #66bb6a;
}

a:hover{
  background: #66bb6a;
}

</style>
