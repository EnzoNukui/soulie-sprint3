interface CardIntegranteProps {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  avatar: string;
  posicaoAvatar: string;
  espelharAvatar: boolean;
  linkedin: string;
  github: string;
  destaque?: boolean;
}

export default function CardIntegrante({
  nome,
  rm,
  turma,
  foto,
  avatar,
  posicaoAvatar,
  espelharAvatar,
  linkedin,
  github,
  destaque = false,
}: CardIntegranteProps) {
  return (
    <article
      className={`group relative mx-12 flex min-h-80 flex-col items-center justify-center rounded-3xl border border-violet-200 bg-gradient-to-br from-white to-violet-50 px-6 py-9 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg sm:mx-20 sm:px-10 lg:mx-auto lg:w-full lg:max-w-2xl xl:mx-0 xl:max-w-none ${
        destaque ? "xl:col-span-2 xl:w-full xl:max-w-[32rem] xl:justify-self-center" : ""
      }`}
    >
      <img
        src={avatar}
        alt={`Soulie interagindo com o card de ${nome}`}
        className={`pointer-events-none absolute top-1/2 z-10 w-20 -translate-y-1/2 object-contain transition-transform duration-300 sm:w-28 lg:w-28 xl:w-32 ${posicaoAvatar} ${
          espelharAvatar
            ? "-scale-x-100 group-hover:-scale-x-105 group-hover:scale-y-105"
            : "group-hover:scale-105"
        }`}
      />

      <img
        src={foto}
        alt={`Foto de ${nome}`}
        loading="lazy"
        className="h-28 w-28 rounded-full border-4 border-white object-cover object-top shadow-md ring-2 ring-violet-200"
      />

      <h2 className="mt-6 max-w-sm text-2xl font-bold leading-tight text-violet-950">{nome}</h2>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
          {rm}
        </span>
        <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
          {turma}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub de ${nome}`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white text-violet-950 transition hover:-translate-y-0.5 hover:border-violet-500 hover:bg-violet-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
            <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.28-1.29-5.28-5.73 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.48.11-3.07 0 0 .98-.31 3.16 1.19a10.96 10.96 0 0 1 5.75 0c2.19-1.5 3.16-1.19 3.16-1.19.63 1.6.23 2.78.11 3.07.75.81 1.2 1.84 1.2 3.11 0 4.45-2.71 5.43-5.29 5.72.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
          </svg>
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn de ${nome}`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white text-violet-950 transition hover:-translate-y-0.5 hover:border-violet-500 hover:bg-violet-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.33V8.98h3.42v1.57h.05c.47-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.3ZM5.31 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.53V8.98h3.56v11.47Z" />
          </svg>
        </a>
      </div>
    </article>
  );
}
