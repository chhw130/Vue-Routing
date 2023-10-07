import { createApp } from 'vue';

import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import Notfound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      component: TeamsList,
      alias: '/',
      children: [
        {
          name: 'teamMembers',
          path: ':id',
          component: TeamMembers,
          props: true,
        },
      ],
    },

    {
      path: '/users',
      component: UsersList,
    },
    {
      path: '/:notFound(.*)',
      component: Notfound,
    },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
