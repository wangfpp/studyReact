import Usermanage from '../pages/usermanage/usermanage'; // 用户管理
import Adduser from '../pages/adduser/adduser'; // 新增用户
import Userlist from '../pages/userlist/userlist'; // 用户列表

const userRoutes = [
    {
        name: 'usermanage',
        path: '/usermanage',
        exact: false,
        component: Usermanage,
        routes: [
            {
                name: 'adduser',
                path: '/usermanage/adduser',
                exact: false,
                component: Adduser
            },
            {
                name: 'userlist',
                path: '/usermanage/userlist',
                exact: false,
                component: Userlist
            }
        ]
    }
];
export default userRoutes;