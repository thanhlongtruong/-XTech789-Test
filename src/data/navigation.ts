export interface NavLink {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "#products" },
  { name: "Most Popular", href: "#popular" },
  { name: "The Nu Skin Way", href: "#about" },
  { name: "News", href: "#news" },
];
