import kurti1 from "@/assets/kurti1.png";
import salwar1 from "@/assets/salwar1.png";
import gown1 from "@/assets/gown1.png";
import bridal1 from "@/assets/bridal1.png";
import festive1 from "@/assets/festive1.png";
import silksaree from "@/assets/silksaree.png";
import pastelanarkali from "@/assets/pastelanarkali.png";
import mirror from "@/assets/mirror.png";
export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  hoverImage: string;
  colors?: string[];
  sizes?: string[];
  badge?: string;
  isNew?: boolean;
};

// const img = (q: string, sig: number) =>
//   `https://images.unsplash.com/${q}?auto=format&fit=crop&w=900&q=80&sig=${sig}`;

// Curated Unsplash photos for ethnic / luxury fashion mood
const photos = [
  silksaree,        // Anaisha Banarasi Silk Saree
  bridal1,          // Padmaja Bridal Lehenga
  kurti1,           // Ridhima Embroidered Kurti Set
  pastelanarkali,   // Saanvi Anarkali Suit
  gown1,            // Aishwarya Wedding Gown
  mirror,           // Mehr Designer Sharara
  festive1,         // Tara Festive Silk Saree
  bridal1,          // Inaya Reception Lehenga
  kurti1,           // Diya Chanderi Kurti
  bridal1,          // Naina Royal Bridal Set
  mirror,           // Aarohi Mirror Work Lehenga
  pastelanarkali,   // Suhana Pastel Anarkali
];

const names = [
  "Anaisha Banarasi Silk Saree",
  "Padmaja Bridal Lehenga",
  "Ridhima Embroidered Kurti Set",
  "Saanvi Anarkali Suit",
  "Aishwarya Wedding Gown",
  "Mehr Designer Sharara",
  "Tara Festive Silk Saree",
  "Inaya Reception Lehenga",
  "Diya Chanderi Kurti",
  "Naina Royal Bridal Set",
  "Aarohi Mirror Work Lehenga",
  "Suhana Pastel Anarkali",
];

const categories = ["Sarees", "Lehengas", "Kurtis", "Salwar Suits", "Gowns", "Bridal"];

export const products: Product[] = Array.from({ length: 16 }, (_, i) => {
  const p = photos[i % photos.length];
  const p2 = photos[(i + 3) % photos.length];

  const price = 2499 + (i % 6) * 1500;
  const original = price + 1200 + (i % 3) * 800;

  return {
    id: `p-${i + 1}`,
    name: names[i % names.length],
    category: categories[i % categories.length],
    price,
    originalPrice: original,
    rating: 4 + ((i * 7) % 10) / 10,
    reviews: 28 + ((i * 13) % 240),
    image: p,
    hoverImage: p2,
    colors: ["#B85AA3", "#D68BC5", "#2D2D2D", "#C9A84C"].slice(
      0,
      3 + (i % 2)
    ),
    sizes: ["XS", "S", "M", "L", "XL"],
    badge:
      i % 5 === 0
        ? "Bestseller"
        : i % 7 === 0
        ? "Limited"
        : undefined,
    isNew: i % 4 === 0,
  };
});

export const categoriesData = [
  {
    name: "Sarees",
    image: silksaree,
    count: 184,
  },
  {
    name: "Lehengas",
    image: bridal1,
    count: 96,
  },
  {
    name: "Kurtis",
    image: kurti1,
    count: 220,
  },
  {
    name: "Salwar Suits",
    image: salwar1,
    count: 142,
  },
  {
    name: "Gowns",
    image: gown1,
    count: 78,
  },
  {
    name: "Bridal",
    image: bridal1,
    count: 54,
  },
  {
    name: "Party Wear",
    image: mirror,
    count: 120,
  },
  {
    name: "Festive",
    image: festive1,
    count: 88,
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Absolutely stunning craftsmanship. My bridal lehenga was a dream — every stitch felt like art.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Ananya Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Mounika's Wardrobe has become my go-to for festive occasions. The fabrics are luxurious and the fit is perfect.",
    avatar: "https://i.pravatar.cc/120?img=45",
  },
  {
    name: "Kavya Iyer",
    location: "Bengaluru",
    rating: 5,
    text: "The detailing on my reception saree left everyone speechless. Beautiful packaging and even better service.",
    avatar: "https://i.pravatar.cc/120?img=44",
  },
  {
    name: "Meera Krishnan",
    location: "Chennai",
    rating: 5,
    text: "A truly luxurious boutique experience, online. I keep coming back for every special occasion.",
    avatar: "https://i.pravatar.cc/120?img=49",
  },
];

export const instagramPosts = [
  { id: "ig-1", image: silksaree },
  { id: "ig-2", image: bridal1 },
  { id: "ig-3", image: kurti1 },
  { id: "ig-4", image: salwar1 },
  { id: "ig-5", image: gown1 },
  { id: "ig-6", image: festive1 },
  { id: "ig-7", image: mirror },
  { id: "ig-8", image: pastelanarkali },
];

export const navCategories = [
  "Home",
  "New Arrivals",
  "Sarees",
  "Lehengas",
  "Kurtis",
  "Salwar Suits",
  "Gowns",
  "Bridal",
  "Festive",
  "Sale",
];
