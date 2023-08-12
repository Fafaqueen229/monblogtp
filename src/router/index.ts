import { createRouter, createWebHistory } from 'vue-router'
import Connexion from '@/views/Connexion.vue'
import Blog from '@/views/Blog.vue' 
import Inscription from '@/views/Inscription.vue'
import NewArticle from "@/views/NewArticle.vue";
import Details from "@/views/Details.vue";
import Home from "@/views/Home.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/connexion',
      component: Connexion
    },
    {
      path: '/newarticle',
      component: NewArticle
    },
    {
      path: '/details/:id',
      component: Details
    },
    {
      path: '/inscription',
      component: Inscription
    },
    {
      path:'/blog',
      component: Blog
    },
   
  ]
})

export default router
