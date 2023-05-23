import { createRouter, createWebHistory } from "vue-router";
const routes = [{
        path: "/",
        name: "home",
        component: () =>
            import ("../view/login.vue"),
        children: []
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("../view/login/loginIndex.vue"),

    },
    {
        path: "/exception",
        name: "exception",
        component: () =>
            import ("../view/exception/exceptionIndex.vue"),

    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
