import { createRouter, createWebHistory } from "vue-router";
// import HomeComp from "./components/HomeComp.vue";
// import OfficeComp from "./components/OfficeComp.vue";

import HomePage from "./components/loginform/HomePage.vue";
import LoginPage from "./components/loginform/LoginPage.vue";
import SignupPage from "./components/loginform/SignupPage.vue";
import ProductsPage from "./components/loginform/ProductsPage.vue";

let router = createRouter({
  history: createWebHistory(),
  // routes: [
  //   {
  //     path: "/home",
  //     component: HomeComp,
  //   },
  //   {
  //     path: "/office",
  //     component: OfficeComp,
  //   },
  // ],
  routes: [
    {
      path: "/home",
      component: HomePage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/signup",
      component: SignupPage,
    },
    {
      path: "/products",
      component: ProductsPage,
    },
  ],
});
export default router;
