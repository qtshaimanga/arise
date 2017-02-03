import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Home from './containers/Home'
import Send from './components/Send'
import MainSend from './containers/MainSend'
import TextSent from './containers/TextSent'
import SetUp from './containers/SetUp'
import Invite from './containers/Invite'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name : 'home',
    component: Home
  },
  {
    path: '/send/:id?',
    name : 'send',
    component: MainSend
  },
  {
    path: '/text-sent/:id?',
    name : 'text-sent',
    component: TextSent
  },
  {
    path: '/:id/invite',
    name : 'invite',
    component: Invite
  },
  {
    path: '/setup',
    name : 'set-up',
    component: SetUp
  },
  {
    path: '/*',
    name : 'notFound',
    component: Home
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
