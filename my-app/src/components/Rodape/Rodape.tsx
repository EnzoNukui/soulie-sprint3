import { Link } from 'react-router-dom'

const links = [
  { nome: 'Home', caminho: '/' },
  { nome: 'Sobre', caminho: '/sobre' },
  { nome: 'Solução', caminho: '/solucao' },
  { nome: 'Integrantes', caminho: '/integrantes' },
  { nome: 'FAQ', caminho: '/faq' },
  { nome: 'Contato', caminho: '/contato' },
]

export default function Rodape() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#1b0b3b] text-white">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-32 w-3/4 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl"
      />

      <div aria-hidden="true" className="h-px bg-linear-to-r from-transparent via-violet-400/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-7 pt-12 sm:px-8 lg:px-10 lg:pt-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link
              to="/"
              className="inline-block text-3xl font-semibold tracking-tight text-white transition-colors hover:text-violet-200 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-4xl"
            >
              Soulie<span className="text-violet-400">.</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-violet-200 sm:text-base">
              Pequenas ações, impacto que continua.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-violet-200 sm:flex sm:flex-wrap sm:gap-2">
              {links.map((link) => (
                <li key={link.caminho}>
                  <Link
                    to={link.caminho}
                    className="inline-flex rounded-full px-3 py-2 transition-colors hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-violet-300 sm:text-left sm:text-sm">
          <p>© 2026 Soulie. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
