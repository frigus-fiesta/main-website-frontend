"use client";
import React from "react";

import { PinContainer } from "../ui/3d-pin";

export default function ContactUsMap() {
  return (
    <div className="flex size-[40rem] items-center justify-center">
      <PinContainer
        title="FRIGUS FIESTA Location"
        href="https://www.google.com/maps/place/FRIGUS+FIESTA/@17.5080524,78.5578266,1115m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb9395ed09b339:0x99b8ca33a55a8375!8m2!3d17.5080524!4d78.5604069!16s%2Fg%2F11fzbc7066?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D"
        className="flex min-h-[22rem] w-full max-w-2xl flex-col justify-center rounded-2xl border-2 border-yellow-400 bg-blue-500/20 p-4 shadow-2xl backdrop-blur-xl sm:min-h-[32rem] sm:p-8"
      >
        <div className="flex w-full flex-col gap-2 tracking-tight text-slate-100/90 sm:gap-4">
          <div className="flex flex-col items-start justify-center gap-1 pb-1 sm:pb-2">
            <h3 className="m-0 text-lg font-extrabold tracking-wide text-slate-100 drop-shadow-lg sm:text-2xl">FRIGUS FIESTA</h3>
            <div className="text-left text-sm font-medium leading-snug text-slate-200 drop-shadow sm:text-lg">
              Jawahar Nagar, Sainikpuri,<br />Hyderabad, Telangana, India – 500094
            </div>
          </div>
          <div className="relative mt-2 flex min-h-48 w-full flex-1 overflow-hidden rounded-lg bg-white/10 sm:mt-4 sm:min-h-[22rem] sm:rounded-xl">
            <iframe
              title="Frigus Fiesta Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.073232625992!2d78.5578266!3d17.5080524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9395ed09b339:0x99b8ca33a55a8375!2sFRIGUS%20FIESTA!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, background: '#548fee' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[220px] min-h-[150px] w-full rounded-lg opacity-90 sm:h-[350px]"
            ></iframe>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
