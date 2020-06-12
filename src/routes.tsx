import Layout from './Layout';
import Members from './members/Members';
import Kitchen from './kitchen/Kitchen';

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
      {
        path: '/kitchen',
        exact: true,
        component: Kitchen,
      }
    ],
  },
];

