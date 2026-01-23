export const categories = [
  { id: "all", name: "All Products" },
  { id: "clothing", name: "Clothing" },
  { id: "accessories", name: "Accessories" },
  { id: "home", name: "Home & Living" },
  { id: "beauty", name: "Beauty" },
];

export const products = [
  {
    id: "1",
    name: "Cashmere Blend Sweater",
    category: "clothing",
    price: 189,
    originalPrice: 249,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    description:
      "Luxuriously soft cashmere blend sweater with a relaxed fit.",
    tags: ["cashmere", "sweater", "winter", "luxury"],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Minimalist Leather Bag",
    category: "accessories",
    price: 295,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    description:
      "Handcrafted leather tote with clean lines and premium finish.",
    tags: ["leather", "bag", "minimalist", "handcrafted"],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Linen Blend Trousers",
    category: "clothing",
    price: 145,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    description:
      "Breathable linen blend trousers perfect for warm days.",
    tags: ["linen", "trousers", "summer", "comfortable"],
    rating: 4.6,
    reviews: 67,
    inStock: true,
  },
  {
    id: "4",
    name: "Ceramic Vase Set",
    category: "home",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&q=80",
    description:
      "Hand-thrown ceramic vases in earthy terracotta tones.",
    tags: ["ceramic", "vase", "home decor", "handmade"],
    rating: 4.7,
    reviews: 45,
    inStock: true,
  },
  {
    id: "5",
    name: "Silk Scarf",
    category: "accessories",
    price: 125,
    originalPrice: 165,
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
    description:
      "Pure silk scarf with abstract botanical print.",
    tags: ["silk", "scarf", "elegant", "botanical"],
    rating: 4.8,
    reviews: 78,
    inStock: true,
  },
  {
    id: "6",
    name: "Organic Face Serum",
    category: "beauty",
    price: 68,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    description:
      "Nourishing organic serum with vitamin C and hyaluronic acid.",
    tags: ["organic", "serum", "skincare", "vitamin c"],
    rating: 4.9,
    reviews: 156,
    inStock: true,
    featured: true,
  },
  {
    id: "7",
    name: "Wool Coat",
    category: "clothing",
    price: 425,
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",
    description:
      "Timeless double-breasted wool coat in classic camel.",
    tags: ["wool", "coat", "winter", "classic"],
    rating: 4.7,
    reviews: 92,
    inStock: true,
  },
  {
    id: "8",
    name: "Linen Throw Blanket",
    category: "home",
    price: 135,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    description:
      "Soft stonewashed linen throw in neutral oatmeal.",
    tags: ["linen", "throw", "cozy", "neutral"],
    rating: 4.6,
    reviews: 54,
    inStock: true,
  },
  {
    id: "9",
    name: "Gold Hoop Earrings",
    category: "accessories",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80",
    description:
      "14k gold-plated hoops with a modern brushed finish.",
    tags: ["gold", "earrings", "jewelry", "modern"],
    rating: 4.8,
    reviews: 112,
    inStock: true,
  },
  {
    id: "10",
    name: "Natural Body Oil",
    category: "beauty",
    price: 52,
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
    description:
      "Hydrating body oil with jojoba and sweet almond.",
    tags: ["natural", "body oil", "hydrating", "botanical"],
    rating: 4.5,
    reviews: 67,
    inStock: true,
  },
  {
    id: "11",
    name: "Cotton Knit Top",
    category: "clothing",
    price: 78,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
    description:
      "Relaxed organic cotton knit in a versatile neutral shade.",
    tags: ["cotton", "knit", "casual", "organic"],
    rating: 4.4,
    reviews: 38,
    inStock: true,
  },
  {
    id: "12",
    name: "Scented Candle Trio",
    category: "home",
    price: 65,
    originalPrice: 85,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
    description:
      "Soy wax candles in sandalwood, cedar, and vanilla.",
    tags: ["candle", "scented", "soy", "relaxation"],
    rating: 4.9,
    reviews: 203,
    inStock: true,
  },
];

// AI Keywords for search suggestions
export const aiKeywords = [
  "cashmere",
  "silk",
  "linen",
  "organic",
  "natural",
  "handcrafted",
  "minimalist",
  "sustainable",
  "luxury",
  "cozy",
  "elegant",
  "timeless",
  "botanical",
  "neutral",
  "premium",
  "artisan",
  "eco-friendly",
];

// AI Description templates for dynamic generation
export const descriptionTemplates = [
  "Crafted with meticulous attention to detail, this {product} embodies modern elegance.",
  "Perfect for those who appreciate {quality}, this piece seamlessly blends form and function.",
  "Designed for the discerning customer, our {product} offers unmatched {benefit}.",
  "Experience the difference of {material} craftsmanship with this stunning piece.",
];
