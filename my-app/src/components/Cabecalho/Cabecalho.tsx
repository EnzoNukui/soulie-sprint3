import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { nome: 'Home', caminho: '/' },
  { nome: 'Integrantes', caminho: '/integrantes' },
  { nome: 'Sobre', caminho: '/sobre' },
  { nome: 'Solução', caminho: '/solucao' },
  { nome: 'Contato', caminho: '/contato' },
  { nome: 'FAQ', caminho: '/faq' },
]

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)

  const estiloLink = ({ isActive }: { isActive: boolean }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:rounded-full after:bg-violet-600 after:transition-all ${
      isActive
        ? 'text-violet-600 after:w-full'
        : 'text-zinc-700 after:w-0 hover:text-violet-600'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white shadow-[0_4px_18px_-16px_rgba(24,24,27,0.45)]">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center px-5 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold tracking-tight text-violet-600 lg:left-8 lg:translate-x-0"
          onClick={() => setMenuAberto(false)}
        >
          Soulie
        </NavLink>

        <nav
          aria-label="Navegação principal"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
        >
          {links.map((link) => (
            <NavLink key={link.caminho} to={link.caminho} className={estiloLink}>
              {link.nome}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-900 transition-colors hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 lg:hidden"
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          aria-label={menuAberto ? 'Fechar menu principal' : 'Abrir menu principal'}
          onClick={() => setMenuAberto((estadoAtual) => !estadoAtual)}
        >
          {menuAberto ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path d="M5 7H19M5 12H19M5 17H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuAberto && (
        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className="mx-auto max-w-3xl rounded-b-3xl bg-white shadow-[0_18px_35px_-24px_rgba(24,24,27,0.4)] lg:hidden"
        >
          <div className="flex flex-col items-center gap-3 border-t border-zinc-100 px-5 py-6">
            {links.map((link) => (
              <NavLink
                key={link.caminho}
                to={link.caminho}
                className={estiloLink}
                onClick={() => setMenuAberto(false)}
              >
                {link.nome}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
