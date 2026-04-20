"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center rounded-full border border-input bg-background p-0.5">
        <span className="rounded-full px-2.5 py-1 text-xs font-medium text-muted-foreground">
          PT
        </span>
        <span className="rounded-full px-2.5 py-1 text-xs font-medium text-muted-foreground">
          EN
        </span>
      </div>
    )
  }

  return (
    <div
      className="flex items-center rounded-full border border-input bg-background p-0.5"
      role="group"
      aria-label="Select language"
    >
      <button
        onClick={() => setLanguage("pt")}
        className={cn(
          "rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-200",
          language === "pt"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-pressed={language === "pt"}
        aria-label="Português Brasil"
      >
        PT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-200",
          language === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-pressed={language === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
