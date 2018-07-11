import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import cropper from '@/components/cropper'
import info from '@/components/info/info'
import board from '@/components/board/board'
import defect from '@/components/defect/defect'
import addDefect from '@/components/defect/addDefect'
import risk from '@/components/risk/risk'
import addRisk from '@/components/risk/addRisk'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'info',
      component: info
    },
    {
      path: '/cropper',
      name: 'cropper',
      component: cropper
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/board',
      name: 'board',
      component: board
    },
    {
      path: '/defect',
      name: 'defect',
      component: defect
    },
    {
      path: '/risk',
      name: 'risk',
      component: risk
    },
    {
      path: '/cost',
      name: 'cropper',
      component: cropper
    },
    {
      path: '/addDefect',
      name: 'addDefect',
      component: addDefect
    },
    {
      path: '/addRisk',
      name: 'addRisk',
      component: addRisk
    },
  ]
})
