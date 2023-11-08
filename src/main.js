import { createApp } from "vue";

import { router } from "./router";

import * as bootstrap from "bootstrap";
import "./assets/scss/style.scss";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
