import { useEffect } from "react";
import fotoArthur from "../../assets/integrantes/foto_arthur.png";
import fotoDiego from "../../assets/integrantes/foto_diego.jpeg";
import fotoEnzo from "../../assets/integrantes/foto_enzo.jpeg";
import fotoLeticiaCardoso from "../../assets/integrantes/foto_leticia_cardoso.jpeg";
import fotoLeticiaDias from "../../assets/integrantes/foto_leticia_dias.jpeg";
import soulieAcenando from "../../assets/avatar_integrantes/soulie-acenando.png";
import soulieApontando from "../../assets/avatar_integrantes/soulie-apontando.png";
import soulieEspiando from "../../assets/avatar_integrantes/soulie-espiando.png";
import souliePaz from "../../assets/avatar_integrantes/soulie-paz.png";
import souliePositivo from "../../assets/avatar_integrantes/soulie-positivo.png";
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

export default function Integrantes() {
  useEffect(() => {
    document.title = "Soulie | Integrantes";
  }, []);

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

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-y-12 lg:mt-20 lg:grid-cols-2 lg:gap-x-28 lg:gap-y-16">
          {integrantes.map((integrante, indice) => (
            <CardIntegrante
              key={integrante.rm}
              {...integrante}
              destaque={indice === integrantes.length - 1}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
