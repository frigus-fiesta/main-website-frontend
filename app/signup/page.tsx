/* eslint-disable import/no-unresolved */
"use client";
import { useState, useId, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
  FaGoogle
} from 'react-icons/fa';

import { supabase } from '@/utils/supabase';
import Header from '@/components/Header';

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
        
        setSuccess('Welcome! Check your email to confirm your account.');
        
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
      <div className="flex min-h-screen items-center justify-center">
        <div className="size-8 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center p-4">
        <Header/>
        <div className="w-full max-w-md pt-20">
          {error && (
            <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4">
              <div className="flex items-center">
                <FaExclamationCircle className="mr-3 size-5 text-red-500" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}
          {success && (
            <div className="mb-6 rounded-lg border border-green-300 bg-green-50 p-4">
              <div className="flex items-center">
                <FaCheck className="mr-3 size-5 text-green-500" />
                <p className="text-sm text-green-700">{success}</p>
              </div>
            </div>
          )}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-gray-900">Sign Up</h1>
              <p className="mt-2 text-gray-600 text-sm">Create your account</p>
            </div>
            <form className="space-y-4" onSubmit={handleEmailSignUp}>
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative mt-1">
                  <FaUser className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id={`${element_unique_id}-fullname`}
                    name="full-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative mt-1">
                  <FaEnvelope className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id={`${element_unique_id}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="relative mt-1">
                  <FaPhone className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id={`${element_unique_id}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:outline-none"
                    placeholder="+91 7842776152"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <FaLock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id={`${element_unique_id}-password`}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-10 focus:outline-none"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash className="size-4" /> : <FaEye className="size-4" />}
                  </button>
                </div>
                {password && (
                  <div className="mt-2 space-y-1">
                    {[
                      { check: hasMinLength, text: "At least 8 characters" },
                      { check: hasUpperCase, text: "Uppercase letter" },
                      { check: hasLowerCase, text: "Lowercase letter" },
                      { check: hasNumber, text: "Number" },
                      { check: hasSpecialChar, text: "Special character" }
                    ].map((req, index) => (
                      <div key={index} className="flex items-center text-xs">
                        <div className={`mr-2 flex size-3 items-center justify-center rounded-full ${
                          req.check 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          {req.check && <FaCheck className="size-2" />}
                        </div>
                        <span className={req.check ? 'text-green-600' : 'text-gray-500'}>
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative mt-1">
                  <FaLock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id={`${element_unique_id}-confirm`}
                    name="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`block w-full rounded-md py-2 pl-10 pr-10 focus:outline-none border ${
                      confirmPassword && !passwordsMatch
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : confirmPassword && passwordsMatch
                        ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                        : 'border-gray-300'
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <FaEyeSlash className="size-4" /> : <FaEye className="size-4" />}
                  </button>
                  {confirmPassword && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {passwordsMatch ? (
                        <FaCheck className="size-4 text-green-500" />
                      ) : (
                        <FaTimes className="size-4 text-red-500" />
                      )}
                    </div>
                  )}
                </div>
                {confirmPassword && !passwordsMatch && (
                  <p className="mt-1 text-xs text-red-600">Passwords do not match</p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-yellow-500 px-4 py-2 text-white font-medium hover:bg-yellow-400 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <FaSpinner className="mr-2 size-4 animate-spin" />
                    Creating account...
                  </div>
                ) : (
                  'Sign Up'
                )}
              </button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">or</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={handleGoogleSignUp}
              disabled={loading}
              className="mt-6 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 font-medium hover:bg-gray-50 focus:outline-none disabled:opacity-50"
            >
              <div className="flex items-center justify-center">
                <FaGoogle className="mr-2 size-4" />
                Continue with Google
              </div>
            </button>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/" className="font-medium text-yellow-500 hover:text-yellow-600">
                  Sign in
                </Link>
              </p>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">
              By signing up, you agree to our{' '}
              <Link href="/terms" className="text-yellow-500 hover:text-yellow-600">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy-policy" className="text-yellow-500 hover:text-yellow-600">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
      <footer className='p-3 bg-gray-50 flex items-center justify-center mt-10'>
        <h1 className='text-gray-700'>© {new Date().getFullYear()} Frigus Fiesta</h1>
      </footer>
    </div>
  );
}