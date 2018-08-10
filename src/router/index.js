import Vue from 'vue'
import Router from 'vue-router'
import Orientation from '@/orientation/Orientation'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
  },{
      path: '/orientations',
      name: 'Orientation',
      component: Orientation
  }]
})
