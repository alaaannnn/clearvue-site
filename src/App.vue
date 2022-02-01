<template>
  <NavBar />
  <Title />
  <Features />
  <Team />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import Title from './components/Title.vue';
import Features from './components/Features.vue';
import Team from './components/Team.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    Title,
    Features,
    Team,
  },
  created() {
    document.title = 'ClearVue';
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
