import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Start from './containers/Start'
import Send from './components/Send'
import MainSend from './containers/MainSend'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name : 'home',
    component: Start
  },
  {
    path: '/send',
    name : 'send',
    component: MainSend
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
