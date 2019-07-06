<template>
  <div class="masonry-wrapper">
    <div class="masonry">
    
      <div class="card-wrapper" v-for="book in books">
        <div 
          class="masonry-item card" 
          v-on:click="flip"
          :class="[toggleOn ? '' : 'rotate']">
          <div :class="[toggleOn ? 'displayOn' : 'displayOff']" class="front">
            <img 
              :src="book.book_image" 
              width="300px"
              alt="Dummy Image" 
              class="masonry-content fadeIn"
            >
          </div>
          <div :class="[toggleOn ? 'displayOff' : 'displayOn']" class="back rotate">
            <img 
              :src="book.book_image" 
              width="300px"
              alt="Dummy Image" 
              class="masonry-content"
            >
            <div class="position-text fadeIn ">{{book.description}}</div>
            <div class="overlay" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data(){
      return{
        toggleOn: true,
        books: []
      }
    },
    async created(){
      try {
        const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.VUE_APP_NYT_BOOKS_API}`)
        const secondResponse = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/2018-01-01/hardcover-fiction.json?api-key=${process.env.VUE_APP_NYT_BOOKS_API}`)
        const thirdResponse = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/2017-01-01/hardcover-fiction.json?api-key=${process.env.VUE_APP_NYT_BOOKS_API}`)

        this.books = response.data.results.books
        this.books.push(... secondResponse.data.results.books)
        this.books.push(... thirdResponse.data.results.books)

        console.log('this.books', this.books)
      } catch (e) {
        console.log('e', e)
        // this.errors.push(e)
      }
    },
    methods: {
      flip(){
        this.toggleOn = !this.toggleOn
      }
    }
  }
</script>
<style lang="scss" scoped>
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
}

code, pre, samp {
  font-family: monospace;
}

/**
 * BASIC TYPE
 */

img, video {
  max-width: 100%;
  vertical-align: middle;
}

p:not(:last-child) {
  margin: 0 0 1em;
}

h1, h2, h3, h4 {
  margin: .5em 0 .75em;
  line-height: 1.3;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.25em;
}

h3 {
  font-size: 1.125em;
}

h4 {
  font-size: 1em;
}

/**
 * BOX HACKING
 */

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
.wrapper { 
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 1.5em;
}
.masonry-wrapper {
  padding: 1.5em;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
}
.masonry {
  columns: 1;
  column-gap: 15px;
}
.masonry-item {
  display: inline-block;
  vertical-align: top;
  margin-bottom: 15px;
}
@include large-screen {  
.masonry {
    columns: 3;
  }
}
@include extra-large-screen {
  .masonry {
    columns: 5;
  }
}
.masonry-item {
  .masonry-content {
    border-radius: 4px;
    overflow: hidden;
  }
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, .3));
  transition: filter .25s ease-in-out;
}

// FLIP CARD ANIMATION
.rotate {
  /* rotating the back face of the card */
  transform: rotateY(-180deg);
}
.displayOn {
  display: block;
}
.displayOff {
  display: none;
}
.fadeIn {
  animation: fadein .5s;
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
.card {
  position: relative;
  text-align: center;
  color: white;
  transition: transform .5s;
  transform-style: preserve-3d;
}
.position-text {
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 !important;
  padding: 0 !important;
}
.card-wrapper {
  perspective: 800px;
}
.back {
  filter: grayscale(100%);
  opacity: 0.7;
}
.overlay { 
  position: absolute; 
  top: 0; 
  left: 0; 
  right:0; 
  bottom:0; 
  background-color: rgba(0,0,0,0.8); 
}
</style>