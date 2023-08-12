<template>
    <body>
        <header>
            <div class="header_logo">
                <img src="../assets/images/logo.png" alt="logo" />
            </div>
            <div class="header_searchbar">
                    <input v-model="searchQuery" @input="filterArticles" placeholder="Rechercher...">
                </div>
            <div class="header_menu">
                <a href="/Home">Accueil</a>
                <a href="#">Actualités</a>
                <a href="/Connexion">Se connecter</a>
            </div>
        </header>
    
    </body>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    border-bottom: 4px solid black;
    background-color: #5a7e70;
    height: 70px;
    width: 100%;
    
}



.header_menu {
    display: flex;
    gap: 2rem;
}

.header_menu a:hover{
    border-bottom: 2px solid #111;
}

.header_menu a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
}

.header_logo img {
    width: 200px;

}

.header_searchbar input{
    width: 400px;
    height: 30px;
}


</style>
<script lang="ts" setup>

import { ref } from 'vue';


</script>