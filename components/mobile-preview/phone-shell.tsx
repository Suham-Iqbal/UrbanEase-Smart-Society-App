import { cn } from "@/lib/utils";

export type PhoneScreen =
  | "Home"
  | "Complaints"
  | "Bills"
  | "Notices"
  | "Emergency"
  | "Community"
  | "Community Chat"
  | "Map";

const screenImages: Record<PhoneScreen, { src: string; alt: string }> = {
  Home: {
    src: "/images/app-screens/home.jpg",
    alt: "UrbanEase resident home screen",
  },
  Complaints: {
    src: "/images/app-screens/complaints.jpg",
    alt: "UrbanEase complaints help desk screen",
  },
  Bills: {
    src: "/images/app-screens/bills.jpg",
    alt: "UrbanEase billing and payments screen",
  },
  Notices: {
    src: "/images/app-screens/notices.jpg",
    alt: "UrbanEase announcements and notices screen",
  },
  Emergency: {
    src: "/images/app-screens/emergency.jpg",
    alt: "UrbanEase emergency SOS screen",
  },
  Community: {
    src: "/images/app-screens/community.jpg",
    alt: "UrbanEase lost and found community screen",
  },
  "Community Chat": {
    src: "/images/app-screens/community-chat.jpg",
    alt: "UrbanEase community chat screen",
  },
  Map: {
    src: "/images/app-screens/map.jpg",
    alt: "UrbanEase Naval Anchorage map screen",
  },
};

export function PhoneShell({
  screen = "Home",
  className,
}: {
  screen?: PhoneScreen;
  className?: string;
}) {
  const image = screenImages[screen];

  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/20] w-[272px] overflow-hidden rounded-[2.35rem] border-[7px] border-[#071521] bg-slate-950 shadow-[0_35px_70px_-28px_rgba(15,23,42,.65)] sm:w-[300px]",
        className,
      )}
      aria-label={`UrbanEase mobile application ${screen} screen preview`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover"
        loading="eager"
      />
    </div>
  );
}
