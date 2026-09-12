import { NavLink } from 'react-router-dom'

const links = [
  { nome: 'Home', caminho: '/' },
  { nome: 'Sobre', caminho: '/sobre' },
  { nome: 'Solução', caminho: '/solucao' },
  { nome: 'Integrantes', caminho: '/integrantes' },
  { nome: 'FAQ', caminho: '/faq' },
  { nome: 'Contato', caminho: '/contato' },
]

interface MenuProps {
  variante: 'desktop' | 'responsivo'
  aoNavegar?: () => void
}

export default function Menu({ variante, aoNavegar }: MenuProps) {
  const estiloLink = ({ isActive }: { isActive: boolean }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:rounded-full after:bg-violet-600 after:transition-all ${
      isActive
        ? 'text-violet-600 after:w-full'
        : 'text-zinc-700 after:w-0 hover:text-violet-600'
    }`

  if (variante === 'responsivo') {
    return (
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
              end={link.caminho === '/'}
              className={estiloLink}
              onClick={aoNavegar}
            >
              {link.nome}
            </NavLink>
          ))}
        </div>
      </nav>
    )
  }

  return (
    <nav
      aria-label="Navegação principal"
      className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
    >
      {links.map((link) => (
        <NavLink
          key={link.caminho}
          to={link.caminho}
          end={link.caminho === '/'}
          className={estiloLink}
        >
          {link.nome}
        </NavLink>
      ))}
    </nav>
  )
}
