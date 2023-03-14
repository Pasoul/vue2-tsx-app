export default [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index"),
  },
  {
    path: "/hello",
    name: "hello",
    component: () => import("@/views/hello/index.vue"),
  },
];
