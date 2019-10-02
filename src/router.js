import Vue from "vue";
import store from "./store";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Register from "./views/Register.vue";
import SingIn from "./views/Sign_in.vue";
import Discover from "./views/Discover.vue";
import userNewsPage from "./views/userNewsPage.vue";
import Single from "./components/Single.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/signup",
      name: "signup",
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/signin",
      name: "signin",
      component: SingIn,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/discover",
      name: "discover",
      component: Discover
    },
    {
      path: "/yournews",
      name: "yournews",
      component: userNewsPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/post/:id",
      name: "Single",
      component: Single
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      console.log(store.getters.isLoggedIn);
      // if not logged in redirec to the login page
      next("/signin");
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next("/yournews");
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
