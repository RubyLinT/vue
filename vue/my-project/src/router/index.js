import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import rowCol from '@/components/rowCol'
import forV from '@/components/forV'
import cascader from '@/components/cascader';
import formV from '@/components/form';
import tableV from '@/components/tableV'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/test', name: 'test', component: test },
    { path: '/rowCol', name: 'rowCol', component: rowCol },
    { path: '/forV', name: 'forV', component: forV },
    {path:'/cascader',name:'casc',component:cascader},
    {path:'/form',name:'form',component:formV},
    {path:'/tableV',name:'tableV',component:tableV},
  ]
})