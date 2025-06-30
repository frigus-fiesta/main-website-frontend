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

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gray-900">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="size-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`,
            }}
          />
        </div>
      </div>
      <div className="container relative z-10 mx-auto px-6 py-8">
        {/* Logo with golden glow effect */}
        <div className="mb-6 flex flex-col items-center">
          <div className="group relative mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
            <div className="relative">
              <Image
                src="/assets/friguslogo.svg"
                width={120}
                height={120}
                alt="Frigus Fiesta"
                className="h-14 w-auto transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          {/* Contact info with premium styling */}
          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group text-center">
              <div className="mb-3 inline-flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 blur-lg transition-all duration-300 group-hover:blur-xl"></div>
                  <div className="relative rounded-full border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 p-3 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-400/40 group-hover:bg-gradient-to-r group-hover:from-yellow-400/20 group-hover:to-yellow-500/20">
                    <MapPin className="size-5 text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300" />
                  </div>
                </div>
              </div>
              <p className="mb-1 text-base font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                Our Location
              </p>
              <a
                href="https://maps.google.com/?q=Jawahar+Nagar,+Sainikpuri,+Hyderabad,+Telangana,+India-+500094"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-sm text-yellow-100 transition-colors duration-300 hover:underline group-hover:text-yellow-200"
              >
                Jawahar Nagar, Sainikpuri,
                <br />
                Hyderabad, Telangana, India- 500094
              </a>
            </div>
            <div className="group text-center">
              <div className="mb-3 inline-flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 blur-lg transition-all duration-300 group-hover:blur-xl"></div>
                  <div className="relative rounded-full border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 p-3 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-400/40 group-hover:bg-gradient-to-r group-hover:from-yellow-400/20 group-hover:to-yellow-500/20">
                    <Phone className="size-5 text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300" />
                  </div>
                </div>
              </div>
              <p className="mb-1 text-base font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                Contact Phone
              </p>
              <a
                href="tel:+919182684160"
                className="cursor-pointer text-sm text-yellow-100 transition-colors duration-300 hover:underline group-hover:text-yellow-200"
              >
                91-91826-84160
              </a>
            </div>
            <div className="group text-center">
              <div className="mb-3 inline-flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 blur-lg transition-all duration-300 group-hover:blur-xl"></div>
                  <div className="relative rounded-full border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 p-3 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-400/40 group-hover:bg-gradient-to-r group-hover:from-yellow-400/20 group-hover:to-yellow-500/20">
                    <Mail className="size-5 text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300" />
                  </div>
                </div>
              </div>
              <p className="mb-1 text-base font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                Email Address
              </p>
              <a
                href="mailto:info@frigusfiesta.com"
                className="cursor-pointer text-sm text-yellow-100 transition-colors duration-300 hover:underline group-hover:text-yellow-200"
              >
                info@frigusfiesta.com
              </a>
            </div>
          </div>
        </div>
        {/* Social media links with premium effects */}
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
              className="group relative flex size-12 items-center justify-center transition-all duration-500"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 blur-lg transition-all duration-300 group-hover:blur-xl"></div>
              <div className="relative rounded-full border-2 border-yellow-400/30 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 p-3 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-yellow-400 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-yellow-500 group-hover:shadow-2xl group-hover:shadow-yellow-400/25">
                <Icon className="size-5 text-yellow-400 transition-all duration-500 group-hover:text-white" />
              </div>
            </Link>
          ))}
        </div>
        {/* Bottom section with premium styling */}
        <div className="border-t border-yellow-400/30 pt-4">
          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0">
            <p className="text-xs text-yellow-100">
              ©2025 Frigus Fiesta | Developed by{" "}
              <Link
                href="https://www.electroplix.com/"
                className="font-semibold text-yellow-400 transition-all duration-300 hover:text-yellow-300 hover:underline hover:underline-offset-2"
              >
                Electroplix
              </Link>
            </p>
            <div className="flex items-center space-x-4 text-xs">
              <Link
                href="/terms_and_conditions"
                className="text-yellow-100 transition-all duration-300 hover:text-yellow-400 hover:underline hover:underline-offset-2"
              >
                Terms & Conditions
              </Link>
              <div className="h-3 w-px bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent"></div>
              <Link
                href="/privacy_and_policy"
                className="text-yellow-100 transition-all duration-300 hover:text-yellow-400 hover:underline hover:underline-offset-2"
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
