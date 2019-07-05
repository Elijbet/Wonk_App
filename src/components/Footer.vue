<template>
	<div class="masonry-footer">
	  <p>Created with a glass of 🍉 & 🥒 juice by Eliza Khachatryan. <a href="https://www.instagram.com/khachatryan.eliza/">Love to 👩‍🍳 & code.</a></p>
	</div>
</template>

<style lang="scss" scoped>
.masonry-footer {
  font-size: .75em;
  opacity: .25;
  text-align: center;
  padding-top: 3em; 
  padding-bottom: 3em;
  margin-bottom: -1.5em;
  transition: opacity 1s ease-in-out;
}
.masonry-footer a {
  color: currentColor;
}
.masonry-footer:hover, .masonry-footer:active, .masonry-footer:focus {
  opacity: .75;
}

a {
	color: white !important;
	text-decoration: none;
}

</style>