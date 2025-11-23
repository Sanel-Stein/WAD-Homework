
<template>
  <header>
    <Header />
  </header>

  <RouterView />
  
  <footer>
    <Footer />
  </footer>
</template>

<script>

import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
    RouterLink,
    RouterView
  }
};
</script>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
}

footer {
  height: 50px;
  width: 100%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    width: 100%;
  }
}
</style>
