import Browse from './components/MasonryBookResults.vue';
import Book from './components/Book.vue';
import MyBooks from './components/MyBooks.vue';

export const routes = [
	{ path: '/browse', name: 'Browse', component: Browse },
	{ path: '/books', name: 'Book', component: Book },
	{ path: '/mybooks', name: 'My Books', component: MyBooks}
];