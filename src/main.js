import { createApp } from "vue";
import { createPinia } from "pinia";

import { VueSelect } from "vue-select";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.component("v-select", VueSelect);

app.use(createPinia());
app.use(router);

app.mount("#app");
