"use client";
import React from "react";

import { PinContainer } from "../ui/3d-pin";

export default function ContactUsMap() {
  return (
    <div className="flex size-[40rem] items-center justify-center">
      <PinContainer
        title="FRIGUS FIESTA Location"
        href="https://maps.app.goo.gl/2Qw6Qn6Qn6Qn6Qn6A"
        className="flex size-full border-yellow-400 bg-white/20 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex size-full flex-col p-6 tracking-tight text-slate-100/80">
          <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">
            FRIGUS FIESTA
          </h3>
          <div className="!m-0 !p-0 text-base font-normal">
            <span className="text-slate-300 ">
              Jawahar Nagar, Sainikpuri,<br />Hyderabad, Telangana, India – 500094
            </span>
          </div>
          <div className="mt-4 flex w-full flex-1 overflow-hidden rounded-lg">
            <iframe
              title="Frigus Fiesta Map"
              src="https://www.google.com/maps?q=Jawahar+Nagar,+Sainikpuri,+Hyderabad,+Telangana,+India+500094&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, background: '#548fee' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full min-h-[200px] rounded-lg opacity-90"
            ></iframe>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
