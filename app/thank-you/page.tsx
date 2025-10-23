"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ThankYouPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes arrowBounce {
          0%, 100% {
            transform: translateX(0);
            opacity: 1;
          }
          50% {
            transform: translateX(10px);
            opacity: 0.7;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-slide-in-down {
          animation: slideInDown 0.8s ease-out;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-bounce-custom {
          animation: bounce 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-arrow-bounce {
          animation: arrowBounce 1.5s ease-in-out infinite;
        }

        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }

        .button-3d {
          perspective: 1000px;
          transform-style: preserve-3d;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          box-shadow: 0 8px 0 #1e3a1f, 0 15px 20px rgba(0, 0, 0, 0.3);
        }

        .button-3d:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 0 #1e3a1f, 0 20px 30px rgba(0, 0, 0, 0.4);
        }

        .button-3d:active {
          transform: translateY(4px);
          box-shadow: 0 4px 0 #1e3a1f, 0 8px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 ${isLoaded ? "animate-slide-in-down" : "opacity-0"}`}>
          <h1 className="text-4xl md:text-6xl font-black text-green-800 mb-4 leading-tight">Rahmat!</h1>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold">Siz muvaffaqiyatli ro'yxatdan o'tdingiz</p>
        </div>

        {/* Main Content */}
        <div
          className={`grid md:grid-cols-2 gap-4 md:gap-12 mb-16 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div
          className={`bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-8 md:p-12 text-center text-white ${isLoaded ? "animate-slide-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-2xl md:text-3xl font-black mb-6">Oxirgi qadam</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/it_zoneuz"
              target="_blank"
              rel="noopener noreferrer"
              className="button-3d bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-green-800 text-xl md:text-2xl font-black py-5 md:py-6 px-12 md:px-16 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-3 group"
            >
              <span>Telegram</span>
              <ArrowLeft className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 animate-arrow-bounce" />
            </a>
          </div>
          <h3 className="text-2xl mt-5 md:text-3xl font-black mb-0">Telegram kanalimizga qo'shiling</h3>
          
        </div>

          {/* Right Side - Text Content */}
          <div
            className={`flex flex-col justify-center space-y-6 ${isLoaded ? "animate-slide-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">Keyingi qadamlar:</h2>
              <ul className="space-y-3 text-gray-700 text-xl font-bold uppercase">
                <li className="flex items-start gap-3">
                  <span className="text-green-600  text-2xl mt-1">✓</span>
                  <span>Masterclass 17-oktabr, 20:00 da boshlanaadi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-black text-2xl mt-1">✓</span>
                  <span>Telegram kanalimizga qo'shiling va yangiliklarni kuzatib boring</span>
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        {/* Telegram Section */}
        

        {/* Bottom Message */}
        <div
          className={`text-center mt-12 md:mt-16 ${isLoaded ? "animate-bounce-custom" : "opacity-0"}`}
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            Sizni telegram kanalimizda kutib qolamiz 🎓
          </p>
        </div>
        <footer className="w-full py-6">
  <div className="flex items-center justify-center gap-3">
    <p className="text-gray-500 text-sm">Created by</p>
    <a
      href="https://t.me/it_zoneuz"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-all duration-300 transform hover:scale-105"
    >
      <img
        src="./itzone.png"
        alt="IT Zone Telegram"
        width={150}
        height={100}
        className="cursor-pointer filter brightness-12 invert-[20%] sepia-[300%] saturate-[10000%] hue-rotate-[500deg]"
      />
    </a>
  </div>
</footer>
      </div>
    </div>
  )
}
