import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="cta-final" className="bg-white dark:bg-[#171020] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-[#E7E1ED] dark:border-[#3B2D4C] bg-[#F8F7FC] dark:bg-[#211532] px-8 py-16 text-center sm:px-16">
          <h2 className="font-display text-3xl font-semibold leading-tight text-[#211A2B] dark:text-[#F8F7FC] sm:text-4xl">
            Comece a ter mais controle sobre seu dinheiro.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#797184] dark:text-[#C4B8D3]">
            Organize suas finanças e tenha uma visão mais clara da sua vida
            financeira com o Yuki.
          </p>
          <a
            href="/cadastro"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#7738D9] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#6a2fc4] dark:bg-[#A987FF] dark:text-[#171020] dark:hover:bg-[#C0A5FF]"
          >
            Começar agora
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
