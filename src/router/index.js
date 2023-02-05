import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import about2View from "../views/about2.vue";
import privatlivspolitikView from "../views/privatlivspolitik.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
    path: "/about2",
    name: "about2",
    component: about2View,
    },
    {
      path: "/privatlivspolitik",
      name: "privatlivspolitik",
      component: privatlivspolitikView,
      }
  ],
});

export default router;
