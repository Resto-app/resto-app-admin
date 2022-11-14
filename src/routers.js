import Home from "./components/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import Meny from './components/Meny.vue'
import Booking from './components/Booking.vue'

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
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
    name: "Booking",
    component: Booking,
    path: "/booking",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
