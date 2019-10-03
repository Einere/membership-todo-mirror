import Vue from 'vue';
import Router from 'vue-router';
import NormalLayout from './views/NormalView.vue';
import NormalHomeRouter from './components/normal/HomeRouter.vue';
import LogInRouter from './components/normal/LogInRouter.vue';
import SignUpRouter from './components/normal/SignUpRouter.vue';
import AdminLayout from './views/AdminView.vue';
import AdminHomeRouter from './components/admin/HomeRouter.vue';
import AdminUsersRouter from './components/admin/UsersRouter.vue';
import AdminItemsRouter from './components/admin/ItemsRouter.vue';
import TodoRouter from './components/normal/TodoRouter.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'normalLayout',
      component: NormalLayout,
      redirect: {
        name: 'normalHome',
      },
      children: [
        {
          path: 'home',
          name: 'normalHome',
          component: NormalHomeRouter,
        },
        {
          path: 'logIn',
          name: 'normalLogIn',
          component: LogInRouter,
        },
        {
          path: 'signUp',
          name: 'normalSignUp',
          component: SignUpRouter,
        },
        {
          path: 'todo',
          name: 'normalTodo',
          component: TodoRouter,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/admin',
      name: 'adminLayout',
      component: AdminLayout,
      redirect: {
        name: 'adminHome',
      },
      children: [
        {
          path: 'home',
          name: 'adminHome',
          component: AdminHomeRouter,
        },
        {
          path: 'users',
          name: 'adminUsers',
          component: AdminUsersRouter,
        },
        {
          path: 'items',
          name: 'adminItems',
          component: AdminItemsRouter,
        },
      ],
    },
  ],
});
