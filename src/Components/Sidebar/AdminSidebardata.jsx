import React from 'react'
import dashboard from '../../assets/dashboard.svg'
import user from '../../assets/user.svg'
import login from '../../assets/login.svg'
import groups from '../../assets/groups.svg'
import bill from '../../assets/bill.svg'
import security from '../../assets/security.svg'
import permission from '../../assets/permission.svg'
import manageevents from '../../assets/manageevents.svg'
import workflow from '../../assets/workflow.svg'
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
    link: NAVIGATION_ROUTES.ADMIN_USERS,
  },
  {
    title: "Groups",
    icon: <img src={groups} />,
    link: NAVIGATION_ROUTES.ADMIN_GROUPS,
  },
  {
    title: "Login",
    icon: <img src={login} />,
    link: NAVIGATION_ROUTES.LoggingIn,
  },
  {
    title: "Billing",
    icon: <img src={bill} />,
    link: NAVIGATION_ROUTES.billing,
  },
  {
    title: "Security",
    icon: <img src={security} />,
    link: NAVIGATION_ROUTES.security,
  },
  {
    title: "Permission",
    icon: <img src={permission} />,
    link: NAVIGATION_ROUTES.permission,
  },
  {
    title: "Manage Events",
    icon: <img src={manageevents} />,
    link: NAVIGATION_ROUTES.manageevents,
  },
  {
    title: "Managed Workflow",
    icon: <img src={workflow}/>,
    link: NAVIGATION_ROUTES.manageworkflow,
  },
];
