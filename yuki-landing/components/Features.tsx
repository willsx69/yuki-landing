import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  CreditCard,
  PiggyBank,
  Target,
  BarChart3,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard financeiro",
    text: "Visão geral da sua situação financeira em um único painel.",
  },
  {
    icon: ArrowLeftRight,
    title: "Transações",
    text: "Registre e acompanhe receitas e despesas com clareza.",
  },
  {
    icon: Wallet,
    title: "Contas",
    text: "Organize suas contas a pagar e a receber.",
  },
  {
    icon: CreditCard,
    title: "Cartões",
    text: "Gerencie cartões e acompanhe seus gastos.",
  },
  {
    icon: PiggyBank,
    title: "Dívidas",
    text: "Controle suas dívidas e acompanhe sua evolução.",
  },
  {
    icon: Target,
    title: "Orçamentos",
    text: "Crie orçamentos para manter seus gastos sob controle.",
  },
  {
    icon: BarChart3,
    title: "Metas financeiras",
    text: "Acompanhe o progresso das suas metas de economia.",
  },
  {
    icon: FileText,
    title: "Relatórios",
    text: "Visualize relatórios para entender melhor seus gastos.",
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="bg-[#F8F7FC] dark:bg-[#211532] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-[#211A2B] dark:text-[#F8F7FC] sm:text-4xl">
            Tudo o que você precisa para organizar sua vida financeira.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#797184] dark:text-[#C4B8D3]">
            Recursos pensados para dar clareza e controle sobre o seu dinheiro.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-[#E7E1ED] dark:border-[#3B2D4C] bg-white dark:bg-[#251B32] p-6 transition-colors hover:border-[#A987FF] dark:hover:border-[#C0A5FF]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F7FC] dark:bg-[#211532] text-[#7738D9] dark:text-[#A987FF]">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#797184] dark:text-[#C4B8D3]">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
