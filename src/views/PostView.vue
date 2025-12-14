<template>
  <div class="posts">
    <div v-if="post" class="post">
      <div class="postBody">
        <p>{{ post.body }}</p>
        <input type="text" id="updatedBody" v-model="postBody">
        </div>
        <div class="buttons">
            <button @click="updatePost">Update</button>
            <button @click="deletePost">Delete</button>
        </div>   
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null
    };
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      const id = this.$route.params.id;
      try {
        const response = await fetch(`http://localhost:3000/api/posts/${id}`);
        const data = await response.json();
        this.post = data;
      } catch (err) {
        console.error(err);
      }
    },
    formatDate(dateStr) {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    },
    async deletePost() {
      await fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
      })
        .then(() => {
            this.$router.push("/api/posts");
        })
        .catch((e) => {
          console.log(e);
      });
    },
    async updatePost() {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body: this.postBody })
    });

    if (!response.ok) throw new Error("Failed to update post");

    this.$router.push("/api/posts"); 
  } catch (err) {
    console.error(err);
  }
}

  }
};
</script>

<style scoped>

.posts{
  display: flex;
  flex-direction: column;
  min-width: 25%;
  max-width: 50%;
  margin: 0 auto;
  margin-bottom: 3rem;
  gap: 3rem;
}

.post {
  border: 2px solid #528343;
  padding: 1rem;
  border-radius: 8px;
  background-color: #2e2e2e;
} 
.postBody{
  display: flex;
  gap: 1rem;
  padding: 2rem;
  justify-content: center;
}
input{
  display: inline-block;
  max-width: fit-content;

}
.buttons{
  display: flex;
  justify-content: center;
  gap: 3rem;
}

button{
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
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  border-bottom: 1px solid white;
  color: black;
}

</style>