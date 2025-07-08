import React from 'react';

import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import App from './App.tsx';
import { LandingPage } from './pages/Landing.tsx';
import Signup from './pages/SignUp.tsx';

import '@/styles/globals.css';

import ComingSoon from './components/comingsoon.tsx';
import CookieConsentWrapper from './components/CookieConsentWrapper.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import ShareGamePopup from './components/ShareGamepopup.tsx';
import PageNotFound from './pages/404NotFound.tsx';
import Chat from './pages/Chat.tsx';
import ChessNews from './pages/ChessNews.tsx';
import ChessTutorials from './pages/ChessTutorials.tsx';
import Community from './pages/Community.tsx';
import DiamondGift from './pages/Gift.tsx';
import GuessTheElo from './pages/GTE.tsx';
import Learn from './pages/Learn.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import SignUpCallback from './pages/SignUpCallback.tsx';
import Blunder from './pages/SomethingWentWrong.tsx';
import Subscribe from './pages/Subscribe.tsx';
import ThankYouPage from './pages/ThankYou.tsx';
import Welcome from './pages/Welcome.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route element={<CookieConsentWrapper />}>
              <Route path="/" element={<ThankYouPage />} />
              <Route path="/legacy" element={<LandingPage />} />
              <Route path="/app" element={<App />} />
              <Route path="/secret-chat" element={<Chat />} />
              <Route path="/gift" element={<DiamondGift />} />
              <Route path="/chessnews" element={<ChessNews />} />
              <Route path="/chesstutorials" element={<ChessTutorials />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/community" element={<Community />} />
              <Route path="/signupcallback" element={<SignUpCallback />} />
              <Route path="/blunder" element={<Blunder />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/comingsoon" element={<ComingSoon />} />
              <Route path="/gte" element={<GuessTheElo />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/sharegamepopup" element={<ShareGamePopup />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
);
