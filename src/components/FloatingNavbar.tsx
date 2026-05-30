import { Button } from "@/components/ui/button"

export function FloatingNavbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl rounded-2xl border-2 border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection("home")} className="cursor-pointer">
            <div className="flex items-center gap-2 text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)]">
              <svg
                fill="currentColor"
                height="1.75em"
                style={{ flexShrink: 0, lineHeight: 1 }}
                viewBox="0 0 24 24"
                width="1.75em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Конструктор рецептов</title>
                <path d="M9 3C9 3 8 5 8 7C8 9.21 9.79 11 12 11C14.21 11 16 9.21 16 7C16 5 15 3 15 3" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 11L6 21H18L16 11" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 15H14M11 18H13" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-semibold text-lg font-open-sans-custom tracking-tight">Конструктор рецептов</span>
            </div>
          </button>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Возможности
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Цена
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              О продукте
            </button>

          </div>

          {/* CTA Button */}
          <Button
            size="sm"
            className="bg-[#7c0a2b] text-white hover:bg-[#9a0d36] border border-[#7c0a2b] font-open-sans-custom"
          >
            Получить доступ
          </Button>
        </div>
      </div>
    </nav>
  )
}