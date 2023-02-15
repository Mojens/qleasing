import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import privatlivspolitikView from "../views/vilkaarViews/privatlivspolitik.vue";
import nemLeasingView from "../views/oevrigInfoViews/nemLeasing.vue";
import nyttigvidenView from "../views/oevrigInfoViews/nyttigViden.vue";
import synView from "../views/oevrigInfoViews/syn.vue";
import traekView from "../views/oevrigInfoViews/traek.vue";
import proeveKoerselView from "../views/oevrigInfoViews/proeveKoersel.vue"
import laaneBilView from "../views/oevrigInfoViews/laanebil.vue"
import vaerkstederView from "../views/vaerksteder.vue"
import forsikringsPriserView from "../views/forsikringsPriser.vue"
import omos from "../views/oevrigInfoViews/omos.vue";
import abonnementvilkaarView from "../views/vilkaarViews/abonnementvilkaar.vue";
import quickleasingView from "../views/quickleasing.vue";
import informationomcookies from "../views/vilkaarViews/cookiepolitik.vue";
import opbevaringAfOplysningerView from "../views/vilkaarViews/opbevaringAfOplysninger.vue";
import samtykkeView from "../views/vilkaarViews/samtykke.vue";
import persondatapolitikView from "../views/vilkaarViews/persondatapolitik.vue";
import faqView from "@/views/faqViews/faq.vue";
import oprettelseAfhentningView from "../views/faqViews/oprettelseAfhentning.vue";
import hvorforQuickleasingView from "../views/faqViews/hvorforQuickleasing.vue";
import opsigelseTilbageleveringView from "../views/faqViews/opsigelseTilbagelevering.vue";
import listeOverPriserView from "../views/faqViews/listeOverPriser.vue";
import faqForsikringView from "../views/faqViews/faqForsikring.vue";
import afleveringsforsikringView from "@/views/vilkaarViews/afleveringsforsikring.vue";
import vinterhjulView from "@/views/faqViews/vinterhjul.vue";
import serviceView from "@/views/faqViews/service.vue";
import kilometerView from "@/views/faqViews/kilometer.vue";
import opladningElbilerView from "@/views/faqViews/opladningElbiler.vue";
import skadeVejhjaelpView from "@/views/faqViews/skadeVejhjaelp.vue";
import vejhjaelpView from "@/views/faqViews/vejhjaelp.vue";
import ovrigSporgsmalView from "@/views/faqViews/ovrigSporgsmal.vue";
import saelgBrugtBilView from "@/views/faqViews/saelgBrugtBil.vue";
import parkeringView from "@/views/faqViews/parkering.vue";
import indholdPaaSidenView from "@/views/vilkaarViews/indholdPaaSiden.vue";
import samarbejdspartnereView from "@/views/vilkaarViews/samarbejdspartnere.vue";
import kontaktosView from "@/views/kontaktos.vue";
//import autocompleteTest from "@/views/autocompleteTest.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
    },
    {
      path: "/faq/vejhjaelp",
      name: "/faq/vejhjaelp",
      component: vejhjaelpView,
    },
    {
      path: "/faq/ovrige-sporgsmal",
      name: "/faq/ovrige-sporgsmal",
      component: ovrigSporgsmalView,
    },
    {
      path: "/faq/saelg-din-brugte-bil",
      name: "/faq/saelg-din-brugte-bil",
      component: saelgBrugtBilView,
    },
    {
      path: "/faq/parkering",
      name: "/faq/parkering",
      component: parkeringView,
    },
    {
      path: "/indhold-pa-siden",
      name: "/indhold-pa-siden",
      component: indholdPaaSidenView,
    },
    {
      path: "/samarbejdspartnere",
      name: "/samarbejdspartnere",
      component: samarbejdspartnereView,
    },
    {
      path: "/kontakt",
      name: "/kontakt",
      component: kontaktosView,
    },
    /*
    {
      path: "/autocomplete",
      name: "/autocomplete",
      component: autocompleteTest,
    }
*/
  ],
});

export default router;
