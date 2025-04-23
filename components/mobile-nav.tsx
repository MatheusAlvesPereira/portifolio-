"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] sm:w-[300px]">
        <div className="flex flex-col gap-6 py-6">
          <SheetClose asChild>
            <Link
              href="#about"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#experience"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={handleLinkClick}
            >
              Experience
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#projects"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={handleLinkClick}
            >
              Projects
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#skills"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={handleLinkClick}
            >
              Skills
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#contact"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
