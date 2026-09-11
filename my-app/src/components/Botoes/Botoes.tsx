interface BotaoProps {
  texto: string
  variante?: 'primario' | 'secundario' | 'claro'
  tipo?: 'button' | 'submit' | 'reset'
  desabilitado?: boolean
  onClick?: () => void
}

const estilos = {
  primario:
    'bg-violet-600 text-white shadow-sm hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-md',
  secundario:
    'border border-violet-600 bg-transparent text-violet-600 hover:-translate-y-0.5 hover:bg-violet-50',
  claro:
    'bg-white text-violet-700 shadow-md hover:-translate-y-0.5 hover:bg-violet-50 hover:shadow-lg',
}

export default function Botao({
  texto,
  variante = 'primario',
  tipo = 'button',
  desabilitado = false,
  onClick,
}: BotaoProps) {
  return (
    <button
      type={tipo}
      disabled={desabilitado}
      onClick={onClick}
      className={`rounded-xl px-6 py-3 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 disabled:cursor-not-allowed disabled:opacity-50 ${estilos[variante]}`}
    >
      {texto}
    </button>
  )
}
