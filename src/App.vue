<template>
  <div id="app">
    <NavBar>
      <div id="app" /> 
    </NavBar>
    <MasonryBookResults/>
    <Footer/>
  </div>
</template>

<script>
import HomeBrowse from './components/HomeBrowse.vue'
import NavBar from './components/NavBar.vue'
import MasonryBookResults from './components/MasonryBookResults.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    HomeBrowse,
    NavBar,
    MasonryBookResults,
    Footer
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
