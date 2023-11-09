import { createWebHistory, createRouter } from "vue-router";

import Homepage from "../pages/Homepage.vue";
import Portfolio from "../pages/Portfolio.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
    },
    {
      path: "/project-detail/:id",
      name: "project-detail",
      component: ProjectDetail,
    },
  ],
});

export { router };
