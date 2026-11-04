import { Wallet, Receipt, Calendar, Eye } from "lucide-react";

const pains = [
  {
    icon: Wallet,
    title: "Não saber para onde o dinheiro vai",
    text: "Gastos dispersos em várias contas e cartões dificultam a visão do todo.",
  },
  {
    icon: Receipt,
    title: "Dificuldade em acompanhar despesas",
    text: "Lançamentos esquecidos comprometem o controle do mês.",
  },
  {
    icon: Calendar,
    title: "Perder o controle das contas",
    text: "Vencimentos e compromissos passam despercebidos sem organização.",
  },
  {
    icon: Eye,
    title: "Não enxergar a situação completa",
    text: "Sem um panorama claro, decisões financeiras ficam mais difíceis.",
  },
];

export default function ProblemSolution() {
  return (
    <section id="beneficios" className="bg-white dark:bg-[#171020] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-[#211A2B] dark:text-[#F8F7FC] sm:text-4xl">
            Organizar suas finanças não precisa ser complicado.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#797184] dark:text-[#C4B8D3]">
            O Yuki centraliza suas informações financeiras em uma única interface
            clara, para que você acompanhe tudo sem esforço.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[#E7E1ED] dark:border-[#3B2D4C] bg-[#F8F7FC] dark:bg-[#251B32] p-6"
            >
              <p.icon size={22} className="text-[#7738D9] dark:text-[#A987FF]" />
              <h3 className="mt-4 text-base font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#797184] dark:text-[#C4B8D3]">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#E7E1ED] dark:border-[#3B2D4C] bg-white dark:bg-[#251B32] p-8">
          <p className="text-base leading-relaxed text-[#211A2B] dark:text-[#F8F7FC]">
            Com o Yuki, você reúne receitas, despesas, contas, cartões, dívidas,
            orçamentos e metas em um só lugar. Acompanhe suas movimentações e
            entenda melhor seus gastos com relatórios claros.
          </p>
        </div>
      </div>
    </section>
  );
}
