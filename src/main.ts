import Vue from "vue";
import App from "./index";
import router from "./router";
import "vue-tsx-support/enable-check";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
