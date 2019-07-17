import axios from 'axios';

export default {

	state: {
	  books: [],
	  bookPick: {}
	},									

	getters: {
		books: state => state.books,
		bookPick: state => state.bookPick
	},

	mutations: {
		SET_BOOKS (state, books) {
			state.books = books;
		},
		SET_BOOK_PICK (state, bookPick){
			state.bookPick = bookPick
		}
	},

	actions: {
		async bestSelectionBooks ({commit}) {

			let books = [];

	    try {
	      const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.VUE_APP_NYT_BOOKS_API}`)
	      const secondResponse = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/2018-01-01/hardcover-fiction.json?api-key=${process.env.VUE_APP_NYT_BOOKS_API}`)
	      const thirdResponse = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/2017-01-01/hardcover-fiction.json?api-key=${process.env.VUE_APP_NYT_BOOKS_API}`)

	      this.books = response.data.results.books
	      this.books.push(... secondResponse.data.results.books)
	      this.books.push(... thirdResponse.data.results.books)

	    } catch (e) {
	      console.log('e', e)
	      // this.errors.push(e)
	    }
			commit('SET_BOOKS', this.books);
		},
		resetData({commit}){
			commit('SET_BOOKS', []);
		},
		async searchGoogleBooks ({commit}, searchKeyword) {
			let books = [];
			try {
	  		const searchResult = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchKeyword}`)
	  		console.log('searchResult', JSON.stringify(searchResult.data.items))
	  		this.books = searchResult.data.items
	  	} catch (e) {
	      console.log('e', e)
	      // this.errors.push(e)
	    }
	    commit('SET_BOOKS', this.books);
	  },
	  setBook({commit}, book){
	  	commit('SET_BOOK_PICK', book);
	  }
	}
}
	
