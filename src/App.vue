<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HomeBrowse msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HomeBrowse from './components/HomeBrowse.vue'

export default {
  name: 'app',
  components: {
    HomeBrowse
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $primary;
  margin-top: 60px;
}
</style>
