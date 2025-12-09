
<template>
  <header>
    <Header />
  </header>

  <div class="content">
    <RouterView />
  </div>

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
  },
};
</script>

<style>

header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
}

footer {
  height: 50px;
  width: 100%;
}

.content{
  flex: 1;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    width: 100%;
  }
}
</style>
