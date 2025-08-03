"use client"

import { Button } from '@/components/ui/button';
import { ArrowRight, Lock, Users, MonitorCheck } from 'lucide-react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center space-x-2 text-xl font-bold">
            <span className="text-blue-500">::</span>
            <span>logo</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Login
            </a>
            <a href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Register
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-8 flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-bold leading-tight mb-4">Empower Your Vote with VoteSecure</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                A secure and intuitive online voting management system designed for transparency, accessibility, and reliability. Experience the future of democratic participation.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-slate-900 text-white hover:bg-slate-800 px-6 py-3">
                  Login Securely
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-100 px-6 py-3">
                  Register Now
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://placehold.co/400x300/e2e8f0/64748b?text=3D+Illustration"
                alt="3D Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* Digital Democracy Section */}
        <section className="py-16 text-center">
          <div className="mx-auto max-w-5xl px-8">
            <h2 className="text-3xl font-bold mb-4">Your Trusted Partner in Digital Democracy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              VoteSecure provides a seamless, secure, and verifiable platform for all your election needs. From small community polls to large institutional ballots, we ensure every vote counts, every time.
            </p>
          </div>
        </section>

        {/* Why Choose VoteSecure? Section */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-8 text-center">
            <h2 className="text-3xl font-bold mb-12">Why Choose VoteSecure?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <Lock className="h-10 w-10 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold mb-2">Unmatched Security</h3>
                <p className="text-gray-600">
                  Leverage state-of-the-art blockchain technology to guarantee the integrity and anonymity of every vote.
                </p>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <Users className="h-10 w-10 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold mb-2">Simplified Accessibility</h3>
                <p className="text-gray-600">
                  An intuitive user interface and streamlined process ensure easy navigation and participation from any device.
                </p>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <MonitorCheck className="h-10 w-10 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold mb-2">Complete Transparency</h3>
                <p className="text-gray-600">
                  Every vote is transparently logged, providing a clear, unalterable record of the entire voting process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 text-center">
          <div className="mx-auto max-w-7xl px-8">
            <h2 className="text-3xl font-bold mb-12">Impactful Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">10M+</div>
                <div className="text-lg text-gray-600">Votes Cast Securely</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">300+</div>
                <div className="text-lg text-gray-600">Elections Managed</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">99.9%</div>
                <div className="text-lg text-gray-600">System Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Voting Made Simple Section */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://placehold.co/400x300/e2e8f0/64748b?text=Tablet+Illustration"
                alt="Tablet Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left md:pl-16">
              <h2 className="text-3xl font-bold mb-4">Digital Voting Made Simple</h2>
              <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                Our platform ensures a straightforward and engaging voting experience, making elections more personalized, accessible and efficient for everyone, regardless of technical proficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Security and Privacy Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-8 flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left md:pr-16">
              <h2 className="text-3xl font-bold mb-4">Ensuring Your Security and Privacy</h2>
              <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                VoteSecure prioritizes the confidentiality and integrity of your vote. Our tools robustly defend against fraud and ensure voter anonymity.
              </p>
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://placehold.co/400x300/e2e8f0/64748b?text=Security+Illustration"
                alt="Security Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16 text-center">
          <div className="mx-auto max-w-3xl px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Secure Voting?</h2>
            <p className="text-gray-600 mb-8">
              Join VoteSecure today and be part of the secure, transparent, and accessible future of elections. It's never been easier to get started.
            </p>
            <Button className="bg-slate-900 text-white hover:bg-slate-800 px-6 py-3">
              Get Started with VoteSecure
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-white p-4 text-sm text-gray-500 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex space-x-6">
            <a href="#">Resources</a>
            <a href="#">Legal</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
