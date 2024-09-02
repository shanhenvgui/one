import { createRouter,createWebHistory } from "vue-router";
import personList from '@/views/personList.vue'
import Addperson from "@/views/addperson.vue";
 
 const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:personList
        },
        {
            path:'/add',
            component:Addperson
        },
        
    ]
})
export default router