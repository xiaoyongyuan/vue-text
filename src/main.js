import Vue from 'vue'
import App from './App.vue';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { Button } from 'element-ui';
import router from "./router/index";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
