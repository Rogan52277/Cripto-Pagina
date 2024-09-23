import { createRouter, createWebHashHistory } from "vue-router"
import loginForm from "./../modules/auth/loginForm.vue"
import notFound from "@/modules/common/not-found.vue"


const routes=[
    {
        path: "/",
        name: "loginForm",
        component: loginForm,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: notFound
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router 