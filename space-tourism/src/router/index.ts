import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';  // Exemplo de importação de um componente de página

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // Lazy-load do componente quando a rota for acessada
    component: () => import('')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;