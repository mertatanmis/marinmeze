import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="sea-pattern">
          <div className="absolute top-20 left-10 text-6xl animate-float">🐟</div>
          <div className="absolute top-40 right-20 text-4xl animate-float-delay-1">🦐</div>
          <div className="absolute bottom-40 left-20 text-5xl animate-float-delay-2">🦑</div>
          <div className="absolute bottom-20 right-10 text-6xl animate-float">🦪</div>
          <div className="absolute top-60 left-1/3 text-3xl animate-float-delay-1">🦀</div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Logo/Brand */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full mb-6 shadow-lg animate-float">
                <span className="text-4xl">🌊</span>
              </div>
              <h1 className="text-7xl font-bold gradient-text mb-4">
                Marin Meze
              </h1>
              <p className="text-2xl text-gray-700 font-medium">
                by FATMA TAŞKIRAN
              </p>
            </div>

            {/* Tagline */}
            <div className="mb-12">
              <p className="text-xl text-gray-600 italic">
                "Denizin Lezzetleri, Sofranızın Şaheserleri"
              </p>
              <p className="text-lg text-gray-500 mt-2">
                "Sea Flavors, Masterpieces on Your Table"
              </p>
            </div>

            {/* Food Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="food-card">
                <div className="text-4xl mb-3 animate-float">🐟</div>
                <h3 className="font-semibold text-gray-800">Balık</h3>
                <p className="text-sm text-gray-600">Fresh Fish</p>
              </div>
              <div className="food-card">
                <div className="text-4xl mb-3 animate-float-delay-1">🦐</div>
                <h3 className="font-semibold text-gray-800">Karides</h3>
                <p className="text-sm text-gray-600">Shrimp</p>
              </div>
              <div className="food-card">
                <div className="text-4xl mb-3 animate-float-delay-2">🦑</div>
                <h3 className="font-semibold text-gray-800">Kalamar</h3>
                <p className="text-sm text-gray-600">Squid</p>
              </div>
              <div className="food-card">
                <div className="text-4xl mb-3 animate-float">🦪</div>
                <h3 className="font-semibold text-gray-800">Midye</h3>
                <p className="text-sm text-gray-600">Mussels</p>
              </div>
            </div>

            {/* Construction Notice */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="text-3xl animate-float">🚧</span>
                <h2 className="text-2xl font-bold text-yellow-800">Yapım Aşamasında</h2>
                <span className="text-3xl animate-float">🚧</span>
              </div>
              <p className="text-lg text-yellow-700 font-medium mb-2">
                Bu site yakında hizmetinizde olacak
              </p>
              <p className="text-sm text-yellow-600">
                This site will be available soon
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">İletişim / Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <span>info@marinmeze.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <span>+90 XXX XXX XX XX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
