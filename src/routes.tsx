import Layout from './Layout';
import Members from './members/Members';

export const routes = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Members,
      },
      {
        path: '/members',
        exact: true,
        component: Members,
      },
    ],
  },
];

