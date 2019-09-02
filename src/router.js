import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/login.vue"
import Landing from "./views/landing.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/landing",
            name: "landing",
            component: Landing
        }
    ]
})