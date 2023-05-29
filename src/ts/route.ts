import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import home from "@/view/home.vue"
import login from "@/view/login.vue"
import manage from "@/view/manage.vue"

export { router };

const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:"/",
      name:"App",
      redirect:"/home"
    },
    {
      path:"/home",
      name: "home",
      component:home
    },
    {
      path:"/login",
      name: "login",
      component:login
    },
    {
      path:"/manage",
      name:"manage",
      component:manage
    }
  ]
});