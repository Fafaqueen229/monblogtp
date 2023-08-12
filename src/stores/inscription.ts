import { supabase } from "@/lib/supabase";
import { defineStore } from "pinia";
import {ref} from "vue";


type Users = {id?: number ,username:string, email?: string , password?: string}

export const  useUserStore = defineStore("Users",()=>{
    const user = ref<Users[]>([]);
    async function initialise() {
        const {data, error} = await supabase.from("Users").select('*');

        if (data) {
            user.value = data;
        }
        
    }
    async function addUsers(inscription:Users) {
        const {data,error} = await supabase.from("Users").insert(inscription).select('*')
        if(data){
            user.value.push(data[0])
        }
    }
    return{user, addUsers, initialise}
})