"use client";

interface Workspace {
  id: string;
  name: string;
  status: "completed" | "in-progress" | "testing" | "planning";
  lastOpened: string;
  progress?: number;
}

export default function Dashboard() {
  // Static mock data instead of API call
  const recentWorkspaces: Workspace[] = [
    {
      id: "1",
      name: "Customer Portal Redesign",
      status: "in-progress",
      lastOpened: "2 hours ago",
      progress: 75,
    },
    {
      id: "2",
      name: "Payment Gateway Integration",
      status: "testing",
      lastOpened: "Yesterday",
      progress: 90,
    },
    {
      id: "3",
      name: "Mobile App Authentication",
      status: "planning",
      lastOpened: "3 days ago",
      progress: 25,
    },
  ];

  return (
    <div className="min-h-screen bg-secondary-cool-grey-1c-20 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary-white border-r border-secondary-cool-grey-1c-40 flex flex-col">
        {/* Logo Section */}
        <div className="p-6 border-b border-secondary-cool-grey-1c-40">
          <div className="flex items-center space-x-3">
            <img
              src="https://www.emiratesnbd.com/-/media/enbd/images/logos/horizontal_logo.svg?la=en&hash=A33654369475CF9B1FA76FEB570F9B9D"
              alt="Emirates NBD Logo"
              className="h-8 w-auto brightness-0"
            />
          </div>
          <h1 className="text-lg font-bold text-primary-2767c mt-2">
            Leap IDE
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 text-primary-2767c bg-accent-2935c-10 rounded-lg font-medium"
              >
                <span className="material-symbols-rounded text-xl">
                  dashboard
                </span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 text-secondary-7450c hover:text-primary-2767c hover:bg-secondary-cool-grey-1c-20 rounded-lg transition-colors"
              >
                <span className="material-symbols-rounded text-xl">
                  rocket_launch
                </span>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 text-secondary-7450c hover:text-primary-2767c hover:bg-secondary-cool-grey-1c-20 rounded-lg transition-colors"
              >
                <span className="material-symbols-rounded text-xl">
                  smart_toy
                </span>
                <span>AI Assistant</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 text-secondary-7450c hover:text-primary-2767c hover:bg-secondary-cool-grey-1c-20 rounded-lg transition-colors"
              >
                <span className="material-symbols-rounded text-xl">
                  integration_instructions
                </span>
                <span>Integrations</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 text-secondary-7450c hover:text-primary-2767c hover:bg-secondary-cool-grey-1c-20 rounded-lg transition-colors"
              >
                <span className="material-symbols-rounded text-xl">
                  analytics
                </span>
                <span>Reports</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 text-secondary-7450c hover:text-primary-2767c hover:bg-secondary-cool-grey-1c-20 rounded-lg transition-colors"
              >
                <span className="material-symbols-rounded text-xl">
                  settings
                </span>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Tool Integrations in Sidebar */}
        <div className="p-4 border-t border-secondary-cool-grey-1c-40">
          <h3 className="text-sm font-semibold text-secondary-7450c mb-3">
            Tool Status
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="/logos/Jira-mark-brand-RGB.svg"
                  alt="Jira"
                  className="w-4 h-4"
                />
                <span className="text-xs text-secondary-7450c">Jira</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="/logos/github-mark.svg"
                  alt="GitHub"
                  className="w-4 h-4 brightness-0"
                />
                <span className="text-xs text-secondary-7450c">GitHub</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="/logos/Figma-logo.svg"
                  alt="Figma"
                  className="w-4 h-4"
                />
                <span className="text-xs text-secondary-7450c">Figma</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="/logos/jenkins-svgrepo-com.svg"
                  alt="Jenkins"
                  className="w-4 h-4"
                />
                <span className="text-xs text-secondary-7450c">Jenkins</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar with Profile */}
        <header className="bg-primary-white border-b border-secondary-cool-grey-1c-40 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-primary-2767c">
                Dashboard
              </h2>
              <p className="text-secondary-7450c">
                Manage your SDLC workspaces
              </p>
            </div>

            {/* Profile & Actions */}
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
                <span className="text-sm font-medium text-primary-2767c">
                  John Doe
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Workspace Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-accent-2935c-20 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-rounded text-accent-2935c text-xl">
                    workspaces
                  </span>
                </div>
                <span className="text-2xl font-bold text-primary-2767c">3</span>
              </div>
              <h3 className="text-sm font-semibold text-secondary-7450c">
                Total Workspaces
              </h3>
              <p className="text-xs text-secondary-430c">All time</p>
            </div>

            <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-rounded text-green-600 text-xl">
                    trending_up
                  </span>
                </div>
                <span className="text-2xl font-bold text-primary-2767c">
                  63%
                </span>
              </div>
              <h3 className="text-sm font-semibold text-secondary-7450c">
                Avg Progress
              </h3>
              <p className="text-xs text-secondary-430c">
                Across all workspaces
              </p>
            </div>

            <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-rounded text-blue-600 text-xl">
                    schedule
                  </span>
                </div>
                <span className="text-2xl font-bold text-primary-2767c">
                  2h
                </span>
              </div>
              <h3 className="text-sm font-semibold text-secondary-7450c">
                Last Activity
              </h3>
              <p className="text-xs text-secondary-430c">Customer Portal</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Workspace Actions */}
              <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
                <h3 className="text-xl font-bold text-primary-2767c mb-6">
                  Workspace Management
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button className="group p-6 bg-gradient-to-br from-accent-2935c to-accent-2935c-80 rounded-xl text-left hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-white-20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-rounded text-primary-white text-2xl">
                          add_circle
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-primary-white">
                          Create Workspace
                        </h4>
                        <p className="text-primary-white-80 text-sm">
                          Start a new SDLC project
                        </p>
                      </div>
                    </div>
                    <p className="text-primary-white-80 text-sm leading-relaxed">
                      Set up a new workspace with AI-powered requirements
                      gathering, automated Jira integration, and code generation
                      capabilities.
                    </p>
                  </button>

                  <button className="group p-6 bg-gradient-to-br from-primary-2767c to-primary-2767c-80 rounded-xl text-left hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-white-20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-rounded text-primary-white text-2xl">
                          folder_open
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-primary-white">
                          Open Workspace
                        </h4>
                        <p className="text-primary-white-80 text-sm">
                          Continue existing project
                        </p>
                      </div>
                    </div>
                    <p className="text-primary-white-80 text-sm leading-relaxed">
                      Access your existing workspaces to continue development,
                      review progress, or collaborate with your team members.
                    </p>
                  </button>
                </div>
              </div>

              {/* Recent Workspaces */}
              <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-primary-2767c">
                    Recent Workspaces
                  </h3>
                  <button className="text-accent-2935c hover:text-accent-2935c-80 text-sm font-medium">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {recentWorkspaces.map((workspace, index) => (
                    <div
                      key={workspace.id || index}
                      className="flex items-center justify-between p-4 bg-secondary-cool-grey-1c-20 rounded-xl hover:bg-secondary-cool-grey-1c-40 transition-colors cursor-pointer"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary-2767c">
                          {workspace.name}
                        </h4>
                        <div className="flex items-center space-x-4 mt-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              workspace.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : workspace.status === "in-progress"
                                ? "bg-blue-100 text-blue-800"
                                : workspace.status === "testing"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {workspace.status}
                          </span>
                          <div className="flex items-center space-x-1 text-xs text-secondary-430c">
                            <span className="material-symbols-rounded text-sm">
                              schedule
                            </span>
                            <span>{workspace.lastOpened}</span>
                          </div>
                        </div>
                        {workspace.progress !== undefined && (
                          <div className="mt-2">
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 bg-secondary-cool-grey-1c-60 rounded-full h-2">
                                <div
                                  className="bg-accent-2935c h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${workspace.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-secondary-430c">
                                {workspace.progress}% complete
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      <span className="material-symbols-rounded text-secondary-430c ml-4">
                        chevron_right
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
                <h3 className="text-lg font-bold text-primary-2767c mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-rounded text-blue-600 text-sm">
                        edit
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-primary-2767c">
                        Updated Customer Portal
                      </p>
                      <p className="text-xs text-secondary-430c">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-rounded text-green-600 text-sm">
                        check_circle
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-primary-2767c">
                        Completed testing phase
                      </p>
                      <p className="text-xs text-secondary-430c">Yesterday</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-rounded text-purple-600 text-sm">
                        integration_instructions
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-primary-2767c">
                        Connected GitHub repo
                      </p>
                      <p className="text-xs text-secondary-430c">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Shortcuts */}
              <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
                <h3 className="text-lg font-bold text-primary-2767c mb-4">
                  Quick Shortcuts
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-secondary-cool-grey-1c-20 rounded-lg transition-colors">
                    <span className="material-symbols-rounded text-accent-2935c">
                      description
                    </span>
                    <span className="text-sm font-medium text-primary-2767c">
                      View Documentation
                    </span>
                  </button>

                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-secondary-cool-grey-1c-20 rounded-lg transition-colors">
                    <span className="material-symbols-rounded text-accent-2935c">
                      support_agent
                    </span>
                    <span className="text-sm font-medium text-primary-2767c">
                      Get Support
                    </span>
                  </button>

                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-secondary-cool-grey-1c-20 rounded-lg transition-colors">
                    <span className="material-symbols-rounded text-accent-2935c">
                      settings
                    </span>
                    <span className="text-sm font-medium text-primary-2767c">
                      Workspace Settings
                    </span>
                  </button>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-secondary-cool-grey-1c-40">
                <h3 className="text-lg font-bold text-primary-2767c mb-4">
                  Quick Tips
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-2935c-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-rounded text-accent-2935c text-sm">
                        lightbulb
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary-2767c">
                        Start with Requirements
                      </h4>
                      <p className="text-xs text-secondary-430c">
                        Describe your project in natural language. Our AI will
                        help structure your requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-rounded text-blue-600 text-sm">
                        integration_instructions
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary-2767c">
                        Connect Your Tools
                      </h4>
                      <p className="text-xs text-secondary-430c">
                        Link Jira, GitHub, and other tools for seamless
                        automation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-rounded text-green-600 text-sm">
                        smart_toy
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary-2767c">
                        Ask the AI Assistant
                      </h4>
                      <p className="text-xs text-secondary-430c">
                        Get help with setup, best practices, or troubleshooting
                        anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
