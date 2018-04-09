import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Qnew from './views/Qnew.vue'
import Lsdt from './views/Lsdt.vue'
import We from './views/We.vue'
import Xiangq from './views/Xiangq.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/qnew/:fenlei',
      name: 'qnew',
      component: Qnew
    },
    {
      path: '/lsdt',
      name: 'lsdt',
      component: Lsdt
    },
    {
      path: '/we',
      name: 'we',
      component: We
    },{
      path:'/xiangq/:id',
      name:'xiangq',
      component:Xiangq
    }
  ]
})
