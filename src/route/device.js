import Device from '../pages/devices/devices'; //设备  
import DeviceList from '../pages/devices/devicelist'; // 设备列表
import DeviceDetail from '../pages/devices/devicesdetail'; // 设备详情    
const deviceRoutes = [
    {
        name: '设备管理',
        exact: false,
        path: '/device',
        component: Device,
        routes: [
            {
                name: '设备列表',
                exact: false,
                path: '/device/devicelist',
                component: DeviceList
            },
            {
                name: '设备详情',
                exact: false,
                path: '/device/devicedetail',
                component: DeviceDetail
            }
        ]
    }
];
export default deviceRoutes;