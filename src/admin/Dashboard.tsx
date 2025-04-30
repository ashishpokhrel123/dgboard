import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="text-sm font-medium">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            >
              Home
            </a>
            <svg
              className="fill-current w-3 h-3 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-200">Dashboard</span>
          </li>
        </ol>
      </nav>

      {/* Page Title */}
      <header>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Welcome back, here's what's happening with your projects today.
        </p>
      </header>

      {/* Stat Cards */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {/* Card 1 */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
          <div className="p-3 mr-4 bg-indigo-100 rounded-full dark:bg-indigo-900">
            <svg
              className="w-6 h-6 text-indigo-600 dark:text-indigo-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Clients
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              6,389
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
          <div className="p-3 mr-4 bg-green-100 rounded-full dark:bg-green-900">
            <svg
              className="w-6 h-6 text-green-600 dark:text-green-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Revenues
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              $46,760.89
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
          <div className="p-3 mr-4 bg-amber-100 rounded-full dark:bg-amber-900">
            <svg
              className="w-6 h-6 text-amber-600 dark:text-amber-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Active Projects
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              376
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
          <div className="p-3 mr-4 bg-red-100 rounded-full dark:bg-red-900">
            <svg
              className="w-6 h-6 text-red-600 dark:text-red-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Pending Tasks
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              35
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - 2/3 width on desktop */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm dark:bg-gray-800 overflow-hidden">
            <div className="px-6 py-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                Recent Activity
              </h2>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                View all
              </a>
            </div>
            <div className="p-6">
              <div className="divide-y dark:divide-gray-700">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="py-3 flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm">
                        AJ
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Alex Johnson</span>{" "}
                        completed task{" "}
                        <span className="font-medium">Website Redesign</span>
                      </p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-white rounded-lg shadow-sm dark:bg-gray-800 overflow-hidden">
            <div className="px-6 py-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                Ongoing Projects
              </h2>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                View all
              </a>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-700">
                      <th className="px-4 py-3">Project</th>
                      <th className="px-4 py-3">Progress</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y dark:divide-gray-700">
                    <tr className="text-gray-700 dark:text-gray-300">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="font-semibold">Website Redesign</div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div
                            className="bg-indigo-600 h-2.5 rounded-full"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 inline-block">
                          75%
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Active
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">Aug 15, 2023</td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-300">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="font-semibold">
                            Mobile App Development
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div
                            className="bg-indigo-600 h-2.5 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 inline-block">
                          45%
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full dark:bg-yellow-700 dark:text-yellow-100">
                          In Progress
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">Sep 21, 2023</td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-300">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="font-semibold">
                            E-commerce Integration
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div
                            className="bg-indigo-600 h-2.5 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 inline-block">
                          90%
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100">
                          Review
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">Oct 10, 2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Content - 1/3 width on desktop */}
        <div className="space-y-6">
          {/* Upcoming Meetings */}
          <div className="bg-white rounded-lg shadow-sm dark:bg-gray-800 overflow-hidden">
            <div className="px-6 py-4 border-b dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                Upcoming Meetings
              </h2>
            </div>
            <div className="p-6">
              <div className="divide-y dark:divide-gray-700">
                {[1, 2, 3].map((meeting) => (
                  <div key={meeting} className="py-3">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        Team Standup
                      </h3>
                      <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                        10:00 AM
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      30 minutes
                    </p>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full px-4 py-2 text-sm font-medium leading-5 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-150">
                Schedule Meeting
              </button>
            </div>
          </div>

          {/* Quick Notes */}
          <div className="bg-white rounded-lg shadow-sm dark:bg-gray-800 overflow-hidden">
            <div className="px-6 py-4 border-b dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                Quick Notes
              </h2>
            </div>
            <div className="p-6">
              <textarea
                className="w-full h-32 px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                placeholder="Add a quick note..."
              ></textarea>
              <button className="mt-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-150">
                Save Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
