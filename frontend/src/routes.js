import React from "react";

export const routes = [
  {
    path: "/",
    name: "HomePage",
    component: React.lazy(() => import("./pages/HomePage/HomePage")),
    exact: true,
  },
  {
    path: "/product/:id",
    name: "ProductPage",
    component: React.lazy(() => import("./pages/ProductPage/ProductPage")),
    exact: false,
  },
  {
    path: "/cart/:id?",
    name: "CartPage",
    component: React.lazy(() => import("./pages/CartPage/CartPage")),
    exact: false,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: React.lazy(() => import("./pages/LoginPage/LoginPage")),
    exact: false,
  },
];
