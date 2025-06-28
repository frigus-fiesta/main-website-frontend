/* eslint-disable import/no-unresolved */
"use client";
import { useState, useId, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaEnvelope, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaExclamationCircle, 
  FaSpinner, 
  FaUser, 
  FaCheck, 
  FaTimes, 
  FaPhone, 
  FaMusic, 
  FaCalendarAlt, 
  FaStar, 
  FaMagic,
  FaGoogle,
  FaArrowRight
} from 'react-icons/fa';

import { supabase } from '@/utils/supabase';

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  
  const router = useRouter();
  const element_unique_id = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Password validation
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const passwordsMatch = password === confirmPassword && password !== '';

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError(null);
    setSuccess(null);
    
    // Validate form
    if (!fullName.trim()) {
      setError('Please enter your full name');
      
return;
    }
    
    if (!email.trim()) {
      setError('Please enter your email address');
      
return;
    }
    
    if (!phoneNumber.trim()) {
      setError('Please enter your phone number');
      
return;
    }
    
    if (!password) {
      setError('Please enter a password');
      
return;
    }
    
    if (!hasMinLength || !hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
      setError('Password does not meet the requirements');
      
return;
    }
    
    if (!passwordsMatch) {
      setError('Passwords do not match');
      
return;
    }
    
    setLoading(true);
    
    try {
      // Create user in Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            phone: phoneNumber,
          },
        },
      });
      
      if (signUpError) throw signUpError;
      
      if (data?.user) {
        // Create profile in profiles_dev table
        const { error: profileError } = await supabase
          .from('profiles_dev')
          .insert({
            uuid: data.user.id,
            full_name: fullName,
            email: email,
            phone: phoneNumber,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          });
        
        if (profileError) {
          console.error('Error creating profile:', profileError);
          // Continue anyway as the auth user was created
        }
        
        setSuccess('Welcome to the experience! Check your email to confirm your account.');
        
        // Redirect after a delay
        setTimeout(() => {
          router.push('/');
        }, 3000);
      }
    } catch (error: any) {
      setError(error.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      
      if (error) {
        throw error;
      }
    } catch (error: any) {
      setError(error.message || 'Failed to sign up with Google');
      setLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="size-32 animate-spin rounded-full border-y-2 border-yellow-400"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Event Management Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>
      {/* Floating Elements */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="animate-float absolute size-2 rounded-full bg-yellow-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          ></div>
        ))}
        {/* Glowing orbs */}
        <div className="absolute left-10 top-20 size-40 animate-pulse rounded-full bg-yellow-400/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 size-32 animate-pulse rounded-full bg-yellow-500/15 blur-2xl delay-1000"></div>
        <div className="bg-yellow-300/8 delay-2000 absolute left-1/4 top-1/2 size-48 animate-pulse rounded-full blur-3xl"></div>
      </div>
      {/* Header */}
      <div className="relative z-20">
        <div className="relative h-24 w-full bg-gradient-to-r from-yellow-600/20 via-yellow-400/30 to-yellow-600/20 md:h-32">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent"></div>
          <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-lg shadow-yellow-400/50"></div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:-bottom-8">
            <div className="group relative">
              <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-lg transition-all duration-300 group-hover:bg-yellow-300/40"></div>
              <div className="relative rounded-full border-4 border-yellow-400 bg-black p-2 shadow-xl shadow-yellow-400/25 md:p-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 md:size-12">
                  {/* <FaMusic className="size-5 animate-pulse text-black md:size-6" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container relative z-20 mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-8 md:py-16">
        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
          {/* Hero Section */}
          <div className="animate-fadeInUp mb-6 text-center md:mb-8">
            <div className="mb-4 flex items-center justify-center gap-2">
              <FaStar className="animate-twinkle size-5 text-yellow-400 md:size-6" />
              <h1 className="animate-glow bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
                Join the Experience
              </h1>
              <FaStar className="animate-twinkle size-5 text-yellow-400 delay-500 md:size-6" />
            </div>
            <p className="mb-3 text-base text-gray-200 md:text-lg">
              Where <span className="font-semibold text-yellow-400">Epic Events</span> Come to Life
            </p>
            <div className="flex items-center justify-center gap-3 text-xs text-gray-300 md:gap-4 md:text-sm">
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="size-3 text-yellow-400 md:size-4" />
                <span>Concerts</span>
              </div>
              <div className="size-1 rounded-full bg-yellow-400"></div>
              <div className="flex items-center gap-1">
                <FaMusic className="size-3 text-yellow-400 md:size-4" />
                <span>Festivals</span>
              </div>
              <div className="size-1 rounded-full bg-yellow-400"></div>
              <div className="flex items-center gap-1">
                <FaMagic className="size-3 text-yellow-400 md:size-4" />
                <span>Shows</span>
              </div>
            </div>
          </div>
          {/* Alert Messages */}
          {error && (
            <div className="animate-slideInDown mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 backdrop-blur-md">
              <div className="flex items-center">
                <FaExclamationCircle className="mr-3 size-5 text-red-400" />
                <p className="text-sm text-red-200">{error}</p>
              </div>
            </div>
          )}
          {success && (
            <div className="animate-slideInDown mb-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4 backdrop-blur-md">
              <div className="flex items-center">
                <FaCheck className="mr-3 size-5 text-green-400" />
                <p className="text-sm text-green-200">{success}</p>
              </div>
            </div>
          )}
          {/* Main Form Card */}
          <div className="animate-slideInUp group relative">
            {/* Enhanced glowing border effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-yellow-300/30 to-yellow-400/20 opacity-75 blur transition duration-1000 group-hover:opacity-100"></div>
            <div className="relative overflow-hidden rounded-2xl border border-yellow-400/20 bg-black/40 shadow-2xl shadow-yellow-400/10 backdrop-blur-xl">
              {/* Animated top border */}
              <div className="relative h-1 w-full overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400">
                <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10">
                <form className="space-y-5 md:space-y-6" onSubmit={handleEmailSignUp}>
                  {/* Full Name */}
                  <div className="animate-fadeInUp group delay-100">
                    <label htmlFor="full-name" className="mb-2 block text-sm font-medium text-gray-200">
                      Full Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-focus-within:text-yellow-400 md:size-5" />
                      <input
                        id={`${element_unique_id}-fullname`}
                        name="full-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="block w-full rounded-xl border border-gray-600/50 bg-black/30 py-3 pl-12 pr-4 text-white backdrop-blur-sm transition-all duration-200 placeholder:text-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 md:py-4"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  {/* Email */}
                  <div className="animate-fadeInUp group delay-200">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-200">
                      Email Address
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-focus-within:text-yellow-400 md:size-5" />
                      <input
                        id={`${element_unique_id}-email`}
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-xl border border-gray-600/50 bg-black/30 py-3 pl-12 pr-4 text-white backdrop-blur-sm transition-all duration-200 placeholder:text-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 md:py-4"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="animate-fadeInUp group delay-300">
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-200">
                      Phone Number
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-focus-within:text-yellow-400 md:size-5" />
                      <input
                        id={`${element_unique_id}-phone`}
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="block w-full rounded-xl border border-gray-600/50 bg-black/30 py-3 pl-12 pr-4 text-white backdrop-blur-sm transition-all duration-200 placeholder:text-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 md:py-4"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>
                  {/* Password */}
                  <div className="animate-fadeInUp delay-400 group">
                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-200">
                      Password
                    </label>
                    <div className="relative">
                      <FaLock className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-focus-within:text-yellow-400 md:size-5" />
                      <input
                        id={`${element_unique_id}-password`}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-xl border border-gray-600/50 bg-black/30 px-12 py-3 text-white backdrop-blur-sm transition-all duration-200 placeholder:text-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 md:py-4"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 hover:text-yellow-400"
                      >
                        {showPassword ? <FaEyeSlash className="size-4 md:size-5" /> : <FaEye className="size-4 md:size-5" />}
                      </button>
                    </div>
                    {/* Password Requirements */}
                    {password && (
                      <div className="animate-fadeInUp mt-3 grid grid-cols-1 gap-2">
                        {[
                          { check: hasMinLength, text: "At least 8 characters" },
                          { check: hasUpperCase, text: "Uppercase letter" },
                          { check: hasLowerCase, text: "Lowercase letter" },
                          { check: hasNumber, text: "Number" },
                          { check: hasSpecialChar, text: "Special character" }
                        ].map((req, index) => (
                          <div key={index} className="flex items-center text-xs">
                            <div className={`mr-3 flex size-3 items-center justify-center rounded-full transition-all duration-300 md:size-4 ${
                              req.check 
                                ? 'border border-yellow-400/30 bg-yellow-400/20 text-yellow-400' 
                                : 'border border-gray-600 bg-gray-700/50 text-gray-500'
                            }`}>
                              {req.check && <FaCheck className="size-2 md:size-3" />}
                            </div>
                            <span className={`transition-colors duration-300 ${req.check ? 'text-yellow-200' : 'text-gray-400'}`}>
                              {req.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Confirm Password */}
                  <div className="animate-fadeInUp group delay-500">
                    <label htmlFor="confirm-password" className="mb-2 block text-sm font-medium text-gray-200">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <FaLock className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-focus-within:text-yellow-400 md:size-5" />
                      <input
                        id={`${element_unique_id}-confirm`}
                        name="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        autoComplete="new-password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`block w-full rounded-xl px-12 py-3 text-white backdrop-blur-sm transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 md:py-4 ${
                          confirmPassword && !passwordsMatch
                            ? 'border-red-500 bg-red-500/10 focus:border-red-400 focus:ring-red-400/20'
                            : confirmPassword && passwordsMatch
                            ? 'border-green-500 bg-green-500/10 focus:border-green-400 focus:ring-green-400/20'
                            : 'border-gray-600/50 bg-black/30 hover:border-gray-500 focus:border-yellow-400 focus:ring-yellow-400/20'
                        }`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 hover:text-yellow-400"
                      >
                        {showConfirmPassword ? <FaEyeSlash className="size-4 md:size-5" /> : <FaEye className="size-4 md:size-5" />}
                      </button>
                      {confirmPassword && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          {passwordsMatch ? (
                            <FaCheck className="size-4 text-green-400 md:size-5" />
                          ) : (
                            <FaTimes className="size-4 text-red-400 md:size-5" />
                          )}
                        </div>
                      )}
                    </div>
                    {confirmPassword && !passwordsMatch && (
                      <p className="animate-fadeInUp mt-2 text-xs text-red-300">Passwords do not match</p>
                    )}
                  </div>
                  {/* Submit Button */}
                  <div className="animate-fadeInUp delay-600">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 font-semibold text-black shadow-lg shadow-yellow-400/25 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/40 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <div className="relative flex items-center justify-center">
                        {loading ? (
                          <>
                            <FaSpinner className="mr-2 size-4 animate-spin md:size-5" />
                            <span className="text-sm md:text-base">Creating your account...</span>
                          </>
                        ) : (
                          <>
                            <span className="text-sm md:text-base">Join the Revolution</span>
                            <FaMagic className="ml-2 size-4 group-hover:animate-pulse md:size-5" />
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </form>
                {/* Divider */}
                <div className="animate-fadeInUp mt-6 delay-700 md:mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-600/50" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-black/40 px-4 text-gray-300 backdrop-blur-sm">or</span>
                    </div>
                  </div>
                </div>
                {/* Google Sign Up */}
                <div className="animate-fadeInUp delay-800 mt-6">
                  <button
                    type="button"
                    onClick={handleGoogleSignUp}
                    disabled={loading}
                    className="group relative w-full overflow-hidden rounded-xl border border-gray-600/50 bg-black/30 px-6 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:bg-black/50 disabled:opacity-70"
                  >
                    <div className="flex items-center justify-center">
                      <FaGoogle className="mr-3 size-4 md:size-5" />
                      <span className="text-sm md:text-base">Continue with Google</span>
                    </div>
                  </button>
                </div>
              </div>
              {/* Footer */}
              <div className="border-t border-gray-700/50 bg-black/20 px-6 py-4 text-center backdrop-blur-sm md:px-8 md:py-6">
                <p className="text-sm text-gray-300">
                  Already part of the experience?{' '}
                  <Link href="/" className="mt-1 flex items-center justify-center gap-1 font-medium text-yellow-400 transition-colors duration-200 hover:text-yellow-300">
                    Sign in here
                    <FaArrowRight className="size-3" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* Terms */}
          <p className="animate-fadeInUp delay-900 mt-6 text-center text-xs text-gray-400">
            By joining, you agree to our{' '}
            <Link href="/terms_and_conditions" className="text-yellow-400 transition-colors duration-200 hover:text-yellow-300">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy_and_policy" className="text-yellow-400 transition-colors duration-200 hover:text-yellow-300">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 212, 50, 0.5); }
          50% { text-shadow: 0 0 30px rgba(255, 212, 50, 0.8), 0 0 40px rgba(255, 212, 50, 0.3); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInDown {
          animation: slideInDown 0.5s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}