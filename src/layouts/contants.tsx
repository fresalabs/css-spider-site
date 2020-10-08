export const primaryNavigationRoutes: Record<string, string> = {
  home: '/home',
  instructions: '/instructions',
  about: '/about',
};

export interface MenuItem {
  id: string;
  name: string;
  path: (id?: string) => string;
}

export const menuItems: MenuItem[] = [
  {
    id: primaryNavigationRoutes.home,
    name: 'Home',
    path: () => primaryNavigationRoutes.home,
  }
];
