// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' // si lo tienes separado

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
