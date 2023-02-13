import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from '@formkit/vue'
import { createFloatingLabelsPlugin } from '@formkit/addons'
import '@formkit/addons/css/floatingLabels'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { telephone,email,avatarMan,arrowDown,open } from "@formkit/icons";

const app = createApp(App);
app.component("v-select", vSelect);

app.use(createPinia());
app.use(router);
app.use(
  plugin,
  defaultConfig({
    theme: 'genesis',
    icons: { telephone, email, avatarMan,arrowDown,open,heart: '<svg...' },
    iconLoaderUrl: (iconName) => `https://...`,
    plugins: [
      createFloatingLabelsPlugin({
        useAsDefault: true,
      })
    ]
  })
);

app.mount("#app");
