import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
    iconfont: 'md'
  })

  createApp(App).use(vuetify).use(router).mount('#app')


