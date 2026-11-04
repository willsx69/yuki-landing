export default function ProductShowcase() {
  return (
    <section className="bg-white py-24 dark:bg-[#171020]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-[#211A2B] dark:text-[#F8F7FC] sm:text-4xl">
            Uma visão completa das suas finanças.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#797184] dark:text-[#C4B8D3]">
            Tenha suas informações financeiras organizadas em uma interface
            simples e intuitiva.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {/* Dashboard */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
                Dashboard
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#797184] dark:text-[#C4B8D3]">
                Acompanhe saldo, receitas, despesas e movimentações em um único
                painel.
              </p>
            </div>
            <MockPanel label="Dashboard — dados demonstrativos" />
          </div>

          {/* Transações */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="lg:order-2">
              <h3 className="font-display text-2xl font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
                Transações
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#797184] dark:text-[#C4B8D3]">
                Visualize e organize seus lançamentos com clareza.
              </p>
            </div>
            <div className="lg:order-1">
              <MockList />
            </div>
          </div>

          {/* Relatórios */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
                Relatórios
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#797184] dark:text-[#C4B8D3]">
                Entenda melhor seus gastos com visualizações simples.
              </p>
            </div>
            <MockBars />
          </div>
        </div>
      </div>
    </section>
  );
}

function MockPanel({ label }: { label: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E7E1ED] dark:border-[#3B2D4C] bg-[#F8F7FC] dark:bg-[#211532]">
      <div className="flex items-center gap-2 border-b border-[#E7E1ED] dark:border-[#3B2D4C] bg-white px-4 dark:bg-[#251B32] py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E7E1ED] dark:bg-[#3B2D4C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E7E1ED] dark:bg-[#3B2D4C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E7E1ED] dark:bg-[#3B2D4C]" />
        <span className="ml-2 text-xs text-[#797184] dark:text-[#C4B8D3]">{label}</span>
      </div>
      <div className="grid grid-cols-3 gap-3 p-5">
        {["Saldo", "Receitas", "Despesas"].map((k, i) => (
          <div key={k} className="rounded-xl bg-white p-3 dark:bg-[#251B32]">
            <p className="text-xs text-[#797184] dark:text-[#C4B8D3]">{k}</p>
            <p className="mt-1 font-display text-base font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
              {i === 0 ? "12.480" : i === 1 ? "8.200" : "3.120"}
            </p>
          </div>
        ))}
        <div className="col-span-3 rounded-xl bg-white p-4 dark:bg-[#251B32]">
          <svg viewBox="0 0 300 80" className="h-20 w-full" preserveAspectRatio="none">
            <path
              d="M0,60 L30,50 L60,55 L90,35 L120,40 L150,25 L180,30 L210,18 L240,22 L270,12 L300,16 L300,80 L0,80 Z"
              fill="#7738D9"
              fillOpacity="0.15"
            />
            <path
              d="M0,60 L30,50 L60,55 L90,35 L120,40 L150,25 L180,30 L210,18 L240,22 L270,12 L300,16"
              fill="none"
              stroke="#7738D9"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MockList() {
  const items = [
    { name: "Supermercado", val: "- R$ 312,40" },
    { name: "Salário", val: "+ R$ 8.200,00" },
    { name: "Aluguel", val: "- R$ 1.800,00" },
    { name: "Energia", val: "- R$ 240,00" },
    { name: "Freelance", val: "+ R$ 1.500,00" },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E7E1ED] dark:border-[#3B2D4C] bg-white dark:bg-[#251B32]">
      <div className="border-b border-[#E7E1ED] dark:border-[#3B2D4C] bg-[#F8F7FC] dark:bg-[#211532] px-4 py-2.5 text-xs text-[#797184] dark:text-[#C4B8D3]">
        Transações — dados demonstrativos
      </div>
      <ul className="divide-y divide-[#E7E1ED]">
        {items.map((t) => (
          <li key={t.name} className="flex items-center justify-between px-4 py-3 text-sm">
            <span className="text-[#211A2B] dark:text-[#F8F7FC]">{t.name}</span>
            <span className="text-[#797184] dark:text-[#C4B8D3]">{t.val}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MockBars() {
  const bars = [40, 65, 30, 80, 55, 45, 70];
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E7E1ED] dark:border-[#3B2D4C] bg-white p-5 dark:bg-[#251B32]">
      <p className="text-xs text-[#797184] dark:text-[#C4B8D3]">Relatórios — dados demonstrativos</p>
      <div className="mt-4 flex items-end gap-3">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-[#7738D9]"
            style={{ height: `${h}px`, opacity: 0.7 + i * 0.04 }}
          />
        ))}
      </div>
    </div>
  );
}
