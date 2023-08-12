<template>
  <div class="comment">
    <div class="comment__flex">
      <p>J'aime beaucoup cet article</p>
      <div class="comment__flex-btn">
        <button class="update">Modifier</button>
        <button class="del">Supprimer</button>
      </div>
    </div>
  </div>
</template>


<style scoped>

.comment {
  margin: 1em 0 2em;
  border-bottom: 1px solid #ccc;
}

.comment__flex-btn {
  margin: 1em 0;
}

button + button {
  margin-left: 1em;
}

button {
  padding: 0.75em 1em;
  border: unset;
}

.del {
  background:red;
  color: #000807;
  font-size: 12px;
  font-weight: 700;
}

.update {
  background: #5a7e70;
  color: #000807;
  font-size: 12px;
  font-weight: 700;
}

textarea {
  width: 100%;
}

.open {
  margin: 1em 0;
}
</style>
