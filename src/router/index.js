import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import about2View from "../views/about2.vue";
import privatlivspolitikView from "../views/privatlivspolitik.vue";
import nemLeasingView from "../views/nemtLeasing.vue";
import nyttigvidenView from "../views/nyttigviden.vue";
import synView from "../views/syn.vue";
import traekView from "../views/traek.vue";
import proeveKoerselView from "../views/proeveKoersel.vue"
import laaneBilView from "../views/laanebil.vue"
import vaerkstederView from "../views/vaerksteder.vue"
import forsikringsPriserView from "../views/forsikringsPriser.vue"

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
    },
    {
      path: "/nem-leasing",
      name: "/nem-leasing",
      component: nemLeasingView,
    },
    {
      path: "/nyttig-viden",
      name: "/nyttig-viden",
      component: nyttigvidenView,
    },
    {
      path: "/syn",
      name: "/syn",
      component: synView,
    },
    {
      path: "/traek",
      name: "/traek",
      component: traekView,
    },
    {
      path: "/proevekoersel",
      name: "/proevekoersel",
      component: proeveKoerselView,
    },
    {
      path: "/laanebil",
      name: "/laanebil",
      component: laaneBilView,
    },
    {
      path: "/vaerksteder",
      name: "/vaerksteder",
      component: vaerkstederView,
    },
    {
      path: "/forsikring-priser",
      name: "/forsikring-priser",
      component: forsikringsPriserView,
    }
  ],
});

export default router;
