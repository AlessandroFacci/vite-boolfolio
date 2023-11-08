import { createWebHistory, createRouter } from "vue-router";

import Homepage from "../pages/Homepage.vue";
import Portfolio from "../pages/Portfolio.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      patch: "/",
      name: "homepage",
      component: Homepage,
    },
    {
      patch: "/portfolio",
      name: "portfolio",
      component: Portfolio,
    },
  ],
});

export { router };
