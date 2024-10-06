import { createRouter,createWebHistory } from "vue-router";
import personList from '@/views/personList.vue'
import Addperson from "@/views/addperson.vue";
import Login from "@/views/login.vue";
import Ts from "@/views/ts.vue";
import Grid from "@/views/grid.vue";
 
 const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/list',
            component:personList
        },
        {
            path:'/add',
            component:Addperson
        },
        {
            path:'/',
            component:Login
        },
        {
            path:'/ts',
            component:Ts
        },
        {
            path:'/grid',
            component:Grid
        }
        
    ]
})
export default router