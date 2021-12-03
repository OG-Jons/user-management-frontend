import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AuthInput from "../views/AuthInput.vue";
import VueCookies from "vue-cookies";
import UserManagement from "@/views/UserManagement.vue";

Vue.use(VueRouter);
Vue.use(VueCookies);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: UserManagement,
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthInput,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // Open the Login Page if not logged in
  const allowedPages = ["/auth"];
  const authRequired = !allowedPages.includes(to.path);

  if (authRequired && !Vue.$cookies.get("token")) {
    return next("/auth");
  }

  if (allowedPages.includes(to.path) && Vue.$cookies.get("token")) {
    return next("/");
  }

  next();
});

export default router;
