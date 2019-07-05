<template>
	<div>
		<div class="top-nav">
			<button class="nav-item-horizontal"> 
		    <span class="nav-item-text">
		      Browse
		    </span>
		  </button>
		  <button class="nav-item-horizontal"> 
		    <span class="nav-item-text">
		      My Books
		    </span>
		  </button>
		  <button class="nav-item-horizontal"> 
		    <span class="nav-item-text">
		      Wonk Out
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
      	class="nav-item"
      	:class="[sideNavOpen ? 'display' : '']"> 
		    <span class="nav-item-text">
		      Browse
		    </span>
		  </button>
		  <button 
		  	class="nav-item"
		  	:class="[sideNavOpen ? 'display' : '']"> 
		    <span class="nav-item-text">
		      My Books
		    </span>
		  </button>
		  <button 
		  	class="nav-item"
		  	:class="[sideNavOpen ? 'display' : '']"> 
		    <span class="nav-item-text">
		      Wonk Out
		    </span>
		  </button>
	  </div>
  </div>
</template>

<script>
	export default {
		data() {
	    return {
	      sideNavOpen: false
	    }
	  },
	  methods: {
	    toggleSideNav() {
	      return this.sideNavOpen = !this.sideNavOpen
	    },
	  }
	}
	
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Quicksand:300,400,700);
	
.side-nav {
  // height: 100vh;
  width: 80%;
  padding: 1rem;
  padding-top: 6rem;
  transform: translateX(-100%);
  display: none; /* display flex in media query */
  flex-direction: column;
  box-sizing: border-box;
  // background: $nav-background;
  // box-shadow: $shadow;
  transition: transform 0.1s ease-in-out;
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
  border-radius: 50%;
  outline: none;
  position: absolute;
  cursor: pointer;
  display: none; /* display flex in media query */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  box-shadow: $shadow;
  transition: transform $transition-time ease-in-out;
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
  display: flex; /* display none in media query */
  align-items: center;
  // background: $nav-background;
  // box-shadow: $shadow;
}

.nav-item-horizontal {
  padding: 0;
  height: 3rem;
  max-height: 3rem;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.5rem;
  border-radius: 3rem;
  flex: 1; 
  border: 0;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  font-family: Quicksand;
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  color: $text-color;
  box-shadow: $shadow;
  background: white;
  transition: transform $transition-time ease-in-out;
}

.nav-item {
  padding: 0;
  height: 3rem;
  max-height: 3rem;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.5rem;
  border-radius: 3rem;
  flex: 1; 
  border: 0;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  font-family: Quicksand;
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  color: $text-color;
  box-shadow: $shadow;
  background: white;
  transition: transform $transition-time ease-in-out;
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

/* shift buttons to create overlap effect */
.top-nav .nav-item-horizontal:not(:first-child) {
  margin-left: -10%;
}

/* use gradient to create shadow effect */
.top-nav .nav-item-horizontal:not(:last-child) {
  background: linear-gradient(
    to right,
    white 50%, 
    transparent
  );
}

/* shift nav item text with container */
.top-nav .nav-item-horizontal:not(:last-child) .nav-item-text {
  margin-left: -10%;
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

@media all and (max-width: 600px) {
  .top-nav {
    display: none;
  }
  
  .side-nav {
    display: flex;
  }
  
  .side-nav-toggle {
    display: flex;
  }
}
</style>