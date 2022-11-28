import { Home, LogOut} from "react-feather"

const iconSize = 18

const sidebarList = [
  {
    id: 1,
    title: "Home",
    icon: <Home size={iconSize} />,
    path: "/admin",
    shop: true
  },
  {
    id: 2,
    title: "Logout",
    icon: <LogOut size={iconSize} />,
    path: "/logout"
  },
]

export { sidebarList }
