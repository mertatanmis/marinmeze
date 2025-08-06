import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Marin Meze
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          by FATMA TAŞKIRAN
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow-md">
          <p className="text-lg text-yellow-800 font-medium">
            🚧 Yapım Aşamasında 🚧
          </p>
          <p className="text-sm text-yellow-700 mt-2">
            Bu site yakında hizmetinizde olacak
          </p>
        </div>
      </div>
    </main>
  )
}
