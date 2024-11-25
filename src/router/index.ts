import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/views/Index.vue";
import Admin from "@/views/Admin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ],
})

export default router
