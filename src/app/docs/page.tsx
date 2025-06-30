"use client";

import { useState, useEffect } from "react";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "getting-started",
        "iam-access",
        "ldap-groups",
        "troubleshooting",
      ];
      const scrollY = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollY >= element.offsetTop &&
          scrollY < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="flex items-center justify-between px-6 py-3 backdrop-blur-sm rounded-2xl shadow-2xl bg-primary-white/95 border border-secondary-cool-grey-1c-40">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="https://www.emiratesnbd.com/-/media/enbd/images/logos/horizontal_logo.svg?la=en&hash=A33654369475CF9B1FA76FEB570F9B9D"
                alt="Emirates NBD Logo"
                className="h-8 w-auto brightness-0"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#features"
              className="hover:text-accent-2935c transition-colors font-medium text-primary-2767c"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="hover:text-accent-2935c transition-colors font-medium text-primary-2767c"
            >
              How it works
            </a>
            <a href="/docs" className="text-accent-2935c font-medium">
              Documentation
            </a>
          </div>

          <div className="flex items-center">
            <button className="bg-primary-2767c text-primary-white hover:bg-accent-2935c transition-colors font-medium px-6 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-rounded text-lg">login</span>
              Login
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-24 flex">
        {/* Sidebar Navigation */}
        <div className="hidden lg:block w-80 fixed left-0 top-24 h-[calc(100vh-6rem)] overflow-y-auto bg-secondary-cool-grey-1c-40 border-r border-secondary-cool-grey-1c-60">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-primary-2767c mb-6">
              Documentation
            </h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("getting-started")}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === "getting-started"
                    ? "bg-accent-2935c text-primary-white"
                    : "text-secondary-7450c hover:bg-secondary-cool-grey-1c-60 hover:text-primary-2767c"
                }`}
              >
                Getting Started
              </button>
              <button
                onClick={() => scrollToSection("iam-access")}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === "iam-access"
                    ? "bg-accent-2935c text-primary-white"
                    : "text-secondary-7450c hover:bg-secondary-cool-grey-1c-60 hover:text-primary-2767c"
                }`}
              >
                IAM Access Request
              </button>
              <button
                onClick={() => scrollToSection("ldap-groups")}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === "ldap-groups"
                    ? "bg-accent-2935c text-primary-white"
                    : "text-secondary-7450c hover:bg-secondary-cool-grey-1c-60 hover:text-primary-2767c"
                }`}
              >
                LDAP Groups Configuration
              </button>
              <button
                onClick={() => scrollToSection("troubleshooting")}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === "troubleshooting"
                    ? "bg-accent-2935c text-primary-white"
                    : "text-secondary-7450c hover:bg-secondary-cool-grey-1c-60 hover:text-primary-2767c"
                }`}
              >
                Troubleshooting
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-80">
          <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-2767c mb-4">
                Leap IDE Documentation
              </h1>
              <p className="text-xl text-secondary-7450c">
                Learn how to get access to the Leap IDE dashboard and start
                automating your SDLC workflow.
              </p>
            </div>

            {/* Getting Started Section */}
            <section id="getting-started" className="mb-16">
              <div className="bg-primary-white rounded-2xl p-8 shadow-lg border border-secondary-cool-grey-1c-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent-2935c rounded-lg flex items-center justify-center">
                    <span className="material-symbols-rounded text-primary-white text-lg">
                      rocket_launch
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary-2767c">
                    Getting Started
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-secondary-7450c mb-6">
                    Welcome to Leap IDE! This guide will walk you through the
                    process of obtaining access to the Leap IDE dashboard.
                    Before you can start automating your software development
                    lifecycle, you'll need to request appropriate access
                    permissions through our IAM system.
                  </p>

                  <div className="bg-accent-2935c-10 border border-accent-2935c-40 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-rounded text-accent-2935c text-lg mt-1">
                        info
                      </span>
                      <div>
                        <h4 className="font-semibold text-primary-2767c mb-2">
                          Prerequisites
                        </h4>
                        <ul className="text-secondary-7450c space-y-1">
                          <li>• Active Emirates NBD employee account</li>
                          <li>• Access to the internal IAM dashboard</li>
                          <li>• Manager approval for system access requests</li>
                          <li>
                            • Knowledge of required access level (Read or Write)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* IAM Access Section */}
            <section id="iam-access" className="mb-16">
              <div className="bg-primary-white rounded-2xl p-8 shadow-lg border border-secondary-cool-grey-1c-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent-2935c rounded-lg flex items-center justify-center">
                    <span className="material-symbols-rounded text-primary-white text-lg">
                      security
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary-2767c">
                    IAM Access Request Process
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-secondary-7450c mb-8">
                    Follow these step-by-step instructions to request access to
                    Leap IDE through the IAM dashboard:
                  </p>

                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-accent-2935c rounded-full flex items-center justify-center">
                          <span className="text-primary-white font-bold text-sm">
                            1
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary-2767c mb-3">
                          Access IAM Dashboard
                        </h3>
                        <p className="text-secondary-7450c mb-4">
                          Navigate to the internal IAM dashboard using your
                          Emirates NBD credentials. The dashboard is available
                          through the internal portal.
                        </p>
                        <div className="bg-secondary-cool-grey-1c-40 rounded-lg p-4">
                          <code className="text-primary-2767c">
                            https://iam-dashboard.emiratesnbd.internal
                          </code>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-accent-2935c rounded-full flex items-center justify-center">
                          <span className="text-primary-white font-bold text-sm">
                            2
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary-2767c mb-3">
                          Navigate to UAT Systems
                        </h3>
                        <p className="text-secondary-7450c mb-4">
                          Once logged into the IAM dashboard, locate and click
                          on the "UAT Systems" section in the main navigation
                          menu.
                        </p>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-rounded text-yellow-600 text-lg">
                              warning
                            </span>
                            <p className="text-yellow-800 text-sm">
                              <strong>Note:</strong> UAT Systems section is only
                              available to users with basic IAM access. If you
                              don't see this option, contact your IT
                              administrator.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-accent-2935c rounded-full flex items-center justify-center">
                          <span className="text-primary-white font-bold text-sm">
                            3
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary-2767c mb-3">
                          Raise Access Request
                        </h3>
                        <p className="text-secondary-7450c mb-4">
                          In the UAT Systems section, click on "New Access
                          Request" and fill out the following information:
                        </p>
                        <ul className="text-secondary-7450c space-y-2 mb-4">
                          <li>
                            • <strong>System Name:</strong> Leap IDE
                          </li>
                          <li>
                            • <strong>Business Justification:</strong> Describe
                            your need for SDLC automation
                          </li>
                          <li>
                            • <strong>Access Duration:</strong> Specify required
                            access period
                          </li>
                          <li>
                            • <strong>Manager Approval:</strong> Add your
                            reporting manager for approval
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-accent-2935c rounded-full flex items-center justify-center">
                          <span className="text-primary-white font-bold text-sm">
                            4
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary-2767c mb-3">
                          Submit Request
                        </h3>
                        <p className="text-secondary-7450c mb-4">
                          Review all details and submit your access request. The
                          typical approval process takes 2-3 business days.
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-rounded text-green-600 text-lg">
                              check_circle
                            </span>
                            <p className="text-green-800 text-sm">
                              You'll receive email notifications at each stage
                              of the approval process.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* LDAP Groups Section */}
            <section id="ldap-groups" className="mb-16">
              <div className="bg-primary-white rounded-2xl p-8 shadow-lg border border-secondary-cool-grey-1c-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent-2935c rounded-lg flex items-center justify-center">
                    <span className="material-symbols-rounded text-primary-white text-lg">
                      group
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary-2767c">
                    LDAP Groups Configuration
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-secondary-7450c mb-8">
                    When submitting your IAM access request, you must specify
                    the appropriate LDAP groups based on the level of access you
                    require. Choose the correct group based on your role and
                    responsibilities.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Read Access */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="material-symbols-rounded text-blue-600 text-2xl">
                          visibility
                        </span>
                        <h3 className="text-xl font-semibold text-blue-900">
                          Read Access
                        </h3>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-blue-900 mb-2">
                          LDAP Group:
                        </h4>
                        <code className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">
                          ENBD-LeapIDE-ReadOnly
                        </code>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-blue-900 mb-2">
                          Permissions Include:
                        </h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• View existing projects and requirements</li>
                          <li>• Access project dashboards and reports</li>
                          <li>• View code repositories and documentation</li>
                          <li>• Monitor deployment status and logs</li>
                          <li>• Export project data and reports</li>
                        </ul>
                      </div>
                      <div className="bg-blue-100 rounded-lg p-3">
                        <p className="text-blue-800 text-sm">
                          <strong>Ideal for:</strong> Project managers,
                          stakeholders, auditors, and team members who need to
                          monitor progress without making changes.
                        </p>
                      </div>
                    </div>

                    {/* Write Access */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="material-symbols-rounded text-green-600 text-2xl">
                          edit
                        </span>
                        <h3 className="text-xl font-semibold text-green-900">
                          Write Access
                        </h3>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-green-900 mb-2">
                          LDAP Group:
                        </h4>
                        <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                          ENBD-LeapIDE-Developer
                        </code>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-green-900 mb-2">
                          Permissions Include:
                        </h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• All read permissions</li>
                          <li>• Create and modify projects</li>
                          <li>• Generate and edit requirements</li>
                          <li>• Trigger code generation and deployments</li>
                          <li>• Configure integrations (Jira, GitHub, etc.)</li>
                          <li>• Manage team access and settings</li>
                        </ul>
                      </div>
                      <div className="bg-green-100 rounded-lg p-3">
                        <p className="text-green-800 text-sm">
                          <strong>Ideal for:</strong> Developers, technical
                          leads, DevOps engineers, and team members who actively
                          work on projects and need full system capabilities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-rounded text-orange-600 text-lg mt-1">
                        lightbulb
                      </span>
                      <div>
                        <h4 className="font-semibold text-orange-900 mb-2">
                          Choosing the Right Access Level
                        </h4>
                        <p className="text-orange-800 text-sm mb-3">
                          When requesting access, consider your primary use
                          case:
                        </p>
                        <ul className="text-orange-800 text-sm space-y-1">
                          <li>
                            • Start with <strong>Read Access</strong> if you're
                            unsure about your requirements
                          </li>
                          <li>
                            • Request <strong>Write Access</strong> only if you
                            need to create or modify projects
                          </li>
                          <li>
                            • You can always request an upgrade later through
                            the same IAM process
                          </li>
                          <li>
                            • Access levels are reviewed quarterly for
                            compliance
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Troubleshooting Section */}
            <section id="troubleshooting" className="mb-16">
              <div className="bg-primary-white rounded-2xl p-8 shadow-lg border border-secondary-cool-grey-1c-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent-2935c rounded-lg flex items-center justify-center">
                    <span className="material-symbols-rounded text-primary-white text-lg">
                      build
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary-2767c">
                    Troubleshooting & Support
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-secondary-7450c mb-6">
                    Having trouble with the access request process? Here are
                    solutions to common issues:
                  </p>

                  <div className="space-y-6">
                    {/* Common Issues */}
                    <div>
                      <h3 className="text-xl font-semibold text-primary-2767c mb-4">
                        Common Issues & Solutions
                      </h3>

                      <div className="space-y-4">
                        <div className="border border-secondary-cool-grey-1c-40 rounded-lg p-4">
                          <h4 className="font-semibold text-primary-2767c mb-2">
                            ❌ Can't access IAM Dashboard
                          </h4>
                          <p className="text-secondary-7450c text-sm mb-2">
                            <strong>Solution:</strong> Ensure you're connected
                            to the Emirates NBD internal network (VPN required
                            for remote access). Clear your browser cache and try
                            using a different browser.
                          </p>
                        </div>

                        <div className="border border-secondary-cool-grey-1c-40 rounded-lg p-4">
                          <h4 className="font-semibold text-primary-2767c mb-2">
                            ❌ UAT Systems section not visible
                          </h4>
                          <p className="text-secondary-7450c text-sm mb-2">
                            <strong>Solution:</strong> Contact your IT
                            administrator to verify your IAM dashboard
                            permissions. You may need basic IAM access before
                            requesting application-specific access.
                          </p>
                        </div>

                        <div className="border border-secondary-cool-grey-1c-40 rounded-lg p-4">
                          <h4 className="font-semibold text-primary-2767c mb-2">
                            ❌ Access request rejected
                          </h4>
                          <p className="text-secondary-7450c text-sm mb-2">
                            <strong>Solution:</strong> Review the rejection
                            reason in your email notification. Common causes
                            include insufficient business justification or
                            missing manager approval. Resubmit with additional
                            details.
                          </p>
                        </div>

                        <div className="border border-secondary-cool-grey-1c-40 rounded-lg p-4">
                          <h4 className="font-semibold text-primary-2767c mb-2">
                            ❌ Access granted but can't login to Leap IDE
                          </h4>
                          <p className="text-secondary-7450c text-sm mb-2">
                            <strong>Solution:</strong> Wait 15-30 minutes after
                            approval for LDAP synchronization to complete. If
                            issues persist, check if you're using the correct
                            LDAP groups mentioned in your request.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-secondary-cool-grey-1c-40 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-primary-2767c mb-4">
                        Need Additional Help?
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-primary-2767c mb-2">
                            📧 Email Support
                          </h4>
                          <p className="text-secondary-7450c text-sm mb-1">
                            <strong>LeapIDE Support:</strong>
                          </p>
                          <code className="text-accent-2935c text-sm">
                            leap-ide-support@emiratesnbd.com
                          </code>
                          <p className="text-secondary-7450c text-xs mt-1">
                            Response time: 24-48 hours
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary-2767c mb-2">
                            🎫 ServiceNow Ticket
                          </h4>
                          <p className="text-secondary-7450c text-sm mb-1">
                            <strong>Category:</strong> Application Access
                          </p>
                          <p className="text-secondary-7450c text-sm mb-1">
                            <strong>Assignment Group:</strong> Digital Platform
                            Team
                          </p>
                          <p className="text-secondary-7450c text-xs mt-1">
                            Response time: 4-8 hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
