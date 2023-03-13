import { createApp, createSSRApp } from "vue";

import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { createHead } from "@vueuse/head";
import "./assets/base.css";
import "./assets/tailwind.css";
const app = createSSRApp(App);

app.use(createPinia());
app.use(createHead());
app.use(router);

app.mount("#app");
