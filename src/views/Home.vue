<script lang="ts" setup>
import { ref } from "vue";
import { articles } from "@/api/articles"
</script>
<template>
    <div>
        <main>
            <div class="container">
                <div v-for="element in articles">
                    <div class="content">
                        <div class="image">
                            <img :src="element.image" alt="">
                        </div>
                        <div class="title">
                            <h2>{{ element.title }}</h2>
                        </div>
                        <div class="summary">
                            <p>{{ element.summary }}</p>
                        </div>
                        <div class="content">
                            <p>{{ element.content }}</p>
                        </div>
                        <div class="content">
                            <RouterLink :to="`/details/${element.id}`" >Voir plus</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
main{
    padding: 1rem 3rem;
}
.container {
    column-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    row-gap: 4rem;
    column-gap: 4rem;
   
}
.image {
    background-color:#333;
} 
.image img {
    width: 100%;
}
.title h2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    background-color:#fff;
   
}
.summary p, .content p , RouterLink {
     display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    background-color:#fff;
}
</style>
