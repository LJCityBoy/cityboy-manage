import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Editor from '../pages/editor'
import Fabu from '../pages/fabu'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/fabu',
      name: 'fabu',
      component: Fabu
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    }
  ]
})
