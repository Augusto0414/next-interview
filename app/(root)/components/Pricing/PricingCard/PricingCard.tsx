import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { PricingData } from "../pricing.data";

export const PricingCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
      {PricingData.map((item, index) => (
        <Card
          key={index}
          className={`bg-[#1A1A1D]/40 border-white/10 text-white w-full max-w-xs py-4 ${
            item.popular ? "border-[#007BFF] ring-2 ring-[#007BFF]/50" : ""
          }`}
        >
          <CardHeader className="px-4 gap-1.5">
            <CardTitle className="text-lg text-white">{item.name}</CardTitle>
            <CardDescription className="text-white/70 text-xs">{item.description}</CardDescription>
            <CardAction>
              <div className="w-8 h-8 bg-[#007BFF]/20 rounded-full flex items-center justify-center">
                <item.icon className="w-4 h-4 text-[#007BFF]" />
              </div>
            </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 px-4">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white">{item.price}</span>
              <span className="text-white/60 text-xs">{item.period}</span>
            </div>
            <ul className="flex flex-col gap-2">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-white/80">
                  <Check className="w-3.5 h-3.5 text-[#007BFF] shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="px-4">
            <Button
              size="sm"
              className={`w-full ${
                item.popular
                  ? "bg-[#007BFF] hover:bg-[#007BFF]/90 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              {item.cta}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
