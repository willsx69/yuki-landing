"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden pt-28"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-100 transition-opacity duration-500 dark:opacity-0"
        style={{ backgroundImage: "url('/Gradiente_Roxo_Lavanda_4K.png')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-500 dark:opacity-100"
        style={{ backgroundImage: "url('/Gradiente_Roxo_Brilho_4K_grao_fino%20escuro.png')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/25 to-white dark:from-black/50 dark:via-black/30 dark:to-[#171020]"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-white backdrop-blur"
        >
          CONTROLE FINANCEIRO PESSOAL
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Sua vida financeira, sob seu controle.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/85 sm:text-lg"
        >
          Organize seu dinheiro, acompanhe suas movimentações e tenha mais
          clareza para tomar decisões.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="/cadastro"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#211A2B] dark:text-[#171020] transition-colors hover:bg-[#F8F7FC] dark:bg-[#F8F7FC] dark:hover:bg-[#C4B8D3]"
          >
            Começar agora
            <ArrowRight size={16} />
          </a>
          <a
            href="#funcionalidades"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Conhecer o Yuki
          </a>
        </motion.div>
      </div>

      {/* Dashboard demo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
        className="relative mx-auto mt-16 max-w-6xl px-6 pb-24"
      >
        <div className="relative">
          {/* floating cards */}
          <div className="pointer-events-none absolute -left-2 top-6 z-10 hidden w-44 rounded-2xl border border-[#E7E1ED] dark:border-[#3B2D4C] bg-white p-4 shadow-lg sm:block lg:-left-8 dark:border-[#3B2D4C] dark:bg-[#251B32]">
            <p className="text-xs font-medium text-[#797184] dark:text-[#C4B8D3]">Saldo disponível</p>
            <p className="mt-1 font-display text-xl font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
              R$ 12.480,00
            </p>
            <p className="mt-1 text-xs text-[#7738D9] dark:text-[#A987FF]">+8,2% no mês</p>
          </div>
          <div className="pointer-events-none absolute -right-2 top-10 z-10 hidden w-40 rounded-2xl border border-[#E7E1ED] dark:border-[#3B2D4C] bg-white p-4 shadow-lg sm:block lg:-right-8 dark:border-[#3B2D4C] dark:bg-[#251B32]">
            <p className="text-xs font-medium text-[#797184] dark:text-[#C4B8D3]">Receitas</p>
            <p className="mt-1 font-display text-xl font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
              R$ 8.200,00
            </p>
          </div>
          <div className="pointer-events-none absolute -right-4 bottom-10 z-10 hidden w-40 rounded-2xl border border-[#E7E1ED] dark:border-[#3B2D4C] bg-white p-4 shadow-lg sm:block lg:-right-10 dark:border-[#3B2D4C] dark:bg-[#251B32]">
            <p className="text-xs font-medium text-[#797184] dark:text-[#C4B8D3]">Despesas</p>
            <p className="mt-1 font-display text-xl font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
              R$ 3.120,00
            </p>
          </div>

          {/* main panel */}
          <div className="overflow-hidden rounded-3xl border border-[#E7E1ED] dark:border-[#3B2D4C] bg-white shadow-2xl dark:border-[#3B2D4C] dark:bg-[#251B32]">
            <div className="flex items-center gap-2 border-b border-[#E7E1ED] dark:border-[#3B2D4C] bg-[#F8F7FC] dark:bg-[#211532] px-5 py-3 dark:border-[#3B2D4C] dark:bg-[#211532]">
              <span className="h-3 w-3 rounded-full bg-[#E7E1ED] dark:bg-[#3B2D4C]" />
              <span className="h-3 w-3 rounded-full bg-[#E7E1ED] dark:bg-[#3B2D4C]" />
              <span className="h-3 w-3 rounded-full bg-[#E7E1ED] dark:bg-[#3B2D4C]" />
              <span className="ml-3 text-xs text-[#797184] dark:text-[#C4B8D3]">
                yuki.app/dashboard — dados demonstrativos
              </span>
            </div>
            <div className="grid gap-6 p-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#797184] dark:text-[#C4B8D3]">
                      Movimentações
                    </p>
                    <p className="font-display text-2xl font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
                      Últimos 30 dias
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#797184] dark:text-[#C4B8D3]">Saldo</p>
                    <p className="font-semibold text-[#7738D9] dark:text-[#A987FF]">R$ 12.480,00</p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 400 120"
                  className="mt-4 h-32 w-full"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#7738D9" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#7738D9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,90 L20,80 L40,85 L60,60 L80,65 L100,45 L120,50 L140,30 L160,40 L180,25 L200,35 L220,20 L240,28 L260,15 L280,22 L300,10 L320,18 L340,8 L360,14 L380,6 L400,12 L400,120 L0,120 Z"
                    fill="url(#g1)"
                  />
                  <path
                    d="M0,90 L20,80 L40,85 L60,60 L80,65 L100,45 L120,50 L140,30 L160,40 L180,25 L200,35 L220,20 L240,28 L260,15 L280,22 L300,10 L320,18 L340,8 L360,14 L380,6 L400,12"
                    fill="none"
                    stroke="#7738D9"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-[#797184] dark:text-[#C4B8D3]">
                  Transações recentes
                </p>
                <ul className="mt-3 space-y-3">
                  {[
                    { name: "Supermercado", val: "- R$ 312,40", pos: false },
                    { name: "Salário", val: "+ R$ 8.200,00", pos: true },
                    { name: "Aluguel", val: "- R$ 1.800,00", pos: false },
                    { name: "Streaming", val: "- R$ 55,90", pos: false },
                  ].map((t) => (
                    <li
                      key={t.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-[#211A2B] dark:text-[#F8F7FC]">{t.name}</span>
                      <span
                        className={
                          t.pos ? "font-medium text-[#7738D9] dark:text-[#A987FF]" : "text-[#797184] dark:text-[#C4B8D3]"
                        }
                      >
                        {t.val}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
