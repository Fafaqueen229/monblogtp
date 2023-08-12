<template>
    <div class="feature_divider">
        <p>CONNECTEZ-VOUS</p>
    </div>
    <div id="form_connexion">
        <fieldset>
            <form @submit.prevent>
                <br>
                <label>EMAIL</label>
                <br>
                <input type="email" v-model="connexion.email" />
                <br>
                <br>
                <label>MOT DE PASSE</label>
                <br>
                <input type="password" v-model="connexion.password" />
                <br><br>
                <button type="submit" v-on:click="loginUser">Se connecter</button>
                <p>Pas encore inscrit
                    <a href="/Inscription">Inscrivez-vous &RightArrow; </a>
                </p>
                <br>
            </form>
        </fieldset>
    </div>
</template>


  
<!-- <script lang="ts">
import { defineComponent, ref } from 'vue'; // Import defineComponent and ref from Vue Composition API
import { useUserStore } from '../stores/user'; // Import the user store
import { supabase } from '../lib/supabase';
export default defineComponent({
    setup() {
        const userStore = useUserStore();
        const email = ref('');
        const password = ref('');

        async function login() {
            await userStore.signIn(email.value, password.value);
        }

        return { userStore, email, password, login };
    },
});


</script> -->
  
<script lang="ts" setup>
import { createClient } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'vue-router'
import { ref } from 'vue';



const error = ref('')

const router = useRouter()

const connexion = ref({
    email: '',
    password: ''
})

const loginUser = async () => {

    const { data, error } = await supabase.auth.signInWithPassword({
        email: connexion.value.email,
        password: connexion.value.password,
    })
    if (error) {
        error.value = error.message
    }
    else {
        router.replace('/Blog')
    }
}
</script>
  

<style scoped>
label,
button {
    font-size: 16px;
    font-weight: bold;
}

input {
    width: 400px;
    height: 35px;
    font-size: 16px;
    opacity: 50%;

}

label {
    text-transform: uppercase;
}

button {
    width: 150px;
    background-color: #5a7e70;
}

#form_connexion form {
    text-align: start;
    text-rendering: auto;
    margin-left: 50px;
}

p {
    font-size: 14px;
}

a {
    text-decoration: none;
    color: blue;
}

.feature_divider p {
    margin-top: 50px;
    font-size: 20px;
    text-align: center;
    color: #5a7e70;
}

fieldset {
    width: 500px;
    margin-left: 440px;
    margin-top: 30px;
    margin-bottom: 50px;
    box-sizing: border-box;
}

form {

    text-align: center;
    align-items: center;
    justify-content: center;
}
</style>
