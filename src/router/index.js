import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: () => import(/* webpackChunkName: "brazil" */ '../views/Brazil.vue'),

  },
  {
    path: '/panama',
    name: 'panama',
    component: () => import(/* webpackChunkName: "panama" */ '../views/Panama.vue'),

  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: () => import(/* webpackChunkName: "jamaica" */ '../views/Jamaica.vue'),

  },
  {
    path: '/details/:id',
    name: 'DestinationDetails',
    component: () => import(/* webpackChunkName: "details" */ '../views/DestinationDetails.vue'),

  },
  {
    path: '/hawai',
    name: 'hawai',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "hawai" */ '../views/Hawai.vue'),
  },
];

const router = new VueRouter({
  linkExactActiveClass: 'router-link-exact-active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
