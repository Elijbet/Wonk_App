<template>
	<div class="contents">
		<div class="author">{{author}}</div>
		<div class="excerpt">{{extract}}</div>
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
		  			<img :src="event.images[1].url || '../assets/no-image.jpg'"></img>
		  			<br>
		  			{{event._embedded.venues[0].city.name}}
		  		</a>
		  	</div>
		  </div>
		  <div class="movies">
		  	<div class="card" v-for="movie in movies">
		  		<a>
		  			{{movie.Title}}
		  			<br>
		  			<img :src="movie.Poster" @error="error"></img>
		  			<br>
		  			{{movie.Year}} 
		  			<br>
		  		</a>
		  	</div>
		  </div>  
		  <div class="news">
		  	<div class="card" v-for="nw in news">
		  		<a :href="nw.url">
		  			{{nw.title}}
		  			<br>
		  			<img :src="nw.urlToImage" @error="error"></img>
		  			<br>
		  			{{nw.publishedAt}} 
		  			<br>
		  		</a>
		  	</div>
		  </div>  
		  <div class="item5">PODCASTS</div>
		  <div class="item6">AUTHOR EVENTS</div>
		  <div class="item7">MOVIE ADAPTATIONS</div>
		  <div class="item8">IN THE NEWS</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

	export default {
		data(){
			return {
				fakeData: ['col1', 'col2', 'col3', 'col4', 'col5', 'col6'],
				events: [],
				movies: [],
				news: [],
				extract: '',
				author: ''
			}
		},
		async created() {
			let bookPick = this.$store.getters.bookPick;

			console.log('bookPick', bookPick)

			let author = bookPick.author ? bookPick.author : bookPick.volumeInfo.authors[0]
			let title = bookPick.title ? bookPick.title : bookPick.volumeInfo.title

			this.author = author

			try {
				//Get all events for this author
				const responseEvents = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${author}&apikey=${process.env.VUE_APP_TICKETMASTER_API}`)
				let localEvents = await responseEvents.data
				console.log('localEvents', localEvents)
				if(localEvents._embedded){
					this.events = localEvents._embedded.events
					console.log('this.events', this.events)
				} 
				//Get all movies by this title
				const responseMovies = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${process.env.VUE_APP_OMDB_API}`)
				let localMovies = await responseMovies.data
				this.movies = localMovies.Search
				console.log('localMovies.Search', localMovies.Search)

				//Get Google News
				console.log('author', author)
				const responseNews = await axios.get(`https://newsapi.org/v2/everything?q=${author}&from=2019-06-16&sortBy=publishedAt&apiKey=${process.env.VUE_APP_NEWS_API}`)
				let localNews = await responseNews.data
				this.news = localNews.articles
				console.log('this.news', this.news)

				//Get Wiki extract on author
				const responseWiki = await axios.get(`https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&titles=${author}`)
				let localWiki = await responseWiki.data
				let extract = localWiki.query.pages[Object.keys(localWiki.query.pages)[0]].extract
				this.extract = extract

			} catch (e) {
	      console.log('e', e)
	      // this.errors.push(e)
	    }
		},
		methods:{
			error(event){
				// console.log('event', event)
				 
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
  grid-area: eventsArea;
  background: #EAC761;
}
.movies {
  grid-area: moviesArea;
  background: #E8DF9C;
}
.news {
  grid-area: newsArea;
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
  'myArea1 eventsArea moviesArea newsArea'
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
	height: 350px;
	justify-content: space-between;
  font-size: 0.7em;
  color: #606060;
  padding: 20px;
  @include flex-all-center;
}
.card:last-child {
	border-bottom: none;
}
.events img {
	padding: 20px;
	max-width: 250px;
}
.movies img {
	padding: 20px;
	max-width: 150px;
}
.news img {
	padding: 20px;
	max-width: 250px;
}
a {
	color: inherit; 
	text-decoration: none;
}
@include large-to-mid-screens {
	.contents {
	  @include flex-all-center;
	  flex-direction: column;
	  box-sizing: border-box;
	  padding-right: 40px;
	  padding-left: 40px;
	}
}
.author {
	@include heading-font;
	margin-top: 20px;
}
.excerpt{
	@include heading-font;
	font-size: 1.2em;
	font-weight: 200;
	letter-spacing: 0.1em;
}
</style>