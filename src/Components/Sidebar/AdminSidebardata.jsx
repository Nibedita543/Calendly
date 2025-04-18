import React from 'react'
import dashboard from '../../assets/dashboard.svg'
import user from '../../assets/user.svg'
import groups from '../../assets/groups.svg'
import { NAVIGATION_ROUTES } from '../../constants/NavigationRoutes'

export const AdminSidebardata = [
  {
    title: "Dashboard",
    icon: <img src={dashboard} />,
    link: NAVIGATION_ROUTES.ADMIN_DASHBOARD,
  },
  {
    title: "User",
    icon: <img src={user} />,
    link:NAVIGATION_ROUTES.ADMIN_USERS,
  },
  {
    title:"Groups",
    icon:<img src={groups}/>,
    link:NAVIGATION_ROUTES.ADMIN_GROUPS
  }
];
