import { Check } from "lucide-react";
import { GlareHover } from "@/registry/magicui/glare-hover";

const plans = [
  {
    name: "Essencial",
    description: "Para quem está começando a organizar as finanças.",
    features: ["Dashboard financeiro", "Transações", "Contas e cartões"],
    highlight: false,
  },
  {
    name: "Completo",
    description: "Para quem quer controle total da vida financeira.",
    features: [
      "Tudo do Essencial",
      "Dívidas, orçamentos e metas",
      "Relatórios financeiros",
    ],
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="bg-white py-24 dark:bg-[#171020]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-[#211A2B] dark:text-[#F8F7FC] sm:text-4xl">
            Escolha como começar a organizar suas finanças.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#797184] dark:text-[#C4B8D3]">
            Encontre a opção adequada para acompanhar e organizar sua vida
            financeira.
          </p>
        </div>

        <p className="mt-6 text-sm text-[#797184] dark:text-[#C4B8D3]">
          Valores e condições comerciais em definição. A seção está preparada
          para a publicação dos planos.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <GlareHover
              key={p.name}
              width="100%"
              background="transparent"
              className="rounded-2xl"
              color="#7738D9"
              opacity={0.18}
              duration={600}
            >
              <div
                className={
                  "w-full rounded-2xl border p-8 " +
                  (p.highlight
                    ? "border-[#7738D9] bg-[#F8F7FC] dark:border-[#A987FF] dark:bg-[#211532]"
                    :                   "border-[#E7E1ED] bg-white dark:border-[#3B2D4C] dark:bg-[#251B32]")
                }
              >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
                  {p.name}
                </h3>
                {p.highlight && (
                  <span className="rounded-full bg-[#7738D9] px-3 py-1 text-xs font-semibold text-white">
                    Recomendado
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-[#797184] dark:text-[#C4B8D3]">{p.description}</p>
              <p className="mt-6 font-display text-2xl font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
                Em breve
              </p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#211A2B] dark:text-[#F8F7FC]">
                    <Check size={16} className="text-[#7738D9] dark:text-[#A987FF]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/cadastro"
                className={
                  "mt-8 inline-flex h-11 w-full items-center justify-center rounded-xl text-sm font-semibold transition-colors " +
                  (p.highlight
                  ? "bg-[#7738D9] text-white hover:bg-[#6a2fc4] dark:bg-[#A987FF] dark:text-[#171020] dark:hover:bg-[#C0A5FF]"
                  : "border border-[#E7E1ED] text-[#211A2B] dark:text-[#F8F7FC] hover:bg-[#F8F7FC] dark:border-[#3B2D4C] dark:text-[#F8F7FC] dark:hover:bg-[#211532]")
                }
              >
                Começar agora
              </a>
            </div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  );
}
