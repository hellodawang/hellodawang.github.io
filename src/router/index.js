import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import cropper from '@/components/cropper'
import info from '@/components/info/info'
import board from '@/components/board/board'
import addStory from '@/components/board/addStory'
import defect from '@/components/defect/defect'
import addDefect from '@/components/defect/addDefect'
import risk from '@/components/risk/risk'
import addRisk from '@/components/risk/addRisk'
import editStory from '@/components/board/storyDetail'
import defectInfo from '@/components/defect/defectInfo'
import version from '@/components/version'
import addVersion from '@/components/addVersion'
import require from '@/components/require'
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
      name: 'risk',
      component: risk
    },
    {
      path: '/addDefect',
      name: 'addDefect',
      component: addDefect
    },
    {
      path: '/defectInfo',
      name: 'defectInfo',
      component: defectInfo
    },
    {
      path: '/addRisk',
      name: 'addRisk',
      component: addRisk
    },
    {
      path: '/editStory',
      name: 'editStory',
      component: editStory
    },
    {
      path: '/version',
      name: 'version',
      component: version
    },
    {
      path: '/addVersion',
      name: 'addVersion',
      component: addVersion
    },
    {
      path: '/addStory',
      name: 'addStory',
      component: addStory
    },
    {
      path: '/require',
      name: 'require',
      component: require
    }
  ]
})
