"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkSection, setIsDarkSection] = useState(true);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.querySelector(
        ".hero-gradient"
      ) as HTMLElement;
      const ctaSection = document.querySelector(".cta-section") as HTMLElement;

      if (heroSection && ctaSection) {
        const heroHeight = heroSection.offsetHeight;
        const ctaTop = ctaSection.offsetTop;
        const ctaBottom = ctaTop + ctaSection.offsetHeight;

        // Check if we're in hero section or CTA section (dark backgrounds)
        const isInDarkSection =
          scrollY < heroHeight ||
          (scrollY >= ctaTop - 100 && scrollY <= ctaBottom);
        setIsDarkSection(isInDarkSection);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      icon: "help",
      question: "What is Leap IDE and how does it work?",
      answer:
        "Leap IDE is an AI-powered platform that automates your entire software development lifecycle. Simply describe your project requirements through our chat interface, and our AI will generate Jira epics, create code structures, set up CI/CD pipelines, and handle deployment—all automatically.",
    },
    {
      icon: "security",
      question: "How do I get access to Leap IDE?",
      answer:
        "Access to Leap IDE requires approval through our IAM system. Navigate to the IAM dashboard, go to UAT Systems, and raise an access request with the appropriate LDAP groups (ENBD-LeapIDE-ReadOnly for viewing or ENBD-LeapIDE-Developer for full access). The approval process typically takes 2-3 business days.",
      link: { href: "/docs", text: "View detailed instructions →" },
    },
    {
      icon: "integration_instructions",
      question: "Which tools and platforms does Leap IDE integrate with?",
      answer:
        "Leap IDE seamlessly integrates with your existing development ecosystem including Jira for project management, GitHub for version control, Figma for design collaboration, Jenkins for CI/CD, and many other popular development tools. The platform automatically syncs data and workflows across all integrated systems.",
    },
    {
      icon: "code",
      question: "What programming languages and frameworks are supported?",
      answer:
        "Leap IDE supports a wide range of modern programming languages including JavaScript/TypeScript, Python, Java, C#, Go, and more. Popular frameworks like React, Angular, Vue.js, Spring Boot, Django, .NET Core, and cloud-native technologies are fully supported with intelligent code generation and best practices.",
    },
    {
      icon: "timeline",
      question: "How much time can Leap IDE save in my development process?",
      answer:
        "Teams using Leap IDE typically see 60-80% reduction in time-to-market for new features and applications. Tasks that traditionally take weeks—like requirements gathering, initial coding, and deployment setup—can be completed in hours or days, allowing developers to focus on complex business logic and innovation.",
    },
    {
      icon: "shield",
      question: "Is my code and data secure with Leap IDE?",
      answer:
        "Yes, security is our top priority. Leap IDE follows Emirates NBD's strict security protocols with end-to-end encryption, secure API connections, and compliance with banking industry standards. All code and data remain within our secure infrastructure and are never shared with external parties.",
    },
    {
      icon: "support_agent",
      question: "What support is available if I encounter issues?",
      answer:
        "We provide comprehensive support through multiple channels: email support (leap-ide-support@emiratesnbd.com), ServiceNow ticketing system, detailed documentation, and community forums. Our support team typically responds within 4-8 hours for technical issues and 24-48 hours for general inquiries.",
    },
    {
      icon: "upgrade",
      question: "Can I upgrade my access level later?",
      answer:
        "Absolutely! You can request an access upgrade at any time through the same IAM process. If you start with Read-Only access and later need Developer permissions, simply submit a new access request specifying the ENBD-LeapIDE-Developer LDAP group. Access levels are reviewed quarterly for compliance.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div
          className={`flex items-center justify-between px-6 py-3 backdrop-blur-sm rounded-2xl shadow-2xl transition-all duration-300 ${
            isDarkSection
              ? "bg-gradient-to-br from-primary-white-20 to-primary-white-10 border border-primary-white-40"
              : "bg-primary-white/95 border border-secondary-cool-grey-1c-40"
          }`}
        >
          <div className="flex items-center">
            <img
              src="https://www.emiratesnbd.com/-/media/enbd/images/logos/horizontal_logo.svg?la=en&hash=A33654369475CF9B1FA76FEB570F9B9D"
              alt="Emirates NBD Logo"
              className={`h-8 w-auto transition-all duration-300 ${
                !isDarkSection ? "brightness-0" : ""
              }`}
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className={`hover:text-accent-2935c transition-colors font-medium ${
                isDarkSection ? "text-primary-white" : "text-primary-2767c"
              }`}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className={`hover:text-accent-2935c transition-colors font-medium ${
                isDarkSection ? "text-primary-white" : "text-primary-2767c"
              }`}
            >
              How it works
            </a>
            <a
              href="#faq"
              className={`hover:text-accent-2935c transition-colors font-medium ${
                isDarkSection ? "text-primary-white" : "text-primary-2767c"
              }`}
            >
              FAQ
            </a>
            <a
              href="/docs"
              className={`hover:text-accent-2935c transition-colors font-medium ${
                isDarkSection ? "text-primary-white" : "text-primary-2767c"
              }`}
            >
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

      {/* Hero Section */}
      <section className="hero-gradient px-6 py-20 text-center relative overflow-hidden pt-24">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-white mb-6 leading-tight pt-8">
              Automate your entire{" "}
              <span className="inline-block relative">
                {/* SDLC Text */}
                <span className="gradient-text animate-sdlc-text">SDLC</span>

                {/* Logo Animation Container */}
                <div className="absolute inset-0 flex items-center justify-center animate-sdlc-logos opacity-0">
                  <div className="flex items-center justify-center space-x-1 md:space-x-2 px-2 pt-3">
                    <img
                      src="/logos/Jira-mark-brand-RGB.svg"
                      alt="Jira"
                      className="w-8 h-8 md:w-12 md:h-12 animate-bounce-subtle"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <img
                      src="/logos/github-mark.svg"
                      alt="GitHub"
                      className="w-7 h-7 md:w-10 md:h-10 animate-bounce-subtle brightness-0 invert"
                      style={{ animationDelay: "0.4s" }}
                    />
                    <img
                      src="/logos/Figma-logo.svg"
                      alt="Figma"
                      className="w-6 h-6 md:w-9 md:h-9 animate-bounce-subtle"
                      style={{ animationDelay: "0.6s" }}
                    />
                    <img
                      src="/logos/jenkins-svgrepo-com.svg"
                      alt="Jenkins"
                      className="w-8 h-8 md:w-11 md:h-11 animate-bounce-subtle"
                      style={{ animationDelay: "0.8s" }}
                    />
                  </div>
                </div>
              </span>{" "}
              with <span className="gradient-text-alt">AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-white-80 mb-8 leading-relaxed">
              From requirements gathering to deployment—streamline your software
              development lifecycle through intelligent chat interface powered
              by advanced AI.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              <button className="bg-primary-white text-primary-2767c px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-white-80 transition-colors shadow-lg flex items-center gap-3 cursor-pointer">
                <span className="material-symbols-rounded text-xl">
                  play_arrow
                </span>
                Start building now
              </button>
              <a
                href="/docs"
                className="border-2 border-primary-white text-primary-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-white hover:text-primary-2767c transition-colors flex items-center gap-3 cursor-pointer"
              >
                <span className="material-symbols-rounded text-xl">
                  description
                </span>
                View documentation
              </a>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-white-20 to-primary-white-10 rounded-2xl p-8 border border-primary-white-40 backdrop-blur-sm">
              <div className="bg-primary-white rounded-xl shadow-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-secondary-430c text-sm ml-2">
                    Leap IDE Chat Interface
                  </span>
                </div>
                <div className="space-y-4 text-left">
                  <div className="bg-secondary-warm-grey-1c-40 p-3 rounded-lg">
                    <p className="text-secondary-7450c text-sm">
                      💬 "Create a user authentication system with JWT tokens"
                    </p>
                  </div>
                  <div className="bg-accent-2935c-20 p-3 rounded-lg ml-8">
                    <p className="text-secondary-7450c text-sm">
                      ✨ AI analyzing requirements... Generating Jira epics...
                      Creating code structure...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="px-6 py-20 bg-secondary-cool-grey-1c-40 section-curve"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-2767c mb-4">
              Everything you need to ship faster
            </h2>
            <p className="text-xl text-secondary-7450c max-w-3xl mx-auto">
              Leap IDE provides a complete AI-powered toolkit that transforms
              how you approach software development.
            </p>
          </div>

          {/* Magical Glass Cards Grid */}
          <div className="relative">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-32 h-32 bg-accent-2935c-10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-32 right-20 w-24 h-24 bg-accent-2935c-20 rounded-full blur-lg animate-bounce"></div>
              <div className="absolute bottom-20 left-32 w-20 h-20 bg-accent-2935c-15 rounded-full blur-md"></div>
              <div className="absolute bottom-10 right-10 w-28 h-28 bg-accent-2935c-10 rounded-full blur-lg animate-pulse"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {/* Idea to Requirements */}
              <div className="group transform hover:scale-105 transition-all duration-500 h-full">
                <div className="bg-gradient-to-br from-primary-white via-primary-white-80 to-accent-2935c-5 p-8 rounded-2xl shadow-2xl hover:shadow-3xl border border-accent-2935c-20 hover:border-accent-2935c-40 backdrop-blur-sm relative overflow-hidden h-full flex flex-col">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent-2935c to-accent-2935c-80 rounded-2xl mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                    <span className="material-symbols-rounded text-primary-white text-6xl">
                      lightbulb
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-2767c mb-4 group-hover:text-accent-2935c transition-colors duration-300">
                    Idea to Requirements
                  </h3>
                  <p className="text-secondary-7450c leading-relaxed flex-grow">
                    Capture requirements via BRD docs or chat, then
                    automatically generate and sync Jira epics and stories for
                    seamless project planning.
                  </p>
                </div>
              </div>

              {/* Requirements to Code */}
              <div className="group transform hover:scale-105 transition-all duration-500 h-full">
                <div className="bg-gradient-to-bl from-primary-white via-primary-white-80 to-accent-2935c-5 p-8 rounded-2xl shadow-2xl hover:shadow-3xl border border-accent-2935c-20 hover:border-accent-2935c-40 backdrop-blur-sm relative overflow-hidden h-full flex flex-col">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-bl from-accent-2935c to-accent-2935c-80 rounded-2xl mb-6 shadow-lg group-hover:-rotate-6 transition-transform duration-300">
                    <span className="material-symbols-rounded text-primary-white text-6xl">
                      code
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-2767c mb-4 group-hover:text-accent-2935c transition-colors duration-300">
                    Requirements to Code
                  </h3>
                  <p className="text-secondary-7450c leading-relaxed flex-grow">
                    Convert technical requirements into production-ready code
                    with intelligent scaffolding and implementation.
                  </p>
                </div>
              </div>

              {/* Code to Deployment */}
              <div className="group transform hover:scale-105 transition-all duration-500 h-full">
                <div className="bg-gradient-to-tr from-primary-white via-primary-white-80 to-accent-2935c-5 p-8 rounded-2xl shadow-2xl hover:shadow-3xl border border-accent-2935c-20 hover:border-accent-2935c-40 backdrop-blur-sm relative overflow-hidden h-full flex flex-col">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-accent-2935c to-accent-2935c-80 rounded-2xl mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <span className="material-symbols-rounded text-primary-white text-6xl">
                      rocket_launch
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-2767c mb-4 group-hover:text-accent-2935c transition-colors duration-300">
                    Code to Deployment
                  </h3>
                  <p className="text-secondary-7450c leading-relaxed flex-grow">
                    Seamlessly deploy your code to production with automated
                    CI/CD pipelines and infrastructure setup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-2767c mb-4">
              Simple. Powerful. Intelligent.
            </h2>
            <p className="text-xl text-secondary-7450c max-w-3xl mx-auto">
              Just chat with our AI, and watch your ideas transform into
              production-ready applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-2935c rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary-2767c mb-4">
                Describe Your Idea
              </h3>
              <p className="text-secondary-7450c">
                Simply chat with our AI about your project idea, features, and
                requirements in natural language.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-2935c rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary-2767c mb-4">
                AI Does the Work
              </h3>
              <p className="text-secondary-7450c">
                Our AI analyzes, plans, creates Jira tickets, generates code,
                and sets up deployment pipelines.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-2935c rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary-2767c mb-4">
                Ship to Production
              </h3>
              <p className="text-secondary-7450c">
                Review, refine, and deploy your application with confidence.
                Your SDLC automated end-to-end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="px-6 py-20 bg-gradient-to-br from-secondary-cool-grey-1c-20 via-primary-white to-accent-2935c-5 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-accent-2935c-10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-32 w-64 h-64 bg-gradient-to-bl from-accent-2935c-5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-t from-accent-2935c-5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-2935c to-accent-2935c-80 rounded-2xl mb-6 shadow-lg">
              <span className="material-symbols-rounded text-primary-white text-2xl">
                quiz
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary-2767c mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-7450c max-w-2xl mx-auto">
              Everything you need to know about Leap IDE and getting started
              with AI-powered development automation.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-primary-white via-primary-white-95 to-accent-2935c-2 rounded-2xl border transition-all duration-500 ease-out shadow-lg hover:shadow-xl ${
                  openFAQ === index
                    ? "border-accent-2935c-40 shadow-accent-2935c-10"
                    : "border-secondary-cool-grey-1c-40 hover:border-accent-2935c-20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-accent-2935c-40 rounded-2xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                          openFAQ === index
                            ? "bg-gradient-to-br from-accent-2935c to-accent-2935c-80 text-primary-white shadow-lg"
                            : "bg-gradient-to-br from-accent-2935c-20 to-accent-2935c-10 text-accent-2935c group-hover:from-accent-2935c-30 group-hover:to-accent-2935c-20"
                        }`}
                      >
                        <span className="material-symbols-rounded text-lg">
                          {item.icon}
                        </span>
                      </div>
                      <h3
                        className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                          openFAQ === index
                            ? "text-accent-2935c"
                            : "text-primary-2767c group-hover:text-accent-2935c"
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                        openFAQ === index
                          ? "bg-accent-2935c text-primary-white rotate-180"
                          : "bg-secondary-cool-grey-1c-40 text-secondary-7450c group-hover:bg-accent-2935c-20 group-hover:text-accent-2935c"
                      }`}
                    >
                      <span className="material-symbols-rounded text-sm">
                        expand_more
                      </span>
                    </div>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openFAQ === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pl-16 pr-8">
                      <div className="h-px bg-gradient-to-r from-accent-2935c-20 to-transparent mb-4"></div>
                      <p className="text-secondary-7450c leading-relaxed text-base">
                        {item.answer}
                        {item.link && (
                          <a
                            href={item.link.href}
                            className="text-accent-2935c hover:text-accent-2935c-80 hover:underline ml-2 font-medium transition-colors duration-200"
                          >
                            {item.link.text}
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA at bottom of FAQ */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-primary-white via-primary-white-90 to-accent-2935c-5 rounded-3xl p-8 shadow-2xl border border-accent-2935c-20">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent-2935c to-accent-2935c-80 rounded-2xl mx-auto mb-6 shadow-lg">
                <span className="material-symbols-rounded text-primary-white text-xl">
                  support_agent
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary-2767c mb-4">
                Still have questions? We're here to help!
              </h3>
              <p className="text-secondary-7450c mb-8 max-w-md mx-auto">
                Our expert team is ready to assist you with any questions about
                Leap IDE access, features, or implementation.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a
                  href="/docs"
                  className="group bg-gradient-to-r from-accent-2935c to-accent-2935c-80 text-primary-white px-8 py-4 rounded-xl font-semibold hover:from-accent-2935c-80 hover:to-accent-2935c transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span className="material-symbols-rounded text-lg group-hover:rotate-12 transition-transform duration-300">
                    description
                  </span>
                  View Documentation
                </a>
                <a
                  href="mailto:leap-ide-support@emiratesnbd.com"
                  className="group border-2 border-accent-2935c text-accent-2935c px-8 py-4 rounded-xl font-semibold hover:bg-accent-2935c hover:text-primary-white transition-all duration-300 flex items-center gap-3 hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <span className="material-symbols-rounded text-lg group-hover:scale-110 transition-transform duration-300">
                    mail
                  </span>
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section px-6 py-20 bg-primary-2767c">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-white mb-6">
            Ready to transform your SDLC?
          </h2>
          <p className="text-xl text-primary-white-80 mb-8">
            Join your fellow developers who are already shipping faster with
            AI-powered automation.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-accent-2935c text-primary-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-2935c-80 transition-colors flex items-center gap-3 cursor-pointer">
              <span className="material-symbols-rounded text-xl">
                rocket_launch
              </span>
              Launch Leap IDE
            </button>
            <button className="border border-primary-white-40 text-primary-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-primary-white hover:bg-primary-white-20 transition-colors flex items-center gap-3 cursor-pointer">
              <span className="material-symbols-rounded text-xl">
                support_agent
              </span>
              Get support
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-secondary-cool-grey-1c-20 to-secondary-warm-grey-1c-20 border-t border-secondary-cool-grey-1c-40">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://www.emiratesnbd.com/-/media/enbd/images/logos/horizontal_logo.svg?la=en&hash=A33654369475CF9B1FA76FEB570F9B9D"
                  alt="Emirates NBD Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-secondary-7450c text-lg leading-relaxed mb-6 max-w-md">
                Revolutionizing software development with AI-powered automation.
                From ideas to production in minutes, not months.
              </p>

              {/* Tool Integration Icons */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-sm text-secondary-430c font-medium">
                  Integrated with:
                </span>
                <div className="flex items-center space-x-3">
                  <img
                    src="/logos/Jira-mark-brand-RGB.svg"
                    alt="Jira"
                    className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="/logos/github-mark.svg"
                    alt="GitHub"
                    className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity brightness-0"
                  />
                  <img
                    src="/logos/Figma-logo.svg"
                    alt="Figma"
                    className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="/logos/jenkins-svgrepo-com.svg"
                    alt="Jenkins"
                    className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
                  />
                  <span className="text-secondary-430c text-sm">+more</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-lg font-semibold text-primary-2767c mb-6">
                Product
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#features"
                    className="text-secondary-7450c hover:text-accent-2935c transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-rounded text-sm">
                      arrow_forward
                    </span>
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-secondary-7450c hover:text-accent-2935c transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-rounded text-sm">
                      arrow_forward
                    </span>
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary-7450c hover:text-accent-2935c transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-rounded text-sm">
                      arrow_forward
                    </span>
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary-7450c hover:text-accent-2935c transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-rounded text-sm">
                      arrow_forward
                    </span>
                    API Docs
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold text-primary-2767c mb-6">
                Support
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-secondary-7450c hover:text-accent-2935c transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-rounded text-sm">
                      support_agent
                    </span>
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary-7450c hover:text-accent-2935c transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-rounded text-sm">
                      forum
                    </span>
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary-7450c hover:text-accent-2935c transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-rounded text-sm">
                      school
                    </span>
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary-7450c hover:text-accent-2935c transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-rounded text-sm">
                      contact_mail
                    </span>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary-7450c hover:text-accent-2935c transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-rounded text-sm">
                      bug_report
                    </span>
                    Report Issue
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-secondary-cool-grey-1c-40">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-secondary-430c text-sm">
                  © 2025 Emirates NBD. All rights reserved.
                  <span className="text-accent-2935c font-medium">
                    {" "}
                    Leap IDE
                  </span>{" "}
                  - Automating SDLC with AI.
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <a
                  href="#"
                  className="text-secondary-7450c hover:text-accent-2935c transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-secondary-7450c hover:text-accent-2935c transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-secondary-7450c hover:text-accent-2935c transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
