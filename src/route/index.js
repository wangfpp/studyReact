import homeRoutes from './home';
import userRoutes from './usermanage'
const routes = [
    ...homeRoutes,
    ...userRoutes
];

export default routes;