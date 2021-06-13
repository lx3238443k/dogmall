import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const Profile = ()=>import('views/profile/Profile.vue')
const Home = ()=>import('views/home/Home.vue')
const Category = ()=>import('views/category/Category.vue')
const Shopcart = ()=>import('views/cart/Shopcart.vue')



const routes = 
[
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: Shopcart
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
