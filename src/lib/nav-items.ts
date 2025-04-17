import { NavItem } from "@/types";
import { Calendar, ClipboardList, Info } from "lucide-react";

export const mainItems: NavItem[] = [
  {
    title: "Schedule",
    href: "/schedule",
    icon: Calendar,
  },
  {
    title: "Appointments",
    href: "/appointment-info",
    icon: Info,
  },
  {
    title: "My Appointments",
    href: "/my-appointment",
    icon: ClipboardList,
  },
];
