import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <div className="animate-fade-in-up">
            <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stay in Style
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for exclusive offers, style tips, and early access to new collections
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-full"
                  required
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 px-8 rounded-full"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                Join 50,000+ fashion enthusiasts. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="animate-scale-in">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-success" />
              <p className="text-xl">Welcome to the ShopLux family!</p>
            </div>
          )}

          {/* Social proof */}
          <div className="flex justify-center items-center gap-8 mt-12 opacity-75 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-sm">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Weekly</div>
              <div className="text-sm">Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;