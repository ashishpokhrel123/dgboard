import React, { useState, useEffect } from "react";
import {
  EnvelopeIcon,
  LockClosedIcon,
  CheckIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { XCircleIcon } from "lucide-react";

const NepalLogo: React.FC = () => {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
      <span className="text-2xl font-bold text-[#003366]">NL NL</span>
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

interface LoginFormProps {
  title: string;
  subtitle: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ title, subtitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setCaptchaError("");
    setGeneralError("");

    let hasError = false;

    if (!email) {
      setEmailError("Email cannot be blank.");
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError("Please check your email address and try again.");
      setGeneralError("Invalid input");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Password cannot be blank.");
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      setGeneralError("Invalid input");
      hasError = true;
    }

    if (!isCaptchaChecked) {
      setCaptchaError("Please verify that you are not a robot.");
      hasError = true;
    }

    if (!hasError) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        alert("Login successful!");
      }, 1500);
    }
  };

  const clearEmail = () => setEmail("");
  const clearPassword = () => setPassword("");

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
      </div>

      {generalError && (
        <div className="flex items-center justify-center rounded-md bg-red-50 p-3 text-sm text-red-600">
          <svg
            className="mr-2 h-5 w-5"
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

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <div className="relative mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <EnvelopeIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`block w-full rounded-md border py-2 pl-10 pr-10 text-sm focus:border-blue-500 focus:ring-blue-500 ${
                emailError ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="demo@example.com"
              aria-label="Email address"
            />
            {email && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <XCircleIcon
                  className="h-5 w-5 cursor-pointer text-gray-400"
                  onClick={clearEmail}
                  aria-label="Clear email"
                />
              </div>
            )}
          </div>
          {emailError && (
            <p className="mt-1 text-sm text-red-600">{emailError}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`block w-full rounded-md border py-2 pl-10 pr-10 text-sm focus:border-blue-500 focus:ring-blue-500 ${
                passwordError ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="••••••••"
              aria-label="Password"
            />
            {password && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <XCircleIcon
                  className="h-5 w-5 cursor-pointer text-gray-400"
                  onClick={clearPassword}
                  aria-label="Clear password"
                />
              </div>
            )}
          </div>
          {passwordError && (
            <p className="mt-1 text-sm text-red-600">{passwordError}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              aria-label="Remember me"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-600"
            >
              Remember me
            </label>
          </div>
          <div>
            <a
              href="/resetPassword"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between rounded-md border border-gray-300 bg-white p-4">
            <div className="flex items-center">
              <input
                id="captcha"
                type="checkbox"
                checked={isCaptchaChecked}
                onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-label="reCAPTCHA verification"
              />
              <label htmlFor="captcha" className="ml-2 text-sm text-gray-600">
                I'm not a robot
              </label>
            </div>
            <div className="flex items-center">
              <CheckIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
              <span className="ml-1 text-xs text-gray-500">reCAPTCHA</span>
            </div>
          </div>
          {captchaError && (
            <p className="mt-1 text-sm text-red-600">{captchaError}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full items-center justify-center rounded-md bg-[#003366] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#002244] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Log in"
        >
          {isLoading ? (
            <LoadingSpinner size="sm" color="white" />
          ) : (
            <>
              Log In
              <ArrowRightCircleIcon
                className="ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

const LoginPage: React.FC = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <LoadingSpinner size="lg" color="blue" />
          <p className="mt-4 text-sm text-gray-600">
            Loading Digital Notice Board...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col font-inter md:flex-row">
      <div className="flex flex-col justify-between bg-[#003366] p-10 text-white md:w-1/2 lg:w-2/5">
        <div className="mt-10 flex flex-col items-center gap-8">
          <NepalLogo />
          <div className="max-w-sm text-center">
            <h2 className="text-2xl font-semibold">Welcome</h2>
            <div className="my-4 h-px w-full bg-white/30"></div>
            <p className="text-sm leading-relaxed opacity-90">
              A Digital Notice Board is an electronic display system that
              replaces traditional paper notices, showing important information
              and updates on digital screens or monitors.
            </p>
          </div>
        </div>
        <footer className="mt-8 text-center text-xs opacity-70">
          © {new Date().getFullYear()} Digital Notice Board
        </footer>
      </div>

      <div className="flex flex-1 items-center justify-center bg-gray-50 p-6 md:p-12">
        <LoginForm
          title="Digital Notice Board"
          subtitle="Enter your email and password to access your account."
        />
      </div>
    </div>
  );
};

export default LoginPage;
