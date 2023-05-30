export interface objectproductitem {
  id: number;
  name: string;
  href: string;
}
export interface headernav {
  productsNav: objectproductitem[];
  analyticsNav: objectproductitem[];
  MarketingNav: objectproductitem[];
}

export const productsNav: objectproductitem[] = [
  {
    id: 1,
    name: "All Products",
    href: "/dashboard/products/",
  },
  {
    id: 2,
    name: "Add Product",
    href: "/dashboard/products/addproduct",
  },
  {
    id: 3,
    name: "Categories",
    href: "/dashboard/products/categories",
  },
];
export const analyticsNav: objectproductitem[] = [
  {
    id: 1,
    name: "Products",
    href: "/dashboard/analytics/",
  },
  {
    id: 2,
    name: "revenue",
    href: "/dashboard/analytics/revenue",
  },
  {
    id: 3,
    name: "orders",
    href: "/dashboard/analytics/orders",
  },
  {
    id: 4,
    name: "taxes",
    href: "/dashboard/analytics/taxes",
  },
  {
    id: 5,
    name: "inventory",
    href: "/dashboard/analytics/inventory",
  },
];
export const MarketingNav: objectproductitem[] = [
  {
    id: 1,
    name: "Ads",
    href: "/dashboard/marketing/",
  },
  {
    id: 2,
    name: "coupons",
    href: "/dashboard/marketing/coupons",
  },
  {
    id: 3,
    name: "Notifications",
    href: "/dashboard/marketing/notifications",
  },
];
export const usersNav: objectproductitem[] = [
  {
    id: 1,
    name: "All Members",
    href: "/dashboard/profileuser/",
  },
  {
    id: 2,
    name: "Profile",
    href: "/dashboard/profileuser/profile",
  },
];
