import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../views/Users.vue";
import Albums from "../views/Albums.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "users",
    component: Users
  },
  {
    path: "/albums",
    name: "albums",
    component: Albums
  }
];

const router = new VueRouter({
  routes
});

export default router;
