'use client';

import { useState, useRef, useEffect } from 'react';

// Type declaration for WebKit Audio Context
declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
  }
}

export default function Home() {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // ULTIMATE FORCE AUDIO PLAY - NO CLICKS NEEDED
    const ultimateForcePlay = async () => {
      if (audioRef.current) {
        try {
          // Set audio properties for maximum compatibility
          audioRef.current.volume = 0.5;
          audioRef.current.muted = false;
          audioRef.current.currentTime = 0;
          
          // Force play immediately
          await audioRef.current.play();
          setAudioEnabled(true);
          console.log('🎵 AUDIO PLAYING AUTOMATICALLY!');
        } catch (_error) {
          console.log('⚠️ Browser blocked autoplay, trying workaround...');
          
          // Workaround 1: Start muted then unmute
          try {
            audioRef.current.muted = true;
            await audioRef.current.play();
            
            // Gradually unmute
            setTimeout(() => {
              if (audioRef.current) {
                audioRef.current.muted = false;
                setAudioEnabled(true);
                console.log('🎵 AUDIO UNMUTED AND PLAYING!');
              }
            }, 100);
          } catch (_secondError) {
            console.log('⚠️ Trying Web Audio API workaround...');
            
            // Workaround 2: Web Audio API
            try {
              const audioContext = new (window.AudioContext || window.webkitAudioContext)();
              const oscillator = audioContext.createOscillator();
              const gainNode = audioContext.createGain();
              
              oscillator.connect(gainNode);
              gainNode.connect(audioContext.destination);
              gainNode.gain.setValueAtTime(0, audioContext.currentTime);
              oscillator.start();
              
              setTimeout(() => {
                oscillator.stop();
                ultimateForcePlay();
              }, 100);
            } catch (_thirdError) {
              console.log('⚠️ All attempts failed, audio will play on any interaction');
              setAudioEnabled(false);
            }
          }
        }
      }
    };

    // AGGRESSIVE APPROACH: Simulate user interaction
    const simulateInteraction = () => {
      try {
        // Create and dispatch a synthetic click event
        const syntheticClick = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        document.body.dispatchEvent(syntheticClick);
        
        // Also try touchstart
        if ('TouchEvent' in window) {
          const syntheticTouch = new TouchEvent('touchstart', {
            bubbles: true,
            cancelable: true,
            view: window
          });
          document.body.dispatchEvent(syntheticTouch);
        }
      } catch (_e) {
        console.log('Synthetic events not supported');
      }
    };

    // Try immediately and repeatedly
    simulateInteraction();
    ultimateForcePlay();
    
    setTimeout(() => {
      simulateInteraction();
      ultimateForcePlay();
    }, 50);
    
    setTimeout(() => {
      simulateInteraction();
      ultimateForcePlay();
    }, 200);
    
    setTimeout(ultimateForcePlay, 500);
    setTimeout(ultimateForcePlay, 1000);
    setTimeout(ultimateForcePlay, 2000);
    
    // Also try on page visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        ultimateForcePlay();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Force on ANY user interaction
    const forceOnInteraction = () => {
      ultimateForcePlay();
    };
    
    const events = [
      'click', 'touchstart', 'keydown', 'mousemove', 'scroll', 
      'mousedown', 'mouseup', 'touchend', 'touchmove', 'keyup', 
      'focus', 'blur', 'resize', 'load'
    ];
    events.forEach(event => {
      document.addEventListener(event, forceOnInteraction, { once: true, passive: true });
      window.addEventListener(event, forceOnInteraction, { once: true, passive: true });
    });
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      events.forEach(event => {
        document.removeEventListener(event, forceOnInteraction);
        window.removeEventListener(event, forceOnInteraction);
      });
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioEnabled) {
        audioRef.current.pause();
        setAudioEnabled(false);
      } else {
        audioRef.current.play().catch(console.error);
        setAudioEnabled(true);
      }
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden text-white">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(0.7) contrast(1.1)' }}
      >
        <source src="https://videos.pexels.com/video-files/1409899/1409899-hd_1920_1080_25fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/857043/857043-hd_1920_1080_30fps.mp4" type="video/mp4" />
        <source src="https://cdn.pixabay.com/vimeo/328940142/ocean-22986.mp4?width=1280&hash=6c4014f5c2f5c952c7a5c8c7b3a4a8e8e5d5f7a7" type="video/mp4" />
      </video>

      {/* Much Darker Overlay for perfect text readability */}
      <div className="absolute inset-0 bg-black/80 z-5"></div>

      {/* FORCE AUTOPLAY TRICK - Hidden iframe */}
      <iframe 
        src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUYrTp66hVFApGn+LvsFsaAy2Dx/DZijoIGGS57+OZRQ0PUqjn77pdGgMz"
        allow="autoplay" 
        style={{ display: 'none' }}
      />

      {/* Sea Wave Sound Effects - ULTIMATE AUTOPLAY */}
      <audio 
        ref={audioRef} 
        autoPlay
        muted={false}
        loop
        preload="auto"
        playsInline
        controls={false}
        crossOrigin="anonymous"
        src="/ocean-waves.mp3"
      >
        Your browser does not support the audio element.
      </audio>

      {/* Sound Control Button */}
      <button
        onClick={toggleAudio}
        className="fixed top-8 right-8 z-50 bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white p-4 rounded-full shadow-2xl transition-all duration-300 border-2 border-white/70"
        title={audioEnabled ? "Sesi kapat" : "Deniz seslerini aç"}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {audioEnabled ? (
            <>
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </>
          ) : (
            <>
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </>
          )}
        </svg>
      </button>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8 py-12 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Logo/Brand */}
          <div className="space-y-6 text-shadow-elegant">
            <h1 className="text-7xl md:text-8xl font-bold tracking-wider mb-4">
              Marin Meze
            </h1>
            <p className="text-2xl md:text-3xl font-semibold tracking-wide">
              by FATMA TAŞKIRAN
            </p>
          </div>

          {/* Tagline */}
          <div className="space-y-4 text-shadow-elegant">
            <p className="text-3xl md:text-4xl font-semibold italic">
              &quot;Denizin Lezzetleri, Sofranızın Şaheserleri&quot;
            </p>
            <p className="text-2xl md:text-3xl font-semibold">
              &quot;Sea Flavors, Masterpieces on Your Table&quot;
            </p>
          </div>

          {/* Food Categories */}
          <div className="space-y-8 my-16 text-shadow-elegant">
            {/* Top Center - Meze */}
            <div className="flex justify-center">
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold">Meze</h3>
                <p className="text-xl font-semibold">Appetizers</p>
              </div>
            </div>
            
            {/* Other Categories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold">Balık</h3>
                <p className="text-xl font-semibold">Fresh Fish</p>
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold">Karides</h3>
                <p className="text-xl font-semibold">Shrimp</p>
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold">Kalamar</h3>
                <p className="text-xl font-semibold">Squid</p>
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold">Midye</h3>
                <p className="text-xl font-semibold">Mussels</p>
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center space-x-4 my-12">
            <div className="h-px w-48 bg-white/70"></div>
          </div>

          {/* Construction Notice */}
          <div className="bg-black/90 backdrop-blur-sm p-12 rounded-xl shadow-2xl max-w-2xl mx-auto text-shadow-elegant">
            <h2 className="text-4xl font-bold mb-8">
              Bu site yakında hizmetinizde olacak
            </h2>
            <p className="text-2xl font-semibold italic mb-6">
              &quot;Denizin derinliklerinden lezzetler geliyor...&quot;
            </p>
            <p className="text-xl font-semibold">
              This site will be available soon
            </p>
            <p className="text-lg font-semibold mt-8">
              Balık ve deniz ürünleri lezzetlerini bekleyin
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-16 space-y-8 text-center">
            <h3 className="text-4xl font-extrabold tracking-wide text-white text-shadow-elegant">İletişim / Contact</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-2xl font-bold text-white text-shadow-elegant">
                  info@marinmeze.com
                </span>
              </div>
              <div className="flex items-center justify-center space-x-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-2xl font-bold text-white text-shadow-elegant">
                  +90 533 023 07 09
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}