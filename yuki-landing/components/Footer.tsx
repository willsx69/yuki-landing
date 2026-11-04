import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E7E1ED] dark:border-[#3B2D4C] bg-white dark:bg-[#171020] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/icon-192.png"
                alt="Yuki"
                width={24}
                height={24}
                className="rounded-md"
              />
              <span className="font-display text-lg font-semibold text-[#211A2B] dark:text-[#F8F7FC]">
                Yuki
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#797184] dark:text-[#C4B8D3]">
              Plataforma de controle financeiro pessoal. Organize seu dinheiro e
              tenha mais clareza para tomar decisões.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#211A2B] dark:text-[#F8F7FC]">Navegação</p>
            <ul className="mt-3 space-y-2 text-sm text-[#797184] dark:text-[#C4B8D3]">
              <li><a href="#inicio" className="hover:text-[#211A2B] dark:text-[#F8F7FC]">Início</a></li>
              <li><a href="#funcionalidades" className="hover:text-[#211A2B] dark:text-[#F8F7FC]">Funcionalidades</a></li>
              <li><a href="#planos" className="hover:text-[#211A2B] dark:text-[#F8F7FC]">Planos</a></li>
              <li><a href="#faq" className="hover:text-[#211A2B] dark:text-[#F8F7FC]">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#211A2B] dark:text-[#F8F7FC]">Conta</p>
            <ul className="mt-3 space-y-2 text-sm text-[#797184] dark:text-[#C4B8D3]">
              <li><Link href="/login" className="hover:text-[#211A2B] dark:text-[#F8F7FC]">Entrar</Link></li>
              <li><Link href="/cadastro" className="hover:text-[#211A2B] dark:text-[#F8F7FC]">Criar conta</Link></li>
              <li><Link href="/privacidade" className="hover:text-[#211A2B] dark:text-[#F8F7FC]">Privacidade</Link></li>
              <li><Link href="/termos" className="hover:text-[#211A2B] dark:text-[#F8F7FC]">Termos</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#E7E1ED] dark:border-[#3B2D4C] pt-6 text-xs text-[#797184] dark:text-[#C4B8D3]">
          © 2026 Yuki. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
