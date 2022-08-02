import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/sb-admin/vendor/fontawesome-free/css/all.min.css";
import "./assets/sb-admin/css/sb-admin-2.min.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //...
  ],
});

// import "./assets/sb-admin/vendor/jquery/jquery.min.js";
// import "./assets/sb-admin/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "./assets/sb-admin/vendor/jquery-easing/jquery.easing.min.js";
// import "./assets/sb-admin/js/sb-admin-2.min.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
