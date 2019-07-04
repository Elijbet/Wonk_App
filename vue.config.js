module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "./src/styles/_variables.scss"; 
          @import "./src/styles/_mixins.scss";`
      }
    }
  }
}