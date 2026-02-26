import { Building2, LucideIcon, Rocket, Sparkles } from "lucide-react";

export interface PricingItem {
  name: string;
  description: string;
  icon: LucideIcon;
  price: string;
  period: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const PricingData: PricingItem[] = [
  {
    name: "Plan Básico",
    description: "Perfecto para startups y pequeñas empresas.",
    icon: Sparkles,
    price: "$29",
    period: "/mes",
    features: [
      "Entrevistas automatizadas con IA",
      "Reportes básicos",
      "Gestión simple de candidatos",
      "Hasta 50 entrevistas/mes",
      "Soporte por email",
    ],
    cta: "Comenzar gratis",
  },
  {
    name: "Plan Pro",
    description: "Ideal para equipos de reclutamiento en crecimiento.",
    icon: Rocket,
    price: "$79",
    period: "/mes",
    features: [
      "Todo lo del Plan Básico",
      "Análisis avanzados",
      "Métricas comparativas",
      "Personalización de entrevistas",
      "Hasta 200 entrevistas/mes",
      "Soporte prioritario",
    ],
    cta: "Elegir Pro",
    popular: true,
  },
  {
    name: "Plan Empresarial",
    description: "Diseñado para grandes organizaciones.",
    icon: Building2,
    price: "$199",
    period: "/mes",
    features: [
      "Todo lo del Plan Pro",
      "Entrevistas ilimitadas con IA",
      "Integraciones personalizadas",
      "Panel multiusuario",
      "Analítica avanzada",
      "Soporte dedicado 24/7",
    ],
    cta: "Contactar ventas",
  },
];
