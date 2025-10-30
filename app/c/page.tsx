"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function MasterclassLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [submitMessage, setSubmitMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    if (isModalOpen && !phoneNumber) {
    setPhoneNumber("+998 ");
  }
  }, [isModalOpen])

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.startsWith("998")) {
      value = value.slice(3)
    }

    if (value.length > 9) {
      value = value.slice(0, 9)
    }

    if (value.length > 0) {
      if (value.length <= 2) {
        setPhoneNumber(`+998 ${value}`)
      } else if (value.length <= 5) {
        setPhoneNumber(`+998 ${value.slice(0, 2)} ${value.slice(2)}`)
      } else if (value.length <= 7) {
        setPhoneNumber(
          `+998 ${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5)}`
        )
      } else {
        setPhoneNumber(
          `+998 ${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5, 7)} ${value.slice(7)}`
        )
      }
    } else {
      setPhoneNumber("")
    }
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

    try {
      // Backendga ma'lumot yuborish
      const response = await fetch("https://b.realexamielts.uz/usercha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone_number: cleanPhoneNumber,
        }),
      })

      if (response.ok) {
        // Muvaffaqiyatli yuborilgandan keyin thank-you sahifasiga yo'naltirish
        router.push("/thankyou")
      } else {
        setSubmitMessage("Xatolik yuz berdi. Iltimos qayta urinib ko'ring")
        setIsSubmitting(false)
      }
    } catch (error) {
      console.log("[v0] Registration error:", error)
      // Xatolik bo'lsa ham foydalanuvchini yo'naltirish (agar kerak bo'lsa)
      router.push("/thankyou")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .header-3d {
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06);
          transform: translateZ(0);
        }

        .button-3d {
          transform: translateY(0);
          box-shadow: 0 6px 0 #0c4a6e, 0 8px 16px rgba(0, 0, 0, 0.2);
          transition: all 0.15s ease;
        }

        .button-3d:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 0 #0c4a6e, 0 12px 20px rgba(0, 0, 0, 0.25);
        }

        .button-3d:active {
          transform: translateY(3px);
          box-shadow: 0 3px 0 #0c4a6e, 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .date-badge {
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transform: translateZ(0);
        }
      `}</style>

      {/* Header */}
      <div className="header-3d px-12 py-3 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-6">
          <div className="date-badge flex items-center gap-2 px-4 py-2.5 rounded-2xl">
  <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      clipRule="evenodd"
    />
  </svg>
  <span className="text-lg sm:text-xl font-black text-gray-900 whitespace-nowrap">
    11-12 noyabr
  </span>
</div>

          
          
          <span className="text-xl sm:text-2xl font-black text-gray-900">20:00</span>
          <span className="text-xl sm:text-2xl uppercase font-black text-blue-900">Ahadjon Qo'shoqov</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Main Title */}
        <div className="text-center mb-2">
          <h1 className="leading-tight">
            <div className="text-[25px] uppercase sm:text-[36px] md:text-[42px] font-black text-gray-900 tracking-tight">
              Bu 3 texnika asabiylikdan
            </div>
            <div className="text-[28px] uppercase sm:text-[36px] md:text-[42px] font-black text-blue-900 tracking-tight">
              azob chekkan minglab
            </div>
            <div className="text-[28px] uppercase sm:text-[36px] md:text-[42px] font-black tracking-tight">
              <span className="text-blue-900">odamlarga</span>
              <span className="text-blue-900"> yordam</span>
              <span className="text-blue-900"> bergan</span>
            </div>
            
          </h1>
        </div>

        {/* Limited Offer Text */}
        <div className="text-center  mb-0">
          <p className="text-base sm:text-lg text-gray-900">
            <span className="text-red-600 font-black">90 daqiqalik jonli masterklass - vahima va </span>
          </p>
          <span className="text-black font-black">tushkunlikdan ozod hayot sari birinchi qadam
          </span>

        </div>

        {/* Speaker Image - Half visible */}
        <div className="-mb-18 relative" style={{ maxHeight: '500px', overflow: 'hidden' }}>
          <div className="w-full max-w-md mx-auto">
            <Image
              src="/photo.webp"
              alt="Speaker"
              width={500}
              height={600}
              priority
              quality={85}
              className="w-full h-auto"
              style={{ borderRadius: '24px 24px 0 0' }}
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="button-3d w-full max-w-md mx-auto block bg-blue-900 hover:bg-blue-950 text-white text-lg sm:text-xl font-black py-4 sm:py-5 rounded-full"
          >
            BEPUL QATNASHISH
          </button>
           <p className="text-center mt-3 register-text-3d text-lg font-bold animate-float">
              Ro'yxatdan o'tish uchun bosing
            </p>
        </div>

        {/* Gift Box */}
        <div className="max-w-md mx-auto mb-6">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-4">
            <div className="flex items-center gap-6">
              <div className="text-3xl sm:text-4xl flex-shrink-0">🎁</div>
              <div>
                <ul className="text-blue-900 font-bold text-[13px] mb-1.5">
                  Ro'yxatdan o'tganlar uchun maxsus "Qanday qilib Tushkunlik, vahima, qo'rquv va asabiylikdan xalos bo'lish mumkin" nomli video-darslik sovg'a sifatida beriladi.
                </ul>
                
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
<span className="font-bold flex justify-center items-center text-center ">
  <a className="text-red-500 font-bold mr-2">Onlayn BEPUL</a> {/* bu yerda bo‘sh joy uchun mr-2 */}
  Masterklassda Siz:
</span>
<div className="space-y-4 mb-4 mt-4">
  <div className="flex items-start gap-2 mb-4 ">
    <div className="flex-shrink-0 mt-0.5">
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-900 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
    <p className="text-gray-900  text-[15px] sm:text-base leading-relaxed">
      Kasalliklarning psixosomatik sabablarini bilib olasiz, <b>bu orqali siz tanangiz va ongingiz o‘rtasidagi bog‘liqlikni tushunasiz;</b>
    </p>
  </div>

  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 mt-0.5">
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-900 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
    <p className="text-gray-900 text-[15px] sm:text-base leading-relaxed">
      Tushkunlik va qo‘rquv aslida nimadan kelib chiqishini bilib olasiz, <b>bu orqali siz ruhiy bosimdan butunlay ozod bo‘lasiz;</b>
    </p>
  </div>

  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 mt-0.5">
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-900 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
    <p className="text-gray-900 text-[15px] sm:text-base leading-relaxed">
      Tabiiy sog‘ayish mexanizmlarini bilib olasiz, <b>bu orqali siz o‘zingizni doimiy energiya va ishonch holatida yashashga o‘rgatasiz.</b>
    </p>
  </div>
</div>


        {/* Bottom CTA Button */}
        <div className="mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="button-3d w-full max-w-md mx-auto block bg-blue-900 hover:bg-blue-950 text-white text-lg sm:text-xl font-black py-4 sm:py-5 rounded-full"
          >
            BEPUL QATNASHISH
          </button>
           <p className="text-center mt-3 register-text-3d text-lg font-bold animate-float">
              Ro'yxatdan o'tish uchun bosing
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

      <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">
        Masterklassga Ro'yxatdan O'tish
      </h2>

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
          className="w-full bg-blue-900 hover:bg-blue-950 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[10ox] font-black py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02]"
        >
          {isSubmitting ? "Yuborilmoqda..." : "Masterklassga Ro'yxatdan O'tish"}
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  )
}