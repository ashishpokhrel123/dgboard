import React, { useState, useEffect } from "react";
import {
  EnvelopeIcon,
  XCircleIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const NepalLogo: React.FC = () => {
  return (
    <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center">
      <span className="text-[#003366] font-bold">NL</span>
    </div>
  );
};

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  color = "blue",
}) => {
  const sizeClasses = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const colorClasses = {
    blue: "text-blue-500",
    white: "text-white",
  };

  return (
    <svg
      className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"
      />
    </svg>
  );
};

interface ResetPasswordFormProps {
  title: string;
  subtitle: string;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  title,
  subtitle,
}) => {
  const [email, setEmail] = useState("");
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [generalError, setGeneralError] = useState("");

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setCaptchaError("");
    setGeneralError("");

    let hasError = false;

    // Validate email
    if (!email) {
      setEmailError("Email cannot be blank.");
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError("PLEASE CHECK YOUR EMAIL ADDRESS AGAIN AND TRY.");
      setGeneralError("Wrong Input");
      hasError = true;
    }

    // Validate captcha
    if (!isCaptchaChecked) {
      setCaptchaError("Please verify that you are not a robot.");
      hasError = true;
    }

    if (!hasError) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        alert("Password reset link sent!"); // Replace with actual reset logic
      }, 1500);
    }
  };

  // Clear input fields
  const clearEmail = () => setEmail("");

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="text-sm text-gray-500 text-center mt-2">{subtitle}</p>

      {/* General Error Message */}
      {generalError && (
        <div className="mt-4 flex items-center justify-center text-red-600 text-sm">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {generalError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <EnvelopeIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full pl-10 pr-10 py-2 border ${
                emailError ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              placeholder="demo@exam.com"
            />
            {email && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <XCircleIcon
                  className="h-5 w-5 text-gray-400 cursor-pointer"
                  onClick={clearEmail}
                />
              </div>
            )}
          </div>
          {emailError && (
            <p className="mt-1 text-sm text-red-600">{emailError}</p>
          )}
        </div>

        {/* reCAPTCHA Checkbox */}
        <div>
          <div className="flex items-center justify-center border border-gray-300 rounded-md p-4 bg-white">
            <div className="flex items-center">
              <input
                id="captcha"
                type="checkbox"
                checked={isCaptchaChecked}
                onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="captcha" className="ml-2 text-sm text-gray-600">
                I'm not a robot
              </label>
            </div>
            <div className="ml-4 flex items-center">
              <CheckIcon className="h-6 w-6 text-blue-600" />
              <span className="ml-1 text-xs text-gray-500">reCAPTCHA</span>
            </div>
          </div>
          <div className="flex justify-end mt-1 text-xs text-gray-500">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <span className="mx-1">-</span>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </div>
          {captchaError && (
            <p className="mt-1 text-sm text-red-600">{captchaError}</p>
          )}
        </div>

        {/* Reset Password Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center py-2 px-4 bg-[#003366] text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
        >
          {isLoading ? (
            <LoadingSpinner size="sm" color="white" />
          ) : (
            <>Reset Password</>
          )}
        </button>
      </form>
    </div>
  );
};

const ResetPasswordPage: React.FC = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <LoadingSpinner size="lg" color="blue" />
          <p className="mt-4 text-gray-600 text-sm">
            Loading Digital Notice Board...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white text-gray-800">
      {/* Left Panel */}
      <div className="bg-[#003366] text-white p-10 flex flex-col justify-between md:w-1/2 lg:w-2/5">
        <div className="flex flex-col items-center gap-6 mt-10">
          <NepalLogo />
          <div className="text-center max-w-sm">
            <h2 className="text-2xl font-bold">Welcome</h2>
            <div className="w-full h-px bg-white/30 my-4"></div>
            <p className="text-sm leading-relaxed opacity-90">
              A Digital Notice Board is an electronic display system that
              replaces traditional paper notices, showing important information
              and updates on digital screens or monitors.
            </p>
          </div>
        </div>
        <footer className="text-xs text-center opacity-70 mt-8">
          © {new Date().getFullYear()} Digital Notice Board
        </footer>
      </div>

      {/* Right Panel */}
      <div className="flex items-center justify-center p-6 md:p-12 md:w-1/2 lg:w-3/5 bg-gray-50">
        <ResetPasswordForm
          title="Reset Password"
          subtitle="Enter your email to receive a password reset link."
        />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
