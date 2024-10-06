import { createMemoryHistory, createRouter } from 'vue-router'

import StartSeite from './components/StartSeite.vue'
import AboutMe from './components/AboutMe.vue'

const routes = [
  { path: '/', component: StartSeite },
  { path: '/about', component: AboutMe },

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router