<script lang="ts" setup >
import { ref } from 'vue';
const content  = ref ("")
const title = ref("")
const objet=ref()
function send(){
     objet.value= 
    {
    title:title.value,
    content:content.value
    }
}
</script>
<template>
    <div>
        <div>
            <div>
                <input type="text" v-model="title"/>
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
            </div>
            <div>
                <button type="submit" @click="send">Ajouter</button>
            </div>
           
        </div>
        <div v-if="objet">
            <p>{{ objet.title }}</p>
            <p>{{ objet.content }}</p>
        </div>
    </div>

</template>
<style scoped>

</style>