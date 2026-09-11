import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BellRing, Gift, MessageCircleMore } from 'lucide-react'
import Botao from '../../components/Botoes/Botoes'
import avatarCta from '../../assets/avatar/avatar_cta.png'
import avatarBravo from '../../assets/avatar/avatar_bravo.png'
import avatarComPressa from '../../assets/avatar/avatar_com_pressa.png'
import avatarEntediado from '../../assets/avatar/avatar_entediado.png'
import avatarFeliz from '../../assets/avatar/avatar_feliz.png'
import avatarRadiante from '../../assets/avatar/avatar_radiante.png'
import avatarSorridente from '../../assets/avatar/avatar_sorridente.png'
import avatarTimido from '../../assets/avatar/avatar_timido.png'
import avatarTriste from '../../assets/avatar/avatar_triste.png'
import imagemSoulie from '../../assets/avatar/imagem_soulie.png'
import soulie01 from '../../assets/avatar/soulie01.png'
import soulie02 from '../../assets/avatar/soulie02.png'
import soulie03 from '../../assets/avatar/soulie03.png'
import soulie04 from '../../assets/avatar/soulie04.png'

const etapas = [
  { numero: '01', titulo: 'Inspiração', descricao: 'A curiosidade foi o ponto de partida para aproximar sustentabilidade e rotina.', imagem: soulie01, alt: 'Primeira inspiração visual para a Soulie' },
  { numero: '02', titulo: 'Ideação', descricao: 'A ideia ganhou forma como uma companhia digital capaz de orientar cada passo.', imagem: soulie02, alt: 'Segunda etapa visual da criação da Soulie' },
  { numero: '03', titulo: 'Personalidade', descricao: 'Expressões e reações deram vida a uma presença acolhedora e próxima.', imagem: soulie03, alt: 'Estudo de personalidade usado na criação da Soulie' },
  { numero: '04', titulo: 'Identidade', descricao: 'Cores, formas e linguagem construíram uma identidade leve e reconhecível.', imagem: soulie04, alt: 'Etapa de definição da identidade visual da Soulie' },
  { numero: '05', titulo: 'Soulie', descricao: 'A ideia se tornou a companheira que conecta ações, progresso e impacto.', imagem: imagemSoulie, alt: 'Versão atual da mascote Soulie' },
]

const desafios = [
  { numero: '01', titulo: 'Feed com pouca movimentação', descricao: 'Poucas novidades diminuem o interesse de retornar à plataforma.', Icone: MessageCircleMore },
  { numero: '02', titulo: 'Sistema de recompensa lento', descricao: 'Resultados distantes enfraquecem a percepção de progresso.', Icone: Gift },
  { numero: '03', titulo: 'Ausência de gatilhos', descricao: 'Sem estímulos recorrentes, a ação dificilmente se transforma em hábito.', Icone: BellRing },
]

const emocoes = [
  { nome: 'Confiante', descricao: 'Segurança para continuar avançando.', imagem: imagemSoulie, alt: 'Soulie confiante com os braços cruzados' },
  { nome: 'Zangado', descricao: 'Uma reação firme quando algo sai do caminho.', imagem: avatarBravo, alt: 'Soulie zangada com os braços cruzados' },
  { nome: 'Radiante', descricao: 'Cada conquista merece ser celebrada.', imagem: avatarRadiante, alt: 'Soulie radiante fazendo sinal positivo' },
  { nome: 'Entediado', descricao: 'Um lembrete de que a experiência precisa se renovar.', imagem: avatarEntediado, alt: 'Soulie entediada com expressão desanimada' },
  { nome: 'Alegre', descricao: 'Leveza para tornar a jornada mais próxima.', imagem: avatarSorridente, alt: 'Soulie alegre dando risada' },
  { nome: 'Com pressa', descricao: 'Energia para agir no momento certo.', imagem: avatarComPressa, alt: 'Soulie com pressa e expressão preocupada' },
  { nome: 'Empolgado', descricao: 'Motivação para começar um novo desafio.', imagem: avatarFeliz, alt: 'Soulie empolgada comemorando' },
  { nome: 'Triste', descricao: 'Acolhimento também faz parte da retomada.', imagem: avatarTriste, alt: 'Soulie triste com lágrimas nos olhos' },
  { nome: 'Tímido', descricao: 'Cada pessoa pode avançar no próprio ritmo.', imagem: avatarTimido, alt: 'Soulie tímida com as mãos juntas' },
]

