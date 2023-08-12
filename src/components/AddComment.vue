<template>
  <div class="form">
    <form>
      <div class="form__group">
       <p>Laisser un commentaire</p>
        <textarea
          v-model="newComment"
          rows="10"
          required
          cols="50"
          placeholder="Écrivez votre commentaire"/>
        <button>Poster un commentaire</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newComment: ''
    }
  }
}
</script>

<style scoped>
form {
  margin-top: 1.5em;
}

h1 {
  display: block;
  margin-bottom: 1em;
}

textarea {
  width: 100%;
  margin-top: 0.5em;
  height: 100px;
  font-size: 16px;
}

button {
  border:unset;
  background:#5a7e70;
  font-weight: bold;
  padding: 1em 2.5em;
  margin-top: 1em;
  font-size: 12px;
}
</style>
