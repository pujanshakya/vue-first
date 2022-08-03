import { createApp } from "vue";
import AppLayout from "./layout/Index.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //...
  ],
});

const app = createApp(AppLayout);
app.use(router);
app.mount("#app");
