import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Menu from '../Menu/Menu'

export default function Cabecalho() {
  const { pathname } = useLocation()
  const [rotaMenuAberto, setRotaMenuAberto] = useState<string | null>(null)
  const botaoMenuRef = useRef<HTMLButtonElement>(null)
  const menuAberto = rotaMenuAberto === pathname

  useEffect(() => {
    if (!menuAberto) return

    const fecharComEscape = (evento: KeyboardEvent) => {
      if (evento.key !== 'Escape') return

      setRotaMenuAberto(null)
      botaoMenuRef.current?.focus()
    }

    document.addEventListener('keydown', fecharComEscape)
    return () => document.removeEventListener('keydown', fecharComEscape)
  }, [menuAberto])

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white shadow-[0_4px_18px_-16px_rgba(24,24,27,0.45)]">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center px-5 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold tracking-tight text-violet-600 lg:left-8 lg:translate-x-0"
          onClick={() => setRotaMenuAberto(null)}
        >
          Soulie
        </NavLink>

        <Menu variante="desktop" />

        <button
          ref={botaoMenuRef}
          type="button"
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-900 transition-colors hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 lg:hidden"
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          aria-label={menuAberto ? 'Fechar menu principal' : 'Abrir menu principal'}
          onClick={() => setRotaMenuAberto((rotaAtual) => rotaAtual === pathname ? null : pathname)}
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
        <Menu variante="responsivo" aoNavegar={() => setRotaMenuAberto(null)} />
      )}
    </header>
  )
}
