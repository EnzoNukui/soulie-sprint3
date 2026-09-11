import { useEffect, useRef, useState } from 'react'
import {
  BellRing,
  Gift,
  Recycle,
  Route,
  Target,
  UsersRound,
} from 'lucide-react'
import Botao from '../../components/Botoes/Botoes'
import Card from '../../components/Cards/Cards'
import avatarFeliz from '../../assets/avatar/avatar_feliz.png'
import avatarRadiante from '../../assets/avatar/avatar_radiante.png'
import avatarTimido from '../../assets/avatar/avatar_timido.png'
import avatarPortalCta from '../../assets/solucao/avatar-portal-cta.png'
import printPrototipo from '../../assets/solucao/prototipo-soul-up.png'

const linkMvp = 'https://soulieprototipo.vercel.app/jornada/encontro'

const recursos = [
  {
    titulo: 'Sua própria jornada',
    descricao: 'Uma experiência guiada que começa no seu ritmo.',
    Icone: Route,
    classeIcone: 'bg-violet-100 text-violet-700',
  },
  {
    titulo: 'Missões sustentáveis',
    descricao: 'Ações práticas que aproximam intenção e mudança.',
    Icone: Recycle,
    classeIcone: 'bg-emerald-100 text-emerald-700',
  },
  {
    titulo: 'Metas adaptativas',
    descricao: 'Objetivos possíveis, ajustados à sua rotina.',
    Icone: Target,
    classeIcone: 'bg-amber-100 text-amber-700',
  },
  {
    titulo: 'Timing inteligente',
    descricao: 'Lembretes no momento certo, sem sobrecarregar.',
    Icone: BellRing,
    classeIcone: 'bg-sky-100 text-sky-700',
  },
  {
    titulo: 'Comunidade',
    descricao: 'Pessoas que compartilham ideias e avançam juntas.',
    Icone: UsersRound,
    classeIcone: 'bg-pink-100 text-pink-700',
  },
  {
    titulo: 'Recompensas e impacto',
    descricao: 'Ofensivas, pontos e resultados tornam o progresso visível.',
    Icone: Gift,
    classeIcone: 'bg-lime-100 text-lime-700',
  },
]

const fases = [
  {
    nome: 'Começando',
    descricao: 'Toda mudança começa com um primeiro passo.',
    imagem: avatarTimido,
    alt: 'Soulie tímida representando o começo da jornada',
  },
  {
    nome: 'Em movimento',
    descricao: 'Sua ofensiva mantém o ritmo e celebra a continuidade.',
    imagem: avatarFeliz,
    alt: 'Soulie feliz celebrando a continuidade da jornada',
  },
  {
    nome: 'Gerando impacto',
    descricao: 'O progresso se torna visível em escolhas e resultados.',
    imagem: avatarRadiante,
    alt: 'Soulie radiante comemorando o impacto conquistado',
  },
]

const imagensCards = {
  acao:
    'https://images.unsplash.com/photo-1755544624610-30db0fd65109?auto=format&fit=crop&w=1200&q=85',
  comunidade:
    'https://images.unsplash.com/photo-1611843467160-25afb8df1074?auto=format&fit=crop&w=1200&q=85',
  impacto:
    'https://images.unsplash.com/photo-1771172195332-3bc9ded9f3b5?auto=format&fit=crop&w=1200&q=85',
}

const limitar = (valor: number, minimo: number, maximo: number) =>
  Math.min(Math.max(valor, minimo), maximo)

const interpolarCor = (inicio: number[], fim: number[], progresso: number) => {
  const canais = inicio.map((canal, indice) =>
    Math.round(canal + (fim[indice] - canal) * progresso),
  )

  return `rgb(${canais.join(', ')})`
}

const calcularCorFases = (progresso: number) => {
  const roxoEscuro = [46, 16, 101]
  const roxoClaro = [139, 92, 246]

  if (progresso < 0.22) return interpolarCor(roxoEscuro, roxoClaro, 0)
  if (progresso < 0.36) {
    return interpolarCor(roxoEscuro, roxoClaro, (progresso - 0.22) / 0.14)
  }
  if (progresso < 0.55) return interpolarCor(roxoClaro, roxoEscuro, 0)
  if (progresso < 0.69) {
    return interpolarCor(roxoClaro, roxoEscuro, (progresso - 0.55) / 0.14)
  }

  return interpolarCor(roxoEscuro, roxoClaro, 0)
}

