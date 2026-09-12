import type { ReactNode } from 'react'

interface ConteudoProps {
  identificacao?: string
  titulo: ReactNode
  descricao?: string
  children?: ReactNode
  centralizado?: boolean
  idTitulo?: string
}

export default function Conteudo({
  identificacao,
  titulo,
  descricao,
  children,
  centralizado = false,
  idTitulo,
}: ConteudoProps) {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby={idTitulo}
    >
      {identificacao && (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-widest text-violet-600 ${
            centralizado ? 'text-center' : ''
          }`}
        >
          {identificacao}
        </p>
      )}

      <h1
        id={idTitulo}
        className={`max-w-3xl text-4xl font-bold tracking-tight text-violet-950 sm:text-5xl lg:text-6xl ${
          centralizado ? 'mx-auto text-center' : ''
        }`}
      >
        {titulo}
      </h1>

      {descricao && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-8 text-zinc-600 ${
            centralizado ? 'mx-auto text-center' : ''
          }`}
        >
          {descricao}
        </p>
      )}

      {children && <div className={centralizado ? 'mt-12 sm:mt-16' : 'mt-10'}>{children}</div>}
    </section>
  )
}
