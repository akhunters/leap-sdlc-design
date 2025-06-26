"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";

interface WorkspaceStage {
  id: string;
  name: string;
  icon: string;
  description: string;
  status: "completed" | "in-progress" | "pending";
  progress: number;
  subStages: {
    id: string;
    name: string;
    icon: string;
    status: "completed" | "in-progress" | "pending";
    progress: number;
  }[];
}

interface WorkspaceData {
  id: string;
  name: string;
  description: string;
  status: "completed" | "in-progress" | "testing" | "planning";
  createdAt: string;
  lastModified: string;
  stages: WorkspaceStage[];
}

export default function WorkspacePage() {
  const params = useParams();
  const workspaceId = params.workspaceId as string;
  const [workspace, setWorkspace] = useState<WorkspaceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Mock API call to fetch workspace data
    const fetchWorkspaceData = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock workspace data
        const mockWorkspace: WorkspaceData = {
          id: workspaceId,
          name: `Workspace ${workspaceId}`,
          description:
            "A comprehensive software development project with multiple stages and deliverables.",
          status: "in-progress",
          createdAt: "2024-01-15",
          lastModified: "2024-01-20",
          stages: [
            {
              id: "idea-to-requirement",
              name: "Idea to Requirement",
              icon: "lightbulb",
              description: "Transform ideas into structured requirements",
              status: "completed",
              progress: 100,
              subStages: [
                {
                  id: "requirement-gathering",
                  name: "Requirement Gathering",
                  icon: "assignment",
                  status: "completed",
                  progress: 100,
                },
                {
                  id: "epics-stories",
                  name: "Epics and Stories",
                  icon: "list_alt",
                  status: "completed",
                  progress: 100,
                },
              ],
            },
            {
              id: "requirement-to-code",
              name: "Requirement to Code",
              icon: "code",
              description: "Convert requirements into working code",
              status: "in-progress",
              progress: 65,
              subStages: [
                {
                  id: "static-code-analyzer",
                  name: "Static Code Analyzer",
                  icon: "bug_report",
                  status: "in-progress",
                  progress: 65,
                },
              ],
            },
            {
              id: "code-to-deployment",
              name: "Code to Deployment",
              icon: "rocket_launch",
              description: "Deploy code to production environment",
              status: "pending",
              progress: 0,
              subStages: [
                {
                  id: "code-provisioning",
                  name: "Code Provisioning",
                  icon: "cloud_upload",
                  status: "pending",
                  progress: 0,
                },
              ],
            },
          ],
        };

        setWorkspace(mockWorkspace);
      } catch (error) {
        console.error("Error fetching workspace:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkspaceData();
  }, [workspaceId]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "in-progress":
        return "text-blue-600 bg-blue-100";
      case "testing":
        return "text-yellow-600 bg-yellow-100";
      case "planning":
        return "text-purple-600 bg-purple-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress === 100) return "bg-green-500";
    if (progress >= 50) return "bg-blue-500";
    if (progress > 0) return "bg-yellow-500";
    return "bg-gray-300";
  };

  if (loading) {
    return (
      <DashboardLayout
        title="Loading..."
        subtitle="Please wait while we load your workspace"
      >
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-2767c mx-auto mb-4"></div>
            <p className="text-gray-600">Loading workspace...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (!workspace) {
    return (
      <DashboardLayout
        title="Workspace Not Found"
        subtitle="The requested workspace could not be found"
      >
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <span className="material-symbols-rounded text-6xl text-gray-400 mb-4">
              error
            </span>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Workspace Not Found
            </h1>
            <p className="text-gray-600 mb-4">
              The workspace you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      title={workspace.name}
      subtitle={`Workspace ID: ${workspace.id}`}
      currentWorkspaceId={workspaceId}
    >
      {/* Header Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                workspace.status
              )}`}
            >
              {workspace.status.charAt(0).toUpperCase() +
                workspace.status.slice(1)}
            </span>
            <span className="text-gray-600 text-sm">
              Last modified:{" "}
              {new Date(workspace.lastModified).toLocaleDateString()}
            </span>
          </div>
          <button className="bg-primary-2767c text-white px-4 py-2 rounded-lg hover:bg-accent-2935c transition-colors flex items-center gap-2">
            <span className="material-symbols-rounded text-sm">play_arrow</span>
            Continue Work
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <nav className="flex border-b">
          {["overview", "stages", "files", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-6 border-b-2 font-medium text-sm capitalize transition-colors ${
                activeTab === tab
                  ? "border-primary-2767c text-primary-2767c bg-primary-2767c bg-opacity-5"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Project Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Project Overview
                  </h2>
                  <p className="text-gray-600 mb-4">{workspace.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Created:</span>{" "}
                      {new Date(workspace.createdAt).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="font-medium">Last Modified:</span>{" "}
                      {new Date(workspace.lastModified).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Recent Activity
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="material-symbols-rounded text-blue-500">
                        code
                      </span>
                      <div>
                        <p className="font-medium text-gray-900">
                          Code analysis completed
                        </p>
                        <p className="text-sm text-gray-600">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="material-symbols-rounded text-green-500">
                        check_circle
                      </span>
                      <div>
                        <p className="font-medium text-gray-900">
                          Requirements gathering finished
                        </p>
                        <p className="text-sm text-gray-600">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Progress Summary */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Progress Summary
                  </h3>
                  <div className="space-y-4">
                    {workspace.stages.map((stage) => (
                      <div key={stage.id}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="material-symbols-rounded text-sm text-gray-600">
                              {stage.icon}
                            </span>
                            <span className="text-sm font-medium text-gray-700">
                              {stage.name}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600">
                            {stage.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${getProgressColor(
                              stage.progress
                            )}`}
                            style={{ width: `${stage.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                      <span className="material-symbols-rounded text-blue-500">
                        chat
                      </span>
                      <span className="text-gray-700">Open AI Chat</span>
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                      <span className="material-symbols-rounded text-green-500">
                        download
                      </span>
                      <span className="text-gray-700">Export Project</span>
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                      <span className="material-symbols-rounded text-purple-500">
                        share
                      </span>
                      <span className="text-gray-700">Share Workspace</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "stages" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Development Stages
              </h2>
              <div className="grid gap-6">
                {workspace.stages.map((stage, index) => (
                  <div
                    key={stage.id}
                    className="bg-white rounded-lg shadow-sm p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            stage.status === "completed"
                              ? "bg-green-100"
                              : stage.status === "in-progress"
                              ? "bg-blue-100"
                              : "bg-gray-100"
                          }`}
                        >
                          <span
                            className={`material-symbols-rounded text-xl ${
                              stage.status === "completed"
                                ? "text-green-600"
                                : stage.status === "in-progress"
                                ? "text-blue-600"
                                : "text-gray-600"
                            }`}
                          >
                            {stage.icon}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {stage.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">
                          {stage.progress}%
                        </div>
                        <div
                          className={`text-sm capitalize px-2 py-1 rounded ${getStatusColor(
                            stage.status
                          )}`}
                        >
                          {stage.status}
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className={`h-2 rounded-full transition-all ${getProgressColor(
                          stage.progress
                        )}`}
                        style={{ width: `${stage.progress}%` }}
                      ></div>
                    </div>

                    <div className="grid gap-3">
                      {stage.subStages.map((subStage) => (
                        <div
                          key={subStage.id}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <span
                              className={`material-symbols-rounded text-sm ${
                                subStage.status === "completed"
                                  ? "text-green-600"
                                  : subStage.status === "in-progress"
                                  ? "text-blue-600"
                                  : "text-gray-600"
                              }`}
                            >
                              {subStage.icon}
                            </span>
                            <span className="font-medium text-gray-700">
                              {subStage.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">
                              {subStage.progress}%
                            </span>
                            <div className="w-16 bg-gray-200 rounded-full h-1">
                              <div
                                className={`h-1 rounded-full ${getProgressColor(
                                  subStage.progress
                                )}`}
                                style={{ width: `${subStage.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "files" && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Files
              </h2>
              <div className="text-center py-12">
                <span className="material-symbols-rounded text-6xl text-gray-400 mb-4">
                  folder_open
                </span>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No files yet
                </h3>
                <p className="text-gray-600">
                  Files will appear here as your project progresses.
                </p>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Workspace Settings
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Workspace Name
                  </label>
                  <input
                    type="text"
                    value={workspace.name}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-2767c focus:border-transparent"
                    placeholder="Enter workspace name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={workspace.description}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-2767c focus:border-transparent"
                    placeholder="Enter workspace description"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-primary-2767c text-white rounded-lg hover:bg-accent-2935c transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
