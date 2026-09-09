import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BarChart3,
  ClipboardCheck,
  Clock3,
  Gift,
  Star,
  UserRound,
  UsersRound,
} from 'lucide-react'
import Botao from '../../components/Botoes/Botoes'
import avatarComPressa from '../../assets/avatar/avatar_com_pressa.png'
import avatarFeliz from '../../assets/avatar/avatar_feliz.png'
import avatarRadiante from '../../assets/avatar/avatar_radiante.png'
import avatarSorridente from '../../assets/avatar/avatar_sorridente.png'
import avatarTimido from '../../assets/avatar/avatar_timido.png'
import imagemSoulie from '../../assets/avatar/imagem_soulie.png'

const desafios = [
  {
    titulo: 'Pouco motivo para voltar',
    descricao: 'Sem progresso visível, o hábito se perde.',
    icone: ClipboardCheck,
  },
  {
    titulo: 'Recompensa distante',
    descricao: 'O benefício demora a aparecer.',
    icone: Gift,
  },
  {
    titulo: 'Experiência sem contexto',
    descricao: 'Sugestões genéricas não criam conexão.',
    icone: Clock3,
  },
]

const jornada = [
  { titulo: 'Conhece', descricao: 'Entende interesses e rotina.', icone: UserRound },
  { titulo: 'Recomenda', descricao: 'Apresenta missões relevantes.', icone: UsersRound },
  { titulo: 'Acompanha', descricao: 'Torna o progresso visível.', icone: BarChart3 },
  { titulo: 'Recompensa', descricao: 'Celebra pontos e benefícios.', icone: Gift },
]

