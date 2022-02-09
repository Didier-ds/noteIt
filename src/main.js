import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.prod.css';
import quasarUserOptions from './quasar-user-options'
createApp(App).use(Quasar, quasarUserOptions).mount('#app')