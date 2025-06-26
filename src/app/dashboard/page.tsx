"use client";

import { useState } from "react";

interface Workspace {
  id: string;
  name: string;
  status: "completed" | "in-progress" | "testing" | "planning";
  lastOpened: string;
  progress?: number;
  currentStage?: string;
  currentSubStage?: string;
}

// Define workspace stages and sub-stages
const workspaceStages = [
  {
    id: "idea-to-requirement",
    name: "Idea to Requirement",
    icon: "lightbulb",
    description: "Transform ideas into structured requirements",
    subStages: [
      {
        id: "requirement-gathering",
        name: "Requirement Gathering",
        icon: "assignment",
      },
      { id: "epics-stories", name: "Epics and Stories", icon: "list_alt" },
    ],
  },
  {
    id: "requirement-to-code",
    name: "Requirement to Code",
    icon: "code",
    description: "Convert requirements into working code",
    subStages: [
      {
        id: "static-code-analyzer",
        name: "Static Code Analyzer",
        icon: "bug_report",
      },
    ],
  },
  {
    id: "code-to-deployment",
    name: "Code to Deployment",
    icon: "rocket_launch",
    description: "Deploy code to production environment",
    subStages: [
      {
        id: "code-provisioning",
        name: "Code Provisioning",
        icon: "cloud_upload",
      },
    ],
  },
];

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedStage, setExpandedStage] = useState<string | null>(null);
  const [showStageSelector, setShowStageSelector] = useState(false);
  const [expandedWorkspace, setExpandedWorkspace] = useState<string | null>(
    null
  );
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleStageExpansion = (stageId: string) => {
    setExpandedStage(expandedStage === stageId ? null : stageId);
  };

  const toggleWorkspaceExpansion = (workspaceId: string) => {
    setExpandedWorkspace(
      expandedWorkspace === workspaceId ? null : workspaceId
    );
  };

  const handleCreateWorkspace = (stageId?: string, subStageId?: string) => {
    // Handle workspace creation starting from specific stage
    console.log("Creating workspace starting from:", stageId, subStageId);
    setShowStageSelector(false);
    // Here you would implement the actual workspace creation logic
  };

  // Helper function to determine if a stage is completed
  const getStageCompletionStatus = (workspace: Workspace, stageId: string) => {
    if (!workspace.currentStage) return false;

    const currentStageIndex = workspaceStages.findIndex(
      (s) => s.id === workspace.currentStage
    );
    const checkStageIndex = workspaceStages.findIndex((s) => s.id === stageId);

    return (
      currentStageIndex > checkStageIndex ||
      (workspace.status === "completed" && workspace.currentStage === stageId)
    );
  };

  // Helper function to determine if a sub-stage is completed
  const getSubStageCompletionStatus = (
    workspace: Workspace,
    stageId: string,
    subStageId: string
  ) => {
    if (!workspace.currentStage || !workspace.currentSubStage) return false;

    const currentStage = workspaceStages.find(
      (s) => s.id === workspace.currentStage
    );
    const checkStage = workspaceStages.find((s) => s.id === stageId);

    if (!currentStage || !checkStage) return false;

    // If we're past this stage entirely, all its sub-stages are complete
    const currentStageIndex = workspaceStages.findIndex(
      (s) => s.id === workspace.currentStage
    );
    const checkStageIndex = workspaceStages.findIndex((s) => s.id === stageId);

    if (currentStageIndex > checkStageIndex) return true;

    // If we're in the same stage, check sub-stage progress
    if (workspace.currentStage === stageId) {
      const currentSubStageIndex = currentStage.subStages.findIndex(
        (ss) => ss.id === workspace.currentSubStage
      );
      const checkSubStageIndex = checkStage.subStages.findIndex(
        (ss) => ss.id === subStageId
      );

      return (
        currentSubStageIndex > checkSubStageIndex ||
        (workspace.status === "completed" &&
          workspace.currentSubStage === subStageId)
      );
    }

    return false;
  };

  // Static mock data instead of API call - updated with stage info
  const recentWorkspaces: Workspace[] = [
    {
      id: "1",
      name: "Customer Portal Redesign",
      status: "in-progress",
      lastOpened: "2 hours ago",
      progress: 75,
      currentStage: "requirement-to-code",
      currentSubStage: "static-code-analyzer",
    },
    {
      id: "2",
      name: "Payment Gateway Integration",
      status: "testing",
      lastOpened: "Yesterday",
      progress: 90,
      currentStage: "code-to-deployment",
      currentSubStage: "code-provisioning",
    },
    {
      id: "3",
      name: "Mobile App Authentication",
      status: "planning",
      lastOpened: "3 days ago",
      progress: 25,
      currentStage: "idea-to-requirement",
      currentSubStage: "requirement-gathering",
    },
    {
      id: "4",
      name: "API Documentation System",
      status: "completed",
      lastOpened: "1 week ago",
      progress: 100,
      currentStage: "code-to-deployment",
      currentSubStage: "code-provisioning",
    },
    {
      id: "5",
      name: "User Management Dashboard",
      status: "in-progress",
      lastOpened: "5 hours ago",
      progress: 45,
      currentStage: "idea-to-requirement",
      currentSubStage: "epics-stories",
    },
    {
      id: "6",
      name: "Notification Service",
      status: "completed",
      lastOpened: "2 weeks ago",
      progress: 100,
      currentStage: "code-to-deployment",
      currentSubStage: "code-provisioning",
    },
    {
      id: "7",
      name: "Analytics Platform",
      status: "in-progress",
      lastOpened: "1 day ago",
      progress: 60,
      currentStage: "requirement-to-code",
      currentSubStage: "static-code-analyzer",
    },
  ];

  // Filter workspaces to show completed and in-progress only
  const filteredWorkspaces = recentWorkspaces.filter(
    (workspace) =>
      workspace.status === "completed" || workspace.status === "in-progress"
  );

  return (
    <div
      className={`min-h-screen flex ${
        isDarkMode ? "bg-gray-900" : "bg-secondary-cool-grey-1c-20"
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarCollapsed ? "w-16" : "w-64"
        } border-r flex flex-col transition-all duration-300 fixed left-0 top-0 h-screen z-10 ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-primary-white border-secondary-cool-grey-1c-40"
        }`}
      >
        {/* Logo Section */}
        <div
          className={`p-6 border-b ${
            isDarkMode ? "border-gray-700" : "border-secondary-cool-grey-1c-40"
          }`}
        >
          <div className="flex items-center justify-center">
            {!isSidebarCollapsed ? (
              <img
                src="https://www.emiratesnbd.com/-/media/enbd/images/logos/horizontal_logo.svg?la=en&hash=A33654369475CF9B1FA76FEB570F9B9D"
                alt="Emirates NBD Logo"
                className={`h-8 w-auto ${isDarkMode ? "" : "brightness-0"}`}
              />
            ) : (
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isDarkMode ? "bg-gray-700" : "bg-secondary-cool-grey-1c-40"
                }`}
              >
                <span className="material-symbols-rounded text-accent-2935c text-lg">
                  workspaces
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Create Workspace Button */}
        <div className="p-4">
          <button
            onClick={() => handleCreateWorkspace()}
            className={`w-full ${
              isSidebarCollapsed
                ? "h-12 flex items-center justify-center"
                : "flex items-center justify-center space-x-2"
            } p-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
              isDarkMode
                ? "bg-accent-2935c hover:bg-accent-2935c-80 text-white"
                : "bg-accent-2935c hover:bg-accent-2935c-80 text-primary-white"
            }`}
            title={isSidebarCollapsed ? "Create Workspace" : ""}
          >
            <span className="material-symbols-rounded text-xl">add_circle</span>
            {!isSidebarCollapsed && (
              <span className="text-sm">Create Workspace</span>
            )}
          </button>
        </div>

        {/* Search Workspaces */}
        {!isSidebarCollapsed ? (
          <div className="p-4">
            <div
              className={`relative ${
                isDarkMode ? "text-gray-300" : "text-secondary-7450c"
              }`}
            >
              <span className="material-symbols-rounded absolute left-3 top-1/2 transform -translate-y-1/2 text-sm">
                search
              </span>
              <input
                type="text"
                placeholder="Search workspaces..."
                className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors text-sm ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-accent-2935c focus:bg-gray-600"
                    : "bg-secondary-cool-grey-1c-20 border-secondary-cool-grey-1c-40 text-primary-2767c placeholder-secondary-430c focus:border-accent-2935c focus:bg-primary-white"
                } focus:outline-none focus:ring-2 focus:ring-accent-2935c focus:ring-opacity-20`}
              />
            </div>
          </div>
        ) : (
          <div className="p-4">
            <button
              onClick={toggleSidebar}
              className={`w-full h-12 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "text-gray-300 hover:text-accent-2935c hover:bg-gray-700"
                  : "text-secondary-7450c hover:text-accent-2935c hover:bg-secondary-cool-grey-1c-20"
              }`}
              title="Search Workspaces"
            >
              <span className="material-symbols-rounded text-xl">search</span>
            </button>
          </div>
        )}

        {/* Active Workspaces */}
        {!isSidebarCollapsed ? (
          <div
            className={`flex-1 p-4 border-t ${
              isDarkMode
                ? "border-gray-700"
                : "border-secondary-cool-grey-1c-40"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3
                className={`text-sm font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-secondary-7450c"
                }`}
              >
                Active Workspaces
                <span
                  className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                    isDarkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-secondary-cool-grey-1c-20 text-secondary-430c"
                  }`}
                >
                  {filteredWorkspaces.length}
                </span>
              </h3>
            </div>

            <div className="space-y-2 overflow-y-auto max-h-96">
              {filteredWorkspaces.map((workspace, index) => {
                const currentStageInfo = workspaceStages.find(
                  (s) => s.id === workspace.currentStage
                );
                const currentSubStageInfo = currentStageInfo?.subStages.find(
                  (ss) => ss.id === workspace.currentSubStage
                );
                const isExpanded = expandedWorkspace === workspace.id;

                return (
                  <div
                    key={workspace.id || index}
                    className={`p-3 rounded-lg transition-colors cursor-pointer group ${
                      isDarkMode
                        ? "hover:bg-gray-700"
                        : "hover:bg-secondary-cool-grey-1c-20"
                    } ${
                      isExpanded
                        ? isDarkMode
                          ? "bg-gray-700"
                          : "bg-secondary-cool-grey-1c-20"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`text-sm font-medium truncate ${
                            isDarkMode ? "text-white" : "text-primary-2767c"
                          }`}
                        >
                          {workspace.name}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              workspace.status === "completed"
                                ? isDarkMode
                                  ? "bg-green-900 text-green-300"
                                  : "bg-green-100 text-green-700"
                                : workspace.status === "in-progress"
                                ? isDarkMode
                                  ? "bg-blue-900 text-blue-300"
                                  : "bg-blue-100 text-blue-700"
                                : workspace.status === "testing"
                                ? isDarkMode
                                  ? "bg-yellow-900 text-yellow-300"
                                  : "bg-yellow-100 text-yellow-700"
                                : isDarkMode
                                ? "bg-gray-600 text-gray-300"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {workspace.status}
                          </span>
                          <span
                            className={`text-xs ${
                              isDarkMode
                                ? "text-gray-400"
                                : "text-secondary-430c"
                            }`}
                          >
                            {workspace.lastOpened}
                          </span>
                        </div>

                        {/* Current Stage Info */}
                        {currentStageInfo && (
                          <div
                            className={`flex items-center space-x-1 mt-1 text-xs ${
                              isDarkMode
                                ? "text-gray-400"
                                : "text-secondary-430c"
                            }`}
                          >
                            <span className="material-symbols-rounded text-xs">
                              {currentStageInfo.icon}
                            </span>
                            <span className="truncate">
                              {currentSubStageInfo
                                ? currentSubStageInfo.name
                                : currentStageInfo.name}
                            </span>
                          </div>
                        )}

                        {workspace.progress !== undefined && (
                          <div className="mt-2">
                            <div
                              className={`w-full rounded-full h-1.5 ${
                                isDarkMode
                                  ? "bg-gray-600"
                                  : "bg-secondary-cool-grey-1c-60"
                              }`}
                            >
                              <div
                                className="bg-accent-2935c h-1.5 rounded-full transition-all duration-300"
                                style={{ width: `${workspace.progress}%` }}
                              ></div>
                            </div>
                            <span
                              className={`text-xs mt-1 block ${
                                isDarkMode
                                  ? "text-gray-400"
                                  : "text-secondary-430c"
                              }`}
                            >
                              {workspace.progress}% complete
                            </span>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => toggleWorkspaceExpansion(workspace.id)}
                        className={`material-symbols-rounded text-sm transition-all duration-200 ${
                          isDarkMode
                            ? "text-gray-400 hover:text-gray-200"
                            : "text-secondary-430c hover:text-primary-2767c"
                        } ${isExpanded ? "rotate-90" : ""}`}
                      >
                        chevron_right
                      </button>
                    </div>

                    {/* Expanded Stage View - Now inside the same card */}
                    {isExpanded && (
                      <div className="mt-4 pt-3 border-t border-accent-2935c-40">
                        <h5
                          className={`text-xs font-semibold mb-3 ${
                            isDarkMode
                              ? "text-gray-300"
                              : "text-secondary-7450c"
                          }`}
                        >
                          SDLC Progress
                        </h5>
                        <div className="space-y-2">
                          {workspaceStages.map((stage) => {
                            const isCurrentStage =
                              workspace.currentStage === stage.id;
                            const isCompleted = getStageCompletionStatus(
                              workspace,
                              stage.id
                            );

                            return (
                              <div key={stage.id} className="space-y-1">
                                {/* Main Stage */}
                                <div
                                  className={`flex items-center space-x-2 p-2 rounded ${
                                    isCurrentStage
                                      ? isDarkMode
                                        ? "bg-accent-2935c-20"
                                        : "bg-accent-2935c-10"
                                      : ""
                                  }`}
                                >
                                  <div
                                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                                      isCompleted
                                        ? "bg-green-500"
                                        : isCurrentStage
                                        ? "bg-accent-2935c"
                                        : isDarkMode
                                        ? "bg-gray-600"
                                        : "bg-gray-300"
                                    }`}
                                  >
                                    {isCompleted ? (
                                      <span className="material-symbols-rounded text-white text-xs">
                                        check
                                      </span>
                                    ) : isCurrentStage ? (
                                      <span className="material-symbols-rounded text-white text-xs">
                                        {stage.icon}
                                      </span>
                                    ) : null}
                                  </div>
                                  <span
                                    className={`text-xs font-medium ${
                                      isCurrentStage
                                        ? isDarkMode
                                          ? "text-white"
                                          : "text-primary-2767c"
                                        : isDarkMode
                                        ? "text-gray-400"
                                        : "text-secondary-7450c"
                                    }`}
                                  >
                                    {stage.name}
                                  </span>
                                </div>

                                {/* Sub-stages */}
                                <div className="ml-6 space-y-1">
                                  {stage.subStages.map((subStage) => {
                                    const isCurrentSubStage =
                                      workspace.currentSubStage ===
                                        subStage.id && isCurrentStage;
                                    const isSubStageCompleted =
                                      getSubStageCompletionStatus(
                                        workspace,
                                        stage.id,
                                        subStage.id
                                      );

                                    return (
                                      <div
                                        key={subStage.id}
                                        className={`flex items-center space-x-2 p-1.5 rounded ${
                                          isCurrentSubStage
                                            ? isDarkMode
                                              ? "bg-accent-2935c-10"
                                              : "bg-accent-2935c-5"
                                            : ""
                                        }`}
                                      >
                                        <div
                                          className={`w-3 h-3 rounded-full ${
                                            isSubStageCompleted
                                              ? "bg-green-500"
                                              : isCurrentSubStage
                                              ? "bg-accent-2935c"
                                              : isDarkMode
                                              ? "bg-gray-700"
                                              : "bg-gray-200"
                                          }`}
                                        ></div>
                                        <span
                                          className={`text-xs ${
                                            isCurrentSubStage
                                              ? isDarkMode
                                                ? "text-white"
                                                : "text-primary-2767c"
                                              : isDarkMode
                                              ? "text-gray-500"
                                              : "text-secondary-430c"
                                          }`}
                                        >
                                          {subStage.name}
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div
            className={`flex-1 p-4 border-t ${
              isDarkMode
                ? "border-gray-700"
                : "border-secondary-cool-grey-1c-40"
            }`}
          >
            <button
              onClick={toggleSidebar}
              className={`w-full h-16 flex flex-col items-center justify-center rounded-lg transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "text-gray-300 hover:text-accent-2935c hover:bg-gray-700"
                  : "text-secondary-7450c hover:text-accent-2935c hover:bg-secondary-cool-grey-1c-20"
              }`}
              title="View Active Workspaces"
            >
              <span className="material-symbols-rounded text-xl mb-1">
                folder
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-secondary-cool-grey-1c-40 text-secondary-430c"
                }`}
              >
                {filteredWorkspaces.length}
              </span>
            </button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        {/* Top Bar with Profile */}
        <header className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Sidebar Toggle Button */}
              <button
                onClick={toggleSidebar}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-accent-2935c hover:bg-gray-700"
                    : "text-secondary-7450c hover:text-accent-2935c hover:bg-secondary-cool-grey-1c-20"
                }`}
                title={
                  isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"
                }
              >
                <span className="material-symbols-rounded">
                  {isSidebarCollapsed ? "left_panel_open" : "left_panel_close"}
                </span>
              </button>

              <div>
                <h2
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-primary-2767c"
                  }`}
                >
                  Dashboard
                </h2>
                <p
                  className={
                    isDarkMode ? "text-gray-300" : "text-secondary-7450c"
                  }
                >
                  Manage your SDLC workspaces
                </p>
              </div>
            </div>

            {/* Profile & Actions */}
            <div className="flex items-center space-x-4">
              <button
                className={`p-2 transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:text-accent-2935c"
                    : "text-secondary-7450c hover:text-accent-2935c"
                }`}
              >
                <span className="material-symbols-rounded">notifications</span>
              </button>
              <button
                className={`p-2 transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:text-accent-2935c"
                    : "text-secondary-7450c hover:text-accent-2935c"
                }`}
              >
                <span className="material-symbols-rounded">help</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-accent-2935c hover:bg-gray-700"
                    : "text-secondary-7450c hover:text-accent-2935c hover:bg-secondary-cool-grey-1c-20"
                }`}
                title={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                <span className="material-symbols-rounded">
                  {isDarkMode ? "light_mode" : "dark_mode"}
                </span>
              </button>

              <div
                className={`flex items-center space-x-3 rounded-lg px-3 py-2 ${
                  isDarkMode ? "bg-gray-700" : "bg-secondary-cool-grey-1c-20"
                }`}
              >
                <div className="w-8 h-8 bg-accent-2935c rounded-full flex items-center justify-center">
                  <span className="text-primary-white text-sm font-semibold">
                    JD
                  </span>
                </div>
                <span
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-white" : "text-primary-2767c"
                  }`}
                >
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
            <div
              className={`rounded-2xl p-6 shadow-lg border ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-primary-white border-secondary-cool-grey-1c-40"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-accent-2935c-20 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-rounded text-accent-2935c text-xl">
                    workspaces
                  </span>
                </div>
                <span
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-primary-2767c"
                  }`}
                >
                  {recentWorkspaces.length}
                </span>
              </div>
              <h3
                className={`text-sm font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-secondary-7450c"
                }`}
              >
                Total Workspaces
              </h3>
              <p
                className={`text-xs ${
                  isDarkMode ? "text-gray-500" : "text-secondary-430c"
                }`}
              >
                All time
              </p>
            </div>

            <div
              className={`rounded-2xl p-6 shadow-lg border ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-primary-white border-secondary-cool-grey-1c-40"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isDarkMode ? "bg-green-900" : "bg-green-100"
                  }`}
                >
                  <span
                    className={`material-symbols-rounded text-xl ${
                      isDarkMode ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    trending_up
                  </span>
                </div>
                <span
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-primary-2767c"
                  }`}
                >
                  63%
                </span>
              </div>
              <h3
                className={`text-sm font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-secondary-7450c"
                }`}
              >
                Avg Progress
              </h3>
              <p
                className={`text-xs ${
                  isDarkMode ? "text-gray-500" : "text-secondary-430c"
                }`}
              >
                Across all workspaces
              </p>
            </div>

            <div
              className={`rounded-2xl p-6 shadow-lg border ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-primary-white border-secondary-cool-grey-1c-40"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isDarkMode ? "bg-blue-900" : "bg-blue-100"
                  }`}
                >
                  <span
                    className={`material-symbols-rounded text-xl ${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    schedule
                  </span>
                </div>
                <span
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-primary-2767c"
                  }`}
                >
                  2h
                </span>
              </div>
              <h3
                className={`text-sm font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-secondary-7450c"
                }`}
              >
                Last Activity
              </h3>
              <p
                className={`text-xs ${
                  isDarkMode ? "text-gray-500" : "text-secondary-430c"
                }`}
              >
                Customer Portal
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Workspace Actions */}
              <div
                className={`rounded-2xl p-6 shadow-lg border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-primary-white border-secondary-cool-grey-1c-40"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-6 ${
                    isDarkMode ? "text-white" : "text-primary-2767c"
                  }`}
                >
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
              <div
                className={`rounded-2xl p-6 shadow-lg border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-primary-white border-secondary-cool-grey-1c-40"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className={`text-xl font-bold ${
                      isDarkMode ? "text-white" : "text-primary-2767c"
                    }`}
                  >
                    Active Workspaces
                    <span
                      className={`ml-3 text-sm px-3 py-1 rounded-full font-normal ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-secondary-cool-grey-1c-20 text-secondary-430c"
                      }`}
                    >
                      {filteredWorkspaces.length} workspaces
                    </span>
                  </h3>
                  <button className="text-accent-2935c hover:text-accent-2935c-80 text-sm font-medium">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {filteredWorkspaces.map((workspace, index) => (
                    <div
                      key={workspace.id || index}
                      className={`flex items-center justify-between p-4 rounded-xl transition-colors cursor-pointer ${
                        isDarkMode
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-secondary-cool-grey-1c-20 hover:bg-secondary-cool-grey-1c-40"
                      }`}
                    >
                      <div className="flex-1">
                        <h4
                          className={`font-semibold ${
                            isDarkMode ? "text-white" : "text-primary-2767c"
                          }`}
                        >
                          {workspace.name}
                        </h4>
                        <div className="flex items-center space-x-4 mt-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              workspace.status === "completed"
                                ? isDarkMode
                                  ? "bg-green-900 text-green-300"
                                  : "bg-green-100 text-green-800"
                                : workspace.status === "in-progress"
                                ? isDarkMode
                                  ? "bg-blue-900 text-blue-300"
                                  : "bg-blue-100 text-blue-800"
                                : workspace.status === "testing"
                                ? isDarkMode
                                  ? "bg-yellow-900 text-yellow-300"
                                  : "bg-yellow-100 text-yellow-800"
                                : isDarkMode
                                ? "bg-gray-600 text-gray-300"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {workspace.status}
                          </span>
                          <div
                            className={`flex items-center space-x-1 text-xs ${
                              isDarkMode
                                ? "text-gray-400"
                                : "text-secondary-430c"
                            }`}
                          >
                            <span className="material-symbols-rounded text-sm">
                              schedule
                            </span>
                            <span>{workspace.lastOpened}</span>
                          </div>
                        </div>
                        {workspace.progress !== undefined && (
                          <div className="mt-2">
                            <div className="flex items-center space-x-2">
                              <div
                                className={`flex-1 rounded-full h-2 ${
                                  isDarkMode
                                    ? "bg-gray-600"
                                    : "bg-secondary-cool-grey-1c-60"
                                }`}
                              >
                                <div
                                  className="bg-accent-2935c h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${workspace.progress}%` }}
                                ></div>
                              </div>
                              <span
                                className={`text-xs ${
                                  isDarkMode
                                    ? "text-gray-400"
                                    : "text-secondary-430c"
                                }`}
                              >
                                {workspace.progress}% complete
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      <span
                        className={`material-symbols-rounded ml-4 ${
                          isDarkMode ? "text-gray-400" : "text-secondary-430c"
                        }`}
                      >
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
              <div
                className={`rounded-2xl p-6 shadow-lg border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-primary-white border-secondary-cool-grey-1c-40"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${
                    isDarkMode ? "text-white" : "text-primary-2767c"
                  }`}
                >
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isDarkMode ? "bg-blue-900" : "bg-blue-100"
                      }`}
                    >
                      <span
                        className={`material-symbols-rounded text-sm ${
                          isDarkMode ? "text-blue-400" : "text-blue-600"
                        }`}
                      >
                        edit
                      </span>
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-sm font-medium ${
                          isDarkMode ? "text-white" : "text-primary-2767c"
                        }`}
                      >
                        Updated Customer Portal
                      </p>
                      <p
                        className={`text-xs ${
                          isDarkMode ? "text-gray-400" : "text-secondary-430c"
                        }`}
                      >
                        2 hours ago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isDarkMode ? "bg-green-900" : "bg-green-100"
                      }`}
                    >
                      <span
                        className={`material-symbols-rounded text-sm ${
                          isDarkMode ? "text-green-400" : "text-green-600"
                        }`}
                      >
                        check_circle
                      </span>
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-sm font-medium ${
                          isDarkMode ? "text-white" : "text-primary-2767c"
                        }`}
                      >
                        Completed testing phase
                      </p>
                      <p
                        className={`text-xs ${
                          isDarkMode ? "text-gray-400" : "text-secondary-430c"
                        }`}
                      >
                        Yesterday
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isDarkMode ? "bg-purple-900" : "bg-purple-100"
                      }`}
                    >
                      <span
                        className={`material-symbols-rounded text-sm ${
                          isDarkMode ? "text-purple-400" : "text-purple-600"
                        }`}
                      >
                        integration_instructions
                      </span>
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-sm font-medium ${
                          isDarkMode ? "text-white" : "text-primary-2767c"
                        }`}
                      >
                        Connected GitHub repo
                      </p>
                      <p
                        className={`text-xs ${
                          isDarkMode ? "text-gray-400" : "text-secondary-430c"
                        }`}
                      >
                        3 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Shortcuts */}
              <div
                className={`rounded-2xl p-6 shadow-lg border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-primary-white border-secondary-cool-grey-1c-40"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${
                    isDarkMode ? "text-white" : "text-primary-2767c"
                  }`}
                >
                  Quick Shortcuts
                </h3>
                <div className="space-y-3">
                  <button
                    className={`w-full flex items-center space-x-3 p-3 text-left rounded-lg transition-colors ${
                      isDarkMode
                        ? "hover:bg-gray-700"
                        : "hover:bg-secondary-cool-grey-1c-20"
                    }`}
                  >
                    <span className="material-symbols-rounded text-accent-2935c">
                      description
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-white" : "text-primary-2767c"
                      }`}
                    >
                      View Documentation
                    </span>
                  </button>

                  <button
                    className={`w-full flex items-center space-x-3 p-3 text-left rounded-lg transition-colors ${
                      isDarkMode
                        ? "hover:bg-gray-700"
                        : "hover:bg-secondary-cool-grey-1c-20"
                    }`}
                  >
                    <span className="material-symbols-rounded text-accent-2935c">
                      support_agent
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-white" : "text-primary-2767c"
                      }`}
                    >
                      Get Support
                    </span>
                  </button>

                  <button
                    className={`w-full flex items-center space-x-3 p-3 text-left rounded-lg transition-colors ${
                      isDarkMode
                        ? "hover:bg-gray-700"
                        : "hover:bg-secondary-cool-grey-1c-20"
                    }`}
                  >
                    <span className="material-symbols-rounded text-accent-2935c">
                      settings
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-white" : "text-primary-2767c"
                      }`}
                    >
                      Workspace Settings
                    </span>
                  </button>
                </div>
              </div>

              {/* Quick Tips */}
              <div
                className={`rounded-2xl p-6 shadow-lg border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-primary-white border-secondary-cool-grey-1c-40"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${
                    isDarkMode ? "text-white" : "text-primary-2767c"
                  }`}
                >
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
                      <h4
                        className={`text-sm font-semibold ${
                          isDarkMode ? "text-white" : "text-primary-2767c"
                        }`}
                      >
                        Start with Requirements
                      </h4>
                      <p
                        className={`text-xs ${
                          isDarkMode ? "text-gray-400" : "text-secondary-430c"
                        }`}
                      >
                        Describe your project in natural language. Our AI will
                        help structure your requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isDarkMode ? "bg-blue-900" : "bg-blue-100"
                      }`}
                    >
                      <span
                        className={`material-symbols-rounded text-sm ${
                          isDarkMode ? "text-blue-400" : "text-blue-600"
                        }`}
                      >
                        integration_instructions
                      </span>
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-semibold ${
                          isDarkMode ? "text-white" : "text-primary-2767c"
                        }`}
                      >
                        Connect Your Tools
                      </h4>
                      <p
                        className={`text-xs ${
                          isDarkMode ? "text-gray-400" : "text-secondary-430c"
                        }`}
                      >
                        Link Jira, GitHub, and other tools for seamless
                        automation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isDarkMode ? "bg-green-900" : "bg-green-100"
                      }`}
                    >
                      <span
                        className={`material-symbols-rounded text-sm ${
                          isDarkMode ? "text-green-400" : "text-green-600"
                        }`}
                      >
                        smart_toy
                      </span>
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-semibold ${
                          isDarkMode ? "text-white" : "text-primary-2767c"
                        }`}
                      >
                        Ask the AI Assistant
                      </h4>
                      <p
                        className={`text-xs ${
                          isDarkMode ? "text-gray-400" : "text-secondary-430c"
                        }`}
                      >
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
