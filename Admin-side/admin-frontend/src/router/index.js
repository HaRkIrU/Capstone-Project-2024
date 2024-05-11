import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardComponent.vue')
  },
  {
    path: '/Patient Management',
    name: 'Patient Management',
    component: () => import('../views/PatientManagement.vue')
  },
  {
    path: '/New Patient',
    name: 'New Patient',
    component: () => import('../views/NewPatient.vue')
  },
  {
    path: '/Old Patient',
    name: 'Old Patient',
    component: () => import('../views/OldPatient.vue')
  },
  {
    path: '/Queue',
    name: 'Queue',
    component: () => import('../views/QueueManagement.vue')
  },
  {
    path: '/History',
    name: 'History',
    component: () => import('../views/HistoryComponent.vue')
  },
  {
    path: '/Analytics',
    name: 'Analytics',
    component: () => import('../views/AnalyticsComponent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router