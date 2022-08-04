import { RouteRecordRaw } from "vue-router";
import Cards from "../pages/Cards.vue";
import Buttons from "../pages/Buttons.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/cards",
    name: "Cards",
    component: Cards,
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: Buttons,
  },
];
