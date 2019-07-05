<template>
  <div id="app">
    <NavBar>
      <div id="app" /> 
    </NavBar>
    <img alt="Vue logo" src="./assets/logo.png">
    <HomeBrowse msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HomeBrowse from './components/HomeBrowse.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    HomeBrowse,
    NavBar
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background: linear-gradient(
   to right, 
   cornflowerblue, 
   thistle
  );

}
</style>
