interface CardBaseProps {
  titulo: string
  descricao: string
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
}: CardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {imagem && (
        <div className="aspect-[4/3] overflow-hidden bg-violet-50">
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
