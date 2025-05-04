import React from 'react';

import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { FaChess, FaYoutube } from 'react-icons/fa';

import chesscomLogo from '@/assets/chesscomlogo.webp';
import SamayBM from '@/assets/SamayBM.webp';
import samayheader from '@/assets/samayheader.webp';

export default function ThankYouPage() {
  return (
    <>
      <Helmet>
        <title>Thank You | BM Samay Community</title>
        <meta
          name="description"
          content="A heartfelt thank you to our 20,000+ users who joined the BM Samay community."
        />
      </Helmet>

      <div className="h-screen bg-black overflow-hidden relative">
        {/* Background with styling similar to GTE.tsx */}
        <div className="absolute inset-0 z-0">
          {/* Green glow effect similar to GTE */}
          <div className="absolute inset-0 bg-[#39FF14]/5 mix-blend-overlay"></div>

          {/* Background image - position adjusted to avoid overflow */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full">
            <div className="h-full w-full relative">
              <img
                src={samayheader}
                alt="Samay Raina"
                className="h-full w-full object-cover object-center opacity-20 md:opacity-80"
              />
              <div className="absolute inset-0 bg-black opacity-30 md:opacity-0"></div>
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Content - adjusted layout to fit single view */}
        <div className="relative z-10 h-full flex flex-col md:flex-row md:items-center p-6 md:p-12 text-white">
          {/* Left column for content */}
          <div className="md:w-1/2 flex flex-col h-full justify-between max-w-2xl mx-auto md:mx-0">
            {/* Logo */}
            <div className="mb-6">
              <img src={SamayBM} alt="BM Samay Logo" className="h-12 sm:h-16" />
            </div>

            {/* Main content - condensed spacing */}
            <div className="flex-1 flex flex-col justify-center space-y-8">
              <h1 className="text-4xl sm:text-5xl font-bold">Thank You!</h1>

              <p className="text-lg sm:text-xl text-white/90">
                To our amazing community of{' '}
                <span className="text-white font-bold">20,000+</span> fans
              </p>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                  Our Journey
                </h2>
                <p className="text-base sm:text-lg text-white/80 mb-4">
                  This project is paused, but it was truly great while it
                  lasted. We'll be back with something bigger and better!
                </p>
                <p className="text-lg sm:text-xl font-semibold text-neon-green">
                  This isn't goodbye – it's a "see you later."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-neon-green hover:bg-neon-green/90 text-black rounded-md py-3 text-base font-medium flex-1 shadow-md shadow-neon-green/20"
                >
                  <a
                    href="https://www.youtube.com/@SamayRainaOfficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <FaYoutube />
                    Follow Samay
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-neon-green text-neon-green hover:bg-neon-green/10 rounded-md py-3 text-base font-medium flex-1 shadow-md"
                >
                  <a
                    href="https://www.chess.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <FaChess />
                    Keep Playing Chess
                  </a>
                </Button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <p className="text-xs text-white/60">Our Partner</p>
                <img src={chesscomLogo} alt="Chess.com" className="h-5" />
              </div>
              <p className="text-xs text-white/60">
                © {new Date().getFullYear()} BM Samay
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
