import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";

const footerLinks = {
  "Quick links": [
    ["Home", "/"],
    ["Features", "/features"],
    ["How it works", "/#how-it-works"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ],
  Platform: [
    ["For societies", "/for-societies"],
    ["Service providers", "/features"],
    ["Security", "/#security"],
  ],
  Legal: [
    ["Privacy policy", "/privacy"],
    ["Terms of service", "/terms"],
    ["Data policy", "/privacy#data-policy"],
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-[#071a2b] text-slate-300">
      <div className="site-container grid gap-12 py-16 lg:grid-cols-[1.35fr_2fr] lg:py-20">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-sm text-base leading-7 text-slate-400">
            Convenience meets community through one organized platform for
            modern residential societies.
          </p>
          <div className="mt-7 space-y-3 text-sm">
            <a
              href="mailto:sasifysolutions2@gmail.com"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Mail aria-hidden="true" size={17} className="text-emerald-400" />
              sasifysolutions2@gmail.com
            </a>
            <p className="flex items-center gap-3">
              <MapPin aria-hidden="true" size={17} className="text-emerald-400" />
              Islamabad, Pakistan
            </p>
            <p className="flex items-center gap-3">
              <Phone aria-hidden="true" size={17} className="text-emerald-400" />
              +92 311 6185711
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-9 sm:grid-cols-3">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h2 className="text-sm font-bold text-white">{heading}</h2>
              <ul className="mt-5 space-y-3">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm transition hover:text-emerald-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
