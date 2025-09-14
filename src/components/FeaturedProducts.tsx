import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import handbagImage from "@/assets/product-handbag.jpg";
import sneakersImage from "@/assets/product-sneakers.jpg";
import jewelryImage from "@/assets/product-jewelry.jpg";

const featuredProducts = [
  {
    id: "1",
    name: "Designer Leather Handbag",
    price: 24999,
    originalPrice: 32999,
    image: handbagImage,
    rating: 4.8,
    reviewCount: 124,
    category: "Accessories",
    isSale: true,
  },
  {
    id: "2",
    name: "Premium Athletic Sneakers",
    price: 12999,
    image: sneakersImage,
    rating: 4.9,
    reviewCount: 87,
    category: "Footwear",
    isNew: true,
  },
  {
    id: "3",
    name: "Elegant Gold Watch Set",
    price: 74999,
    originalPrice: 99999,
    image: jewelryImage,
    rating: 4.7,
    reviewCount: 63,
    category: "Jewelry",
    isSale: true,
  },
  {
    id: "4",
    name: "Classic Designer Handbag",
    price: 37499,
    image: handbagImage,
    rating: 4.6,
    reviewCount: 91,
    category: "Accessories",
  },
  {
    id: "5",
    name: "Sport Performance Shoes",
    price: 15499,
    originalPrice: 18999,
    image: sneakersImage,
    rating: 4.8,
    reviewCount: 156,
    category: "Footwear",
    isSale: true,
  },
  {
    id: "6",
    name: "Luxury Jewelry Collection",
    price: 53999,
    image: jewelryImage,
    rating: 4.9,
    reviewCount: 45,
    category: "Jewelry",
    isNew: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites that define luxury and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="btn-hero">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;