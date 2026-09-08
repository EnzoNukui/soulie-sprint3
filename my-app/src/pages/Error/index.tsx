import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-20 text-center lg:px-8">
      <p className="text-sm font-bold uppercase tracking-widest text-violet-600">Erro 404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Página não encontrada</h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-600">
        O endereço acessado não existe ou foi alterado.
      </p>
      <button
        type="button"
        className="mt-8 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-violet-700"
        onClick={() => navigate('/')}
      >
        Voltar para a Home
      </button>
    </section>
  )
}


