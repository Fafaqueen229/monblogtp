<template>
  <div class="form">
    <h1>Écrire un nouvel article</h1>
    <form @submit.prevent="publishArticle">
      <label for="title">Titre de l'article</label>
      <input type="text" id="title" v-model="article.title" required>
      <br> <br>
      <label for="content">Contenu de l'article</label>
      <textarea id="content" v-model="article.content" required></textarea>
      <br> <br>
      <label for="image">Ajouter une image</label>
      <input type="file" accept="image/*" id="image" @change="handleImageUpload">
      <br> <br>
      <label for="video">Ajouter un média vidéo</label>
      <input type="file" accept="video/*" id="video" @change="handleVideoUpload">
      <br> <br>
      <button type="submit">Publier</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: '',
        content: '',
        imageUrl: null,
        video: null
      }
    };
  },
  methods: {
    handleImgaeUpload(event) {
      this.article.imageUrl = URL.createObjectURL(event.target.files[0]);
    },
    handleVideoUpload(event) {
      this.article.video = event.target.files[0];
    },
    publishArticle() {
      // Ici, vous pouvez envoyer les données de l'article, y compris les médias, à votre API ou effectuer d'autres actions nécessaires.
      // Par exemple, vous pourriez utiliser Axios pour envoyer une requête POST vers le serveur.

      const formData = new FormData();
      formData.append('title', this.article.title);
      formData.append('content', this.article.content);
      formData.append('image', this.article.image);
      formData.append('video', this.article.video);
    }
  }
};
</script>

<style scoped>
h1{
  text-align: center;
}

.form{
  text-align: center;
}

button{
    width: 150px;
    background-color:#5a7e70 ;
}
</style>
