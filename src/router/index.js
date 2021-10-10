import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import About from "../view/About.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
  ],
});

export default router;
