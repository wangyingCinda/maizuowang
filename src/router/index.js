
import Vue from 'vue'  //es6倒入方式
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '../components/home'
import film from '../components/film'
import detail from '../components/detail'
import willFilm from '../components/willFilm'
import nowfilm from '../components/nowfilm'
import willDetail from '../components/willDetail'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:"/home",
      component:home
    },
    {
    	path:"/film",
    	component:film,
      children:[
        {
          path:'nowfilm',
          component:nowfilm
        },
        {
          path:'willFilm',
          component:willFilm
        },
        {
          path:"/",
          redirect:'/film/nowfilm'
        }
      ]
    },
    {
    	path:"/detail/:id",
    	component:detail
    },
    {
      path:"*",
      component:home
    },
    {
      path:"/willDetail",
      component:willDetail
    }

  ]
})

