import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from './guards/authGuard'

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
      path: '/login',
      component: () => import('@/layouts/LoginLayout.vue'),
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('@/features/login/views/LoginView.vue'),
        },
      ],
    },
    {
      path: '/admin',
      component: () => import('@/layouts/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: () => import('@/features/admin/views/AdminHomeView.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  if (to.meta?.requiresAuth as boolean) {
    if (await isAuthenticated()) {
      next()
    } else {
      next({ name: 'login', query: { redirect: to.fullPath } })
    }
  }

  if (from.name == null && to.name !== 'home' && to.name !== 'login') {
    next('/')
  } else {
    next()
  }
})

export default router
