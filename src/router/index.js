import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/DetailView.vue'
import Create from '../views/CreateView.vue'
import Tag from '../views/TagView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/posts/:id',
    name: 'Detail',
    component: Detail,
    props: true
  },
  {
    path:'/create',
    name: 'Create',
    component: Create
  },
  {
    path:'/tag/:tag',
    name: 'Tag',
    component: Tag,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
