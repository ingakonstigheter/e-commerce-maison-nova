import {
  BannerPositionVariants,
  HeightVariant,
  PositionVariant,
} from "./types";
import { Product } from "./zod-schemas";

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string; // ISO8601 datum
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface ProductFull {
  id: number;
  title: string;
  description: string;
  gender: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  tags: string[];
  reviews: Review[];
  images: string[];
  thumbnail: string;
}

export interface CartProduct {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  image: string;
  quantity?: number;
}

export interface SortData {
  title: string;
  sortBy: string;
  key: string;
  order: string;
}
export interface URLProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export interface AddToCartBtnProps {
  product: Product;
}

export interface FullPageBlockProps {
  imageSrc: string;
  altText: string;
  h2?: string;
  paragraph?: string;
  link: string;
  linkPrompt: string;
  pos?: PositionVariant;
}

export interface SplitHeroProps {
  leftImageUrl: string;
  rightImageUrl: string;
  leftButtonText: string;
  rightButtonText: string;
  leftHref: string;
  rightHref: string;
  buttonY?: string;
}

export interface BannerProps {
  imageSrc: string;
  altText: string;
  h2?: string;
  paragraph?: string;
  button?: string;
  pos?: BannerPositionVariants;
  height?: HeightVariant;
}

export interface BannerWrapperProps {
  banners: BannerProps[];
}

export interface User {
  user_id: number;
  name: String;
  email: String;
  roles: String[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSuperBase {
  user: {
    id: string;
    fullName: string;
    userName: string;
    website: string;
  };
}
