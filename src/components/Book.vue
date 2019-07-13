<template>
	<div class="grid-container">
	  <div class="item1">
	  	<div class="card" v-for="item in fakeData">
	  		{{item}}
	  	</div>
	  </div>
	  <div class="events">
	  	<div class="card" v-for="event in events">
	  		<a :href="event.url">
	  			{{event.name}}
	  			<br>
	  			<br>
	  			{{event.dates.start.localDate}} {{event.dates.start.localTime}}
	  			<br>
	  			<img :src="event.images[1].url"></img>
	  			<br>
	  			{{event._embedded.venues[0].city.name}}
	  		</a>
	  		
	  	</div>
	  </div>
	  <div class="item3"></div>  
	  <div class="item4"></div>
	  <div class="item5">EVENTS</div>
	  <div class="item6">PODCASTS</div>
	  <div class="item7">IMDB</div>
	  <div class="item8">NEWS</div>
	</div>
</template>

<script>
import axios from 'axios';

	export default {
		data(){
			return {
				fakeData: ['col1', 'col2', 'col3', 'col4', 'col5', 'col6'],
				events: []
			}
		},
		async created() {
			let bookPick = this.$store.getters.bookPick;
			console.log('bookPick', bookPick)
			let author = bookPick.	author ? bookPick.author : bookPick.volumeInfo.authors[0]
			try {
				const responseEvents = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${author}&apikey=hjgAxKolN47vlcdLYwppa5uhooNJbqDp`)
				let localEvents = await responseEvents.data
				this.events = localEvents._embedded.events
				console.log('this.events', this.events)
			} catch (e) {
	      console.log('e', e)
	      // this.errors.push(e)
	    }
		}
	}
</script>

<style lang="scss">
.item1 {
  grid-area: myArea1;
  display: inline-flex;
  flex: 1;
	flex-direction: column;
	background: #F75E50;
}
.events {
  grid-area: myArea2;
  background: #EAC761;
}
.item3 {
  grid-area: myArea3;
  background: #E8DF9C;
}
.item4 {
  grid-area: myArea4;
  background: #91C09E;
}
.item5 {
  grid-area: myArea5;
  background: #F75E50;
  padding: 20px;
}
.item6 {
  grid-area: myArea6;
  background: #EAC761;
  padding: 20px;
}
.item7 {
  grid-area: myArea7;
  background: #E8DF9C;
  padding: 20px;
}
.item8 {
  grid-area: myArea8;
  background: #91C09E;
  padding: 20px;
}
.grid-container {
	margin: 40px;
	box-sizing: border-box;
	width: 100%;
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  grid-template:
  'myArea5 myArea6 myArea7 myArea8'
  'myArea1 myArea2 myArea3 myArea4'
  ;
  grid-gap: 5px;
  border: 5px solid black;
  background-color: black;
  grid-template-columns: repeat(4, 1fr);
  @include search-bar-text;
}
.card {
	border-bottom: 5px solid black;
	/* Boxes That Fill Height (Or More) (and Don’t Squish). 
	If there is extra room, the space will be divided and filled. */
	/*flex: 1;*/
	height: 300px;
	justify-content: space-between;
  font-size: 0.9em;
  padding-top: 10px;
}
.card:last-child {
	border-bottom: none;
}
img {
	padding: 20px;
	max-width: 250px;
}
a {
	color: inherit; 
	text-decoration: none;
}
</style>