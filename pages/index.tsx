import React, { useState } from 'react';
import { Eye, Stars, Scan } from 'lucide-react';

const GlimpzLanding = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Eye className="h-8 w-8 text-yellow-400" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
              Glimpz
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
            Where Every Card Tells a Story
          </h1>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Step into a world of wonder where observation becomes an adventure. Challenge friends, spark imagination, and discover the magic hidden in plain sight.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-pink-400/10 to-purple-400/10 rounded-2xl blur-xl"></div>
            <img
              src="/img/hero.png"
              alt="Glimpz Card Game"
              className="relative rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full blur-xl opacity-50"></div>
          </div>

          {/* Email Signup Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Join the Adventure</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 focus:outline-none placeholder-white/50"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-purple-900 font-bold py-3 px-6 rounded-xl transition duration-200"
                >
                  Get Your First Glimpz
                </button>
              </form>
              {submitted && (
                <p className="mt-4 text-green-300 text-center">Magic is on its way to your inbox!</p>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
              <Scan className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Mind-Bending Fun</h3>
              <p className="text-purple-200">Turn ordinary moments into extraordinary discoveries.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
              <Stars className="h-8 w-8 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-pink-400">Spark Creativity</h3>
              <p className="text-purple-200">Let your imagination run wild with each new card.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
              <Eye className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-purple-400">Social Adventure</h3>
              <p className="text-purple-200">Share the wonder with friends and family.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-6 py-8 text-center text-purple-200">
        <p>&copy; 2025 Coded Thinking OÜ. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GlimpzLanding;