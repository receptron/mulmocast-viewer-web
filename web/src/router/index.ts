import { type RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import NotFound from "../components/NotFound.vue";

import Home from "../views/Home.vue";
import About from "../views/About.vue";

import HomeView from "../views/HomeView.vue";
import Viewer from "../views/Viewer.vue";
import ListView from "../views/ListView.vue";

const routeChildren: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "home",
    component: Home,
  },
  {
    path: "about",
    name: "about",
    component: About,
  },
  {
    path: "/contents",
    name: "home_viewer",
    component: HomeView,
  },
  {
    path: "/contents/:contentsId/list",
    name: "list",
    component: ListView,
  },
  {
    path: "/contents/:contentsId/:page",
    name: "home2",
    component: Viewer,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:lang(en|ja)?",
      component: Layout,
      children: routeChildren,
    },
    {
      path: "/:page(.*)",
      name: "NotFoundPage",
      component: NotFound,
    },
  ],
});

export default router;
