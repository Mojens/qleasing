import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import about2View from "../views/about2.vue";
import privatlivspolitikView from "../views/privatlivspolitik.vue";
import nemLeasingView from "../views/nemtLeasing.vue";
import nyttigvidenView from "../views/nyttigViden.vue";
import synView from "../views/syn.vue";
import traekView from "../views/traek.vue";
import proeveKoerselView from "../views/proeveKoersel.vue"
import laaneBilView from "../views/laanebil.vue"
import vaerkstederView from "../views/vaerksteder.vue"
import forsikringsPriserView from "../views/forsikringsPriser.vue"
import omos from "../views/omos.vue";
import abonnementvilkaarView from "../views/abonnementvilkaar.vue";
import quickleasingView from "../views/quickleasing.vue";
import informationomcookies from "../views/cookiepolitik.vue";
import opbevaringAfOplysningerView from "../views/opbevaringAfOplysninger.vue";
import samtykkeView from "../views/samtykke.vue";
import persondatapolitikView from "../views/persondatapolitik.vue";

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
    },
    {
      path: "/abonnement-vilkaar",
      name: "/abonnement-vilkaar",
      component: abonnementvilkaarView,
    },
    {
      path: "/information-om-cookies",
      name: "/information-om-cookies",
      component: informationomcookies,
    },
    {
      path: "/om-os",
      name: "/om-os",
      component: omos,
    },
    {
      path: "/quickleasing",
      name: "/quickleasing",
      component: quickleasingView,
    },
    {
      path: "/opbevaring-af-dine-oplysninger",
      name: "/opbevaring-af-dine-oplysninger",
      component: opbevaringAfOplysningerView,
    },
    {
      path: "/samtykke",
      name: "/samtykke",
      component: samtykkeView,
    },
    {
      path: "/persondatapolitik",
      name: "/persondatapolitik",
      component: persondatapolitikView,
    }
  ],
});

export default router;
