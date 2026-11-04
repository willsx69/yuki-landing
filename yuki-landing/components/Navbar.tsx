"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 rounded-2xl border border-[#E7E1ED] bg-white/80 px-5 py-3 backdrop-blur-md dark:border-[#3B2D4C] dark:bg-[#171020]/80">
            <div className="flex items-center justify-between">
              <a href="#inicio" className="flex items-center gap-2">
                <Image
                  src="/icon-192.png"
                  alt="Yuki"
                  width={28}
                  height={28}
                  className="rounded-md"
                />
                <span className="font-display text-xl font-semibold tracking-tight text-[#211A2B] dark:text-[#F8F7FC]">
                  Yuki
                </span>
              </a>

              <nav className="hidden items-center gap-7 md:flex">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm font-medium text-[#797184] transition-colors hover:text-[#211A2B] dark:text-[#C4B8D3] dark:hover:text-[#F8F7FC]"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="hidden items-center gap-3 md:flex">
                <a
                  href="/login"
                  className="text-sm font-medium text-[#797184] transition-colors hover:text-[#211A2B] dark:text-[#C4B8D3] dark:hover:text-[#F8F7FC]"
                >
                  Entrar
                </a>
                <a
                  href="/cadastro"
                  className="rounded-xl bg-[#7738D9] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6a2fc4] dark:bg-[#A987FF] dark:text-[#171020] dark:hover:bg-[#C0A5FF]"
                >
                  Começar agora
                </a>
              </div>

              <button
                type="button"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7E1ED] text-[#211A2B] md:hidden dark:border-[#3B2D4C] dark:text-[#F8F7FC]"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          <AnimatedThemeToggler className="inline-flex h-9 w-9 shrink-0 items-center justify-center text-[#211A2B] dark:text-[#F8F7FC]" />
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-[#E7E1ED] bg-white p-4 md:hidden dark:border-[#3B2D4C] dark:bg-[#171020]">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[#797184] transition-colors hover:bg-[#F8F7FC] hover:text-[#211A2B] dark:text-[#C4B8D3] dark:hover:bg-[#211532] dark:hover:text-[#F8F7FC]"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 flex flex-col gap-2 border-t border-[#E7E1ED] pt-3 dark:border-[#3B2D4C]">
              <a
                href="/login"
                className="rounded-lg px-3 py-2 text-center text-sm font-medium text-[#797184] dark:text-[#C4B8D3]"
              >
                Entrar
              </a>
              <a
                href="/cadastro"
                className="rounded-xl bg-[#7738D9] px-3 py-2 text-center text-sm font-semibold text-white dark:bg-[#A987FF] dark:text-[#171020]"
              >
                Começar agora
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
