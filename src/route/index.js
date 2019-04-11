import homeRoutes from './home';
import userRoutes from './usermanage'
import testRoutes from './test';
import deviceRoutes from './device'
import Home from '../pages/home/home'
const routes = [
    ...homeRoutes,
    ...userRoutes,
    ...deviceRoutes,
    ...testRoutes
];

export default routes;