import homeRoutes from './home';
import userRoutes from './usermanage'
import testRoutes from './test';
import deviceRoutes from './device';
const routes = [
    ...homeRoutes,
    ...userRoutes,
    ...deviceRoutes,
    ...testRoutes
];

export default routes;