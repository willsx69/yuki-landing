import { UserPlus, ListChecks, Activity, PieChart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Crie sua conta",
    text: "Comece em poucos passos.",
  },
  {
    icon: ListChecks,
    title: "Organize suas informações",
    text: "Adicione receitas, despesas e contas.",
  },
  {
    icon: Activity,
    title: "Acompanhe suas movimentações",
    text: "Visualize tudo em um só lugar.",
  },
  {
    icon: PieChart,
    title: "Entenda seus gastos",
    text: "Use os relatórios para decidir melhor.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F8F7FC] dark:bg-[#211532] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-[#211A2B] dark:text-[#F8F7FC] sm:text-4xl">
            Comece a organizar suas finanças.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-[#E7E1ED] dark:border-[#3B2D4C] bg-white dark:bg-[#251B32] p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F7FC] dark:bg-[#211532] text-[#7738D9] dark:text-[#A987FF]">
                  <s.icon size={20} />
                </div>
                <span className="font-display text-2xl font-semibold text-[#E7E1ED] dark:text-[#3B2D4C]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#797184] dark:text-[#C4B8D3]">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
