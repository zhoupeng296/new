import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)


export default new VueRouter({
  routes:[
    {path: '/',component: Main},
    {path: '/history',component: () => import('../views/History.vue')},
    {path: '/myhome',component: () => import('../views/Myhome.vue')}
  ]
})