const limitar = (valor: number, minimo: number, maximo: number) => Math.min(Math.max(valor, minimo), maximo)

export default function Sobre() {
  const navigate = useNavigate()
  const [emocaoAtiva, setEmocaoAtiva] = useState(0)
  const paginaRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const avatarHeroRef = useRef<HTMLDivElement>(null)
  const primeiraLinhaHeroRef = useRef<HTMLSpanElement>(null)
  const segundaLinhaHeroRef = useRef<HTMLSpanElement>(null)
  const trajetoriaRef = useRef<HTMLDivElement>(null)
  const caminhoRef = useRef<SVGPathElement>(null)
  const secaoEmocoesRef = useRef<HTMLElement>(null)
  const janelaEmocoesRef = useRef<HTMLDivElement>(null)
  const trilhoEmocoesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = 'Soulie | Sobre'
  }, [])

  useEffect(() => {
    const pagina = paginaRef.current
    if (!pagina) return
    const elementos = pagina.querySelectorAll<HTMLElement>('[data-revelar]')
    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduzirMovimento) {
      elementos.forEach((elemento) => elemento.classList.remove('translate-y-8', 'opacity-0'))
      return
    }

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return
        entrada.target.classList.remove('translate-y-8', 'opacity-0')
        observador.unobserve(entrada.target)
      })
    }, { threshold: 0.18 })

    elementos.forEach((elemento) => observador.observe(elemento))
    return () => observador.disconnect()
  }, [])

  useEffect(() => {
    let quadro: number | null = null
    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const atualizar = () => {
      quadro = null
      const hero = heroRef.current
      const avatarHero = avatarHeroRef.current
      const primeiraLinhaHero = primeiraLinhaHeroRef.current
      const segundaLinhaHero = segundaLinhaHeroRef.current
      const trajetoria = trajetoriaRef.current
      const caminho = caminhoRef.current
      const secaoEmocoes = secaoEmocoesRef.current
      const janelaEmocoes = janelaEmocoesRef.current
      const trilhoEmocoes = trilhoEmocoesRef.current

      if (hero && avatarHero) {
        const caixa = hero.getBoundingClientRect()
        const progresso = reduzirMovimento ? 0 : limitar(-caixa.top / (caixa.height * 0.72), 0, 1)
        avatarHero.style.transform = `translate3d(${-progresso * 24}px, ${progresso * 80}px, 0) rotate(${-progresso * 4}deg) scale(${1 - progresso * 0.1})`
        avatarHero.style.opacity = String(1 - limitar((progresso - 0.72) / 0.28, 0, 1))
        if (primeiraLinhaHero) primeiraLinhaHero.style.transform = `translate3d(${-progresso * 48}px, 0, 0)`
        if (segundaLinhaHero) segundaLinhaHero.style.transform = `translate3d(${progresso * 38}px, 0, 0)`
      }

      if (trajetoria && caminho) {
        const caixa = trajetoria.getBoundingClientRect()
        const intervalo = caixa.height - window.innerHeight * 0.45
        const progresso = reduzirMovimento ? 1 : limitar((window.innerHeight * 0.52 - caixa.top) / intervalo, 0, 1)
        caminho.style.strokeDashoffset = String(1 - progresso)
      }

      if (secaoEmocoes && janelaEmocoes && trilhoEmocoes) {
        const caixa = secaoEmocoes.getBoundingClientRect()
        const intervalo = secaoEmocoes.offsetHeight - window.innerHeight
        const progresso = reduzirMovimento ? 0 : limitar(-caixa.top / Math.max(intervalo, 1), 0, 1)
        const deslocamento = Math.max(trilhoEmocoes.scrollWidth - janelaEmocoes.clientWidth, 0)
        trilhoEmocoes.style.transform = `translate3d(${-progresso * deslocamento}px, 0, 0)`
        setEmocaoAtiva(Math.round(progresso * (emocoes.length - 1)))
      }
    }

    const solicitarAtualizacao = () => {
      if (quadro === null) quadro = window.requestAnimationFrame(atualizar)
    }

    atualizar()
    window.addEventListener('scroll', solicitarAtualizacao, { passive: true })
    window.addEventListener('resize', solicitarAtualizacao)
    return () => {
      window.removeEventListener('scroll', solicitarAtualizacao)
      window.removeEventListener('resize', solicitarAtualizacao)
      if (quadro !== null) window.cancelAnimationFrame(quadro)
    }
  }, [])

  return (
    <div ref={paginaRef} className="overflow-x-clip bg-white">
      <section ref={heroRef} className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#fefeff]">
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-376 flex-col justify-center px-5 py-20 sm:px-8 lg:px-12">
          <p className="relative z-20 mb-10 text-center text-xs font-bold uppercase tracking-[0.3em] text-violet-600 sm:mb-14">Sobre a Soulie</p>

          <h1 className="relative z-10 text-center text-[clamp(3.35rem,8.25vw,8rem)] font-black leading-[0.84] tracking-[-0.07em]">
            <span ref={primeiraLinhaHeroRef} className="block text-zinc-950 will-change-transform">Uma ideia</span>
            <span ref={segundaLinhaHeroRef} className="mt-4 block text-violet-600 will-change-transform sm:mt-7">que ganhou vida.</span>
          </h1>

          <p className="relative z-30 mx-auto mt-10 max-w-xl text-center text-base leading-7 text-zinc-600 sm:mt-12 sm:text-lg">
            A Soulie nasceu para transformar sustentabilidade em uma jornada mais próxima, leve e contínua.
          </p>

          <div className="pointer-events-none relative z-20 mx-auto -mt-3 w-32 sm:-mt-20 sm:ml-auto sm:mr-[5%] sm:w-40 lg:-mt-28 lg:mr-[8%] lg:w-48 xl:w-52">
            <div ref={avatarHeroRef} className="will-change-transform">
              <img src={imagemSoulie} alt="Soulie confiante acompanhando a história de sua criação" className="w-full drop-shadow-[0_24px_30px_rgba(109,40,217,0.24)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-violet-100 bg-violet-50/65 px-5 py-24 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div data-revelar className="translate-y-8 text-center opacity-0 transition-all duration-700">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Da ideia ao impacto</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl">Trajetória da Ideia</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-600">Uma jornada que transformou intenção em identidade, propósito e presença.</p>
          </div>

          <div className="relative mt-20 md:hidden">
            <div aria-hidden="true" className="absolute bottom-8 left-12 top-8 w-px bg-violet-300" />
            <ol className="space-y-12">
              {etapas.map((etapa) => (
                <li key={etapa.titulo} data-revelar className="relative grid translate-y-8 grid-cols-[6rem_1fr] items-center gap-5 opacity-0 transition-all duration-700">
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-violet-300 bg-white shadow-sm">
                    <img src={etapa.imagem} alt={etapa.alt} className="max-h-20 max-w-20 object-contain" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-violet-600">{etapa.numero}</span>
                    <h3 className="mt-1 text-xl font-bold text-zinc-950">{etapa.titulo}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{etapa.descricao}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div ref={trajetoriaRef} className="relative mx-auto mt-24 hidden h-[1200px] max-w-6xl md:block">
            <svg aria-hidden="true" viewBox="0 0 1000 1300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <path d="M500 0 C670 38 670 90 500 130 C330 170 330 330 500 370 C670 410 670 570 500 610 C330 650 330 810 500 850 C670 890 670 1050 500 1090 C410 1112 410 1190 500 1300" fill="none" stroke="rgb(221 214 254)" strokeWidth="3" strokeLinecap="round" />
              <path ref={caminhoRef} pathLength="1" d="M500 0 C670 38 670 90 500 130 C330 170 330 330 500 370 C670 410 670 570 500 610 C330 650 330 810 500 850 C670 890 670 1050 500 1090 C410 1112 410 1190 500 1300" fill="none" stroke="rgb(139 92 246)" strokeWidth="5" strokeLinecap="round" strokeDasharray="1" strokeDashoffset="1" />
            </svg>

            <ol className="relative z-10 grid h-full grid-rows-5">
              {etapas.map((etapa, indice) => {
                const esquerda = indice % 2 === 0
                const texto = (
                  <div data-revelar className={`max-w-sm translate-y-8 opacity-0 transition-all duration-700 ${esquerda ? 'ml-auto border-r-2 border-violet-200 pr-8' : 'border-l-2 border-violet-200 pl-8'}`}>
                    <span className="text-xs font-bold tracking-[0.18em] text-violet-600">ETAPA {etapa.numero}</span>
                    <h3 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950">{etapa.titulo}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 lg:text-base">{etapa.descricao}</p>
                  </div>
                )

                return (
                  <li key={etapa.titulo} className="grid grid-cols-[1fr_11rem_1fr] items-center gap-8 lg:grid-cols-[1fr_14rem_1fr] lg:gap-12">
                    <div className={esquerda ? 'text-right' : ''}>{esquerda && texto}</div>
                    <div className="group mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-violet-200 bg-white shadow-[0_24px_60px_-30px_rgba(109,40,217,0.7)] ring-8 ring-violet-50 transition-transform duration-500 hover:scale-105 lg:h-44 lg:w-44">
                      <img src={etapa.imagem} alt={etapa.alt} className="max-h-28 max-w-28 object-contain lg:max-h-36 lg:max-w-36" />
                    </div>
                    <div>{!esquerda && texto}</div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-violet-950 px-5 py-24 text-white sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div data-revelar className="translate-y-8 opacity-0 transition-all duration-700 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Por que ela existe</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">O Grande Desafio</h2>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-7 text-violet-100/80 lg:mt-0">A Soulie surgiu para enfrentar a perda de recorrência e transformar interações isoladas em uma experiência que convida o usuário a voltar.</p>
          </div>

          <ol className="mt-16 border-y border-white/15 md:grid md:grid-cols-3 md:divide-x md:divide-white/15">
            {desafios.map(({ numero, titulo, descricao, Icone }) => (
              <li key={titulo} data-revelar className="group translate-y-8 border-b border-white/15 px-2 py-9 opacity-0 transition-all duration-700 last:border-b-0 md:border-b-0 md:px-8 md:py-12 first:md:pl-0 last:md:pr-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-violet-300">{numero}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-violet-200 transition-all duration-300 group-hover:border-violet-400 group-hover:bg-violet-500/15 group-hover:text-white">
                    <Icone aria-hidden="true" size={20} strokeWidth={1.8} />
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-bold leading-tight sm:text-2xl">{titulo}</h3>
                <p className="mt-4 text-sm leading-6 text-violet-100/65">{descricao}</p>
                <span aria-hidden="true" className="mt-8 block h-0.5 w-10 bg-violet-400 transition-all duration-500 group-hover:w-20" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={secaoEmocoesRef} className="relative h-[340vh] border-y border-violet-100 bg-violet-50/65 motion-reduce:h-auto">
        <div className="sticky top-20 flex h-[calc(100vh-5rem)] min-h-152 flex-col justify-center overflow-hidden py-10 motion-reduce:relative motion-reduce:top-0 motion-reduce:h-auto">
          <div className="mx-auto flex w-full max-w-7xl items-end justify-between gap-8 px-5 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Sempre ao seu lado</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl">Os estados da Soulie</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">A Soulie acompanha cada momento da sua jornada.</p>
            </div>
          </div>

          <div ref={janelaEmocoesRef} className="mt-8 w-full overflow-hidden py-8 motion-reduce:overflow-visible">
            <div ref={trilhoEmocoesRef} className="flex w-max items-end gap-3 px-[calc(50vw-5.5rem)] will-change-transform motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-5 sm:gap-8 sm:px-[calc(50vw-7rem)]">
              {emocoes.map((emocao, indice) => {
                const ativa = indice === emocaoAtiva
                return (
                  <article key={emocao.nome} className="flex w-44 shrink-0 flex-col items-center text-center transition-all duration-300 motion-reduce:opacity-100! motion-reduce:transform-none! sm:w-56" style={{ opacity: ativa ? 1 : 0.35, transform: `scale(${ativa ? 1 : 0.78})` }}>
                    <div className={`flex h-44 w-44 items-center justify-center rounded-full transition-colors duration-300 sm:h-56 sm:w-56 ${ativa ? 'bg-violet-100/80' : 'bg-transparent'}`}>
                      <img src={emocao.imagem} alt={emocao.alt} className="max-h-40 max-w-40 object-contain drop-shadow-[0_18px_22px_rgba(109,40,217,0.18)] sm:max-h-52 sm:max-w-52" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-zinc-950 sm:text-2xl">{emocao.nome}</h3>
                    <p className={`mt-2 text-sm leading-6 text-zinc-600 transition-opacity duration-300 motion-reduce:opacity-100 ${ativa ? 'opacity-100' : 'opacity-0'}`}>{emocao.descricao}</p>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="mx-auto mt-2 flex w-full max-w-3xl items-center px-8">
            {emocoes.map((emocao, indice) => (
              <div key={emocao.nome} className="flex flex-1 items-center last:flex-none">
                <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${indice === emocaoAtiva ? 'scale-125 bg-violet-600' : 'bg-violet-200'}`} />
                {indice < emocoes.length - 1 && <span aria-hidden="true" className="h-px flex-1 bg-violet-200" />}
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs font-semibold text-violet-600">{emocaoAtiva + 1} de {emocoes.length}</p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white pt-16 sm:pt-24">
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-40 w-[125%] -translate-x-1/2 rounded-[50%] bg-violet-50" />

        <div className="relative bg-violet-50 px-5 pb-0 pt-16 sm:pt-20 lg:px-8 lg:pt-24">
          <div aria-hidden="true" className="absolute left-[18%] top-[38%] h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_0_9px_rgba(196,181,253,0.18)]" />
          <div aria-hidden="true" className="absolute right-[18%] top-[48%] h-2.5 w-2.5 rounded-full bg-violet-500 shadow-[0_0_0_8px_rgba(196,181,253,0.16)]" />
          <div aria-hidden="true" className="absolute bottom-10 left-1/2 h-44 w-lg -translate-x-1/2 rounded-[50%] border border-violet-200/70" />

          <div data-revelar className="relative z-10 mx-auto max-w-4xl translate-y-8 text-center opacity-0 transition-all duration-700">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">O próximo capítulo</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl">Conheça como a Soulie funciona.</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">Veja como missões e recompensas transformam intenção em continuidade.</p>
            <div className="mt-8 flex justify-center">
              <Botao texto="Ver a solução" variante="primario" onClick={() => navigate('/solucao')} />
            </div>
          </div>

          <div className="relative z-20 mx-auto mt-10 h-44 max-w-xl overflow-hidden sm:mt-12 sm:h-52">
            <img src={avatarCta} alt="Soulie sorridente aparecendo por trás do rodapé" className="absolute left-1/2 top-0 w-64 -translate-x-1/2 drop-shadow-[0_20px_28px_rgba(109,40,217,0.22)] sm:w-72" />
          </div>
        </div>

        <div aria-hidden="true" className="relative z-30 h-5 bg-linear-to-r from-violet-950 via-violet-900 to-indigo-950" />
      </section>
    </div>
  )
}
