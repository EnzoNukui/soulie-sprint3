import type { ReactNode } from 'react'

interface ConteudoProps {
  identificacao?: string
  titulo: string
  descricao?: string
  children?: ReactNode
}

export default function Conteudo({
  identificacao,
  titulo,
  descricao,
  children,
}: ConteudoProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-20 lg:px-8">
      {identificacao && (
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-violet-600">
          {identificacao}
        </p>
      )}

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
        {titulo}
      </h1>

      {descricao && (
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
          {descricao}
        </p>
      )}

      {children && <div className="mt-10">{children}</div>}
    </section>
  )
}
