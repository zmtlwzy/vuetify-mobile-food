import Vue from "vue"
import VueRouter from "vue-router"

// import Home from "@/views/Home.vue";
// import Category from "@/views/Category.vue";
// import Maps from "@/views/Maps.vue";
// import More from "@/views/More.vue";

const Home = () => import( /* webpackChunkName: "Home" */ "../views/Home.vue")
const Category = () => import( /* webpackChunkName: "Category" */ "../views/Category.vue")
const Maps = () => import( /* webpackChunkName: "Maps" */ "../views/Maps.vue")
const More = () => import( /* webpackChunkName: "More" */ "../views/More.vue")

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/maps",
    component: Maps,
  },
  {
    path: "/more",
    component: More,
  },
]

const router = new VueRouter({
  routes,
})

export default router