"use client";
import React, { useState } from "react";

const ContactUsLanding = () => {
  const [step, setStep] = useState<"name" | "email" | "message" | "done">("name");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const steps = ["name", "email", "message", "done"];
  const stepIndex = steps.indexOf(step);

  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="w-full max-w-6xl space-y-20 pl-16 pt-20">
        <div className="flex items-start gap-4">
          <div className="h-[70px] w-[5px] bg-yellow-300" />
          <div className="flex flex-col">
            <h2 className="text-lg text-black">How to contact us</h2>
            <h1 className="text-5xl font-bold text-gray-900">Contact Us</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-around gap-20 text-lg text-gray-800">
          <div className="min-w-[220px] flex-1">
            <h3 className="mb-2 text-xl font-semibold">📍 Address</h3>
            <p className="text-gray-400">FRIGUS FIESTA</p>
            <p className="text-gray-400">Jawahar Nagar, Sainikpuri,</p>
            <p className="text-gray-400">Hyderabad, Telangana, India – 500094</p>
          </div>
          <div className="min-w-[220px] flex-1">
            <h3 className="mb-2 text-xl font-semibold">📞 Phone</h3>
            <p className="text-gray-400">+91-91826-84160</p>
          </div>
          <div className="min-w-[220px] flex-1">
            <h3 className="mb-2 text-xl font-semibold">✉️ Mail</h3>
            <p className="text-gray-400">info@frigusfiesta.com</p>
          </div>
        </div>
        <div className="relative mt-4 w-full max-w-lg space-y-10">
          <div className="flex items-center gap-3">
            <div className="h-[30px] w-[5px] bg-yellow-300" />
            <h2 className="text-xl font-semibold text-gray-900">Get in touch</h2>
            <div className="group relative cursor-pointer">
              <div className="ml-1 rounded-full bg-yellow-300 px-2 py-1 text-sm font-bold text-white">i</div>
              <div className="absolute left-6 top-8 z-50 w-[300px] scale-95 rounded-lg bg-black p-4 text-sm text-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-1 group-hover:scale-100 group-hover:opacity-100">
                <p className="mb-2">
                  Welcome to our Contact Us page! We value your feedback,
                  inquiries, and suggestions.
                </p>
                <p className="mb-2">
                  Whether you have a question about our services, want to
                  collaborate, or simply wish to say hello — we're here to help.
                </p>
                <p>
                  Fill out the form below and we'll get back to you as soon as
                  possible!
                </p>
              </div>
            </div>
          </div>
          {step === "name" && (
            <div className="space-y-4 pt-6">
              <label className="block text-lg font-medium">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b-2 border-gray-400 text-lg text-gray-800 focus:border-yellow-400 focus:outline-none"
                placeholder="Enter your name"
              />
              <button
                onClick={() => name && setStep("email")}
                className="mt-4 rounded-full border border-yellow-400 bg-black px-6 py-2 text-white transition hover:bg-yellow-400 hover:text-black"
              >
                Next
              </button>
            </div>
          )}
          {step === "email" && (
            <div className="space-y-4 pt-10">
              <label className="block text-lg font-medium">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b-2 border-gray-400 text-lg text-gray-800 focus:border-yellow-400 focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                onClick={() => email && setStep("message")}
                className="mt-4 rounded-full border border-yellow-400 bg-black px-6 py-2 text-white transition hover:bg-yellow-400 hover:text-black"
              >
                Next
              </button>
            </div>
          )}
          {step === "message" && (
            <div className="space-y-4 pt-10">
              <label className="block text-lg font-medium">Your Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="h-28 w-full resize-none border-b-2 border-gray-400 text-lg text-gray-800 focus:border-yellow-400 focus:outline-none"
              />
              <button
                onClick={() => message && setStep("done")}
                className="mt-4 rounded-full border border-yellow-400 bg-black px-6 py-2 text-white transition hover:bg-yellow-400 hover:text-black"
              >
                Send ✉️
              </button>
            </div>
          )}
          {step === "done" && (
            <div className="pt-10 text-xl font-medium text-green-600">
              ✅ Thank you, {name}! We'll reach out soon.
            </div>
          )}
        </div>
        {/* Timeline Dots + Progress */}
        <div className="relative mt-16 w-full max-w-lg">
          <div className="absolute left-0 top-2 h-[2px] w-full bg-gray-200" />
          <div
            className="absolute left-0 top-2 h-[2px] bg-yellow-400 transition-all duration-500"
            style={{ width: `${(stepIndex / (steps.length - 1)) * 100}%` }}
          />
          <div className="relative z-10 flex w-full justify-between">
            <div className="flex flex-col items-center">
              <div className="size-4 rounded-full bg-yellow-400" />
              <span className="mt-1 text-sm">Name</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`size-4 rounded-full ${
                  stepIndex >= 1 ? "bg-yellow-400" : "bg-gray-300"
                }`}
              />
              <span className="mt-1 text-sm">Mail</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`size-4 rounded-full ${
                  stepIndex >= 2 ? "bg-yellow-400" : "bg-gray-300"
                }`}
              />
              <span className="mt-1 text-sm">Message</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsLanding;
