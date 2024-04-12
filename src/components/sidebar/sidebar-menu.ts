import {     
    FaBorderAll,
    FaChartBar,
    FaCog,
    FaHome,
    FaInfoCircle,
} from "react-icons/fa"

const sidebar_menu = [   
    {
        label: 'Inicio',
        icon: FaHome,
        path: '/'
    }, 
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
        label: 'Acerca de',
        icon: FaInfoCircle,
        path: '/about'
    },
]

export default sidebar_menu