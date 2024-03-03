import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '@/App.vue'
import MainIntroduce from '@/views/MainPage/MainIntroduce.vue'
import StoreMainPage from '@/views/StoresPage/StoreMainPage.vue'
import EmployeesMainPage from '@/views/EmployeesPage/EmployeesMainPage.vue'
import ReviewMainPage from '@/views/ReviewPage/ReviewMainPage.vue'
import CalculateMainPage from '@/views/CalculatePage/CalculateMainPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeApp
  },   
  {
    path: '/main',
    name: 'MainIntro',
    component: MainIntroduce
  },
  // {
  //   path: "/:catchAll(.*)",
  //   component: NotFound
  // },
  // {
  //   path: '/main',
  //   name: 'main',
  //   component: () => import('@/views/mainpage/01MainPage.vue')
  // },
  // user 경로 추가 : start
  {
    path: '/stores',
    name: 'Store',
    component: StoreMainPage
    // path: '/store',
    // name: 'store',
    // component: () => import('@/views/example/02ConditionNumber.vue'), 
    // children: [
    //     { path: 'InputForm',        component: () => import('@/views/example/01InputForm.vue') },
    //   ]
  }, 
  {

    path: '/employees',
    name: 'Employees',
    component: EmployeesMainPage
    // path: '/employees',
    // name: 'employee',
    // component: () => import('@/views/example/03ToggleColor.vue')
    // children: [
    //     { path: 'InputForm',        component: () => import('@/views/example/01InputForm.vue') },
    //   ]
  }, 
  {
    path: '/review',
    name: 'Review',
    component: ReviewMainPage
    // path: '/review',
    // name: 'review',
    // component: () => import('@/views/example/04SortSearch.vue')
    // children: [
    //     { path: 'InputForm',        component: () => import('@/views/example/01InputForm.vue') },
    //   ]
  }, 
  {
    path: '/calculate',
    name: 'Calculate',
    component: CalculateMainPage
    // path: '/calculate',
    // name: 'calculate',
    // component: () => import('@/views/example/05CRUD.vue')
    // children: [
    //     { path: 'InputForm',        component: () => import('@/views/example/01InputForm.vue') },
    //   ]
  }, 
  {
    path: '/account',
    name: 'Account',
    component: EmployeesMainPage
  },
  {
    path: '/listboard',
    name: 'listboard',
    component: () => import('@/views/example/06ListBoard.vue')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('@/views/user/UserDetailView.vue')
  }, // user 경로 추가 : end      
  { 
    path: "/example",  
    component: () => import('@/views/example/ExampleHome.vue'), 
    children: [
        { path: 'InputForm',        component: () => import('@/views/example/01InputForm.vue') },
        { path: 'ConditionNumber',  component: () => import('@/views/example/02ConditionNumber.vue') },
        { path: 'ToggleColor',      component: () => import('@/views/example/03ToggleColor.vue') },
        { path: 'SortSearch',       component: () => import('@/views/example/04SortSearch.vue') },
        { path: 'CRUD',             component: () => import('@/views/example/05CRUD.vue') },
        { path: 'BasicBinding',     component: () => import('@/views/example/Basic01Binding.vue') },
        { path: 'BasicClick',       component: () => import('@/views/example/Basic02Click.vue') },
        { path: 'BasicMethods',     component: () => import('@/views/example/Basic03Methods.vue') }      
    ]
  } ,
  // { 
  //   path: "/exam/:id",  
  //   name: 'exam',
  //   component: () => import('@/views/example/:id.vue')
  // } ,  
  // { path : '/example', redirect: '/example/inputForm' },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
