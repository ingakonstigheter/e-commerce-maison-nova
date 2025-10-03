import { SortData } from "./interfaces";

/* Mock-links fot the footer */
export const NO_GO_LINKS = [
  { header: "Account", links: ["Log In", "Sign Up", "Redeem a Gift Card"] },
  {
    header: "Company",
    links: [
      "About",
      "Enviromental Initiatives",
      "Factories",
      "DEI",
      "Careers",
      "International",
      "Accessibility",
    ],
  },
  {
    header: "Get Help",
    links: ["Help Center", "Return Policy", "Shipping Info", "Bulk Orders"],
  },
  {
    header: "Connect",
    links: ["Facebook", "Instagram", "Twitter", "Affiliates", "Our Stores"],
  },
];
/* Mock tags for the footer */
export const FOOTER_TAGS = [
  "Privacy Policy",
  "Terms of Servicce",
  "Do Not Sell or Share My Personal Information",
  "Supply Chain Transparancy",
  "Vendor Code Of Conduct",
  "Site Map Pages",
];

export const allCategories = [
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
  "tops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "sunglasses",
];

export const womenCategories = [
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
  "tops",
];

export const menCategories = [
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "sunglasses",
];

export const productSortList: SortData[] = [
  { title: "Recommended", sortBy: "recommended", key: "", order: "" },
  {
    title: "Name: A to Z",
    sortBy: "title",
    order: "asc",
    key: "title",
  },
  {
    title: "Name: Z to A",
    sortBy: "title",
    order: "desc",
    key: "title",
  },
  {
    title: "Price: low to high",
    sortBy: "price",
    order: "asc",
    key: "price",
  },
  {
    title: "Price: high to low",
    sortBy: "price",
    order: "desc",
    key: "price",
  },
  {
    title: "Rating: low to high",
    sortBy: "rating",
    order: "asc",
    key: "rating",
  },
  {
    title: "Rating: high to low",
    sortBy: "rating",
    key: "rating",
    order: "desc",
  },
];

export const reviewSortList: SortData[] = [
  {
    title: "Stars: high to low",
    sortBy: "rating-desc",
    key: "stars",
    order: "desc",
  },
  {
    title: "Stars: low to high",
    sortBy: "rating-asc",
    key: "stars",
    order: "asc",
  },
];

export const listItemMenu = [
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
];

export const MIN_DISCOUNT_TO_DISPLAY = 10;
export const PAGE_OFFSET = 9;

// 12 hours in milliseconds
export const EXPIRATION_TIME = 12 * 60 * 60 * 1000;
