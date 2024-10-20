import { createMemoryHistory, createRouter } from 'vue-router'

import StartSeite from './components/StartSeite.vue'
import AboutMe from './components/AboutMe.vue'
import KentNisse from './components/KentNisse.vue'
import kontakt from './components/KontaktSeite.vue'


const routes = [
  { path: '/', component: StartSeite },
  { path: '/about', component: AboutMe },
  { path: '/kenntnisse', component: KentNisse },
  { path: '/kontakt', component: kontakt },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router