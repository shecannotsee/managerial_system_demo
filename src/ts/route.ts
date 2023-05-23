import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import App from "../App.vue"
import home from "../view/home.vue"
import login from "../view/login.vue"

const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:"/",
      name:"App",
      component:App
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
    }
  ]
});
export default router;
