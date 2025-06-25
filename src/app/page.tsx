export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-secondary-cool-grey-1c">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent-2935c rounded-lg flex items-center justify-center">
            <span className="text-primary-white font-bold text-sm">L</span>
          </div>
          <span className="text-xl font-bold text-primary-2767c">Leap IDE</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-secondary-7450c hover:text-primary-2767c transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-secondary-7450c hover:text-primary-2767c transition-colors"
          >
            How it works
          </a>
          <a
            href="#docs"
            className="text-secondary-7450c hover:text-primary-2767c transition-colors"
          >
            Documentation
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-secondary-7450c hover:text-primary-2767c transition-colors">
            Login
          </button>
          <button className="bg-accent-2935c text-primary-white px-4 py-2 rounded-lg hover:bg-accent-2935c-80 transition-colors">
            Access Leap IDE
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient px-6 py-20 text-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-white mb-6 leading-tight">
              Automate your entire <span className="gradient-text">SDLC</span>{" "}
              with <span className="gradient-text-alt">AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-white-80 mb-8 leading-relaxed">
              From requirements gathering to deployment—streamline your software
              development lifecycle through intelligent chat interface powered
              by advanced AI.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              <button className="bg-primary-white text-primary-2767c px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-white-80 transition-colors shadow-lg">
                Start building now
              </button>
              <button className="border-2 border-primary-white text-primary-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-white hover:text-primary-2767c transition-colors">
                View documentation
              </button>
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
        className="px-6 py-20 bg-secondary-cool-grey-1c-40"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-primary-white p-6 rounded-xl shadow-sm border border-secondary-cool-grey-1c">
              <div className="w-12 h-12 bg-accent-2935c-20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-accent-2935c text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-2767c mb-2">
                Requirement Gathering
              </h3>
              <p className="text-secondary-7450c">
                AI-powered analysis of business needs and automatic conversion
                to technical requirements.
              </p>
            </div>

            <div className="bg-primary-white p-6 rounded-xl shadow-sm border border-secondary-cool-grey-1c">
              <div className="w-12 h-12 bg-accent-2935c-20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-accent-2935c text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-2767c mb-2">
                Jira Integration
              </h3>
              <p className="text-secondary-7450c">
                Automatically generate epics, stories, and tasks directly in
                your Jira workspace.
              </p>
            </div>

            <div className="bg-primary-white p-6 rounded-xl shadow-sm border border-secondary-cool-grey-1c">
              <div className="w-12 h-12 bg-accent-2935c-20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-accent-2935c text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-2767c mb-2">
                Code Generation
              </h3>
              <p className="text-secondary-7450c">
                Transform requirements into production-ready code with
                AI-powered development.
              </p>
            </div>

            <div className="bg-primary-white p-6 rounded-xl shadow-sm border border-secondary-cool-grey-1c">
              <div className="w-12 h-12 bg-accent-2935c-20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-accent-2935c text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-2767c mb-2">
                Auto Deployment
              </h3>
              <p className="text-secondary-7450c">
                Seamless deployment pipeline automation from code to production
                environment.
              </p>
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

      {/* CTA Section */}
      <section className="px-6 py-20 bg-primary-2767c">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-white mb-6">
            Ready to transform your SDLC?
          </h2>
          <p className="text-xl text-primary-white-80 mb-8">
            Join your fellow developers who are already shipping faster with
            AI-powered automation.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-accent-2935c text-primary-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-2935c-80 transition-colors">
              Launch Leap IDE
            </button>
            <button className="border border-primary-white-40 text-primary-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-primary-white hover:bg-primary-white-20 transition-colors">
              Get support
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-secondary-cool-grey-1c">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-accent-2935c rounded-lg flex items-center justify-center">
                <span className="text-primary-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-primary-2767c">
                Leap IDE
              </span>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <a
                href="#"
                className="text-secondary-7450c hover:text-primary-2767c transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-secondary-7450c hover:text-primary-2767c transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-secondary-7450c hover:text-primary-2767c transition-colors"
              >
                Support
              </a>
              <a
                href="#"
                className="text-secondary-7450c hover:text-primary-2767c transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-secondary-cool-grey-1c text-center">
            <p className="text-secondary-430c">
              © 2024 Leap IDE. All rights reserved. Automating SDLC with AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
