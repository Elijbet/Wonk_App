import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js';

Vue.config.productionTip = false

new Vue({
	store, //inject store in all children components
  render: h => h(App),
}).$mount('#app')


