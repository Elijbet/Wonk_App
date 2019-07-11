import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes,
	store,
});

new Vue({
	router,
	store, //inject store in all children components
  render: h => h(App),
}).$mount('#app')


