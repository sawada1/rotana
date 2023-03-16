import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../views/AboutView.vue'
import cars from '../views/cars.vue'
import sell from '../views/sell.vue'
import purchase from '../views/purchase.vue'
import offer from '../views/offer.vue'
import offerpage from '../views/offerpage.vue'
import faq from '../views/faq.vue'
import contact from '../views/contact.vue'
import career from '../views/career.vue'
import careerpage from '../views/careerpage.vue'
import job from '../views/job.vue'
import news from '../views/new.vue'
import newpage from '../views/newpage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: about
  },
  {
    path: '/cars',
    name: 'cars',
    component: cars
  },
  {
    path: '/sell',
    name: 'sell',
    component: sell
  },
  {
    path: '/purchase',
    name: 'purchase',
    component: purchase
  },
  {
    path: '/offer',
    name: 'offer',
    component: offer
  },
  {
    path: '/offerpage',
    name: 'offerpage',
    component: offerpage
  },
  {
    path: '/faq',
    name: 'faq',
    component: faq
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/career',
    name: 'career',
    component: career
  },
  {
    path: '/careerpage',
    name: 'careerpage',
    component: careerpage
  },
  {
    path: '/job',
    name: 'job',
    component: job
  },
  {
    path: '/news',
    name: 'news',
    component: news
  },
  {
    path: '/newpage',
    name: 'newpage',
    component: newpage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
