import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '',
      name: 'home',
      component: () => import('@/features/home/views/HomeView.vue'),
    },
    {
      path: 'projects',
      name: 'projects',
      component: () => import('@/features/home/views/ProjectsView.vue'),
    },
      ],
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (from.name == null && to.name !== 'home') {
    next('/')
  } else {
    next()
  }
})

export default router
