<template>
  <div id="app">
    <NavBar>
      <div id="app" /> 
    </NavBar>
    <div class="contents">
      <SearchBarBrowse></SearchBarBrowse>
      <MasonryBookResults/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SearchBarBrowse from './components/SearchBarBrowse.vue'
import MasonryBookResults from './components/MasonryBookResults.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    SearchBarBrowse,
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
.contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
