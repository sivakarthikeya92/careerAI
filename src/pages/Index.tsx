import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Linkedin, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Career Journey, Powered by AI
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Create professional resumes, optimize your LinkedIn profile, and connect with top
              recruiters - all with the power of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sign-up">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/jobs">
                <Button size="lg" variant="outline" className="text-white border-white">
                  Browse Jobs
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Resume Builder</h3>
                <p className="text-gray-600">
                  Create professional resumes tailored to your industry with our AI-powered builder.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">LinkedIn Optimizer</h3>
                <p className="text-gray-600">
                  Enhance your LinkedIn profile with AI-generated recommendations and content.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Recruiter Network</h3>
                <p className="text-gray-600">
                  Connect directly with recruiters and companies looking for talent like you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Advance Your Career?</h2>
            <Link to="/sign-up">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;