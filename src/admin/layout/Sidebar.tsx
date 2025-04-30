import React from "react";
import {
  Home,
  BarChart2,
  Users,
  Settings,
  HelpCircle,
  MessageSquare,
  Calendar,
  FileText,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

interface NavItem {
  title: string;
  icon: React.ReactNode;
  path: string;
  active?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("dashboard");

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      icon: <Home size={20} />,
      path: "/",
      active: activeItem === "dashboard",
    },
    {
      title: "Analytics",
      icon: <BarChart2 size={20} />,
      path: "/analytics",
      active: activeItem === "analytics",
    },
    {
      title: "Customers",
      icon: <Users size={20} />,
      path: "/customers",
      active: activeItem === "customers",
    },
    {
      title: "Messages",
      icon: <MessageSquare size={20} />,
      path: "/messages",
      active: activeItem === "messages",
    },
    {
      title: "Calendar",
      icon: <Calendar size={20} />,
      path: "/calendar",
      active: activeItem === "calendar",
    },
    {
      title: "Documents",
      icon: <FileText size={20} />,
      path: "/documents",
      active: activeItem === "documents",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/settings",
      active: activeItem === "settings",
    },
    {
      title: "Help",
      icon: <HelpCircle size={20} />,
      path: "/help",
      active: activeItem === "help",
    },
  ];

  const handleNavItemClick = (itemName: string) => {
    setActiveItem(itemName);
    // On mobile, close the sidebar after clicking an item
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-20 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r dark:border-gray-700 dark:bg-gray-800 lg:z-auto lg:shadow-none lg:w-20 lg:translate-x-0 ${
          collapsed ? "lg:w-20" : "lg:w-64"
        } lg:static`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between flex-shrink-0 p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">A</span>
            </div>
            <span
              className={`${
                collapsed ? "lg:hidden" : "lg:block"
              } ml-3 text-lg font-semibold text-gray-800 dark:text-gray-200 hidden md:block`}
            >
              AppName
            </span>
          </div>
          <button
            onClick={toggleCollapse}
            className="p-1 rounded-md lg:inline-block hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            aria-label={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            )}
          </button>
          {/* Mobile Close Button (X) would go here */}
        </div>

        {/* Sidebar Content (Navigation) */}
        <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.title.toLowerCase()}
              href={item.path}
              className={`${
                item.active
                  ? "bg-indigo-50 text-indigo-700 dark:bg-gray-700 dark:text-indigo-300"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              } flex items-center px-3 py-3 transition-colors duration-150 rounded-md group`}
              onClick={(e) => {
                e.preventDefault();
                handleNavItemClick(item.title.toLowerCase());
              }}
            >
              <div className="flex items-center">
                <span className="text-center">{item.icon}</span>
                <span
                  className={`${
                    collapsed ? "lg:hidden" : "lg:block"
                  } ml-3 text-sm font-medium transition-opacity duration-200`}
                >
                  {item.title}
                </span>
              </div>
              {item.active && (
                <span
                  className={`${
                    collapsed ? "hidden" : "block"
                  } ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500`}
                ></span>
              )}
            </a>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="flex-shrink-0 p-4 border-t dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className={`${collapsed ? "lg:hidden" : "lg:block"}`}>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Alex Johnson
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Pro Account
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
