import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import {
  FaChrome,
  FaEdge,
  FaFacebook,
  FaFacebookF,
  FaFirefoxBrowser,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import policyimg from "../assets/privacy-policy.svg";
import AppleLogo from "../assets/AppleLogo.svg";
import Firefox from "../assets/Firefox.svg";
import GooglePlaystore from "../assets/Google-playstore.svg";
import GoogleChrome from "../assets/GoogleChrome.svg";
import MicrosoftEdge from "../assets/Microsoft-edge.svg";
import outlook from "../assets/outlook.svg";

export const FooterData = [
  {
    title: "Features",
    links: [
      "Scheduling automation",
      "Customizable availability",
      "Mobile apps",
      "Browser extensions",
      "Meeting routing",
      "Event Types",
      "Email & website embeds",
      "Reminders & follow-ups",
      "Meeting polls",
      "Analytics",
      "Admin management",
    ],
  },
  {
    title: "Integrations",
    links: [
      "Google ecosystem",
      "Microsoft ecosystem",
      "Calendars",
      "Video conferencing",
      "Payments",
      "Sales & CRM",
      "Recruiting & ATS",
      "Email messaging",
      "Embed Calendly",
      "Analytics",
      "API & connectors",
      "Security & compliance",
    ],
  },
  {
    title: "Calendly",
    links: [
      "Pricing",
      "Product overview",
      "Solutions",
      "For individuals",
      "For small businesses",
      "For enterprise",
      "Compare",
      "Security",
      "Sign up for free",
      "Talk to sales",
      "Get a demo",
    ],
  },
  {
    title: "Resources",
    links: [
      "Help center",
      "Resource center",
      "Blog",
      "Customer stories",
      "Calendly community",
      "Developer tools",
    ],
  },
  {
    title: "Company",
    links: [
      "About us",
      "Leadership",
      "Career",
      "Newsroom",
      "Become a partner",
      "Contact us",
    ],
    careers: { text: "Careers", badge: "We're hiring!" }, // Special case for Careers with a badge
  },
];

export const footerbtns = [
  {
    label: "App Store",
    icon: AppleLogo,
    bgColor: "#F0F7FF",
  },
  {
    label: "Google Play",
    icon: GooglePlaystore,
    bgColor: "#F0F7FF",
  },
  {
    label: "Chrome extension",
    icon: GoogleChrome,
    bgColor: "#F0F7FF",
  },
  {
    label: "Edge extension",
    icon: MicrosoftEdge,
    bgColor: "#F0F7FF",
  },
  {
    label: "Firefox extension",
    icon: Firefox,
    bgColor: "#F0F7FF",
  },
  {
    label: "Outlook add-in",
    icon: outlook,
    bgColor: "#F0F7FF",
  },
];

export const footerIcons = [
  { icons: <FaXTwitter />, links: "https://twitter.com" },
  { icons: <FaFacebookF />, links: "https://facebook.com" },
  { icons: <FaInstagram />, link: "https://instagram.com" },
  { icons: <FaLinkedinIn />, link: "https://linkedin.com" },
  { icons: <FaYoutube />, link: "https://youtube.com" },
];

export const footerlinks = [
  { href: "/privacyPolicy", text: "Privacy Policy" },
  { href: "/legal", text: "Legal" },
  { href: "/status", text: "Status" },
  { href: "/cookie-settings", text: "Cookie Setting" },
  { href: "/cookie-settings", text: "Cookie Setting", img: policyimg },
];
