import { img } from "./assets";
import type {
  FeaturedItem,
  MenuCategory,
  MoodOption,
  Review,
  Spot,
  TimeSlot,
} from "@/types/mello";

export const tickerItems = [
  "Good coffee",
  "No coffee snobbery",
  "Cold matcha",
  "Oat milk, no drama",
  "Fresh bakes",
  "Pastries before problems",
  "Big smiles",
];

export const featuredItems: FeaturedItem[] = [
  {
    tags: ["Matcha", "Strawberry"],
    title: "Strawberry matcha",
    description: "Fresh, creamy, and layered over ice.",
    price: "$6.50",
    size: "16 oz",
    badge: "Favorite",
    image: img("strawberry-matcha.avif"),
    imageAlt:
      "Layered strawberry matcha drink with ice and sliced strawberries in a ribbed glass.",
    variant: "photo-tall",
  },
  {
    tags: ["Cocoa", "Dark cherry"],
    title: "Cherry cloud mocha",
    description: "Rich mocha with silky cherry cream.",
    price: "$6.00",
    size: "16 oz",
    image: img("cherry-cloud-mocha.avif"),
    imageAlt:
      "Iced chocolate drink with foam, ice cubes, grated chocolate, and a cherry in a ribbed glass on beige surface.",
    variant: "photo-wide",
  },
  {
    tags: ["Espresso", "Milk"],
    title: "Mello flat white",
    description: "Smooth and perfectly silky.",
    price: "$4.50",
    size: "8 oz",
    badge: "Your 8am personality",
    illustration: img("illustration-6.svg"),
    variant: "lime",
  },
  {
    tags: ["Cinnamon", "Vanilla"],
    title: "Big cinny bun",
    description: "Sticky and freshly baked.",
    price: "$5.50",
    size: "x1",
    badge: "Sticky fingers guaranteed",
    illustration: img("illustration-7.svg"),
    variant: "forest",
  },
];

export const menuCategories: MenuCategory[] = [
  {
    title: "Espresso bar",
    subtitle: "Fresh espresso classics.",
    sizeLabels: ["8 oz", "16 oz"],
    items: [
      { name: "Espresso", small: "$3.00", large: "$4.00" },
      { name: "Americano", small: "$3.50", large: "$4.50" },
      { name: "Cappuccino", small: "$4.25", large: "$5.50" },
      { name: "Mello flat white", small: "$4.50", large: "$5.75" },
      { name: "Café latte", small: "$4.75", large: "$6.00" },
    ],
  },
  {
    title: "Coffee favorites",
    subtitle: "Sweet, creamy coffee creations.",
    sizeLabels: ["8 oz", "16 oz"],
    items: [
      { name: "Classic mocha", small: "$5.00", large: "$6.25" },
      { name: "Cherry cloud mocha", small: "$5.00", large: "$6.00" },
      { name: "Vanilla latte", small: "$5.00", large: "$6.25" },
      { name: "Caramel latte", small: "$5.00", large: "$6.25" },
      { name: "Hot chocolate", small: "$4.50", large: "$5.75" },
    ],
  },
  {
    title: "Matcha & tea",
    subtitle: "Green, bright, and refreshing.",
    sizeLabels: ["8 oz", "16 oz"],
    items: [
      { name: "Cold matcha", small: "$5.25", large: "$6.00" },
      { name: "Strawberry matcha", small: "$5.50", large: "$6.50" },
      { name: "Classic matcha latte", small: "$5.00", large: "$6.25" },
      { name: "Chai latte", small: "$4.75", large: "$6.00" },
      { name: "English breakfast tea", small: "$3.50", large: "$4.50" },
    ],
  },
  {
    title: "Cold drinks",
    subtitle: "Cool drinks for brighter days.",
    sizeLabels: ["8 oz", "16 oz"],
    items: [
      { name: "Cold brew", small: "$4.50", large: "$5.75" },
      { name: "Iced latte", small: "$4.75", large: "$6.00" },
      { name: "Espresso tonic", small: "$5.00", large: "$6.25" },
      { name: "Sparkling citrus", small: "$4.00", large: "$5.25" },
    ],
  },
  {
    title: "Blended favorites",
    subtitle: "Cold, creamy, and smooth.",
    sizeLabels: ["8 oz", "16 oz"],
    items: [
      { name: "Matcha blend", small: "$5.25", large: "$6.50" },
      { name: "Mocha shake", small: "$5.50", large: "$6.75" },
      { name: "Strawberry cream", small: "$5.25", large: "$6.50" },
      { name: "Caramel coffee blend", small: "$5.50", large: "$6.75" },
      { name: "Banana oat smoothie", small: "$5.00", large: "$6.25" },
    ],
  },
  {
    title: "Bakes & bites",
    subtitle: "Freshly baked little treats.",
    sizeLabels: ["x1", "x4"],
    items: [
      { name: "Big cinny bun", small: "$5.50", large: "$18.00" },
      { name: "Butter croissant", small: "$4.00", large: "$14.00" },
      { name: "Chocolate cookie", small: "$3.50", large: "$12.00" },
      { name: "Banana bread", small: "$4.50", large: "$16.00" },
      { name: "Blueberry muffin", small: "$4.25", large: "$15.00" },
    ],
  },
];

