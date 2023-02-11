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
import faqView from "../views/faq.vue";
import oprettelseAfhentningView from "../views/oprettelseAfhentning.vue";
import hvorforQuickleasingView from "../views/hvorforQuickleasing.vue";
import opsigelseTilbageleveringView from "../views/opsigelseTilbagelevering.vue";
import listeOverPriserView from "../views/listeOverPriser.vue";
import faqForsikringView from "@/views/faqForsikring.vue";
import afleveringsforsikringView from "@/views/afleveringsforsikring.vue";
import vinterhjulView from "@/views/vinterhjul.vue";
import serviceView from "@/views/service.vue";
import kilometerView from "@/views/kilometer.vue";
import opladningElbilerView from "@/views/opladningElbiler.vue";
import skadeVejhjaelpView from "@/views/skadeVejhjaelp.vue";


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
    },
    {
      path: "/afleveringforsikring",
      name: "/afleveringforsikring",
      component: afleveringsforsikringView,
    },
    {
      path: "/faq",
      name: "/faq",
      component: faqView,
    },
    {
      path: "/faq/oprettelse-afhentning",
      name: "/faq/oprettelse-afhentning",
      component: oprettelseAfhentningView,
    },
    {
      path: "/faq/hvorfor-quickleasing",
      name: "/faq/hvorfor-quickleasing",
      component: hvorforQuickleasingView,
    },
    {
      path: "/faq/opsigelse-og-tilbagelevering",
      name: "/faq/opsigelse-og-tilbagelevering",
      component: opsigelseTilbageleveringView,
    },
    {
      path: "/faq/liste-over-priser",
      name: "/faq/liste-over-priser",
      component: listeOverPriserView,
    },
    {
      path: "/faq/forsikring",
      name: "/faq/forsikring",
      component: faqForsikringView,
    },
    {
      path: "/faq/vinterdaek",
      name: "/faq/vinterdaek",
      component: vinterhjulView,
    },
    {
      path: "/faq/service",
      name: "/faq/service",
      component: serviceView,
    },
    {
      path: "/faq/kilometer",
      name: "/faq/kilometer",
      component: kilometerView,
    },
    {
      path: "/faq/opladning-til-el-hybridbiler",
      name: "/faq/opladning-til-el-hybridbiler",
      component: opladningElbilerView,
    },
    {
      path: "/faq/skade-og-vejhjaelp",
      name: "/faq/skade-og-vejhjaelp",
      component: skadeVejhjaelpView,
    }

  ],
});

export default router;
