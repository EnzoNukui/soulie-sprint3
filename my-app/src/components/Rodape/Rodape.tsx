import { Link } from 'react-router-dom'

const links = [
  { nome: 'Home', caminho: '/' },
  { nome: 'Integrantes', caminho: '/integrantes' },
  { nome: 'Sobre', caminho: '/sobre' },
  { nome: 'Solução', caminho: '/solucao' },
  { nome: 'Contato', caminho: '/contato' },
  { nome: 'FAQ', caminho: '/faq' },
]

export default function Rodape() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-violet-900 to-indigo-950 text-white">
      <div
        aria-hidden="true"
        className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-white/5"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-7 pt-12 sm:px-8 lg:px-10 lg:pt-14">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <Link
              to="/"
              className="text-4xl font-semibold tracking-tight text-white transition-opacity hover:opacity-85"
            >
              Soulie
            </Link>
            <p className="mt-3 max-w-64 text-sm leading-6 text-violet-200 sm:text-base">
              Pequenas ações, impacto que continua.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="grid grid-cols-3 gap-x-7 gap-y-5 text-center text-sm text-violet-200 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8">
              {links.map((link) => (
                <li key={link.caminho}>
                  <Link
                    to={link.caminho}
                    className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {link.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-violet-300 sm:text-sm">
          <p>© 2026 Soulie. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