const recursos = [
  {
    titulo: 'Onboarding inteligente',
    descricao: 'Uma experiência simples desde o início.',
    icone: UserRound,
  },
  {
    titulo: 'Missões dinâmicas',
    descricao: 'Desafios possíveis para o dia a dia.',
    icone: BarChart3,
  },
  {
    titulo: 'Pontos e benefícios',
    descricao: 'Conquistas que geram vantagens reais.',
    icone: Star,
  },
]

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Soulie | Início'
  }, [])

  const irParaDesafio = () => {
    document.getElementById('desafio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="overflow-hidden bg-white">
      <section className="relative">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="relative z-10 text-center lg:text-left">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
              A camada gamificada da Soul Up
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
              Pequenas ações. Impacto que continua.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg lg:mx-0">
              A Soulie transforma hábitos sustentáveis em missões, progresso e recompensas.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Botao texto="Experimentar a Soulie" onClick={() => navigate('/solucao')} />
              <Botao texto="Entender a proposta" variante="secundario" onClick={irParaDesafio} />
            </div>
          </div>

          <div className="order-2 relative flex justify-center lg:order-1">
            <div aria-hidden="true" className="absolute inset-10 rounded-full bg-violet-100 blur-2xl" />
            <div aria-hidden="true" className="absolute right-8 top-8 h-28 w-28 rounded-full bg-violet-200/60" />
            <img
              src={imagemSoulie}
              alt="Soulie sorrindo com os braços cruzados"
              className="relative z-10 w-full max-w-64 drop-shadow-[0_24px_35px_rgba(109,40,217,0.22)] sm:max-w-72 lg:max-w-sm"
            />
          </div>
        </div>
      </section>

      <section id="desafio" className="border-t border-violet-100 bg-violet-50/60">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-36">
          <div className="order-2 relative flex justify-center lg:order-1">
            <div aria-hidden="true" className="absolute inset-12 rounded-full bg-violet-200/60 blur-2xl" />
            <img
              src={avatarComPressa}
              alt="Soulie preocupada e com pressa"
              className="relative w-full max-w-xs drop-shadow-[0_20px_28px_rgba(109,40,217,0.2)] sm:max-w-sm"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">O desafio</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              Entrar é fácil. Querer voltar é o que importa.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-600">
              A Soulie transforma intenção em uma rotina que vale a pena continuar.
            </p>

            <div className="mt-8 divide-y divide-violet-200/70">
              {desafios.map((desafio) => {
                const Icone = desafio.icone

                return (
                  <div key={desafio.titulo} className="flex items-center gap-4 py-4">
                    <Icone aria-hidden="true" className="h-6 w-6 shrink-0 text-violet-600" />
                    <div>
                      <h3 className="font-semibold text-zinc-900">{desafio.titulo}</h3>
                      <p className="mt-1 text-sm text-zinc-600">{desafio.descricao}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-violet-100 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-36">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
              Como a Soulie transforma a experiência
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              Do primeiro contato ao hábito que permanece.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-600">
              Uma jornada simples que acompanha cada avanço.
            </p>

            <ol className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {jornada.map((etapa, indice) => {
                const Icone = etapa.icone

                return (
                  <li key={etapa.titulo} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                      {indice + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <Icone aria-hidden="true" className="h-5 w-5 text-violet-600" />
                        <h3 className="font-semibold text-zinc-900">{etapa.titulo}</h3>
                      </div>
                      <p className="mt-1 text-sm text-zinc-600">{etapa.descricao}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>

          <div className="relative flex justify-center">
            <div aria-hidden="true" className="absolute inset-12 rounded-full bg-violet-100 blur-2xl" />
            <img
              src={avatarFeliz}
              alt="Soulie feliz comemorando uma conquista"
              className="relative w-full max-w-xs drop-shadow-[0_20px_28px_rgba(109,40,217,0.2)] sm:max-w-sm"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-violet-100 bg-violet-50/60">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-36">
          <div className="order-2 relative flex justify-center lg:order-1">
            <div aria-hidden="true" className="absolute inset-12 rounded-full bg-violet-200/60 blur-2xl" />
            <img
              src={avatarSorridente}
              alt="Soulie sorrindo"
              className="relative w-full max-w-xs drop-shadow-[0_20px_28px_rgba(109,40,217,0.2)] sm:max-w-sm"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
              Um sistema, não apenas um mascote
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              A Soulie participa de toda a jornada.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-600">
              Tecnologia, orientação e recompensa em uma experiência próxima.
            </p>

            <div className="mt-8 divide-y divide-violet-200/70">
              {recursos.map((recurso) => {
                const Icone = recurso.icone

                return (
                  <div key={recurso.titulo} className="flex items-center gap-4 py-4">
                    <Icone aria-hidden="true" className="h-6 w-6 shrink-0 text-violet-600" />
                    <div>
                      <h3 className="font-semibold text-zinc-900">{recurso.titulo}</h3>
                      <p className="mt-1 text-sm text-zinc-600">{recurso.descricao}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Botao texto="Entenda a solução" variante="secundario" onClick={() => navigate('/solucao')} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-violet-100 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-36">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
              Personalidade que responde ao contexto
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              Acolhe primeiro. Incentiva sem pressionar.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600">
              A Soulie celebra avanços e ajuda na retomada sem transformar a jornada em cobrança.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Botao texto="Conheça a Soulie" variante="secundario" onClick={() => navigate('/sobre')} />
            </div>
          </div>

          <div className="relative h-80 sm:h-96">
            <div aria-hidden="true" className="absolute inset-10 rounded-full bg-violet-100 blur-2xl" />
            <img
              src={avatarTimido}
              alt="Soulie tímida"
              className="absolute bottom-0 left-1/2 z-20 w-48 -translate-x-1/2 drop-shadow-[0_18px_24px_rgba(109,40,217,0.2)] sm:w-60"
            />
            <img
              src={avatarSorridente}
              alt="Soulie sorridente"
              className="absolute left-0 top-5 z-10 w-32 rotate-[-8deg] opacity-90 sm:left-8 sm:w-40"
            />
            <img
              src={avatarComPressa}
              alt="Soulie com pressa"
              className="absolute right-0 top-8 z-10 w-32 rotate-[8deg] opacity-90 sm:right-8 sm:w-40"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-24 pt-8 sm:pb-28 lg:px-8 lg:pb-36">
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] bg-linear-to-br from-violet-700 via-violet-600 to-indigo-700 px-6 py-10 text-white shadow-[0_30px_80px_-35px_rgba(91,33,182,0.75)] sm:px-10 sm:py-14 lg:grid-cols-2 lg:px-16 lg:py-16">
          <div aria-hidden="true" className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div aria-hidden="true" className="absolute -bottom-24 right-1/3 h-72 w-72 rounded-full bg-indigo-300/15" />

          <div className="relative z-10 text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-100">
              Agora veja funcionando
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              A proposta fica mais clara quando você participa.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-violet-100 lg:mx-0">
              Veja pequenas ações se transformarem em progresso.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Botao texto="Conheça a Soulie" variante="claro" onClick={() => navigate('/solucao')} />
            </div>
          </div>

          <div className="relative z-10 flex justify-center">
            <img
              src={avatarRadiante}
              alt="Soulie radiante comemorando"
              className="w-full max-w-64 drop-shadow-[0_24px_32px_rgba(30,27,75,0.35)] sm:max-w-xs"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
