import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import cropper from '@/components/cropper'
import info from '@/components/info/info'
import board from '@/components/board/board'
import defect from '@/components/defect/defect'

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
      name: 'cropper',
      component: cropper
    },
    {
      path: '/cost',
      name: 'cropper',
      component: cropper
    },
  ]
})
