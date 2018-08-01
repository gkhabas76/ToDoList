import Vue from 'vue'
import Router from 'vue-router'
import Notes from './components/Notes.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'notes',
      component: Notes
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
