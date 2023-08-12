<template>
    <div>
      <h1>{{ article.title }}</h1>
      <p>{{ article.content }}</p>
      <img v-if="article.imageUrl" :src="article.imageUrl" alt="Article Image">
      <video v-if="article.video" controls>
      <source :src="article.videoUrl" type="video/mp4">
    </video>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        article: {
          title: '',
          content: '',
          imageUrl: '',
          videoUrl: ''
        }
      };
    },
    created() {
      // Charger les données de l'article, y compris l'URL de l'image
    }
  };
  </script>
  