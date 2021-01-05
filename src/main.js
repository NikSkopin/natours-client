import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// import '../public/css/style.css';
import '../public/scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
