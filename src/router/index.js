import cart from '@/views/cart/cart.vue'
import category from '@/views/category/category.vue'
import content from '@/views/category/components/content.vue'
import home from '@/views/home/home.vue'
import my from '@/views/my/my.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/my', component: my },
    { path: '/home', component: home },
    {
      path: '/category',
      component: category,
      redirect: '/category/content',
      children: [{ path: 'content', component: content }]
    },
    { path: '/cart', component: cart }
  ]
})

export default router
