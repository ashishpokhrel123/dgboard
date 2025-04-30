import React, { useState, useRef, useEffect } from "react";
import { Bell, User, Search, Moon, Sun, ChevronDown } from "lucide-react";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="z-30 py-4 bg-white shadow-sm dark:bg-gray-800 sticky top-0">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        {/* Left side - Hamburger + Search */}
        <div className="flex items-center">
          {children}

          <div className="relative w-full max-w-xl mr-6 focus-within:text-indigo-500">
            <div className="absolute inset-y-0 flex items-center pl-3">
              <Search className="w-4 h-4 text-gray-500" />
            </div>
            <input
              className="w-full pl-10 pr-3 py-2 text-sm text-gray-700 placeholder-gray-500 
                         bg-gray-100 border-0 rounded-md dark:placeholder-gray-400 
                         dark:focus:placeholder-gray-500 dark:bg-gray-700 dark:text-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="Search..."
              aria-label="Search"
            />
          </div>
        </div>

        {/* Right side - User actions */}
        <div className="flex items-center space-x-4">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none 
                     focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="p-1 relative rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {isNotificationsOpen && (
              <div
                className="absolute right-0 w-72 mt-2 origin-top-right bg-white rounded-md shadow-lg 
                            dark:bg-gray-800 ring-1 ring-black ring-opacity-5 py-1 z-50"
              >
                <div className="px-4 py-3 text-sm text-gray-900 border-b dark:text-gray-200 dark:border-gray-700">
                  <p className="font-semibold">Notifications</p>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {[1, 2, 3].map((_, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 
                               dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      <p className="font-medium">
                        New notification {index + 1}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {index < 2 ? "Just now" : "2 hours ago"}
                      </p>
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-center text-indigo-600 bg-gray-50 
                           hover:bg-gray-100 dark:bg-gray-700 dark:text-indigo-400 
                           dark:hover:bg-gray-600"
                >
                  View all notifications
                </a>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center focus:outline-none"
              aria-label="Account"
              aria-haspopup="true"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                <User className="w-5 h-5" />
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200 hidden md:block">
                Alex Johnson
              </span>
              <ChevronDown className="w-4 h-4 ml-1 text-gray-500 hidden md:block" />
            </button>

            {isProfileOpen && (
              <div
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg 
                            dark:bg-gray-800 ring-1 ring-black ring-opacity-5 py-1 z-50"
              >
                <div className="px-4 py-3 text-sm text-gray-900 border-b dark:text-gray-200 dark:border-gray-700">
                  <p className="font-semibold">Alex Johnson</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    alex@example.com
                  </p>
                </div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                           dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                           dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                           dark:text-gray-200 dark:hover:bg-gray-700 border-t dark:border-gray-700"
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
