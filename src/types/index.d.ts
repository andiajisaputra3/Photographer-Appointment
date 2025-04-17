export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

export interface ScheduleProps {
  id: number;
  title: string;
  date: string;
  time: string;
  available?: boolean;
}

export interface AppointmentProps {
  id: number;
  name: string;
  message: string;
  schedule: ScheduleProps[];
  review?: string;
}
