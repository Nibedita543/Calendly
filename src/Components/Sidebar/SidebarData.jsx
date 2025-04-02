import React from "react";
import {
  AiOutlineCrown,
  AiOutlineDollarCircle,
  AiOutlineLink,
} from "react-icons/ai";
import { CiRoute } from "react-icons/ci";
import { GrAppsRounded } from "react-icons/gr";
import { HiOutlineClock } from "react-icons/hi";
import { IoIosHelpCircleOutline, IoMdContacts } from "react-icons/io";
import { PiShareNetworkBold } from "react-icons/pi";
import { RiCalendar2Line } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";

export const SidebarData = [
  {
    title: "Event Types",
    icon: <AiOutlineLink style={{ fontSize: "20px" }} />,
    link: "/event-types",
  },
  {
    title: "Meetings",
    icon: <RiCalendar2Line style={{ fontSize: "20px" }} />,
    link: "/meeting",
  },
  {
    title: "Availability",
    icon: <HiOutlineClock style={{ fontSize: "20px" }} />,
    link: "/availability"
  },
  { title: "Contacts", icon: <IoMdContacts style={{ fontSize: "20px" }} />,
     link: "/contacts" 
  },
  {
    title: "Workflow",
    icon: <PiShareNetworkBold style={{ fontSize: "20px" }} />,
    link: "/workflow",
  },
  {
    title: "Integrations & apps",
    icon: <GrAppsRounded style={{ fontSize: "20px" }} />,
    link: "/integration&apps",
  },
  { title: "Routing", icon: <CiRoute style={{ fontSize: "20px" }} />, 
    link: "/routing",
  },
  {
    title: "Upgrade plan",
    icon: 
      <AiOutlineDollarCircle style={{ color: "#0069FF", fontSize: "20px" }} />,
      link: "/upgradeplan"
  },
  {
    title: "Analytics",
    icon: <SiGoogleanalytics style={{ fontSize: "20px" }} />,
    link:"/analytics"
  },
  {
    title: "Admin center",
    icon: <AiOutlineCrown style={{ fontSize: "20px" }} />,
    link: "/admincenter"
  },
  // {
  //   title: "Help",
  //   icon: <IoIosHelpCircleOutline style={{ fontSize: "20px" }} />,
  // },
];
