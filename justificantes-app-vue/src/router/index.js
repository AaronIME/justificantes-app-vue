import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CrearView from '../views/CrearView.vue'
import ReporteView from '../views/ReporteView.vue'
import HistorialView from '../views/HistorialView.vue'
import MaestrosView from '../views/MaestrosView.vue'
import AgregarMaestroView from '../views/AgregarMaestroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/crear',
      name: 'crear',
      component: CrearView
    },
    {
      path: '/reporte',
      name: 'reporte',
      component: ReporteView
    },
    {
      path: '/historial',
      name: 'historial',
      component: HistorialView
    },
    {
      path: '/maestros',
      name: 'maestros',
      component: MaestrosView
    },
    {
      path: '/agregarMaestro',
      name: 'agregarMaestro',
      component: AgregarMaestroView
    }
  ]
})

export default router
