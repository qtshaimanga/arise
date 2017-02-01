import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Start from './containers/Start'
import Send from './components/Send'
import MainSend from './containers/MainSend'
import TextSent from './components/TextSent'
import Invite from './containers/Invite'

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
  },
  {
    path: '/text-sent',
    name : 'text-sent',
    component: TextSent
  },
  {
    path: '/invite',
    name : 'invite',
    component: Invite
  },
  {
    path: '/*',
    name : 'notFound',
    component: Start
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
