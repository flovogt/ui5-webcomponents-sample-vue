import Vue from 'vue'
import App from './App.vue'
import Suppliers from './components/Suppliers.vue'
import Products from './components/Products.vue'
import VueRouter from "vue-router"

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ui5-/];
Vue.use(VueRouter)

const routes = [
  { path: '/suppliers', component: Suppliers },
  { path: '/products', component: Products }
]

const router = new VueRouter({
  routes: routes
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
