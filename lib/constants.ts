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
  { title: "Recommended", value: "recommended", key: "", type: "" },
  { title: "Name: A to Z", value: "name-asc", key: "title", type: "asc" },
  {
    title: "Name: Z to A",
    value: "name-desc",
    key: "title",
    type: "desc",
  },
  {
    title: "Price: low to high",
    value: "price-asc",
    key: "price",
    type: "asc",
  },
  {
    title: "Price: high to low",
    value: "price-desc",
    key: "price",
    type: "desc",
  },
  {
    title: "Rating: low to high",
    value: "rating-asc",
    key: "rating",
    type: "asc",
  },
  {
    title: "Rating: high to low",
    value: "rating-desc",
    key: "rating",
    type: "desc",
  },
  {
    title: "Discount: low to high",
    value: "discount-asc",
    key: "discountPercentage",
    type: "asc",
  },
  {
    title: "Discount: high to low",
    value: "discount-desc",
    key: "discountPercentage",
    type: "desc",
  },
];

export const reviewSortList: SortData[] = [
  {
    title: "Stars: high to low",
    value: "rating-desc",
    key: "stars",
    type: "desc",
  },
  {
    title: "Stars: low to high",
    value: "rating-asc",
    key: "stars",
    type: "asc",
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
export const EXPIRATION_TIME = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
