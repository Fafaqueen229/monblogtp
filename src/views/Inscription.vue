<template>
    <div class="feature_divider">
      <p>CRÉER UN COMPTE</p>
    </div>
   <div id="form_connexion">
    <fieldset>
        <form @submit.prevent>
            <label for="firstname">PRENOM(S)</label>
            <br>
            <input type="text" id="firstname" v-model="inscription.firstname">
            <br>
            <label for="lastname">NOM DE FAMILLE</label>
            <br>
            <input type="text" id="lastname" v-model="inscription.lastname">
            <br>
            <label for="email">EMAIL</label>
            <br>
            <input type="text" id="email" v-model="inscription.email">
            <br>
            <label for="password">MOT DE PASSE </label>
            <br>
            <input type="password" id="password" v-model="inscription.password">
            <br>
            <br>
            <button type="submit"  v-on:click="createUser">S'inscrire</button>
            <div>
              <p>{{ error }}</p>
            </div>
            <p>Déjà inscrit 
                <a href="/Connexion">Connectez-vous  &RightArrow;</a>
            </p>
        </form>
      </fieldset>
  </div>
</template>

 <script  lang="ts" setup>
import {createClient} from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import {useRouter} from 'vue-router'
import {ref} from 'vue'
import {error} from 'console'




const error = ref ('')

const router = useRouter ()

const inscription= ref ({
  firstname:'',
  lastname:'',
  email:'',
  password:''

})

const createUser = async () => {
  const{data, error} = await supabase.auth.signUp({
    email: inscription.value.email,
    password: inscription.value.password,
  })
  if (error) {
    error.value = error.message
  }

  else{
    router.replace('/Connexion')
  }
}
</script>

<style scoped>


label , button{
    font-size: 16px;
    font-weight: bold;
}
input{
    width: 400px;
    height: 35px;
    font-size: 16px;

}
label{
    text-transform: uppercase;
}

button{
    width: 150px;
    background-color:#5a7e70 ;
}
form {
  text-align: center;
  align-items: center;
  justify-content: center;
}
#form_connexion form{
    text-align: start;
    text-rendering: auto;
    margin-left: 50px;
}
p{
    font-size: 14px;
}
a{
    text-decoration: none;
    color:blue;
}
.feature_divider p{
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
</style>

