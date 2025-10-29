import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phone_number } = body

    if (!phone_number) {
      return NextResponse.json({ error: "Telefon raqam to'ldirilishi kerak" }, { status: 400 })
    }

    const phoneRegex = /^998\d{9}$/
    if (!phoneRegex.test(phone_number)) {
      return NextResponse.json({ error: "Telefon raqam noto'g'ri formatda" }, { status: 400 })
    }

    // Here you can add your backend logic:
    // - Save to database
    // - Send email/SMS
    // - Integrate with CRM
    // - etc.

    console.log("New registration:", { phone_number, timestamp: new Date() })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Ro'yxatdan muvaffaqiyatli o'tdingiz!",
        data: { phone_number },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Xatolik yuz berdi" }, { status: 500 })
  }
}
