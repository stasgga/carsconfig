<template>
  <div id="app" data-app>
    <MainPage />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainPage from './components/MainPage/MainPage.vue';

export default Vue.extend({
  name: 'App',
  components: {
    MainPage
  }
});
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
