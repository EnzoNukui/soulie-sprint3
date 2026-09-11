import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Botao from '../../components/Botoes/Botoes'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Rodape from '../../components/Rodape/Rodape'
import avatarDuvida from '../../assets/avatar/avatar_duvida.png'

export default function ErrorPage() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Soulie | Página não encontrada'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <Cabecalho />

      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-14 sm:py-16">
        <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-50 blur-2xl sm:h-96 sm:w-96" />
        <div aria-hidden="true" className="absolute left-[10%] top-[28%] hidden h-20 w-44 rotate-12 rounded-[50%] border-t-2 border-dashed border-violet-200 md:block" />
        <div aria-hidden="true" className="absolute right-[11%] top-[31%] hidden h-20 w-44 -rotate-12 rounded-[50%] border-t-2 border-dashed border-violet-200 md:block" />
        <span aria-hidden="true" className="absolute right-[14%] top-[24%] hidden text-5xl font-bold text-violet-300 md:block">?</span>

        <section className="relative z-10 mx-auto w-full max-w-3xl text-center">
          <div className="relative mx-auto flex h-64 max-w-xl items-center justify-center sm:h-72">
            <span aria-hidden="true" className="absolute text-[10rem] font-black leading-none tracking-[-0.08em] text-violet-100 sm:text-[13rem]">404</span>
            <img
              src={avatarDuvida}
              alt="Soulie pensativa procurando o caminho da página"
              className="relative z-10 w-36 drop-shadow-[0_20px_24px_rgba(109,40,217,0.2)] sm:w-44"
            />
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Ops! Essa página se perdeu.</h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-zinc-600 sm:text-lg">
            Não encontramos o endereço que você tentou acessar.
          </p>
          <div className="mt-7 flex justify-center">
            <Botao texto="Voltar para a Home" onClick={() => navigate('/')} />
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  )
}

