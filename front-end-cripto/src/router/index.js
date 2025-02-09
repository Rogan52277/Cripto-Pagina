import { createRouter, createWebHashHistory } from "vue-router"
import loginForm from "./../modules/auth/loginForm.vue"
import notFound from "@/modules/common/not-found.vue"
import principal from "@/modules/pages/principal.vue"
import politica from "@/modules/pages/politica.vue"


const routes=[
    {
        path:"/",
        name:"Principal",
        component: principal
    },
    {
        path: "/login",
        name: "loginForm",
        component: loginForm,
    },
    
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: notFound
    },
    {
        path: '/politica-de-privacidad',
        name: 'politica',
        component: politica
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router 