import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../views/Users.vue";
import Albums from "../views/Albums.vue";
import UserView from "../views/UserView.vue";
import AlbumView from "../views/AlbumView.vue";

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
  },
  {
    path: "/user/:id",
    name: "user",
    component: UserView
  },
  {
    path: "/album/:id",
    name: "album",
    component: AlbumView
  }
];

const router = new VueRouter({
  routes
});

export default router;
