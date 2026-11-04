"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O que é o Yuki?",
    a: "O Yuki é uma plataforma de controle financeiro pessoal que ajuda você a organizar receitas, despesas, contas, cartões, dívidas, orçamentos e metas em um só lugar.",
  },
  {
    q: "Como funciona o controle financeiro?",
    a: "Você registra suas movimentações e o Yuki as organiza em um painel claro, com relatórios que facilitam o acompanhamento.",
  },
  {
    q: "Quais informações posso organizar?",
    a: "Receitas, despesas, contas a pagar e a receber, cartões, dívidas, orçamentos, metas financeiras e relatórios.",
  },
  {
    q: "Como funciona a assinatura?",
    a: "O Yuki utiliza um modelo de assinatura paga. As condições comerciais serão publicadas na seção de planos.",
  },
  {
    q: "Como posso cancelar minha assinatura?",
    a: "As regras de cancelamento seguirão os termos de uso do produto, disponíveis quando a contratação for ativada.",
  },
  {
    q: "Meus dados financeiros estão protegidos?",
    a: "O Yuki trata seus dados com cuidado e segue boas práticas de segurança. Detalhes estarão disponíveis na política de privacidade.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F8F7FC] dark:bg-[#211532] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl font-semibold leading-tight text-[#211A2B] dark:text-[#F8F7FC] sm:text-4xl">
          Perguntas frequentes.
        </h2>

        <div className="mt-10 divide-y divide-[#E7E1ED] dark:divide-[#3B2D4C] rounded-2xl border border-[#E7E1ED] dark:border-[#3B2D4C] bg-white dark:bg-[#251B32]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-[#211A2B] dark:text-[#F8F7FC]">
                    {f.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={
                      "shrink-0 text-[#797184] dark:text-[#C4B8D3] transition-transform " +
                      (isOpen ? "rotate-180" : "")
                    }
                  />
                </button>
                <div
                  className={
                    "grid transition-all duration-300 ease-out " +
                    (isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
                  }
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-[#797184] dark:text-[#C4B8D3]">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
