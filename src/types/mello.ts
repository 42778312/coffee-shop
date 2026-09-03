export interface MenuItem {
  name: string;
  small: string;
  large: string;
}

export interface MenuCategory {
  title: string;
  subtitle: string;
  sizeLabels: [string, string];
  items: MenuItem[];
}

export interface FeaturedItem {
  tags: [string, string];
  title: string;
  description: string;
  price: string;
  size: string;
  badge?: string;
  image?: string;
  imageAlt?: string;
  illustration?: string;
  variant: "photo-tall" | "photo-wide" | "lime" | "forest";
}

export interface MoodOption {
  id: string;
  title: string;
  subtitle: string;
  drink: {
    tags: [string, string];
    title: string;
    description: string;
    price: string;
    size: string;
    image: string;
    imageAlt: string;
  };
}

export interface TimeSlot {
  id: string;
  index: string;
  label: string;
  clock: string;
  title: string;
  body: string;
}

export interface Spot {
  id: string;
  index: string;
  title: string;
  body: string;
  tags: [string, string];
}

export interface Review {
  rating: string;
  name: string;
  quote: string;
}
