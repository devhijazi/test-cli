import type { IconType } from 'react-icons';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import {
//   FiUser,
//   FiHome,
//   FiUsers,
//   FiBox,
//   // FiFileText,
//   // FiBarChart,
// } from 'react-icons/fi';

interface Navigation {
  title: string;
  href: string;
  icon: IconType;
  permission: number;
}

export const navigation: Navigation[] = [];

export const drawerLinks: Navigation[] = [];
