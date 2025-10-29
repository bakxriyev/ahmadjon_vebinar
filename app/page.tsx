import { redirect } from "next/navigation"

export default function HomePage() {
  // Kiruvchi har bir foydalanuvchini /c sahifasiga yo‘naltiramiz
  redirect("/c")
}
