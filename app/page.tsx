"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

export default function MasterclassLanding() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [timeLeft, setTimeLeft] = useState(4 * 60)

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }


  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "auto"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.startsWith("998")) {
      value = value.slice(3);
    }

    // Limit to 9 digits (after 998)
    if (value.length > 9) {
      value = value.slice(0, 9);
    }

    // Format as +998 XX XXX XX XX
    if (value.length > 0) {
      if (value.length <= 2) {
        setPhoneNumber(`+998 ${value}`);
      } else if (value.length <= 5) {
        setPhoneNumber(`+998 ${value.slice(0, 2)} ${value.slice(2)}`);
      } else if (value.length <= 7) {
        setPhoneNumber(
          `+998 ${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5)}`
        );
      } else {
        setPhoneNumber(
          `+998 ${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5, 7)} ${value.slice(7)}`
        );
      }
    } else {
      setPhoneNumber("");
    }
  };

  const handleSubmit = async () => {
    if (!phoneNumber.trim()) {
      setSubmitMessage("Iltimos telefon raqamingizni kiriting")
      return
    }

    const phoneRegex = /^\+998 \d{2} \d{3} \d{2} \d{2}$/
    if (!phoneRegex.test(phoneNumber)) {
      setSubmitMessage("Telefon raqam noto'g'ri formatda")
      return
    }

    const cleanPhoneNumber = phoneNumber.replace(/\D/g, "")

    // Redirect immediately without waiting
    setIsModalOpen(false)
    setPhoneNumber("")
    setSubmitMessage("")
    router.push("/thank-you")

    // Send data to backend asynchronously in the background
    fetch("https://b.realexamielts.uz/usercha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone_number: cleanPhoneNumber,
      }),
    }).catch((error) => {
      console.log("[v0] Background registration error:", error)
    })
  }

  const topics = [
    {
      id: 1,
      title: "Kasalliklar aslida nimadan kelib chiqadi?",
      image: "/bolingan.webp",
    },
    {
      id: 2,
      title: "Tushkunlik, qo'rquv, asabiylashish, vahimadan qanday chiqish mumkin?",
      image: "/opa.webp",
    },
    {
      id: 3,
      title: "Dori-darmonsiz sog'likni qanday tiklash mumkin?",
      image: "/tana.webp",
    },
    {
      id: 4,
      title: "Sog'lom hayot sari qadam: maxsus kurs taqdimoti",
      image: "/odam.webp",
    },
  ]
  const topics2 = [
    {
      id: 1,
      title: "Kasalliklar aslida nimadan kelib chiqadi?",
      image: "/oka.webp",
    },
    {
      id: 2,
      title: "Tushkunlik, qo'rquv, asabiylashish, vahimadan qanday chiqish mumkin?",
      image: "/2.webp",
    },
    {
      id: 3,
      title: "Dori-darmonsiz sog'likni qanday tiklash mumkin?",
      image: "/tana.webp",
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
          <div className="relative -mt-14 pb-8 animate-slide-in-up">
            <button
              onClick={() => setIsModalOpen(true)}
              className="button-3d bg-gradient-to-b from-green-600 animate-countdown-pulse to-green-800 hover:from-green-700 hover:to-green-900 text-yellow-300 text-xl md:text-2xl font-black py-5 md:py-6 px-16 md:px-24 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              RO'YXATDAN O'TISH
            </button>
          </div>
        </div>
      </div>

      {/* Topics Section */}
      <div className="bg-gradient-to-b from-green-800 to-green-900 py-10 md:py-14 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white text-center text-[20px] uppercase md:text-xl font-bold mb-8 md:mb-10 leading-relaxed text-animate">
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
            <p className="text-gray-900 text-[15px] md:text-xl font-bold mb-3 leading-relaxed text-animate">
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
            className="button-3d bg-gradient-to-b from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-yellow-300 text-xl md:text-2xl lg:text-3xl font-black py-6 md:py-7 px-20 md:px-28 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            RO'YXATDAN O'TISH
          </button>

          {/* Additional Topics */}
          <div className="space-y-4 mt-10">
            {topics2.slice(0, 3).map((topic, index) => (
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
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                  Telefon raqam <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-2xl focus:border-green-700 focus:ring-2 focus:ring-green-200 focus:outline-none transition-all text-gray-900 text-base"
                  placeholder="+998 __ ___ __ __"
                  maxLength={19}
                />
              </div>


              {submitMessage && (
                <div
                  className={`p-4 rounded-xl text-center text-sm md:text-base font-medium ${submitMessage.includes("muvaffaqiyatli")
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
                className="button-3d w-full bg-gradient-to-b from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white text-lg md:text-xl font-black py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.05] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
