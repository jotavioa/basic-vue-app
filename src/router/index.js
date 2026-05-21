import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/usuario",
    component: () => import("@/views/sistema/usuario/Usuario.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
