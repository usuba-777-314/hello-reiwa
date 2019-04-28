import Vue from "vue";
import VueRouter from "vue-router";

import Version1 from "@/views/Version1";
import Version2 from "@/views/Version2";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: {name: "Ver2"}
    },
    {
      path: "/1",
      name: "Ver1",
      component: Version1
    },
    {
      path: "/2",
      name: "Ver2",
      component: Version2
    }
  ]
});
