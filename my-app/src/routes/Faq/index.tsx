import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatarDuvida from "../../assets/avatar/avatar_duvida.png";
import Botao from "../../components/Botoes/Botoes";

const perguntas = [
  {
    pergunta: "O que exatamente é a Soulie e qual a relação dela com a SoulUp?",
    resposta:
      "A SoulUp é a plataforma completa de engajamento, e a Soulie é o avatar e a inteligência virtual que guia os usuários dentro dela. Ela funciona como uma assistente ativa que acompanha e interage com os colaboradores através de dinâmicas gamificadas, tornando a jornada do dia a dia muito mais humana, leve e divertida.",
  },
  {
    pergunta: "As notificações da Soulie não vão incomodar os colaboradores?",
    resposta:
      "De forma alguma, pois a Soulie não trabalha com disparos em massa ou mensagens genéricas. Nossa inteligência mapeia os hábitos individuais para entender o melhor momento de interagir com cada pessoa. Se um colaborador costuma abrir o aplicativo perto do horário de almoço, por exemplo, a Soulie envia um estímulo personalizado alguns minutos antes, garantindo uma comunicação oportuna e sempre focada no que ele realmente quer ver.",
  },
  {
    pergunta: "Como vocês garantem que o aplicativo continuará ativo e não será abandonado?",
    resposta:
      "Nós aplicamos o conceito de engenharia de rotina criando rituais previsíveis dentro do ecossistema do aplicativo, como um desafio especial toda segunda-feira ou uma recompensa toda sexta-feira. Essa consistência gera um hábito orgânico no usuário, fazendo com que ele passe a abrir a plataforma por costume natural, o que mantém a comunidade corporativa sempre ativa, conectada e pulsante.",
  },
  {
    pergunta: "Como a empresa mede o retorno real e o impacto desse investimento?",
    resposta:
      "O impacto é acompanhado de perto por meio de um painel de dados simples e intuitivo que traduz a participação do time em indicadores claros de engajamento. A Soulie mede em tempo real a adesão aos desafios e o ritmo de adoção dos novos hábitos, garantindo que a empresa tenha uma comunidade interna viva. Isso fortalece a cultura da organização e melhora o clima de trabalho de forma concreta, assegurando o retorno sobre o investimento sem o risco de ter um aplicativo abandonado.",
  },
];

export default function Faq() {
  useEffect(() => {
    document.title = "Soulie | FAQ";
  }, []);

  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <main className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <section className="mx-auto w-full max-w-6xl" aria-labelledby="titulo-faq">
        <header className="mx-auto max-w-3xl text-center">
          <h1
            id="titulo-faq"
            className="text-4xl font-bold tracking-tight text-violet-950 sm:text-5xl lg:text-6xl"
          >
            Perguntas <span className="text-violet-600">frequentes</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
            Encontre respostas sobre a Soulie e a SoulUp.
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-4xl space-y-4 sm:mt-16">
          {perguntas.map((item, indice) => {
            const estaAberta = perguntaAberta === indice;
            const respostaId = `resposta-faq-${indice}`;

            return (
              <article
                key={item.pergunta}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  estaAberta
                    ? "border-violet-400 bg-violet-50 shadow-[0_12px_35px_-24px_rgba(91,33,182,0.65)]"
                    : "border-violet-200 bg-white hover:border-violet-400 hover:bg-violet-50/50"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={estaAberta}
                  aria-controls={respostaId}
                  onClick={() => setPerguntaAberta(estaAberta ? null : indice)}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left focus-visible:outline-2 focus-visible:-outline-offset-3 focus-visible:outline-violet-600 sm:px-7 sm:py-6"
                >
                  <span className="text-base font-bold leading-6 text-violet-950 sm:text-lg">
                    {item.pergunta}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      estaAberta
                        ? "border-violet-600 bg-violet-600 text-white"
                        : "border-violet-300 bg-violet-50 text-violet-700"
                    }`}
                  >
                    <span className="absolute h-0.5 w-4 rounded-full bg-current" />
                    <span
                      className={`absolute h-4 w-0.5 rounded-full bg-current transition-transform duration-300 ${
                        estaAberta ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>

                <div
                  id={respostaId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    estaAberta ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-5 border-t border-violet-200 py-5 sm:mx-7 sm:py-6">
                      <p className="border-l-2 border-violet-500 pl-4 text-sm leading-7 text-zinc-600 sm:pl-5 sm:text-base">
                        {item.resposta}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <section className="mx-auto mt-16 grid max-w-4xl items-center gap-8 overflow-hidden rounded-3xl border border-violet-200 bg-violet-50 px-7 py-9 text-center sm:px-10 lg:grid-cols-[1fr_auto] lg:px-12 lg:py-10 lg:text-left">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-violet-950 sm:text-4xl">
              Ainda precisa de ajuda?
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-600">
              Nossa equipe está pronta para conversar com você.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <Botao texto="Fale com a gente" onClick={() => navigate("/contato")} />
            </div>
          </div>

          <img
            src={avatarDuvida}
            alt="Soulie pensando com a mão no queixo"
            className="mx-auto w-28 object-contain sm:w-32 lg:w-36"
          />
        </section>
      </section>
    </main>
  );
}
