import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from '@formkit/vue'
import { $if, createProPlugin, inputs } from "@formkit/pro";
import { createFloatingLabelsPlugin,createMultiStepPlugin } from '@formkit/addons'
import { generateClasses } from '@formkit/themes'
import '@formkit/addons/css/floatingLabels'
import '@formkit/pro/genesis'
import '@formkit/themes/genesis'
import '@formkit/addons/css/multistep'

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./assets/formkit_custom.css";

import { telephone,email,avatarMan,arrowDown,open } from "@formkit/icons";

const app = createApp(App);
const pro = createProPlugin('fk-548a6cb3d', inputs)
app.use(createPinia());
app.use(router);



app.use(
  plugin,
  defaultConfig({
    config: {
    classes: generateClasses({
      global: {
        label: 'custom-formkit__label',
        decoratorIcon: 'custom-formkit__decorator-icon',
        decorator: 'custom-formkit__decorator',

      },



    }),
    },
    icons: { telephone, email, avatarMan,arrowDown,open,heart: '<svg...' },
    iconLoaderUrl: (iconName) => `https://...`,
    plugins: [pro,createMultiStepPlugin(),
      createFloatingLabelsPlugin({
        useAsDefault: true,
      })]
  })


);

app.mount("#app");
