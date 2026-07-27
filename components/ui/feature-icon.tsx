import {
  BadgeCheck,
  Banknote,
  Bell,
  Building2,
  CarFront,
  ChartNoAxesCombined,
  CircleUserRound,
  CreditCard,
  FileCheck2,
  HandHeart,
  Home,
  KeyRound,
  LifeBuoy,
  LockKeyhole,
  Map,
  MapPin,
  MessageCircle,
  MessagesSquare,
  PhoneCall,
  Search,
  ShieldCheck,
  Siren,
  Sparkles,
  BriefcaseBusiness,
  UsersRound,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const iconMap: Record<IconName, LucideIcon> = {
  "badge-check": BadgeCheck,
  banknote: Banknote,
  bell: Bell,
  building: Building2,
  car: CarFront,
  chart: ChartNoAxesCombined,
  "circle-user": CircleUserRound,
  "credit-card": CreditCard,
  "file-check": FileCheck2,
  "heart-handshake": HandHeart,
  home: Home,
  "key-round": KeyRound,
  "life-buoy": LifeBuoy,
  lock: LockKeyhole,
  map: Map,
  "map-pin": MapPin,
  "message-circle": MessageCircle,
  "messages-square": MessagesSquare,
  "phone-call": PhoneCall,
  search: Search,
  "shield-check": ShieldCheck,
  siren: Siren,
  sparkles: Sparkles,
  "tool-case": BriefcaseBusiness,
  users: UsersRound,
  wallet: WalletCards,
};

export function FeatureIcon({
  name,
  className,
  size = 21,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  const Icon = iconMap[name];
  return <Icon aria-hidden="true" className={cn("shrink-0", className)} size={size} />;
}
