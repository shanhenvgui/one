import { defineStore } from "pinia";
export const useUserStore = defineStore('User',{
    state:()=>({
        name:'',
        age:'',
        tel:'',
        password:''
    }),
    getters:{},
    actions:{

    }

})