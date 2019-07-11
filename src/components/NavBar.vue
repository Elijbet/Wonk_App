<template>
	<div>
		<div class="top-nav">
			<button class="nav-item-horizontal" v-for="tab in tabs"> 
		    <span class="nav-item-text">
          <router-link :to="{ name: `${tab}`}">{{tab}}</router-link>
		    </span>
		  </button>
		</div>
		<button 
	    class="side-nav-toggle"
	    v-on:click="sideNavOpen = !sideNavOpen">
		    <span class="side-nav-toggle-line" />
		    <span class="side-nav-toggle-line" />
		    <span class="side-nav-toggle-line" />
	  </button>
		<div 
			:class="[sideNavOpen ? 'side-nav-open' : '']"
			class="side-nav">
      <button 
      	v-for="tab in tabs"
      	class="nav-item"
      	:class="[sideNavOpen ? 'display' : '']"> 
		    <span class="nav-item-text">
		       <router-link :to="{ name: `${tab}`}">{{tab}}</router-link>
		    </span>
		  </button>
	  </div>
  </div>
</template>

<script>
	export default {
		data() {
	    return {
	    	tabs: ['Browse', 'My Books', 'Book'],
	      sideNavOpen: false
	    }
	  }
	}
</script>

<style lang="scss" scoped>

.side-nav {
  width: 80%;
  padding: 1rem;
  padding-top: 6rem;
  transform: translateX(-100%);
  flex-direction: column;
  box-sizing: border-box;
  transition: transform 0.1s ease-in-out;
  display: flex;/* display none in media query */
}

/* move nav onto screen */
.side-nav-open {
  transform: translateX(0);
}

.side-nav-toggle {
  z-index: 1;
  top: 1rem;
  left: 1rem;
  height: 4rem;
  width: 4rem;
  border: 0;
  @include rounded(50%);
  outline: none;
  position: absolute;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  box-shadow: $shadow;
  transition: transform $transition-time ease-in-out;
  display: flex;/* display none in media query */
}

.side-nav-toggle-line {
  height: 2px;
  width: 1.5rem;
  margin: 0.2rem;
  background: $text-color;
}

.top-nav {
  height: 4rem;
  padding: 0 1rem;
  align-items: center;
  display: none;/* display flex in media query */
}

.nav-item-horizontal {
  @include nav-item;
  @include rounded;
  @include large-text;
}

.nav-item {
  @include nav-item;
  @include rounded;
  @include large-text;
  display: none;
}

.display {
	display: block;
}

.nav-item-text {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: 
   transform $transition-time ease-in-out, 
   background-color $transition-time ease-in-out;
}

a { 
  color: inherit; 
  text-decoration: none;
} 

.top-nav {
  /* shift buttons to create overlap effect */
  .nav-item-horizontal:not(:first-child) {
    margin-left: -10%;
  }
  /* use gradient to create shadow effect */
  .nav-item-horizontal:not(:last-child) {
    background: linear-gradient(
      to right,
      white 50%, 
      transparent
    );
  }
  /* shift nav item text with container */
  .nav-item-horizontal:not(:last-child) .nav-item-text {
    margin-left: -10%;
  }
}
/* add top margin to all but first button*/
.side-nav .nav-item:not(:first-child) {
  margin-top: 1rem;
}

.side-nav-toggle:hover {
  transform: scale(1.1);
}

.side-nav-toggle:active {
  transform: scale(1);
}

.nav-item-text:hover {
  transform: scale(1.1);
  background-color: white;
}

.nav-item-text:active {
  transform: scale(1);
  background-color: transparent;
}

@include large-to-mid-screens {
  .top-nav {
    display: flex; 
  }
  
  .side-nav {
    display: none; 
  }
  
  .side-nav-toggle {
    display: none; 
  }
}
</style>