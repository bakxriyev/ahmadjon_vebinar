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

       <div className="min-h-screen bg-gradient-to-b bg-white flex items-center justify-center px-4">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
          * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-in { animation: slideIn 0.5s ease-out; }
        `}</style>

        <div className="max-w-md w-full text-center animate-slide-in">
          <div className="mb-6 text-black text-bold text-3xl">OXIRGI QADAM QOLDI!!!✅</div>
         
          <p className="text-[20px] sm:text-xl text-black mb-6 font-regular ">
            Bepul darsda ishtirok etish uchun quyidagi ko'k tugmani bosib telegram kanalga obuna bo'ling!
          </p>
        ,
          <button
            onClick={() => window.location.href = "https://t.me//it_zoneuz"}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-[1.02]"
          >
            OBUNA BO'LISH
          </button>
           <p className="text-center text-black mt-3 register-text-3d text-[15px] font-bold ">
             Obuna bo`lish uchun yuqoridagi tugmani bosing
            </p>
        </div>
        
      </div>
      
      </div>

  )
}
