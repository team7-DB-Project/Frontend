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
  {
    path: '/stores',
    name: 'Store',
    component: StoreMainPage
  },
  {
    path: '/employees',
    name: 'Employees',
    component: EmployeesMainPage
  },
  {
    path: '/review',
    name: 'Review',
    component: ReviewMainPage
  },
  {
    path: '/calculate',
    name: 'Calculate',
    component: CalculateMainPage
  },
  {
    path: '/account',
    name: 'Account',
    component: EmployeesMainPage
  }, // user 경로 추가 : end      
  // { 
  //   path: "/exam/:id",  
  //   name: 'exam',
  //   component: () => import('@/views/example/:id.vue')
  // } ,  
  // { path : '/example', redirect: '/example/inputForm' },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
