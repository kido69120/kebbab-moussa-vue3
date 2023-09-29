/*  theme /css */
import './assets/css/theme/mbr-additional.css'
import './assets/css/theme/mobirise-icons-bold.css'
import './assets/css/theme/style.css'
/* bootstrap*/
import './assets/css/bootstrap/bootstrap-grid.min.css'
import './assets/css/bootstrap/bootstrap-reboot.min.css'
import './assets/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
