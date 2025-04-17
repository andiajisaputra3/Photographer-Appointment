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
