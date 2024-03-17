interface navigationItemsProps {
  id: string;
  title: string;
  link: string;
}

const navigationItems: navigationItemsProps[] = [
  {
    id: "services",
    title: "服務項目",
    link: "#services",
  },
  {
    id: "works",
    title: "作品集",
    link: "#works",
  },
  {
    id: "prices",
    title: "價目表",
    link: "/prices",
  },
];

export default navigationItems;
