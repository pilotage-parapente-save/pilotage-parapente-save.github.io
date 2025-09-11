// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MainPage from "@/components/Main.vue";
import Register from "@/components/Register.vue";

const routes = [
  { path: "/", component: Register },
  { path: "/main", component: MainPage, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard global
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next(); // autorisé
      } else {
        next("/"); // redirection login
      }
    });
  } else {
    next();
  }
});

export default router;
