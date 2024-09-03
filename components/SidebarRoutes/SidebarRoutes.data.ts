import {
    BarChart4,
    Building2,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
    CircleHelpIcon,
    Calendar,
    CoffeeIcon,
  } from "lucide-react";
  
  export const dataGeneralSidebar = [
    {
      icon: PanelsTopLeft,
      label: "Ofertas",
      href: "/",
    },
    {
      icon: CoffeeIcon,
      label: "Productos",
      href: "/Productos",
    },
    {
      icon: Calendar,
      label: "Calendario",
      href: "/tasks",
    },
  ];
  
  export const dataToolsSidebar = [
    {
      icon: CircleHelpIcon,
      label: "Faqs",
      href: "/faqs",
    },
    {
      icon: BarChart4,
      label: "Analytics",
      href: "/analytics",
    },
  ];
  
  export const dataSupportSidebar = [
    {
      icon: Settings,
      label: "Setting",
      href: "/setting",
    },
    {
      icon: ShieldCheck,
      label: "Security",
      href: "/security",
    },
  ];