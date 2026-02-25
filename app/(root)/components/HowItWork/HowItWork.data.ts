import { BarChart3, Briefcase, Link, LucideIcon, MessageSquare, Settings, UserPlus } from "lucide-react";

export interface HowItWorkItem {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const howItWorkData: HowItWorkItem[] = [
  {
    name: "Registro",
    description: "Crea tu cuenta y configura tu empresa en minutos.",
    icon: UserPlus,
  },
  {
    name: "Crea la vacante",
    description: "Define el perfil y las habilidades que deseas evaluar.",
    icon: Briefcase,
  },
  {
    name: "Configura la evaluación",
    description: "Personaliza preguntas, criterios y nivel de dificultad.",
    icon: Settings,
  },
  {
    name: "Invita candidatos",
    description: "Comparte el enlace de entrevista con un solo clic.",
    icon: Link,
  },
  {
    name: "Entrevista automatizada",
    description: "Los candidatos completan la entrevista con IA guiada.",
    icon: MessageSquare,
  },
  {
    name: "Recibe resultados",
    description: "Obtén análisis y métricas impulsadas por IA en tiempo real.",
    icon: BarChart3,
  },
];
