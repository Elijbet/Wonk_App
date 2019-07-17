<template>
  <div id="app">
    <br>
    <NavBar>
      <div id="app"></div>
    </NavBar>
    <div class="contents">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    NavBar,
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
  padding: 20px 80px 80px 80px;
}
@include large-to-mid-screens {
  .contents {
    width: 100%;
    @include flex-all-center;
    flex-direction: column;
    box-sizing: border-box;
    padding-right: 40px;
    padding-left: 40px;
  }
}

</style>
