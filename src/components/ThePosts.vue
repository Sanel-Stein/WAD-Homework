<template>
  <div class="posts">
    <router-link v-for="post in posts" :key="post.id" :to="{ name: 'PostView', params: { id: post.id } }" class="post-link">
      <div  class="post">
        <header class=post-header> 
          <p>{{ formatDate(post.date) }}</p>
        </header>
        <p>{{ post.body }}</p>
        
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ThePosts",
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch('http://localhost:3000/api/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        this.posts = data; 
      } catch (err) {
        console.error(err);
      }
    },
    formatDate(dateStr) {
      const d = new Date(dateStr);
      return d.toLocaleDateString(
        'en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }
      );
    }
  }
};
</script>

<style scoped>

.post-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}

.post-header p {
  margin-bottom: 0;
}

.posts {
  display: flex;
  flex-direction: column;
  width: 25%;
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

.post-link {
  text-decoration: none;
  color: inherit;
  display: block;
}
.post-link:hover .post {
  background-color: #3a3a3a; 
  cursor: pointer;
}

</style>