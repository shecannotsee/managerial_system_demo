import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import home from "@/view/home.vue"
import login from "@/view/login.vue"
import manage from "@/view/manage.vue"
import manageHome from "@/view/manageHome.vue"
import timeAndDate from "@/view/timeAndDate.vue"
import query from "@/view/query.vue"
import setting from "@/view/setting.vue"


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
      component:manage,
      redirect:"/manage/home",
      children:[
        {
          path:"/manage/home",
          name:"manageHome",
          component:manageHome
        },
        {
          path:"/manage/timeAndDate",
          name:"timeAndDate",
          component:timeAndDate
        },
        {
          path:"/manage/query",
          name:"query",
          component:query
        },
        {
          path:"/manage/setting",
          name:"setting",
          component:setting
        }
      ]
    }
  ]
});