import {
  BookOpen, Home, MessageSquare, ShoppingBag, Baby, Languages,
  TrendingUp, Laptop, Code, Monitor, Handshake, FileText, Heart,
  Globe, Trophy, Shield, CreditCard,
} from "lucide-react";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  BookOpen, Home, MessageSquare, ShoppingBag, Baby, Languages,
  TrendingUp, Laptop, Code, Monitor, Handshake, FileText, Heart,
  Globe, Trophy, Shield, CreditCard,
};

export function getProgramIcon(iconName: string) {
  return iconMap[iconName] ?? BookOpen;
}
