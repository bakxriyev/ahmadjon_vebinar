"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function MasterclassLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const router = useRouter()
  const [submitMessage, setSubmitMessage] = useState("")
  const [showThankYou, setShowThankYou] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto"
  }, [isModalOpen])

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.startsWith("998")) value = value.slice(3)
    if (value.length > 9) value = value.slice(0, 9)

    if (value.length > 0) {
      if (value.length <= 2) setPhoneNumber(`+998 ${value}`)
      else if (value.length <= 5) setPhoneNumber(`+998 ${value.slice(0, 2)} ${value.slice(2)}`)
      else if (value.length <= 7) setPhoneNumber(`+998 ${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5)}`)
      else setPhoneNumber(`+998 ${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5, 7)} ${value.slice(7)}`)
    } else setPhoneNumber("")
  }

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

    setIsSubmitting(true)

  setIsModalOpen(false)
    router.push("/thankyou")
    setPhoneNumber("")
    setSubmitMessage("")


    // Backend-ga ma'lumotni yuborish (fonda, parallel)
    try {
      await fetch("https://b.realexamielts.uz/usercha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone_number: cleanPhoneNumber }),
      })
    } catch (error) {
      console.log("Background submission:", error)
    } finally {
      setIsSubmitting(false)
    }
  }



  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');

        * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in { animation: fadeIn 0.3s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }

        .header-3d {
          background: rgba(17, 24, 39, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        }

        .button-3d {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          transform: translateY(0);
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.5), 0 6px 20px rgba(0,0,0,0.4);
          transition: all 0.3s ease;
          border: 2px solid rgba(59, 130, 246, 0.3);
        }

        .button-3d:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 40px rgba(59, 130, 246, 0.7), 0 10px 30px rgba(0,0,0,0.5);
        }

        .button-3d:active {
          transform: translateY(1px);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }

        .date-badge {
          background: rgba(31, 41, 55, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.3);
          backdrop-filter: blur(10px);
        }

        .register-text-3d {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(59, 130, 246, 0.2);
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Header */}
      <div className="header-3d px-4 py-3 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 flex-wrap">
          <div className="date-badge flex items-center gap-2 px-3 py-2 rounded-xl">
            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm sm:text-base font-bold text-white whitespace-nowrap">11-12 noyabr | 20:00</span>
          </div>
          <span className="text-xs sm:text-sm text-gray-300 text-center">
            Ahadjon Qo'shoqov bilan 2 kunlik Bepul dars
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Title */}
        <div className="text-center -mb-36 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-3">
            Bu 3 texnika asabiylikdan azob chekkan minglab odamlarga yordam bergan.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold bg-blue-700 rounded-xl leading-relaxed">
            90 daqiqalik jonli masterklass — vahima va tushkunlikdan ozod hayot sari birinchi qadam.
          </p>
        </div>

        {/* Image + Button */}
        <div className="relative w-full max-w-md mx-auto mb-10">
          <div className=" p-4 gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-fade-in">
            <div className="rounded-3xl overflow-hidden ">
              <Image
                src="/tiniq.png"
                alt="Video preview"
                width={200}
                height={300}
                className="w-full rounded-3xl object-cover"
                priority
                quality={90}
              />
            </div>
          </div>
          <div className="absolute -bottom-14 left-1/2 mb-5 -translate-x-1/2 w-full px-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full button-3d text-white font-black py-4 px-8 rounded-2xl text-lg sm:text-xl"
            >
              BEPUL QATNASHISH <span className="text-xl">👉</span>
            </button>
            <p className="text-center mt-3 register-text-3d text-lg font-bold animate-float">
              Ro'yxatdan o'tish uchun bosing
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-md mx-auto mb-8 px-4">
          <h2 className="text-lg font-black text-white mb-4 uppercase">ONLAYN BEPUL DARSDA SIZ:</h2>
          <ul className="space-y-3 text-white text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              ✅ Kasalliklarning psixosomatik sabablarini bilib olasiz, bu orqali siz tanangiz va ongingiz o'rtasidagi
              bog'liqlikni tushunasiz;
            </li>
            <li className="flex items-start gap-2">
              ✅ Tushkunlik va qo'rquv aslida nimadan kelib chiqishini bilib olasiz, bu orqali siz ruhiy bosimdan
              butunlay ozod bo'lasiz;
            </li>
            <li className="flex items-start gap-2">
              ✅ Tabiiy sog'ayish mexanizmlarini bilib olasiz, bu orqali siz o'zingizni doimiy energiya va ishonch
              holatida yashashga o'rgatasiz.
            </li>
          </ul>
        </div>

        {/* Gift Box */}
        <div className="max-w-md mx-auto mb-8 px-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-4">
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center gap-4">
                <div className="text-2xl flex-shrink-0">🎁</div>
                <div>
                  <ul className="text-blue-400 font-bold text-sm mb-2">
                    Ro'yxatdan o'tganlar uchun maxsus ushbu video darsliklar sovg'a sifatida beriladi:
                  </ul>
                  <ol className="text-gray-300 text-xs leading-relaxed font-medium space-y-1">
                    <li>- Kasalliklar aslida nimadan kelib chiqadi?</li>
                    <li>- Tushkunlik, qo'rquv, asabiylashish, vahimadan qanday chiqish mumkin?</li>
                    <li>- Dori-darmonsiz sog'likni qanday tiklash mumkin?</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second CTA */}
        <div className="relative w-full max-w-md mx-auto mb-2 px-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full button-3d text-white font-black py-4 px-8 rounded-2xl text-lg sm:text-xl"
          >
            BEPUL QATNASHISH <span className="text-xl">👉</span>
          </button>
          <p className="text-center mt-3 register-text-3d text-lg font-bold animate-float">
            Ro'yxatdan o'tish uchun bosing
          </p>
        </div>

        {/* Footer */}
        <footer className="w-full py-6">
          <div className="flex items-center justify-center gap-0">
            <p className="text-gray-400 text-sm">Created by</p>
            <a
              href="https://t.me/it_zoneuz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all duration-300 transform hover:scale-105"
            >
              <Image src="/itzone.png" alt="IT Zone Telegram" width={100} height={50} quality={90} />
            </a>
          </div>
        </footer>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl">
            <button
              onClick={() => {
                setIsModalOpen(false)
                setSubmitMessage("")
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1 hover:bg-gray-100 rounded-full"
            >
              <X size={28} strokeWidth={2.5} />
            </button>

            <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">Ro'yxatdan o'tish</h2>

            <div className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-base">
                  Telefon raqam <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-2xl focus:border-blue-900 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-gray-900 text-base disabled:opacity-50"
                  placeholder="+998 __ ___ __ __"
                  maxLength={19}
                />
              </div>

              {submitMessage && (
                <div className="p-4 rounded-xl text-center text-base font-medium bg-red-100 text-red-800 border border-red-200">
                  {submitMessage}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-blue-900 hover:bg-blue-950 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xl font-black py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02]"
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
