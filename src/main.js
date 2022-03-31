import { createApp } from "vue";
import App from "./App.vue";
import Vue from "vue";

createApp(App).mount("#app");

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
});
Vue.filter("toUpperCase()", function (value) {
  return value.toUpperCase();
});
