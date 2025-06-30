"use client"

import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MinimalBackground = () => (
  <div className="pointer-events-none absolute left-0 top-0 -z-10 size-full">
    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"></div>
    <svg
      className="absolute size-full opacity-30"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1920 1080"
    >
      <circle cx="300" cy="200" r="150" fill="url(#gradient1)" opacity="0.1" />
      <circle cx="1400" cy="300" r="200" fill="url(#gradient2)" opacity="0.1" />
      <circle cx="800" cy="700" r="180" fill="url(#gradient3)" opacity="0.1" />
      <defs>
        <radialGradient id="gradient1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
        <radialGradient id="gradient2">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </radialGradient>
        <radialGradient id="gradient3">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

const eventOptions = [
  { 
    label: 'Social Events', 
    priceUSD: 120, 
    priceINR: 10000, 
    description: 'Perfect for personal celebrations' 
  },
  { 
    label: 'Corporate Events', 
    priceUSD: 150, 
    priceINR: 12500, 
    description: 'Professional business gatherings' 
  },
  { 
    label: 'Live Events', 
    priceUSD: 200, 
    priceINR: 16500, 
    description: 'Entertainment and performances' 
  },
];

type Currency = 'USD' | 'INR';

export default function PaymentPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('USD');
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => { 
    setIsVisible(true); 
  }, []);

  useEffect(() => {
    const isValid = formData.name.length > 0 && formData.email.length > 0 && formData.phone.length > 0;
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEventSelect = (idx: number) => {
    setSelectedEvent(idx);
    setCurrentStep(3);
  };

  const handleNextStep = () => {
    if (currentStep === 1 && isFormValid) {
      setCurrentStep(2);
    }
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCurrencyToggle = (currency: Currency) => {
    setSelectedCurrency(currency);
  };

  const formatPrice = (priceUSD: number, priceINR: number) => {
    return selectedCurrency === 'USD' 
      ? `$${priceUSD}` 
      : `₹${priceINR.toLocaleString('en-IN')}`;
  };

  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  return (
    <div className="relative min-h-screen">
      <MinimalBackground />
      <Header />
      <div className="relative z-10 px-6 py-12 pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className={`mb-4 text-4xl md:text-5xl font-bold text-black transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Book Your <span className='text-yellow-500'>Event</span>
          </h1>
          <p className={`text-lg text-amber-700 transition-all delay-300 duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Simple, secure, and straightforward
          </p>
        </div>
      </div>
      <div className="relative z-10 px-6 pb-8">
        <div className="mx-auto max-w-2xl">
          <div className="flex justify-center">
            <div className="flex rounded-2xl bg-white/80 backdrop-blur-sm p-2 shadow-lg">
              <button
                onClick={() => handleCurrencyToggle('USD')}
                className={`rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  selectedCurrency === 'USD'
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                🇺🇸 USD (International)
              </button>
              <button
                onClick={() => handleCurrencyToggle('INR')}
                className={`rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  selectedCurrency === 'INR'
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                🇮🇳 INR (India)
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 px-6 pb-12">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-center space-x-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${
                  currentStep >= step 
                    ? 'bg-amber-500 text-white shadow-lg' 
                    : 'bg-white text-amber-500 border-2 border-amber-200'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`h-0.5 w-16 transition-all duration-300 ${
                    currentStep > step ? 'bg-amber-500' : 'bg-amber-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center space-x-16 text-sm text-amber-700">
            <span className={currentStep >= 1 ? 'font-medium' : ''}>Details</span>
            <span className={currentStep >= 2 ? 'font-medium' : ''}>Event Type</span>
            <span className={currentStep >= 3 ? 'font-medium' : ''}>Payment</span>
          </div>
        </div>
      </div>
      <div className="relative z-10 px-6 pb-20">
        <div className="mx-auto max-w-2xl">
          {currentStep === 1 && (
            <div className="animate-fade-in rounded-3xl bg-white/80 backdrop-blur-sm p-12 shadow-xl">
              <h2 className="mb-8 text-center text-2xl font-light text-amber-900">Your Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-amber-800">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border-0 px-6 py-4 text-amber-900 ring-1 ring-amber-200 transition-all duration-300 focus:outline-none"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-amber-800">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border-0 px-6 py-4 text-amber-900 ring-1 ring-amber-200 transition-all duration-300 focus:outline-none"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-amber-800">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border-0 px-6 py-4 text-amber-900 ring-1 ring-amber-200 transition-all duration-300 focus:outline-none"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
              <div className="mt-10 text-center">
                <button
                  onClick={handleNextStep}
                  disabled={!isFormValid}
                  className={`rounded-2xl px-8 py-4 font-medium transition-all duration-300 ${
                    isFormValid
                      ? 'bg-yellow-500 text-white hover:bg-yellow-400 hover:shadow-lg'
                      : 'bg-yellow-200 text-amber-500 cursor-not-allowed'
                  }`}
                >
                  Continue to Event Selection
                </button>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className="animate-fade-in rounded-3xl bg-white/80 backdrop-blur-sm p-12 shadow-xl">
              <h2 className="mb-8 text-center text-2xl font-light text-amber-900">Choose Your Event</h2>
              <div className="space-y-4">
                {eventOptions.map((option, idx) => (
                  <button
                    key={option.label}
                    onClick={() => handleEventSelect(idx)}
                    className="w-full rounded-2xl border-0 bg-amber-50 p-6 text-left ring-1 ring-amber-200 transition-all duration-300  hover:shadow-lg focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-amber-900">{option.label}</h3>
                        <p className="mt-1 text-sm text-amber-600">{option.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-amber-700">
                          {formatPrice(option.priceUSD, option.priceINR)}
                        </div>
                        <div className="text-xs text-amber-500">per event</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-10 text-center">
                <button
                  onClick={handleBackStep}
                  className="rounded-2xl bg-amber-100 px-6 py-3 text-amber-700 transition-all duration-300 hover:bg-amber-200"
                >
                  Back to Details
                </button>
              </div>
            </div>
          )}
          {currentStep === 3 && selectedEvent !== null && (
            <div className="animate-fade-in rounded-3xl bg-white/80 backdrop-blur-sm p-12 shadow-xl">
              <h2 className="mb-8 text-center text-2xl font-light text-amber-900">Complete Payment</h2>
              <div className="mb-8 rounded-2xl bg-amber-50 p-2 md:p-6">
                <h3 className="mb-4 font-semibold text-amber-900">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-amber-700">Customer:</span>
                    <span className="text-amber-900">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">Email:</span>
                    <span className="text-amber-900">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">Event Type:</span>
                    <span className="text-amber-900">{eventOptions[selectedEvent].label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">Currency:</span>
                    <span className="text-amber-900">{selectedCurrency === 'USD' ? 'USD (International)' : 'INR (India)'}</span>
                  </div>
                  <div className="border-t border-amber-200 pt-2 mt-4">
                    <div className="flex justify-between font-semibold">
                      <span className="text-amber-700">Total:</span>
                      <span className="text-amber-900 text-xl">
                        {formatPrice(eventOptions[selectedEvent].priceUSD, eventOptions[selectedEvent].priceINR)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <PayPalScriptProvider options={{ 
                  clientId: PAYPAL_CLIENT_ID || '', 
                  currency: selectedCurrency,
                  intent: "capture"
                }}>
                  <PayPalButtons
                    style={{ 
                      layout: "vertical", 
                      color: "gold", 
                      shape: "rect", 
                      label: "pay",
                      height: 50
                    }}
                    createOrder={(data, actions) => {
                      const price = selectedCurrency === 'USD' 
                        ? eventOptions[selectedEvent].priceUSD 
                        : eventOptions[selectedEvent].priceINR;

                      return actions.order?.create({
                        intent: "CAPTURE",
                        purchase_units: [
                          {
                            amount: {
                              value: price.toString(),
                              currency_code: selectedCurrency
                            },
                            description: `${eventOptions[selectedEvent].label} - ${formData.name}`
                          }
                        ]
                      }) || Promise.resolve("");
                    }}
                    onApprove={async (data, actions) => {
                      try {
                        const details = await actions.order?.capture();
                        const payerName = details?.payer?.name?.given_name || formData.name;
                        alert(`Payment successful! Thank you ${payerName}. You will receive a confirmation email shortly.`);
                        // Reset form
                        setFormData({ name: '', email: '', phone: '' });
                        setSelectedEvent(null);
                        setCurrentStep(1);
                      } catch (error) {
                        console.error('Payment failed:', error);
                        alert('Payment failed. Please try again.');
                      }
                    }}
                    onError={(err) => {
                      console.error('PayPal error:', err);
                      alert('Payment error occurred. Please try again.');
                    }}
                  />
                </PayPalScriptProvider>
              </div>
              <div className="text-center">
                <button
                  onClick={handleBackStep}
                  className="rounded-2xl bg-amber-100 px-6 py-3 text-amber-700 transition-all duration-300 hover:bg-amber-200"
                >
                  Back to Event Selection
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
      <Footer />
    </div>
  );
}