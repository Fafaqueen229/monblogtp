<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
/* import Connexion from '@/views/Connexion.vue' */
/* import Inscription from '@/views/Inscription.vue' */
/* import AddComment from '@/components/AddComment.vue'
import Comment from '@/components/comment.vue' */
import Blog from '@/views/Blog.vue' 
import Footer from '@/components/Footer.vue'
import Home from '@/views/Home.vue'

 

</script>

<template>
  <Navbar />
  <!-- <AddComment />
  <Comment /> -->

  <Footer />
  <RouterView />
</template>




