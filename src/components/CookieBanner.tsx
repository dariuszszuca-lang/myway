import { useState, useEffect } from 'react';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showMiniButton, setShowMiniButton] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    } else {
      // If user has made a choice, show mini button
      setShowMiniButton(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true
    }));
    setIsVisible(false);
    setShowMiniButton(true);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false
    }));
    setIsVisible(false);
    setShowMiniButton(true);
  };

  const closeBanner = () => {
    setIsVisible(false);
    setShowMiniButton(true);
  };

  const reopenBanner = () => {
    setIsVisible(true);
    setShowMiniButton(false);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Mini button component
  if (showMiniButton && !isVisible) {
    return (
      <button
        onClick={reopenBanner}
        className="fixed bottom-4 left-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50 group"
        title="Zarządzaj cookies"
      >
        <Cookie className="w-5 h-5" />
        <span className="absolute left-full ml-2 bottom-1/2 translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Zarządzaj cookies
        </span>
      </button>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50 p-6">
      <button
        onClick={closeBanner}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        aria-label="Zamknij"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start space-x-3 mb-4">
        <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Używamy plików cookies
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Ta strona używa plików cookies, aby zapewnić najlepsze doświadczenia. 
            Kontynuując przeglądanie, wyrażasz zgodę na ich używanie.
          </p>
        </div>
      </div>

      {showDetails && (
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Niezbędne</span>
              <Check className="w-3 h-3 text-green-500" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Analityczne</span>
              <span className="text-gray-500 dark:text-gray-400">Opcjonalne</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Funkcjonalne</span>
              <span className="text-gray-500 dark:text-gray-400">Opcjonalne</span>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <div className="flex space-x-2">
          <button
            onClick={acceptAll}
            className="flex-1 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Akceptuj wszystkie
          </button>
          <button
            onClick={acceptNecessary}
            className="flex-1 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
          >
            Tylko niezbędne
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <button
            onClick={toggleDetails}
            className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <Settings className="w-3 h-3" />
            <span>{showDetails ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}</span>
          </button>
          
          <Link
            to="/cookies"
            className="text-xs text-primary hover:text-primary/80 transition-colors"
          >
            Więcej informacji
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;