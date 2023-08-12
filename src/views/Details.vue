<script lang="ts" setup>
import { articles } from "@/api/articles";
import {ref} from "vue"
import { useRoute } from "vue-router";
const route = useRoute()
const id = route.params.id

const art = articles.find((item: { id: number; }) =>item.id==Number(id))
const article = ref(art)
</script>
<template>
    <div class="details">
        <div class="barner">
            <div class="title">
                <h2>{{ article.title }}</h2>
            </div>
            <div class="image">
                <img :src="article.image" alt="">
            </div>
        </div>
        <div class="first">
            <div class="summary">
                <p>{{ article.summary }}</p>
            </div>
            <div class="contenu">
                <p>{{ article.content }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .barner{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4rem;
        gap: 4rem;
    }
    .summary{
        margin-bottom: 2rem;
    }
    

</style>