export const moods: MoodOption[] = [
  {
    id: "energized",
    title: "Energized",
    subtitle: "Need a boost",
    drink: {
      tags: ["Coffee", "Ice"],
      title: "Cold brew",
      description: "Bold and refreshingly cold.",
      price: "$4.50",
      size: "8 oz",
      image: img("cold-brew.png"),
      imageAlt: "Cold brew",
    },
  },
  {
    id: "cozy",
    title: "Cozy",
    subtitle: "Take it slow",
    drink: {
      tags: ["Espresso", "Vanilla"],
      title: "Vanilla latte",
      description: "Creamy and softly balanced.",
      price: "$6.25",
      size: "16 oz",
      image: img("vanilla-latte.avif"),
      imageAlt: "Vanilla latte",
    },
  },
  {
    id: "refreshed",
    title: "Refreshed",
    subtitle: "Keep it fresh",
    drink: {
      tags: ["Citrus", "Soda"],
      title: "Sparkling citrus",
      description: "Bright, bubbly, and refreshing.",
      price: "$5.25",
      size: "16 oz",
      image: img("sparkling-citrus.avif"),
      imageAlt: "Sparkling citrus",
    },
  },
  {
    id: "indulgent",
    title: "Indulgent",
    subtitle: "Treat myself",
    drink: {
      tags: ["Mocha", "Cream"],
      title: "Mocha shake",
      description: "Rich, creamy, and chocolatey.",
      price: "$6.75",
      size: "16 oz",
      image: img("mocha-shake.avif"),
      imageAlt: "Mocha shake",
    },
  },
];

export const timeSlots: TimeSlot[] = [
  {
    id: "morning",
    index: "01",
    label: "Morning glow",
    clock: "07:03",
    title: "First sip",
    body: "Doors open. Espresso machine sings. The day suddenly looks possible.",
    illustration: img("illustration-4.svg"),
    tabIllustration: img("time-tab-4.svg"),
  },
  {
    id: "power",
    index: "02",
    label: "Power hour",
    clock: "10:12",
    title: "Power up",
    body: "You came for coffee. You left with a cinnamon bun. Excellent decision.",
    illustration: img("illustration-11.svg"),
    tabIllustration: img("time-tab-11.svg"),
  },
  {
    id: "afternoon",
    index: "03",
    label: "Afternoon refresh",
    clock: "14:47",
    title: "Iced o’clock",
    body: "The inbox is winning. Matcha enters the chat and turns things around.",
    illustration: img("illustration-12.svg"),
    tabIllustration: img("time-tab-12.svg"),
  },
  {
    id: "treat",
    index: "04",
    label: "Treat time",
    clock: "17:31",
    title: "One more?",
    body: "One last espresso before home. Good days deserve a strong finish.",
    illustration: img("illustration-13.svg"),
    tabIllustration: img("time-tab-13.svg"),
  },
];

export const spots: Spot[] = [
  {
    id: "sun",
    index: "01",
    title: "Catch the sun",
    body: "Grab a warm seat, order your favorite, and let the morning take its time.",
    tags: ["#beforenoon", "#sunnyspot"],
    illustration: img("spot-illu-5.svg"),
  },
  {
    id: "action",
    index: "02",
    title: "Close to the action",
    body: "Take a counter seat and see every drink come together from start to finish.",
    tags: ["#Social", "#Lively"],
    illustration: img("illustration-15.svg"),
  },
  {
    id: "hide",
    index: "03",
    title: "Hide out here",
    body: "Your tucked-away spot for quiet sips, focused work, and slower moments.",
    tags: ["#1seat", "#laptopfriendly"],
    illustration: img("illustration-16.svg"),
  },
  {
    id: "crew",
    index: "04",
    title: "Bring the whole crew",
    body: "Grab the big table and fill it with coffee, stories, and your favorite people.",
    tags: ["#Social", "#Spacious"],
    illustration: img("illustration-17.svg"),
  },
];

export const reviews: Review[] = [
  {
    rating: "4.9",
    name: "Mia Carter",
    quote:
      "Come for the great coffee, stay for the perfect playlist and those cinnamon buns you’ll keep thinking about.",
  },
  {
    rating: "5.0",
    name: "Jamie Brooks",
    quote:
      "Everything you want from a neighborhood coffee shop: warm, welcoming, and always worth the walk.",
  },
  {
    rating: "5.0",
    name: "Alex Morgan",
    quote:
      "The cold brew is smooth, the space feels effortless, and everyone behind the counter is genuinely lovely.",
  },
];
