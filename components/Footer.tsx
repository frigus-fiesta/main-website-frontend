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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative">
      <footer className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                <div className="size-16 rotate-45 border-2 border-yellow-300"></div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 opacity-20">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce rounded-full bg-gradient-to-r from-yellow-200 to-yellow-300"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${20 + Math.random() * 40}px`,
                  height: `${20 + Math.random() * 40}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="hexagons"
                  x="0"
                  y="0"
                  width="50"
                  height="43.4"
                  patternUnits="userSpaceOnUse"
                >
                  <polygon
                    points="25,2 45,15 45,35 25,48 5,35 5,15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>
        </div>
        <div className="container relative z-10 mx-auto px-6 py-16">
          <nav className="mb-12 flex flex-wrap justify-center gap-8">
            {[
              "Home",
              "About Us",
              "Gallery",
              "Contact Us",
              "Book Appointment",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="group relative text-lg font-semibold text-white transition-all duration-300 hover:text-yellow-200"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="mb-12 flex items-center justify-center text-center">
            <Image
              src={`/assets/logo.png`}
              width={150}
              height={150}
              alt="logo"
              className="rounded bg-black/20"
            />
          </div>
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <div className="group text-center">
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <MapPin className="size-8 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                FRIGUS FIESTA
              </h3>
              <p className="text-yellow-100">
                Jawahar Nagar, Sainikpuri,
                <br />
                Hyderabad, Telangana, India- 500094
              </p>
            </div>
            <div className="group text-center">
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <Phone className="size-8 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Contact Phones
              </h3>
              <p className="text-yellow-100">91-91826-84160</p>
            </div>
            <div className="group text-center">
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <Mail className="size-8 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Email</h3>
              <p className="text-yellow-100">info@frigusfiesta.com</p>
            </div>
          </div>
          <div className="mb-8 flex justify-center space-x-6">
            {[
              { Icon: Facebook, href: "/" },
              { Icon: Instagram, href: "/" },
              { Icon: Youtube, href: "/" },
            ].map(({ Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="flex size-12 items-center justify-center rounded-full bg-white bg-opacity-20 text-white backdrop-blur-sm transition-all duration-300 hover:rotate-12 hover:scale-110 hover:bg-white hover:text-yellow-500"
              >
                <Icon className="size-6" />
              </Link>
            ))}
          </div>
          <div className="border-t border-white border-opacity-30 pt-8 text-center">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-sm text-white">
                ©2025 Frigus Fiesta | Developed by{" "}
                <Link
                  href={`https://www.electroplix.com/`}
                  className="cursor-pointer font-semibold text-yellow-200 transition-colors duration-300 hover:underline hover:underline-offset-1"
                >
                  Electroplix
                </Link>
              </p>
              <Link
                href="/terms_and_conditions"
                className="text-sm text-yellow-200 underline transition-colors duration-300 hover:text-white hover:no-underline"
              >
                Terms and Conditions
              </Link>
              <span className="mx-2 text-yellow-200">|</span>
              <Link
                href="/privacy_and_policy"
                className="text-sm text-yellow-200 underline transition-colors duration-300 hover:text-white hover:no-underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
