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
    <footer className="relative overflow-hidden bg-linear-to-br from-violet-950 via-violet-900 to-indigo-950 text-white">
      <div
        aria-hidden="true"
        className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-white/5"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-7 pt-12 sm:px-8 lg:px-10 lg:pt-14">
        <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start gap-6 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="text-left">
            <Link
              to="/"
              className="text-3xl font-semibold tracking-tight text-white transition-opacity hover:opacity-85 sm:text-4xl"
            >
              Soulie
            </Link>
            <p className="mt-3 max-w-40 text-xs leading-5 text-violet-200 sm:max-w-52 sm:text-sm lg:max-w-64 lg:text-base lg:leading-6">
              Pequenas ações, impacto que continua.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4 text-left text-sm text-violet-200 sm:gap-x-8 lg:flex lg:flex-wrap lg:justify-end lg:gap-x-8">
              {links.map((link) => (
                <li key={link.caminho}>
                  <Link
                    to={link.caminho}
                    className="relative inline-block py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-violet-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
