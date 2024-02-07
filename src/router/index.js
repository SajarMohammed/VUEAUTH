import { createRouter, createWebHistory } from 'vue-router'
import SignUp from "@/views/SignUp.vue"

const routes = [{
    path:"/" , component:SignUp
},{
    path:"/login", component: ()=> import("@/views/Login_sec.vue")
},
{
    path:"/home" , component:()=> import("@/views/Home_sec.vue")
}]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;