export type Category = "shirts" | "t-shirts" | "trousers" | "jackets" | "shoes" | "accessories";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  compareAtPrice?: number;
  description: string;
  sizes: string[];
  colors: string[];
  image: string;
  images: string[];
  isNew?: boolean;
  isFeatured?: boolean;
};

const photo = (id: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const categories: { slug: Category; label: string; image: string }[] = [
  { slug: "shirts", label: "Shirts", image: photo("1596755094514-f87e34085b2c", 500, 600) },
  { slug: "t-shirts", label: "T-Shirts", image: photo("1521572163474-6864f9cf17ab", 500, 600) },
  { slug: "trousers", label: "Trousers", image: photo("1541099649105-f69ad21f3246", 500, 600) },
  { slug: "jackets", label: "Jackets", image: photo("1551028719-00167b16eac5", 500, 600) },
  { slug: "shoes", label: "Shoes", image: photo("1542291026-7eec264c27ff", 500, 600) },
  { slug: "accessories", label: "Accessories", image: photo("1614252369475-531eba835eb1", 500, 600) },
];

export const products: Product[] = [
  {
    slug: "classic-oxford-shirt",
    name: "Classic Oxford Shirt",
    category: "shirts",
    price: 49.99,
    compareAtPrice: 64.99,
    description:
      "A timeless oxford-weave shirt cut from breathable cotton. Tailored fit with a button-down collar, perfect for the office or weekend layering.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Sky Blue", "Charcoal"],
    image: photo("1596755094514-f87e34085b2c"),
    images: [photo("1596755094514-f87e34085b2c"), photo("1620799140408-edc6dcb6d633")],
    isFeatured: true,
  },
  {
    slug: "linen-summer-shirt",
    name: "Linen Summer Shirt",
    category: "shirts",
    price: 54.99,
    description:
      "Lightweight linen-blend shirt with a relaxed fit, designed to keep you cool through warm days without sacrificing style.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Olive", "White"],
    image: photo("1620799140408-edc6dcb6d633"),
    images: [photo("1620799140408-edc6dcb6d633"), photo("1596755094514-f87e34085b2c")],
    isNew: true,
  },
  {
    slug: "flannel-check-shirt",
    name: "Flannel Check Shirt",
    category: "shirts",
    price: 44.99,
    description:
      "Soft brushed flannel in a classic check pattern. Warm, durable, and easy to layer over a tee.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Red Check", "Navy Check"],
    image: photo("1521572267360-ee0c2909d518"),
    images: [photo("1521572267360-ee0c2909d518"), photo("1596755094514-f87e34085b2c")],
  },
  {
    slug: "essential-crew-tee",
    name: "Essential Crew Neck Tee",
    category: "t-shirts",
    price: 19.99,
    description:
      "Our best-selling basic. 100% combed cotton, pre-shrunk, with a durable crew neck that holds its shape wash after wash.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey", "Navy"],
    image: photo("1521572163474-6864f9cf17ab"),
    images: [photo("1521572163474-6864f9cf17ab"), photo("1583743814966-8936f5b7be1a")],
    isFeatured: true,
  },
  {
    slug: "graphic-print-tee",
    name: "Graphic Print Tee",
    category: "t-shirts",
    price: 24.99,
    description: "Heavyweight cotton tee with a bold front print. Relaxed streetwear fit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"],
    image: photo("1583743814966-8936f5b7be1a"),
    images: [photo("1583743814966-8936f5b7be1a"), photo("1521572163474-6864f9cf17ab")],
    isNew: true,
  },
  {
    slug: "henley-long-sleeve",
    name: "Henley Long Sleeve",
    category: "t-shirts",
    price: 29.99,
    description: "Ribbed henley neckline with a soft cotton-blend fabric, ideal for layering.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Grey", "Olive", "Black"],
    image: photo("1521572163474-6864f9cf17ab", 800, 1000),
    images: [photo("1521572163474-6864f9cf17ab"), photo("1583743814966-8936f5b7be1a")],
  },
  {
    slug: "slim-fit-chinos",
    name: "Slim Fit Chinos",
    category: "trousers",
    price: 59.99,
    compareAtPrice: 74.99,
    description:
      "Versatile slim-fit chinos with a touch of stretch for all-day comfort. Goes from desk to dinner effortlessly.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Black"],
    image: photo("1541099649105-f69ad21f3246"),
    images: [photo("1541099649105-f69ad21f3246"), photo("1473966968600-fa801b869a1a")],
    isFeatured: true,
  },
  {
    slug: "tailored-formal-trousers",
    name: "Tailored Formal Trousers",
    category: "trousers",
    price: 69.99,
    description: "Sharp, tailored trousers with a flat front and clean crease, built for formal occasions.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Charcoal", "Black"],
    image: photo("1473973266408-ed4e27abdd47"),
    images: [photo("1473973266408-ed4e27abdd47"), photo("1541099649105-f69ad21f3246")],
  },
  {
    slug: "cargo-utility-pants",
    name: "Cargo Utility Pants",
    category: "trousers",
    price: 64.99,
    description: "Durable cotton cargo pants with multiple utility pockets and a relaxed fit.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Olive", "Black", "Stone"],
    image: photo("1473966968600-fa801b869a1a"),
    images: [photo("1473966968600-fa801b869a1a"), photo("1473973266408-ed4e27abdd47")],
    isNew: true,
  },
  {
    slug: "denim-trucker-jacket",
    name: "Denim Trucker Jacket",
    category: "jackets",
    price: 89.99,
    description: "A wardrobe staple. Rugged denim trucker jacket with a classic fit and button front.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Indigo", "Black"],
    image: photo("1551028719-00167b16eac5"),
    images: [photo("1551028719-00167b16eac5"), photo("1544923246-77307dd654cb")],
    isFeatured: true,
  },
  {
    slug: "quilted-bomber-jacket",
    name: "Quilted Bomber Jacket",
    category: "jackets",
    price: 99.99,
    compareAtPrice: 129.99,
    description: "Lightly insulated bomber jacket with ribbed cuffs and hem for a warm, sporty look.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive"],
    image: photo("1591047139829-d91aecb6caea"),
    images: [photo("1591047139829-d91aecb6caea"), photo("1591195853828-11db59a44f6b")],
  },
  {
    slug: "wool-blend-overcoat",
    name: "Wool-Blend Overcoat",
    category: "jackets",
    price: 149.99,
    description: "Elevated outerwear in a soft wool blend, tailored for a sharp silhouette in colder months.",
    sizes: ["M", "L", "XL"],
    colors: ["Camel", "Charcoal"],
    image: photo("1544923246-77307dd654cb"),
    images: [photo("1544923246-77307dd654cb"), photo("1551028719-00167b16eac5")],
    isNew: true,
  },
  {
    slug: "leather-derby-shoes",
    name: "Leather Derby Shoes",
    category: "shoes",
    price: 109.99,
    description: "Classic leather derby shoes with a comfortable cushioned sole, built for everyday formal wear.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "Brown"],
    image: photo("1560343090-f0409e92791a"),
    images: [photo("1560343090-f0409e92791a"), photo("1560769629-975ec94e6a86")],
    isFeatured: true,
  },
  {
    slug: "canvas-low-top-sneakers",
    name: "Canvas Low-Top Sneakers",
    category: "shoes",
    price: 44.99,
    description: "Easy-to-wear canvas sneakers with a durable rubber sole. Everyday casual essential.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Navy"],
    image: photo("1542291026-7eec264c27ff"),
    images: [photo("1542291026-7eec264c27ff"), photo("1549298916-b41d501d3772")],
  },
  {
    slug: "chelsea-boots",
    name: "Chelsea Boots",
    category: "shoes",
    price: 119.99,
    description: "Sleek leather Chelsea boots with elastic side panels, versatile for casual or smart-casual outfits.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "Tan"],
    image: photo("1560769629-975ec94e6a86"),
    images: [photo("1560769629-975ec94e6a86"), photo("1560343090-f0409e92791a")],
    isNew: true,
  },
  {
    slug: "leather-belt",
    name: "Genuine Leather Belt",
    category: "accessories",
    price: 29.99,
    description: "Full-grain leather belt with a polished buckle. A finishing touch for any outfit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    image: photo("1611085583191-a3b181a88401"),
    images: [photo("1611085583191-a3b181a88401"), photo("1553062407-98eeb64c6a62")],
  },
  {
    slug: "wool-beanie",
    name: "Wool Beanie",
    category: "accessories",
    price: 17.99,
    description: "Soft knit wool beanie to keep you warm through winter, one size fits most.",
    sizes: ["One Size"],
    colors: ["Black", "Grey", "Navy"],
    image: photo("1544441893-675973e31985"),
    images: [photo("1544441893-675973e31985"), photo("1587467512961-120760940315")],
    isFeatured: true,
  },
  {
    slug: "classic-analog-watch",
    name: "Classic Analog Watch",
    category: "accessories",
    price: 79.99,
    compareAtPrice: 99.99,
    description: "Minimalist analog watch with a stainless steel case and genuine leather strap.",
    sizes: ["One Size"],
    colors: ["Black/Silver", "Brown/Gold"],
    image: photo("1614252369475-531eba835eb1"),
    images: [photo("1614252369475-531eba835eb1"), photo("1523275335684-37898b6baf30")],
    isNew: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}
