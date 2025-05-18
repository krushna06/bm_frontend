import React from 'react';

import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import SamayBM from '@/assets/SamayBM.webp';
import samayheader from '@/assets/samayheader.webp';

export default function Subscribe() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Join Mailing List | Samay Raina's Community</title>
        <meta
          name="description"
          content="Stay updated with the latest news from Samay Raina's community by subscribing to our mailing list."
        />
      </Helmet>

      <div className="min-h-screen bg-black overflow-hidden relative">
        {/* Background with styling */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#39FF14]/5 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full">
            <div className="h-full w-full relative">
              <img
                src={samayheader}
                alt="Samay Raina"
                className="h-full w-full object-cover object-center opacity-20 md:opacity-40"
              />
              <div className="absolute inset-0 bg-black opacity-30 md:opacity-50"></div>
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="relative z-10 min-h-screen text-white flex flex-col">
          {/* Header */}
          <div className="p-4 flex justify-between items-center">
            <button
              onClick={() => navigate('/')}
              className="text-white hover:text-neon-green flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </button>
            <img src={SamayBM} alt="BM Samay Logo" className="h-10" />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 md:p-6">
            <div className="w-full max-w-2xl h-[70vh] sm:h-[80vh] bg-zinc-900/50 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-zinc-800">
              <iframe
                src="https://app.youform.com/forms/xodvfiuf"
                title="Subscribe to Samay Raina's Updates"
                className="w-full h-full border-0"
              />
            </div>
            <p className="mt-6 text-center text-xs text-gray-400">
              Form provided by{' '}
              <a
                href="https://youform.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neon-green"
              >
                Youform
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
