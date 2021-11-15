import Vue from 'vue'
import App from './App.vue'
import router from './routes';

Vue.config.productionTip = true;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
