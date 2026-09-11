import type { ReactNode } from 'react'

interface CardBaseProps {
  titulo: string
  descricao: string
  variante?: 'padrao' | 'compacto' | 'imagem'
  icone?: ReactNode
  categoria?: string
  linkTexto?: string
  linkPara?: string
  classeIcone?: string
}

type CardProps = CardBaseProps &
  (
    | { imagem: string; textoAlternativo: string }
    | { imagem?: undefined; textoAlternativo?: never }
  )

export default function Card({
  titulo,
  descricao,
  imagem,
  textoAlternativo = '',
  variante = 'padrao',
  icone,
  categoria,
  linkTexto,
  linkPara,
  classeIcone = 'bg-violet-100 text-violet-700',
}: CardProps) {
  if (variante === 'compacto') {
    return (
      <article className="group flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-7 shadow-[0_5px_0_0_rgba(228,228,231,0.75)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_8px_0_0_rgba(221,214,254,0.9)] sm:p-8">
        {icone && (
          <div className={`mb-7 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${classeIcone}`}>
            {icone}
          </div>
        )}

        <h3 className="text-xl font-bold tracking-tight text-zinc-950">
          {titulo}
        </h3>
        <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base">
          {descricao}
        </p>
      </article>
    )
  }

  if (variante === 'imagem') {
    return (
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {imagem && (
          <div className="aspect-16/10 overflow-hidden bg-violet-50">
            <img
              src={imagem}
              alt={textoAlternativo}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          {categoria && (
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
              {categoria}
            </p>
          )}
          <h3 className="mt-3 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
            {titulo}
          </h3>
          <p className="mt-3 text-sm leading-6 text-zinc-600">{descricao}</p>

          {linkTexto && linkPara && (
            <a
              href={linkPara}
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-violet-600 transition-colors hover:text-violet-800 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600"
            >
              {linkTexto}
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </article>
    )
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {imagem && (
        <div className="aspect-4/3 overflow-hidden bg-violet-50">
          <img
            src={imagem}
            alt={textoAlternativo}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
          {titulo}
        </h3>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{descricao}</p>
      </div>
    </article>
  )
}
