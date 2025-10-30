"use client"

import { useEffect, useState } from "react"
import { ArrowDown, ArrowUp } from "lucide-react"

export default function ThankYouPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-hidden flex items-center justify-center px-4">
      <style>{`
        @keyframes arrowBounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(12px);
            opacity: 0.7;
          }
        }

        .animate-arrow-bounce {
          animation: arrowBounce 1.5s ease-in-out infinite;
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-slide-in { animation: slideIn 0.5s ease-out; }
      `}</style>

      <div className="max-w-md w-full text-center animate-slide-in">
        <div className="mb-6 text-black font-extrabold text-3xl">
          OXIRGI QADAM QOLDI!!!✅
        </div>

        <p className="text-[20px] sm:text-xl text-black mb-6 font-medium">
          Bepul darsda ishtirok etish uchun quyidagi ko'k tugmani bosib telegram kanalga obuna bo'ling!
        </p>

        {/* Pastga qaragan animatsiyali strelka */}
        <div className="flex justify-center mb-10">
          <ArrowDown size={48} className="text-blue-700 animate-arrow-bounce" />
        </div>

        <button
          onClick={() => (window.location.href = "https://t.me/+QGtp5PvT9Z9jOTEy")}
          className="w-full bg-blue-600 mb-4 hover:bg-blue-700 text-white font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-[1.03] shadow-lg"
        >
          OBUNA BO'LISH
        </button>

           <div className="flex justify-center mb-6">
          <ArrowUp size={48} className="text-blue-700 animate-arrow-bounce" />
        </div>
        <p className="text-center text-black mt-4 text-[15px] font-bold">
          Obuna bo`lish uchun yuqoridagi tugmani bosing
        </p>
      </div>
    </div>
  )
}
