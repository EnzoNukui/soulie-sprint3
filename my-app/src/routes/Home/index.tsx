import { useEffect, useRef, useState } from 'react'
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
import avatarComPressa from '../../assets/avatar/expressoes/avatar_com_pressa.png'
import avatarFeliz from '../../assets/avatar/expressoes/avatar_feliz.png'
import avatarRadiante from '../../assets/avatar/expressoes/avatar_radiante.png'
import avatarSorridente from '../../assets/avatar/expressoes/avatar_sorridente.png'
import avatarTimido from '../../assets/avatar/expressoes/avatar_timido.png'
import imagemSoulie from '../../assets/avatar/imagem_soulie.png'
import printPrototipo from '../../assets/produto/apresentacao/prototipo-soul-up.png'

const linkMvp = 'https://soulieprototipo.vercel.app/jornada/encontro'

const limitar = (valor: number, minimo: number, maximo: number) => Math.min(Math.max(valor, minimo), maximo)

const interpolarCor = (inicio: number[], fim: number[], progresso: number) => {
  const canais = inicio.map((canal, indice) => Math.round(canal + (fim[indice] - canal) * progresso))
  return `rgb(${canais.join(', ')})`
}

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
  const [progressoDestaque, setProgressoDestaque] = useState(0)
  const secaoDestaqueRef = useRef<HTMLElement>(null)

  useEffect(() => {
    document.title = 'Soulie | Início'
  }, [])

  useEffect(() => {
    let quadro: number | null = null

    const atualizarDestaque = () => {
      quadro = null
      const secao = secaoDestaqueRef.current
      if (!secao) return

      const caixa = secao.getBoundingClientRect()
      const distancia = secao.offsetHeight - window.innerHeight
      const progresso = limitar(-caixa.top / Math.max(distancia, 1), 0, 1)
      setProgressoDestaque(progresso)
    }

    const solicitarAtualizacao = () => {
      if (quadro === null) quadro = window.requestAnimationFrame(atualizarDestaque)
    }

    atualizarDestaque()
    window.addEventListener('scroll', solicitarAtualizacao, { passive: true })
    window.addEventListener('resize', solicitarAtualizacao)

    return () => {
      window.removeEventListener('scroll', solicitarAtualizacao)
      window.removeEventListener('resize', solicitarAtualizacao)
      if (quadro !== null) window.cancelAnimationFrame(quadro)
    }
  }, [])

  const irParaDesafio = () => {
    document.getElementById('desafio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const abrirMvp = () => {
    window.open(linkMvp, '_blank', 'noopener,noreferrer')
  }

  const progressoCor = limitar((progressoDestaque - 0.08) / 0.84, 0, 1)
  const corDestaque = interpolarCor([245, 243, 255], [46, 16, 101], progressoCor)
  const saidaMvp = limitar((progressoDestaque - 0.34) / 0.22, 0, 1)
  const entradaSobre = limitar((progressoDestaque - 0.46) / 0.24, 0, 1)
  const mostrarSobre = entradaSobre >= 0.5

  return (
    <main className="overflow-x-clip bg-white">
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
              className="absolute left-0 top-5 z-10 w-32 -rotate-8 opacity-90 sm:left-8 sm:w-40"
            />
            <img
              src={avatarComPressa}
              alt="Soulie com pressa"
              className="absolute right-0 top-8 z-10 w-32 rotate-8 opacity-90 sm:right-8 sm:w-40"
            />
          </div>
        </div>
      </section>

      <section ref={secaoDestaqueRef} className="relative h-[320vh] bg-violet-50">
        <div
          className="sticky top-0 z-60 h-screen overflow-hidden transition-colors duration-150 motion-reduce:transition-none"
          style={{ backgroundColor: corDestaque }}
        >
          <div
            aria-hidden={mostrarSobre}
            inert={mostrarSobre}
            className="absolute inset-0 flex items-center px-5 py-12 transition-opacity duration-200 motion-reduce:transition-none lg:px-8"
            style={{
              opacity: 1 - saidaMvp,
              pointerEvents: mostrarSobre ? 'none' : 'auto',
              transform: `translate3d(0, ${-saidaMvp * 36}px, 0)`,
            }}
          >
            <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
              <div className="relative z-20 text-center lg:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Experimente a jornada</p>
                <h2 className="mx-auto mt-4 max-w-xl text-4xl font-black tracking-[-0.04em] text-violet-950 sm:text-6xl lg:mx-0">
                  Comece sua jornada hoje.
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-violet-950/70 sm:text-lg lg:mx-0">
                  Pequenas ações podem virar hábitos que fazem diferença.
                </p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <Botao texto="Conheça o MVP" onClick={abrirMvp} />
                </div>
              </div>

              <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center">
                <div aria-hidden="true" className="absolute inset-[12%] rounded-full bg-violet-300/35 blur-3xl" />
                <div className="relative w-48 -rotate-4 overflow-hidden rounded-4xl border-[0.45rem] border-violet-950 bg-white p-1.5 shadow-[0_28px_70px_-28px_rgba(76,29,149,0.7)] sm:w-56 lg:w-64">
                  <div className="aspect-[603/904] overflow-hidden rounded-[1.45rem] bg-violet-50">
                    <img
                      src={printPrototipo}
                      alt="Tela inicial do protótipo da Soulie"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
                <img
                  src={avatarRadiante}
                  alt="Soulie radiante apresentando o MVP"
                  className="absolute -bottom-5 right-[2%] w-28 drop-shadow-[0_18px_26px_rgba(76,29,149,0.28)] sm:w-36 lg:right-[4%] lg:w-44"
                />
              </div>
            </div>
          </div>

          <div
            aria-hidden={!mostrarSobre}
            inert={!mostrarSobre}
            className="absolute inset-0 flex items-center px-5 py-12 text-white transition-opacity duration-200 motion-reduce:transition-none lg:px-8"
            style={{
              opacity: entradaSobre,
              pointerEvents: mostrarSobre ? 'auto' : 'none',
              transform: `translate3d(0, ${(1 - entradaSobre) * 42}px, 0)`,
            }}
          >
            <div className="mx-auto grid w-full max-w-7xl items-center gap-4 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div className="relative order-2 flex justify-center lg:order-1">
                <div aria-hidden="true" className="absolute inset-[18%] rounded-full bg-violet-400/25 blur-3xl" />
                <img
                  src={imagemSoulie}
                  alt="Soulie acompanhando cada etapa da jornada"
                  className="relative w-full max-w-32 drop-shadow-[0_24px_34px_rgba(12,5,35,0.4)] sm:max-w-48 lg:max-w-xs"
                />
              </div>

              <div className="order-1 text-center lg:order-2 lg:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Sempre com você</p>
                <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-6xl lg:mx-0">
                  A Soulie acompanha você.
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-violet-100/80 sm:text-lg lg:mx-0">
                  Uma companhia para começar, continuar e celebrar.
                </p>

                <div className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-2 sm:gap-3 lg:mx-0">
                  {[
                    { titulo: 'Missões possíveis', Icone: ClipboardCheck },
                    { titulo: 'Progresso visível', Icone: BarChart3 },
                    { titulo: 'Impacto compartilhado', Icone: UsersRound },
                  ].map(({ titulo, Icone }) => (
                    <div key={titulo} className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-2 py-3 text-center backdrop-blur-sm sm:px-4 sm:py-4 lg:flex-row lg:justify-start lg:gap-3 lg:text-left">
                      <Icone aria-hidden="true" className="h-5 w-5 shrink-0 text-violet-200" />
                      <span className="text-xs font-semibold sm:text-sm">{titulo}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-center lg:justify-start">
                  <Botao texto="Conheça a Soulie" variante="claro" onClick={() => navigate('/sobre')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-violet-100 bg-white">
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pb-14 pt-20 text-center sm:px-8 sm:pb-16 sm:pt-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
            Sua jornada continua
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] text-violet-950 sm:text-5xl lg:text-6xl">
            Quer fazer parte dessa jornada?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-violet-950/70 sm:text-lg">
            Converse com a gente e conheça melhor a proposta da Soulie.
          </p>
          <div className="mt-8 flex justify-center">
            <Botao texto="Fale com a gente" onClick={() => navigate('/contato')} />
          </div>

          <div className="relative mt-10 flex justify-center">
            <Star
              aria-hidden="true"
              className="absolute -left-10 top-10 h-5 w-5 fill-violet-300 text-violet-300 sm:-left-16 sm:h-6 sm:w-6"
            />
            <Star
              aria-hidden="true"
              className="absolute -right-8 top-24 h-4 w-4 fill-violet-200 text-violet-200 sm:-right-14 sm:h-5 sm:w-5"
            />
            <img
              src={imagemSoulie}
              alt="Soulie sorrindo com os braços cruzados"
              className="relative w-40 drop-shadow-[0_20px_30px_rgba(109,40,217,0.2)] sm:w-44 lg:w-48"
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute -bottom-14 left-1/2 h-20 w-[115%] -translate-x-1/2 rounded-t-[50%] border-t-2 border-violet-200/70 bg-violet-50/50"
        />
      </section>
    </main>
  )
}
