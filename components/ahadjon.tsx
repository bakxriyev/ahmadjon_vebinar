"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function MasterclassLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [timeLeft, setTimeLeft] = useState(4 * 60) // 4 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  // ✅ Scrollni to'g'rilash
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "auto" // scroll bo'lishi uchun
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  const handleSubmit = async () => {
    if (!fullName.trim() || !phoneNumber.trim()) {
      setSubmitMessage("Iltimos barcha maydonlarni to'ldiring")
      return
    }

    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("YOUR_API_ENDPOINT_HERE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          phone_number: phoneNumber,
        }),
      })

      if (response.ok) {
        setSubmitMessage("Ro'yxatdan muvaffaqiyatli o'tdingiz!")
        setFullName("")
        setPhoneNumber("")
        setTimeout(() => {
          setIsModalOpen(false)
          setSubmitMessage("")
        }, 2000)
      } else {
        setSubmitMessage("Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.")
      }
    } catch (error) {
      setSubmitMessage("Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const topics = [
    {
      id: 1,
      title: "Kasalliklar aslida nimadan kelib chiqadi?",
      image: "/path/to/image1.jpg",
    },
    {
      id: 2,
      title: "Tushkunlik, qo'rquv, asabiylashish, vahimadan qanday chiqish mumkin?",
      image: "/path/to/image2.jpg",
    },
    {
      id: 3,
      title: "Dori-darmonsiz sog'likni qanday tiklash mumkin?",
      image: "/path/to/image3.jpg",
    },
    {
      id: 4,
      title: "Sog'lom hayot sari qadam: maxsus kurs taqdimoti",
      image: "/path/to/image4.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-auto">
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        @keyframes pulse3d {
          0%, 100% {
            transform: scale(1) rotateX(0deg);
          }
          50% {
            transform: scale(1.05) rotateX(5deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.6);
          }
        }

        @keyframes countdownPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
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

        .animate-pulse-3d {
          animation: pulse3d 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-countdown-pulse {
          animation: countdownPulse 1s ease-in-out infinite;
        }

        .button-3d {
          perspective: 1000px;
          transform-style: preserve-3d;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .button-3d:hover {
          transform: translateY(-8px) rotateX(8deg) rotateY(-2deg);
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
        }

        .button-3d:active {
          transform: translateY(-2px) rotateX(2deg);
        }

        .text-animate {
          animation: slideInUp 0.8s ease-out;
        }

        .topic-card {
          animation: slideInUp 0.8s ease-out;
          transition: all 0.3s ease;
        }

        .topic-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* Header */}
      <div className="bg-white py-4 px-4 md:px-6 sticky top-0 z-20 shadow-sm animate-slide-in-down">
        <div className="max-w-6xl mx-auto flex items-center justify-center md:justify-start gap-3 md:gap-4 flex-wrap">
          <div className="bg-white border-2 border-cyan-400 text-cyan-400 text-base md:text-xl font-semibold px-5 py-2.5 rounded-full animate-pulse-3d">
            17-oktabr,
            <br className="md:hidden" />
            20:00
          </div>
          <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 rounded-full flex items-center justify-center p-0.5 animate-float">
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="7" r="3" stroke="#22D3EE" strokeWidth="2" />
                <circle cx="7" cy="15" r="3" stroke="#22D3EE" strokeWidth="2" />
                <circle cx="17" cy="15" r="3" stroke="#22D3EE" strokeWidth="2" />
                <line x1="12" y1="10" x2="9.5" y2="13" stroke="#22D3EE" strokeWidth="2" />
                <line x1="12" y1="10" x2="14.5" y2="13" stroke="#22D3EE" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="bg-white border-2 border-cyan-400 text-cyan-400 text-base md:text-xl font-semibold px-5 py-2.5 rounded-full animate-pulse-3d">
            Ahadjon
            <br className="md:hidden" />
            Qo'shoqov
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-6 md:py-8 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 md:mb-8 leading-tight text-animate">
            ASABIYLIK, YOMON HAYOLLAR,
            <br />
            TUSHKUNLIK VA VAHIMADAN
            <br />
            QUTILISHNING 3 TA SINALGAN USULI
          </h1>

          {/* Speaker Image */}
          <div className="relative mb-2 animate-slide-in-up">
            <div className="relative w-full max-w-lg mx-auto">
              <img
                src="./photo.webp"
                alt="Ahadjon Qo'shoqov"
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative -mt-4 pb-8 animate-slide-in-up">
            <button
              onClick={() => setIsModalOpen(true)}
              className="button-3d bg-gradient-to-r from-green-700 via-green-800 to-green-900 hover:from-green-800 hover:via-green-900 hover:to-green-950 text-yellow-300 text-xl md:text-2xl font-black py-5 md:py-6 px-16 md:px-24 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              <span className="block transform transition-transform duration-500 hover:rotate-x-6">
                RO'YXATDAN O'TISH
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Topics Section */}
      <div className="bg-gradient-to-b from-green-800 to-green-900 py-10 md:py-14 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-yellow-300 text-center text-lg md:text-xl font-medium mb-8 md:mb-10 leading-relaxed text-animate">
            Ushbu masterklassda quyidagi
            <br />
            savollarga javob topasiz:
          </h2>

          <div className="space-y-4">
            {topics.map((topic, index) => (
              <div
                key={topic.id}
                className="topic-card bg-gradient-to-r from-gray-100 to-white rounded-full py-3 md:py-3.5 px-4 md:px-5 flex items-center gap-3 md:gap-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={topic.image || "/placeholder.svg"}
                    alt={`Topic ${topic.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-900 text-base md:text-lg font-semibold flex-1 leading-snug">{topic.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-10 md:py-14 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 md:mb-10 animate-slide-in-up">
            <p className="text-gray-900 text-lg md:text-xl font-medium mb-6 leading-relaxed text-animate">
              Ushbu vaqt tugaguncha ro'yxatdan
              <br />
              o'ting va quyidagi videodarslarni
              <br />
              qo'lga kiriting:
            </p>
            <div className="mb-8">
              <div
                className={`text-5xl md:text-7xl font-black text-gray-900 tracking-wider animate-countdown-pulse ${timeLeft <= 60 ? "text-red-600" : ""}`}
              >
                {formatTime(timeLeft)}
              </div>
              <div className="text-2xl md:text-3xl font-black text-gray-600 tracking-wider mt-2">Vaqt qoldi</div>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="button-3d bg-gradient-to-r from-green-700 via-green-800 to-green-900 hover:from-green-800 hover:via-green-900 hover:to-green-950 text-yellow-300 text-xl md:text-2xl lg:text-3xl font-black py-6 md:py-7 px-20 md:px-28 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          >
            RO'YXATDAN O'TISH
          </button>

          {/* Additional Topics */}
          <div className="space-y-4 mt-10">
            {topics.slice(0, 3).map((topic, index) => (
              <div
                key={`bottom-${topic.id}`}
                className="topic-card bg-gradient-to-r from-gray-100 to-white rounded-full py-3 md:py-3.5 px-4 md:px-5 flex items-center gap-3 md:gap-4 shadow-md border border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={topic.image || "/placeholder.svg"}
                    alt={`Topic ${topic.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-900 text-base md:text-lg font-semibold flex-1 text-left leading-snug">
                  {topic.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 relative shadow-2xl my-10 animate-slide-in-up">
            <button
              onClick={() => {
                setIsModalOpen(false)
                setSubmitMessage("")
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1 hover:bg-gray-100 rounded-full"
            >
              <X size={28} strokeWidth={2.5} />
            </button>

            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center text-animate">
              Ro'yxatdan o'tish
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Ism va Familiya</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-2xl focus:border-green-700 focus:ring-2 focus:ring-green-200 focus:outline-none transition-all text-gray-900 text-base"
                  placeholder="Ismingizni kiriting"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Telefon raqam</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-2xl focus:border-green-700 focus:ring-2 focus:ring-green-200 focus:outline-none transition-all text-gray-900 text-base"
                  placeholder="+998 __ ___ __ __"
                />
              </div>

              {submitMessage && (
                <div
                  className={`p-4 rounded-xl text-center text-sm md:text-base font-medium ${
                    submitMessage.includes("muvaffaqiyatli")
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="button-3d w-full bg-gradient-to-r from-green-700 via-green-800 to-green-900 hover:from-green-800 hover:via-green-900 hover:to-green-950 text-white text-lg md:text-xl font-black py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.05] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
