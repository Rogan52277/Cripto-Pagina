// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

import { createVuetify } from 'vuetify'
import * as directives from 'vuetify/directives'
import * as components from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import "./assets/css/tailwind.css" // Cargar estilos de Tailwind globalmente
import 'vue3-toastify/dist/index.css'

// Crear instancia de Vuetify con configuración del tema
const vuetify = createVuetify({
  directives,
  components,
})

// Crear la aplicación
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount("#app")
