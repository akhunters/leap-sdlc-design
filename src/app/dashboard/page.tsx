"use client";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-secondary-cool-grey-1c-20">
      {/* Dashboard Header */}
      <header className="bg-primary-white border-b border-secondary-cool-grey-1c-40 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Title */}
            <div className="flex items-center space-x-4">
              <img
                src="https://www.emiratesnbd.com/-/media/enbd/images/logos/horizontal_logo.svg?la=en&hash=A33654369475CF9B1FA76FEB570F9B9D"
                alt="Emirates NBD Logo"
                className="h-8 w-auto brightness-0"
              />
              <div className="hidden md:block h-6 w-px bg-secondary-cool-grey-1c-40"></div>
              <h1 className="text-xl font-bold text-primary-2767c">
                Leap IDE Dashboard
              </h1>
            </div>

            {/* User & Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-secondary-7450c hover:text-accent-2935c transition-colors">
                <span className="material-symbols-rounded">notifications</span>
              </button>
              <button className="p-2 text-secondary-7450c hover:text-accent-2935c transition-colors">
                <span className="material-symbols-rounded">help</span>
              </button>
              <div className="flex items-center space-x-3 bg-secondary-cool-grey-1c-20 rounded-lg px-3 py-2">
                <div className="w-8 h-8 bg-accent-2935c rounded-full flex items-center justify-center">
                  <span className="text-primary-white text-sm font-semibold">
                    JD
                  </span>
                </div>
                <span className="text-sm font-medium text-primary-2767c hidden md:block">
                  John Doe
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary-2767c mb-2">
            Welcome back, John! 👋
          </h2>
          <p className="text-secondary-7450c text-lg">
            Ready to automate your SDLC workflow with AI?
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent-2935c-20 rounded-xl flex items-center justify-center">
                <span className="material-symbols-rounded text-accent-2935c text-xl">
                  rocket_launch
                </span>
              </div>
              <span className="text-2xl font-bold text-primary-2767c">12</span>
            </div>
            <h3 className="text-sm font-semibold text-secondary-7450c">
              Active Projects
            </h3>
            <p className="text-xs text-secondary-430c">+2 this week</p>
          </div>

          <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="material-symbols-rounded text-green-600 text-xl">
                  task_alt
                </span>
              </div>
              <span className="text-2xl font-bold text-primary-2767c">47</span>
            </div>
            <h3 className="text-sm font-semibold text-secondary-7450c">
              Tasks Automated
            </h3>
            <p className="text-xs text-secondary-430c">This month</p>
          </div>

          <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="material-symbols-rounded text-blue-600 text-xl">
                  code
                </span>
              </div>
              <span className="text-2xl font-bold text-primary-2767c">
                1.2k
              </span>
            </div>
            <h3 className="text-sm font-semibold text-secondary-7450c">
              Lines Generated
            </h3>
            <p className="text-xs text-secondary-430c">AI-powered</p>
          </div>

          <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="material-symbols-rounded text-purple-600 text-xl">
                  schedule
                </span>
              </div>
              <span className="text-2xl font-bold text-primary-2767c">68%</span>
            </div>
            <h3 className="text-sm font-semibold text-secondary-7450c">
              Time Saved
            </h3>
            <p className="text-xs text-secondary-430c">vs manual</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
              <h3 className="text-xl font-bold text-primary-2767c mb-6">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="group p-4 bg-gradient-to-br from-accent-2935c to-accent-2935c-80 rounded-xl text-left hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="material-symbols-rounded text-primary-white text-2xl">
                      add_circle
                    </span>
                    <span className="text-lg font-semibold text-primary-white">
                      New Project
                    </span>
                  </div>
                  <p className="text-primary-white-80 text-sm">
                    Start a new SDLC automation workflow
                  </p>
                </button>

                <button className="group p-4 bg-gradient-to-br from-primary-2767c to-primary-2767c-80 rounded-xl text-left hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="material-symbols-rounded text-primary-white text-2xl">
                      chat
                    </span>
                    <span className="text-lg font-semibold text-primary-white">
                      AI Assistant
                    </span>
                  </div>
                  <p className="text-primary-white-80 text-sm">
                    Get help with your workflow
                  </p>
                </button>

                <button className="group p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-left hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="material-symbols-rounded text-primary-white text-2xl">
                      integration_instructions
                    </span>
                    <span className="text-lg font-semibold text-primary-white">
                      Connect Tools
                    </span>
                  </div>
                  <p className="text-primary-white-80 text-sm">
                    Integrate with Jira, GitHub, etc.
                  </p>
                </button>

                <button className="group p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-left hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="material-symbols-rounded text-primary-white text-2xl">
                      analytics
                    </span>
                    <span className="text-lg font-semibold text-primary-white">
                      View Reports
                    </span>
                  </div>
                  <p className="text-primary-white-80 text-sm">
                    Analyze your automation metrics
                  </p>
                </button>
              </div>
            </div>

            {/* Recent Projects */}
            <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-primary-2767c">
                  Recent Projects
                </h3>
                <button className="text-accent-2935c hover:text-accent-2935c-80 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-secondary-cool-grey-1c-20 rounded-xl hover:bg-secondary-cool-grey-1c-40 transition-colors cursor-pointer">
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary-2767c">
                      Customer Portal Redesign
                    </h4>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                        In Progress
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-secondary-430c">
                        <span className="material-symbols-rounded text-sm">
                          group
                        </span>
                        <span>4 members</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-secondary-cool-grey-1c-60 rounded-full h-2">
                          <div
                            className="bg-accent-2935c h-2 rounded-full transition-all duration-300"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                        <span className="text-xs text-secondary-430c">75%</span>
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-rounded text-secondary-430c ml-4">
                    chevron_right
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary-cool-grey-1c-20 rounded-xl hover:bg-secondary-cool-grey-1c-40 transition-colors cursor-pointer">
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary-2767c">
                      Payment Gateway Integration
                    </h4>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
                        Testing
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-secondary-430c">
                        <span className="material-symbols-rounded text-sm">
                          group
                        </span>
                        <span>3 members</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-secondary-cool-grey-1c-60 rounded-full h-2">
                          <div
                            className="bg-accent-2935c h-2 rounded-full transition-all duration-300"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <span className="text-xs text-secondary-430c">90%</span>
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-rounded text-secondary-430c ml-4">
                    chevron_right
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary-cool-grey-1c-20 rounded-xl hover:bg-secondary-cool-grey-1c-40 transition-colors cursor-pointer">
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary-2767c">
                      Mobile App Authentication
                    </h4>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                        Planning
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-secondary-430c">
                        <span className="material-symbols-rounded text-sm">
                          group
                        </span>
                        <span>5 members</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-secondary-cool-grey-1c-60 rounded-full h-2">
                          <div
                            className="bg-accent-2935c h-2 rounded-full transition-all duration-300"
                            style={{ width: "25%" }}
                          ></div>
                        </div>
                        <span className="text-xs text-secondary-430c">25%</span>
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-rounded text-secondary-430c ml-4">
                    chevron_right
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Integration Status */}
            <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
              <h3 className="text-lg font-bold text-primary-2767c mb-4">
                Tool Integrations
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-secondary-cool-grey-1c-20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/logos/Jira-mark-brand-RGB.svg"
                      alt="Jira"
                      className="w-6 h-6"
                    />
                    <div>
                      <p className="text-sm font-medium text-primary-2767c">
                        Jira
                      </p>
                      <p className="text-xs text-secondary-430c">2 min ago</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>

                <div className="flex items-center justify-between p-3 bg-secondary-cool-grey-1c-20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/logos/github-mark.svg"
                      alt="GitHub"
                      className="w-6 h-6 brightness-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-primary-2767c">
                        GitHub
                      </p>
                      <p className="text-xs text-secondary-430c">5 min ago</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>

                <div className="flex items-center justify-between p-3 bg-secondary-cool-grey-1c-20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/logos/Figma-logo.svg"
                      alt="Figma"
                      className="w-6 h-6"
                    />
                    <div>
                      <p className="text-sm font-medium text-primary-2767c">
                        Figma
                      </p>
                      <p className="text-xs text-secondary-430c">1 hour ago</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>

                <div className="flex items-center justify-between p-3 bg-secondary-cool-grey-1c-20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/logos/jenkins-svgrepo-com.svg"
                      alt="Jenkins"
                      className="w-6 h-6"
                    />
                    <div>
                      <p className="text-sm font-medium text-primary-2767c">
                        Jenkins
                      </p>
                      <p className="text-xs text-secondary-430c">N/A</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
              </div>
            </div>

            {/* AI Chat Interface */}
            <div className="bg-primary-white rounded-2xl shadow-lg border border-secondary-cool-grey-1c-40 overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-accent-2935c to-accent-2935c-80 text-primary-white">
                <div className="flex items-center space-x-2">
                  <span className="material-symbols-rounded">smart_toy</span>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-accent-2935c rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="material-symbols-rounded text-primary-white text-xs">
                        smart_toy
                      </span>
                    </div>
                    <div className="bg-secondary-cool-grey-1c-20 rounded-lg p-3 flex-1">
                      <p className="text-sm text-secondary-7450c">
                        Hi! I'm here to help you automate your SDLC. What would
                        you like to work on today?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Ask me anything about your workflow..."
                    className="flex-1 px-3 py-2 border border-secondary-cool-grey-1c-40 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent-2935c focus:border-transparent"
                  />
                  <button className="bg-accent-2935c text-primary-white p-2 rounded-lg hover:bg-accent-2935c-80 transition-colors">
                    <span className="material-symbols-rounded text-sm">
                      send
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
              <h3 className="text-lg font-bold text-primary-2767c mb-4">
                This Week
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-7450c">
                    Deployments
                  </span>
                  <span className="text-lg font-bold text-primary-2767c">
                    8
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-7450c">
                    Code Reviews
                  </span>
                  <span className="text-lg font-bold text-primary-2767c">
                    15
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-7450c">
                    Bugs Fixed
                  </span>
                  <span className="text-lg font-bold text-primary-2767c">
                    23
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-secondary-cool-grey-1c-40 pt-4">
                  <span className="text-sm font-medium text-secondary-7450c">
                    Productivity
                  </span>
                  <span className="text-lg font-bold text-green-600">+42%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
