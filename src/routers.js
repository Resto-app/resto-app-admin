import Restaurants from "./components/Restaurants.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import Meny from './components/Meny.vue'
import Reservation from './components/Reservation.vue'

const routes = [
  {
    name: "Restaurants",
    component: Restaurants,
    path: "/restaurants",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "Add",
    component: Add,
    path: "/add",
  },
  {
    name: "Update",
    component: Update,
    path: "/update/:id",
  },
  {
    name: "Meny",
    component: Meny,
    path: "/meny",
  },
  {
    name: "Reservation",
    component: Reservation,
    path: "/reservation",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
