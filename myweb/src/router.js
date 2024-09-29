import { createMemoryHistory, createRouter } from 'vue-router'

import StartSeite from './components/StartSeite.vue'

const routes = [
  { path: '/', component: StartSeite },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router