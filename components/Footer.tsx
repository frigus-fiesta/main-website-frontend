/* eslint-disable import/no-unresolved */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import WorldMap from "./ui/world-map";

const Footer = () => {
  return (
    <footer className="relative mt-10 overflow-hidden bg-gray-200">
      <div className="absolute inset-0 size-full opacity-40">
        <WorldMap fullSize={true} />
      </div>
      <div className="container relative z-10 mx-auto px-6 py-8">
        <div className="mb-6 flex flex-col items-center">
          <Link href={`/`} className="mb-4">
            <Image
              src="/assets/friguslogo.svg"
              width={120}
              height={120}
              alt="Frigus Fiesta"
              className="h-14 w-auto mb-10 mt-5"
            />
          </Link>
          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 text-center md:grid-cols-3">
            <div>
              <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white/50 p-3 backdrop-blur-sm ring-1 ring-black/5">
                <MapPin className="size-5 text-gray-700" />
              </div>
              <p className="mb-1 text-base font-bold text-gray-800">
                Our Location
              </p>
              <a
                href="https://maps.google.com/?q=Jawahar+Nagar,+Sainikpuri,+Hyderabad,+Telangana,+India-+500094"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-sm text-gray-600 hover:text-black hover:underline"
              >
                Jawahar Nagar, Sainikpuri,
                <br />
                Hyderabad, Telangana, India- 500094
              </a>
            </div>
            <div>
              <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white/50 p-3 backdrop-blur-sm ring-1 ring-black/5">
                <Phone className="size-5 text-gray-700" />
              </div>
              <p className="mb-1 text-base font-bold text-gray-800">
                Contact Phone
              </p>
              <a
                href="tel:+919182684160"
                className="cursor-pointer text-sm text-gray-600 hover:text-black hover:underline"
              >
                91-91826-84160
              </a>
            </div>
            <div>
              <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white/50 p-3 backdrop-blur-sm ring-1 ring-black/5">
                <Mail className="size-5 text-gray-700" />
              </div>
              <p className="mb-1 text-base font-bold text-gray-800">
                Email Address
              </p>
              <a
                href="mailto:info@frigusfiesta.com"
                className="cursor-pointer text-sm text-gray-600 hover:text-black hover:underline"
              >
                info@frigusfiesta.com
              </a>
            </div>
          </div>
        </div>
        <div className="mb-6 flex justify-center space-x-4">
          {[
            { Icon: Facebook, href: "/", label: "Facebook" },
            {
              Icon: Instagram,
              href: "https://www.instagram.com/frigusfiesta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              label: "Instagram",
            },
            {
              Icon: Linkedin,
              href: "https://www.linkedin.com/in/frigus-fiesta-24000b369/",
              label: "LinkedIn",
            },
            {
              Icon: Youtube,
              href: "https://www.youtube.com/@FrigusFiesta",
              label: "YouTube",
            },
          ].map(({ Icon, href, label }, index) => (
            <Link
              key={index}
              href={href}
              className="flex size-12 items-center justify-center rounded-full bg-white/50 text-gray-700 backdrop-blur-sm ring-1 ring-black/5 transition-all duration-300 hover:bg-yellow-300 hover:text-black"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="size-5" />
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-400 pt-4">
          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0">
            <p className="text-xs text-gray-600">
              ©2025 Frigus Fiesta | Developed by{" "}
              <Link
                href="https://www.electroplix.com/"
                className="font-semibold text-gray-800 hover:text-black hover:underline"
              >
                Electroplix
              </Link>
            </p>
            <div className="flex items-center space-x-4 text-xs">
              <Link
                href="/terms"
                className="text-gray-600 hover:text-black hover:underline"
              >
                Terms & Conditions
              </Link>
              <div className="h-3 w-px bg-black/20"></div>
              <Link
                href="/privacy-policy"
                className="text-gray-600 hover:text-black hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
