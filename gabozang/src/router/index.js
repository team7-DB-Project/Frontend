import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/components/common/NotFound.vue'


const routes = [

  {
    path: '/',
    name: 'home',
    component: () => import('@/views/mainpage/MainIntroduce.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/mainpage/MainIntroduce.vue')
  },
  // user 경로 추가 : start
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/storepage/01StorePage.vue'),
  },
  {
    path: '/store/:id',
    name: 'id',
    component: () => import('@/views/storepage/GetStore.vue'),
    props: true, // 이를 통해 :id 값을 컴포넌트의 props로 전달합니다.
  },
  {
    path: '/store/add',
    name: 'addstore',
    component: () => import('@/views/storepage/AddStore.vue'), // 이를 통해 :id 값을 컴포넌트의 props로 전달합니다.
  },
  {
    path: '/employee',
    name: 'employee',
    component: () => import('@/views/emppage/01EmpPage.vue')
  },
  {
    path: '/employee/:employeeId',
    name: 'employeeId',
    component: () => import('@/views/emppage/GetEmp.vue'),
    props: true, // 이를 통해 :id 값을 컴포넌트의 props로 전달합니다.
  },
  {
    path: '/employee/add',
    name: 'addemp',
    component: () => import('@/views/emppage/AddEmp.vue'), // 이를 통해 :id 값을 컴포넌트의 props로 전달합니다.
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('@/views/reviewpage/01ReviewPage.vue'),
    children: [
      { path: 'addreview', component: () => import('@/views/reviewpage/addReview.vue') },
      { path: 'getreview', component: () => import('@/views/reviewpage/getReview.vue') },
      { path: 'getsinglervid', component: () => import('@/views/reviewpage/getSingleRvID.vue') },
      { path: 'getsinglervst', component: () => import('@/views/reviewpage/getSingleRvSt.vue') },
      { path: 'reviewbymonth', component: () => import('@/views/reviewpage/reviewByMonth.vue') },
      { path: 'reviewbydate', component: () => import('@/views/reviewpage/reviewByDate.vue') },
      { path: 'rating', component: () => import('@/views/reviewpage/reviewRating.vue') },
      { path: 'countbyrating', component: () => import('@/views/reviewpage/countByRating.vue') }
    ]
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('@/views/paymenthistory/01PaymentPage.vue')
  }, {
    path: '/paymenthistory/add',
    name: 'addpaymenthistory',
    component: () => import('@/views/paymenthistory/AddPayment.vue')
  },
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
