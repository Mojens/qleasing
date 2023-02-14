import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'
import { createFloatingLabelsPlugin } from '@formkit/addons'
import '@formkit/addons/css/floatingLabels'
import '@formkit/pro/genesis'
import '@formkit/themes/genesis'


import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { telephone,email,avatarMan,arrowDown,open } from "@formkit/icons";

const app = createApp(App);
const pro = createProPlugin('fk-548a6cb3d', inputs)
app.use(createPinia());
app.use(router);



app.use(
  plugin,
  defaultConfig({

    icons: { telephone, email, avatarMan,arrowDown,open,heart: '<svg...' },
    iconLoaderUrl: (iconName) => `https://...`,
    plugins: [pro,
      createFloatingLabelsPlugin({
        useAsDefault: true,
      })]
  })


);

app.mount("#app");
