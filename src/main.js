import { createApp } from "vue";
import { definePreset } from "@primeuix/themes";
import { createPinia } from "pinia";

import App from "./App.vue";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import pt_BR from "./locale";
import router from "@/router/index";

import "primeicons/primeicons.css";

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);

const ThemePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{lime.50}",
      100: "{lime.100}",
      200: "{lime.200}",
      300: "{lime.300}",
      400: "{lime.400}",
      500: "{lime.500}",
      600: "{lime.600}",
      700: "{lime.700}",
      800: "{lime.800}",
      900: "{lime.900}",
      950: "{lime.950}",
    },
  },
});

app.use(PrimeVue, {
  theme: {
    preset: ThemePreset,
  },
  locale: pt_BR,
});

app.mount("#app");
