<template>
	<div class="size">
		<label>
			<input 
				type ="text" 
				style="width: 100%" 
				placeholder="Enter a Book Title, or an Author."
				v-on:change="search"/>
		</label>
	</div>
</template>

<script>
	export default {
    data(){
      return{
      }
    },
	  methods: {
	  	search(e){
	  		console.log('onchange', e.target.value)
	  		this.$store.dispatch('resetData')
	  		this.$store.dispatch('searchGoogleBooks', e.target.value)
	  	}
	  }
	}
</script>

<style  lang="scss" scoped>
.size {
	width: 85%;
}
input[type="text"] {
	@include nav-item;
	color: $text-color;
	padding: 0 40px;
	box-sizing: border-box;
	border-radius: 5px;
	@include search-bar-text;
  font-size: 0.7rem;
}
::placeholder { 
  @include search-bar-text;
  font-size: 0.7rem;
  color: #C8C8C8;
}
img {
	max-width: 50px;
}
label {
  position: relative;
}
label::after {
  content: "";
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  width: 30px;
  height: 30px;
  background: url("../assets/noun_find.svg") center / contain no-repeat;
}

@include large-screen {
	.size {
		width: 96%;
		margin-top: 40px;
	}
	::placeholder { 
	  @include search-bar-text;
	}
	input[type="text"] {
	  @include search-bar-text;
	}
}
@include extra-large-screen {
	.size {
		width: 96%;
		max-width: $page-width;
		margin-top: 40px;
	}
	::placeholder { 
	  @include search-bar-text;
	}
	input[type="text"] {
	  @include search-bar-text;
	}
}
</style>