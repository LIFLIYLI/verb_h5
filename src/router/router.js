import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page from '@/page/page'
import index from '@/index/index'

import leancloud from '@/index/destail/leancloud'     //这是一种写法，下面可以直接写在内部
import info from '@/index/info/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:index,
      children:[
        {path:'leancloud',component:leancloud},
        {path:'qiniu',component:()=>import('@/index/destail/qiniu')},
        {path:'info',component:info},
        {path:'system',component:()=>import('@/index/system/systemList')},
        {path:'amuse',component:()=>import('@/index/index/amuse')},
        {path:'startname',name:'startname',component:()=>import('@/index/index/startname')},
        {path:'film',name:'film',component:()=>import('@/index/index/film_works')},
        {path:'cafe',name:'cafe',component:()=>import('@/index/index/cafe')},
        {path:'animation',name:'animation',component:()=>import('@/index/index/animation')},
        {path:'/',name:'works',component:()=>import('@/index/info/works')},
        {path:'/moneylist',name:'moneylist',component:()=>import('@/index/info/moneylist')},
        {path:'/team',name:'team',component:()=>import('@/index/community/team')}
      ]
    },
    {
      path: '/he',
      name: 'HelloWor',
      component: HelloWorld,
    },
    {
      path: '/page',
      name: 'pages',
      component: page,

    }
  ]
})
