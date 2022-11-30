import { createRouter, createWebHistory } from "vue-router"
import ListRestaurants from "./components/ListRestaurants.vue"
import UserLogin from './components/UserLogin.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'
import UpdateMeny from './components/UpdateMeny.vue'
import TableReservations from './components/TableReservations.vue'

const routes = [
  {
    name: "ListRestaurants",
    component: ListRestaurants,
    path: "/restaurants",
  },
  {
    name: "UserLogin",
    component: UserLogin,
    path: "/login",
  },
  {
    name: "AddRestaurant",
    component: AddRestaurant,
    path: "/add",
  },
  {
    name: "UpdateRestaurant",
    component: UpdateRestaurant,
    path: "/update/:id",
  },
  {
    name: "UpdateMeny",
    component: UpdateMeny,
    path: "/meny",
  },
  {
    name: "TableReservations",
    component: TableReservations,
    path: "/reservations",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
