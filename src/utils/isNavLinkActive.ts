export const isNavLinkActive = (currentPath, navLink) =>
  (currentPath.includes(navLink) && navLink !== "/") || currentPath === navLink;
