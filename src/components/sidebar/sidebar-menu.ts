import {     
    FaBorderAll,
    FaChartBar,
    FaCog,
    FaBell,
    FaInfoCircle
    
} from "react-icons/fa"

const sidebar_menu = [    
    {
        label: 'Dashboard',
        icon: FaBorderAll,
        path: '/dashboard' 
    },
    {
        label: 'Estadística',
        icon: FaChartBar,
        path: '/analytics' 
    },
    {
        label: 'Configuración',
        icon: FaCog,
        path: '/settings'
    },
    {
        label: 'Notificaciones',
        icon: FaBell,      
        path: '/' 
    },
    {
        label: 'Acerca de',
        icon: FaInfoCircle,
        path: '/profile'
    },
]

export default sidebar_menu