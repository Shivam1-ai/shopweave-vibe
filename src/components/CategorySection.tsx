import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import womenImage from "@/assets/category-women.jpg";
import menImage from "@/assets/category-men.jpg";

const categories = [
  {
    id: 1,
    title: "Women's Collection",
    description: "Elegant styles for the modern woman",
    image: womenImage,
    itemCount: "2,450+ items",
  },
  {
    id: 2,
    title: "Men's Collection",
    description: "Sophisticated looks for every occasion",
    image: menImage,
    itemCount: "1,890+ items",
  },
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Shop by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collections designed for every style and occasion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="category-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-lg mb-2 opacity-90">
                    {category.description}
                  </p>
                  <p className="text-sm opacity-75 mb-6">
                    {category.itemCount}
                  </p>
                  
                  <Button variant="secondary" className="group">
                    Shop Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;