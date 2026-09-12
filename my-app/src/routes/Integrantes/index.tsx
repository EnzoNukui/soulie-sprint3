import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import fotoArthur from "../../assets/integrantes/foto_arthur.png";
import fotoDiego from "../../assets/integrantes/foto_diego.jpeg";
import fotoEnzo from "../../assets/integrantes/foto_enzo.jpeg";
import fotoLeticiaCardoso from "../../assets/integrantes/foto_leticia_cardoso.jpeg";
import fotoLeticiaDias from "../../assets/integrantes/foto_leticia_dias.jpeg";
import soulieAcenando from "../../assets/avatar/integrantes/soulie-acenando.png";
import soulieApontando from "../../assets/avatar/integrantes/soulie-apontando.png";
import soulieEspiando from "../../assets/avatar/integrantes/soulie-espiando.png";
import souliePaz from "../../assets/avatar/integrantes/soulie-paz.png";
import souliePositivo from "../../assets/avatar/integrantes/soulie-positivo.png";
import CardIntegrante from "../../components/CardIntegrantes/CardIntegrantes";

const integrantes = [
  {
    nome: "Arthur Carvalho Brito Martins",
    rm: "RM 572325",
    turma: "1TDSPH",
    foto: fotoArthur,
    avatar: soulieEspiando,
    posicaoAvatar: "left-0 -translate-x-[77%]",
    espelharAvatar: false,
    linkedin: "https://www.linkedin.com/in/arthur-martinss/",
    github: "https://github.com/arthurmartinss",
  },
  {
    nome: "Diego Soares Trujillo",
    rm: "RM 570147",
    turma: "1TDSPH",
    foto: fotoDiego,
    avatar: soulieApontando,
    posicaoAvatar: "right-0 translate-x-[92%]",
    espelharAvatar: false,
    linkedin: "https://www.linkedin.com/in/diego-trujillo-3441b9380/",
    github: "https://github.com/diegotrujillo011",
  },
  {
    nome: "Enzo Nukui da Silva",
    rm: "RM 569770",
    turma: "1TDSPH",
    foto: fotoEnzo,
    avatar: souliePaz,
    posicaoAvatar: "left-0 -translate-x-[88%]",
    espelharAvatar: false,
    linkedin: "https://www.linkedin.com/in/enzo-nukui/",
    github: "https://github.com/EnzoNukui",
  },
  {
    nome: "Leticia Cardoso de Almeida",
    rm: "RM 569415",
    turma: "1TDSPH",
    foto: fotoLeticiaCardoso,
    avatar: soulieAcenando,
    posicaoAvatar: "right-0 translate-x-[84%]",
    espelharAvatar: false,
    linkedin: "https://www.linkedin.com/in/let%C3%ADcia-almeida-70b851294/",
    github: "https://github.com/lehalmeidafc0",
  },
  {
    nome: "Leticia Dias Araujo Felix Moratori",
    rm: "RM 569138",
    turma: "1TDSPH",
    foto: fotoLeticiaDias,
    avatar: souliePositivo,
    posicaoAvatar: "right-0 translate-x-[88%]",
    espelharAvatar: true,
    linkedin: "https://www.linkedin.com/in/leticia-felix-660253286",
    github: "https://github.com/LeticiaFelix18",
  },
];

const obterNumeroRm = (rm: string) => rm.replace(/\D/g, "");

export default function Integrantes() {
  const { rm } = useParams<{ rm?: string }>();
  const integranteSelecionado = rm
    ? integrantes.find((integrante) => obterNumeroRm(integrante.rm) === rm)
    : undefined;

  useEffect(() => {
    document.title = integranteSelecionado
      ? `Soulie | ${integranteSelecionado.nome}`
      : "Soulie | Integrantes";
  }, [integranteSelecionado]);

  if (rm && !integranteSelecionado) {
    return <Navigate to="/integrantes" replace />;
  }

  if (integranteSelecionado) {
    return (
      <main className="overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <section className="mx-auto w-full max-w-5xl" aria-labelledby="titulo-perfil-integrante">
          <Link
            to="/integrantes"
            className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 transition-colors hover:text-violet-800 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600"
          >
            <span aria-hidden="true">←</span>
            Voltar para integrantes
          </Link>

          <header className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
              Perfil do integrante
            </p>
            <h1
              id="titulo-perfil-integrante"
              className="mt-3 text-4xl font-bold tracking-tight text-violet-950 sm:text-5xl lg:text-6xl"
            >
              {integranteSelecionado.nome}
            </h1>
            <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
              Conheça os dados acadêmicos e os canais profissionais deste integrante da Soulie.
            </p>
          </header>

          <div className="mx-auto mt-14 max-w-2xl">
            <CardIntegrante {...integranteSelecionado} destaque />
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <section className="mx-auto w-full max-w-7xl" aria-labelledby="titulo-integrantes">
        <header className="mx-auto max-w-3xl text-center">
          <h1
            id="titulo-integrantes"
            className="text-4xl font-bold tracking-tight text-violet-950 sm:text-5xl lg:text-6xl"
          >
            Quem faz a <span className="text-violet-600">Soulie</span> acontecer
          </h1>
          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
            Cinco pessoas, uma construção em conjunto.
          </p>
        </header>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-y-12 lg:mt-20 lg:gap-y-16 xl:grid-cols-2 xl:gap-x-28">
          {integrantes.map((integrante, indice) => (
            <CardIntegrante
              key={integrante.rm}
              {...integrante}
              perfil={`/integrantes/${obterNumeroRm(integrante.rm)}`}
              destaque={indice === integrantes.length - 1}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