export default function Solucao() {
  const [faseAtiva, setFaseAtiva] = useState(0)
  const [progressoFases, setProgressoFases] = useState(0)
  const secaoFasesRef = useRef<HTMLElement>(null)

  useEffect(() => {
    document.title = 'Soulie | Solução'
  }, [])

  useEffect(() => {
    let quadro: number | null = null

    const atualizarFase = () => {
      quadro = null
      const secao = secaoFasesRef.current
      if (!secao) return

      const caixa = secao.getBoundingClientRect()
      const distancia = Math.max(secao.offsetHeight - window.innerHeight, 1)
      const progresso = limitar(-caixa.top / distancia, 0, 0.999)
      setProgressoFases(progresso)
      setFaseAtiva(Math.floor(progresso * fases.length))
    }

    const solicitarAtualizacao = () => {
      if (quadro === null) quadro = window.requestAnimationFrame(atualizarFase)
    }

    atualizarFase()
    window.addEventListener('scroll', solicitarAtualizacao, { passive: true })
    window.addEventListener('resize', solicitarAtualizacao)

    return () => {
      window.removeEventListener('scroll', solicitarAtualizacao)
      window.removeEventListener('resize', solicitarAtualizacao)
      if (quadro !== null) window.cancelAnimationFrame(quadro)
    }
  }, [])

  const rolarParaRecursos = () => {
    document.getElementById('recursos-solucao')?.scrollIntoView({ behavior: 'smooth' })
  }

  const abrirMvp = () => {
    window.open(linkMvp, '_blank', 'noopener,noreferrer')
  }

  const fase = fases[faseAtiva]
  const corFundoFases = calcularCorFases(progressoFases)

  return (
    <div className="overflow-x-clip bg-[#fbfaf7]">
      <section className="relative overflow-hidden border-b border-violet-100">
        <div aria-hidden="true" className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet-100/60 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-48 right-0 h-112 w-112 rounded-full bg-emerald-50 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-12 xl:py-20">
          <div className="relative z-20 text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
              Sustentabilidade que vira hábito
            </p>
            <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-violet-950 sm:text-6xl xl:text-7xl">
              Pequenas escolhas. Um impacto que cresce com você.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg lg:mx-0">
              A Soulie transforma ações sustentáveis em missões simples, sociais e recompensadoras.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Botao texto="Conheça a solução" onClick={rolarParaRecursos} />
            </div>
          </div>

          <div className="relative flex min-h-128 items-center justify-center lg:min-h-136 lg:justify-end xl:min-h-152">
            <div aria-hidden="true" className="absolute inset-x-8 bottom-10 top-20 rounded-full bg-violet-200/45 blur-3xl" />

            <img
              src={avatarFeliz}
              alt="Soulie feliz apresentando o protótipo"
              className="absolute bottom-16 left-0 z-20 w-36 drop-shadow-[0_24px_30px_rgba(76,29,149,0.3)] sm:left-8 sm:w-48 lg:-left-4 lg:w-56"
            />

            <div className="relative z-10 w-72 rotate-[3deg] rounded-[3rem] border-[0.65rem] border-violet-950 bg-violet-950 p-1.5 shadow-[0_35px_80px_-28px_rgba(46,16,101,0.65)] sm:w-80 xl:w-88">
              <div aria-hidden="true" className="absolute left-1/2 top-2 z-30 h-6 w-28 -translate-x-1/2 rounded-full bg-violet-950" />
              <div className="aspect-[603/904] overflow-hidden rounded-[2.25rem] bg-white">
                <img
                  src={printPrototipo}
                  alt="Tela inicial do protótipo da Soulie"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recursos-solucao" className="border-b border-violet-100 bg-[#fbfaf7] px-5 py-24 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Como funciona</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-violet-950 sm:text-6xl">
              Pequenas ações, todos os dias.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
              A Soulie transforma sustentabilidade em passos simples e possíveis.
            </p>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 md:grid-cols-3">
            {recursos.map(({ titulo, descricao, Icone, classeIcone }) => (
              <Card
                key={titulo}
                titulo={titulo}
                descricao={descricao}
                variante="compacto"
                classeIcone={classeIcone}
                icone={<Icone aria-hidden="true" size={30} strokeWidth={1.8} />}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="fases-soulie" ref={secaoFasesRef} className="relative z-[60] h-[300vh]">
        <div
          className="sticky top-0 flex h-screen min-h-152 items-center overflow-hidden px-5 py-12 text-white lg:px-8"
          style={{ backgroundColor: corFundoFases }}
        >
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/7 blur-3xl" />

          <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-200">
              Evolução contínua
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              A Soulie acompanha cada fase.
            </h2>

            <div key={fase.nome} className="mt-8 flex flex-col items-center sm:mt-10">
              <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-violet-100 sm:text-base">
                {fase.nome}
              </h3>
              <img
                src={fase.imagem}
                alt={fase.alt}
                className="mt-5 max-h-64 w-52 object-contain drop-shadow-[0_24px_34px_rgba(15,6,36,0.35)] sm:max-h-80 sm:w-64"
              />
              <p className="mt-5 max-w-lg text-base leading-7 text-violet-50 sm:text-lg">
                {fase.descricao}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3" aria-label={`Etapa ${faseAtiva + 1} de ${fases.length}`}>
              {fases.map((item, indice) => (
                <span
                  key={item.nome}
                  aria-hidden="true"
                  className={`h-1.5 rounded-full transition-all duration-500 ${indice === faseAtiva ? 'w-12 bg-white' : 'w-6 bg-white/35'}`}
                />
              ))}
            </div>
            <p className="mt-3 text-xs font-bold tracking-[0.16em] text-violet-200">
              0{faseAtiva + 1}/0{fases.length}
            </p>
          </div>
        </div>
      </section>

      <section id="cards-impacto" className="border-y border-violet-100 bg-white px-5 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:px-8 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Impacto no cotidiano</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-violet-950 sm:text-6xl">
                O que move a sua jornada.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-zinc-600">
              Ações reais, pessoas próximas e resultados que mostram que continuar vale a pena.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            <Card
              titulo="Missões no seu ritmo"
              descricao="Desafios e metas adaptativas para escolhas possíveis."
              imagem={imagensCards.acao}
              textoAlternativo="Pessoa usando uma bicicleta como meio de transporte sustentável"
              variante="imagem"
              categoria="Ação"
              linkTexto="Saiba mais"
              linkPara="#cta-mvp"
            />
            <Card
              titulo="Comunidade que inspira"
              descricao="Pessoas e ideias que ajudam o hábito a continuar."
              imagem={imagensCards.comunidade}
              textoAlternativo="Mãos plantando mudas em uma horta comunitária"
              variante="imagem"
              categoria="Conexão"
              linkTexto="Saiba mais"
              linkPara="#cta-mvp"
            />
            <Card
              titulo="Progresso visível"
              descricao="Ofensivas e recompensas mostram o impacto conquistado."
              imagem={imagensCards.impacto}
              textoAlternativo="Estações de coleta seletiva para materiais recicláveis"
              variante="imagem"
              categoria="Evolução"
              linkTexto="Saiba mais"
              linkPara="#cta-mvp"
            />
          </div>
        </div>
      </section>

      <section id="cta-mvp" className="bg-white px-5 pb-20 pt-0 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="relative mx-auto grid max-w-7xl items-center overflow-hidden rounded-[2rem] bg-[#1c0b3e] text-white shadow-[0_28px_70px_-30px_rgba(46,16,101,0.75)] lg:min-h-104 lg:grid-cols-[0.9fr_1.1fr]">
          <div aria-hidden="true" className="absolute -left-24 -top-28 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-36 right-8 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />

          <div className="relative z-20 px-7 pb-4 pt-12 text-center sm:px-12 sm:pt-14 lg:px-16 lg:py-16 lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Experimente a jornada</p>
            <h2 className="mx-auto mt-4 max-w-xl text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:mx-0">
              Sua primeira missão já está esperando.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-7 text-violet-100/80 lg:mx-0">
              Conheça a jornada e transforme intenção em impacto.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Botao texto="Acessar o MVP" variante="claro" onClick={abrirMvp} />
            </div>
          </div>

          <div className="relative z-10 flex min-h-72 items-end justify-center px-4 sm:min-h-88 sm:px-8 lg:min-h-104 lg:justify-end lg:px-10">
            <div aria-hidden="true" className="absolute bottom-[14%] left-1/2 h-40 w-4/5 -translate-x-1/2 rounded-full bg-violet-500/30 blur-3xl" />
            <img
              src={avatarPortalCta}
              alt="Soulie apresentando um portal sustentável luminoso"
              className="relative w-full max-w-xl object-contain drop-shadow-[0_24px_36px_rgba(8,3,24,0.55)] lg:max-w-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
