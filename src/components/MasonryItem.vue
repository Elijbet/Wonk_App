<template>
  <div class="masonry-item">
    <div 
      class="card" 
      v-on:click="flip"
      :class="[toggleOn ? '' : 'rotate']">

      <div :class="[toggleOn ? 'displayOn' : 'displayOff']" class="front">
        <img 
          :src="book.book_image ? book.book_image : book.volumeInfo.imageLinks.thumbnail + '&zoom=0'" 
          width="300px"
          alt="Dummy Image" 
          class="masonry-content fadeIn"
        >
      </div>

      <div :class="[toggleOn ? 'displayOff' : 'displayOn']" class="back rotate">
        <div class="overlay">
          <img 
            :src="book.book_image ? book.book_image : book.volumeInfo.imageLinks.thumbnail + '&zoom=0'" 
            width="300px"
            alt="Dummy Image" 
            class="masonry-content "
          >
        </div>
        <div class="position-text fadeIn">{{book.description ? book.description : (book.volumeInfo.description ? book.volumeInfo.description.substring(0, 120) : '')}}... </div>
      </div>

    </div>
    <button id="menu"  class="button">

        <router-link :to="{ name: 'Book'}">
        	<img src="../assets/noun_book.svg" alt="book" class="book-icon" @click="setBook">
        </router-link>

          <section 
            id="like" 
            class="rating">
            <!-- FIFTH HEART -->
            <input type="radio" id="heart_5" name="like" value="5" v-model="picked"/>
            <label for="heart_5" title="Five">&#10084;</label>
            <!-- FOURTH HEART -->
            <input type="radio" id="heart_4" name="like" value="4" v-model="picked"/>
            <label for="heart_4" title="Four">&#10084;</label>
            <!-- THIRD HEART -->
            <input type="radio" id="heart_3" name="like" value="3" v-model="picked"/>
            <label for="heart_3" title="Three">&#10084;</label>
            <!-- SECOND HEART -->
            <input type="radio" id="heart_2" name="like" value="2" v-model="picked"/>
            <label for="heart_2" title="Two">&#10084;</label>
            <!-- FIRST HEART -->
            <input type="radio" id="heart_1" name="like" value="1" v-model="picked"/>
            <label for="heart_1" title="One">&#10084;</label>
          </section>

        <img src="../assets/noun_add.svg" alt="book" class="add-icon">
      
    </button>
  </div>
</template>

<script>
 export default {
	props: ['book'],
	data(){
    return{
      toggleOn: true,
      buttonToggleOn: true,
      picked: ''
    }
  },
	methods: {
    flip(){
      this.toggleOn = !this.toggleOn
    },
    toggle(){
      this.buttonToggleOn = !this.buttonToggleOn
    },
    setBook(){
      this.$store.dispatch('setBook', this.book)
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

.masonry-item {
  display: inline-block;
  vertical-align: top;
  margin-bottom: 5px;
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
  height: 100%;
}
.position-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 !important;
  padding: 0 !important;
}
.back {
  filter: grayscale(100%);
  opacity: 0.8;
}
.overlay { 
  background: black; 
  display: inline-block; 
}
.overlay img {
  opacity: 0.2;
}

// BOOKS OWN BUTTONS

.button {
  @include nav-item;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 15px;
  justify-content: space-between;
  margin-top: 5px;
  @include flex-all-center;
}
button a {
	padding-top: 8px;
  padding-left: 10px;
  padding-right: 10px;
  transform: translateY(-20px);
}
.book-icon {
  width: 90px;
  height: 90px;
}
.add-icon {
  width: 40px;
  height: 40px;
  padding-top: 8px;
  padding-right: 10px;
  transform: translateY(-20px);
}
.rating-icon {
  width: 120px;
  height: 120px;
}

section {
  width: 100%;
}
.displayFlexOn {
  display: flex;
}

// RATING/LIKE SECTION

.rating {
  @include flex-all-center;
	transform: translateY(-30px);
}
.align {
  flex-direction: row;
  @include flex-all-center;
  transform: translateX(7px);
}
.rating:not(:checked) > input {
  display: none;
}

#like:not(:checked) > label {
  cursor:pointer;
  float: right;
  width: 18px;
  height: 18px;
  display: block;
  
  color: rgba(233, 54, 40, .4);
  line-height: 33px;
  text-align: center;
}
#like:not(:checked) > label:hover,
#like:not(:checked) > label:hover ~ label {
  color: rgba(233, 54, 40, .6);
}
#like > input:checked + label:hover,
#like > input:checked + label:hover ~ label,
#like > input:checked ~ label:hover,
#like > input:checked ~ label:hover ~ label,
#like > label:hover ~ input:checked ~ label {
  color: rgba(233, 54, 40, .8);
}
#like > input:checked ~ label {
  color: rgb(233, 54, 40);
}
#like {
  label {
    font-size: 15px; 
  }
}

// MEDIA QUERIES

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

</style>

