import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Botao from "../../components/Botoes/Botoes";
import Conteudo from "../../components/Conteudo/Conteudo";

interface FormularioContato {
  email: string;
  assunto: string;
  descricao: string;
  tipoProblema: string;
}

const campoBase =
  "w-full rounded-xl border bg-violet-50/40 px-4 py-3 text-violet-950 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100";

export default function Contato() {
  useEffect(() => {
    document.title = "Soulie | Contato";
  }, []);

  const [mensagemEnviada, setMensagemEnviada] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormularioContato>({ mode: "onBlur" });

  const enviarFormulario: SubmitHandler<FormularioContato> = () => {
    setMensagemEnviada(true);
    reset();
  };

  return (
    <main className="bg-white">
      <Conteudo
        titulo={<>Como podemos <span className="text-violet-600">ajudar?</span></>}
        centralizado
        idTitulo="titulo-contato"
      >
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-violet-200 bg-white lg:grid lg:grid-cols-[0.8fr_1.4fr]">
          <div className="border-b border-violet-200 bg-violet-50/50 px-6 py-8 sm:px-9 sm:py-10 lg:border-r lg:border-b-0 lg:px-10 lg:py-12">
            <h2 className="text-2xl font-bold text-violet-950 sm:text-3xl">
              Descreva o problema
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-zinc-600">
              Conte o que está acontecendo com o máximo de detalhes possível. Isso vai nos
              ajudar a entender como podemos ajudar.
            </p>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit(enviarFormulario)}
            onChange={() => setMensagemEnviada(false)}
            className="px-6 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-12"
            aria-label="Formulário de contato"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="mb-2 block font-bold text-violet-950">
                  Seu e-mail <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="nome@exemplo.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "erro-email" : undefined}
                  className={`${campoBase} ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-violet-200"}`}
                  {...register("email", {
                    required: "Digite seu e-mail.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Digite um e-mail no formato nome@exemplo.com.",
                    },
                  })}
                />
                {errors.email && (
                  <p id="erro-email" role="alert" className="mt-2 text-sm font-medium text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="assunto" className="mb-2 block font-bold text-violet-950">
                  Assunto <span className="text-red-600">*</span>
                </label>
                <input
                  id="assunto"
                  type="text"
                  placeholder="Resuma o assunto da mensagem"
                  aria-invalid={errors.assunto ? "true" : "false"}
                  aria-describedby={errors.assunto ? "erro-assunto" : undefined}
                  className={`${campoBase} ${errors.assunto ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-violet-200"}`}
                  {...register("assunto", {
                    required: "Digite o assunto da mensagem.",
                    minLength: {
                      value: 5,
                      message: "O assunto deve ter pelo menos 5 caracteres.",
                    },
                    maxLength: {
                      value: 80,
                      message: "O assunto deve ter no máximo 80 caracteres.",
                    },
                  })}
                />
                {errors.assunto && (
                  <p id="erro-assunto" role="alert" className="mt-2 text-sm font-medium text-red-600">
                    {errors.assunto.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="descricao" className="mb-2 block font-bold text-violet-950">
                  Descrição <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="descricao"
                  rows={5}
                  placeholder="Conte para a gente como podemos ajudar"
                  aria-invalid={errors.descricao ? "true" : "false"}
                  aria-describedby={errors.descricao ? "erro-descricao" : undefined}
                  className={`${campoBase} resize-y ${errors.descricao ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-violet-200"}`}
                  {...register("descricao", {
                    required: "Descreva como podemos ajudar.",
                    minLength: {
                      value: 20,
                      message: "A descrição deve ter pelo menos 20 caracteres.",
                    },
                    maxLength: {
                      value: 600,
                      message: "A descrição deve ter no máximo 600 caracteres.",
                    },
                  })}
                />
                {errors.descricao && (
                  <p
                    id="erro-descricao"
                    role="alert"
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.descricao.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="tipoProblema" className="mb-2 block font-bold text-violet-950">
                  Tipo de problema <span className="text-red-600">*</span>
                </label>
                <select
                  id="tipoProblema"
                  defaultValue=""
                  aria-invalid={errors.tipoProblema ? "true" : "false"}
                  aria-describedby={errors.tipoProblema ? "erro-tipo-problema" : undefined}
                  className={`${campoBase} cursor-pointer ${errors.tipoProblema ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-violet-200"}`}
                  {...register("tipoProblema", {
                    required: "Selecione o tipo de problema.",
                  })}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="duvida">Dúvida sobre a Soulie</option>
                  <option value="problema-tecnico">Problema técnico</option>
                  <option value="sugestao">Sugestão de melhoria</option>
                  <option value="feedback">Feedback sobre o projeto</option>
                  <option value="outro">Outro assunto</option>
                </select>
                {errors.tipoProblema && (
                  <p
                    id="erro-tipo-problema"
                    role="alert"
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.tipoProblema.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-7 flex justify-end">
              <Botao
                texto={isSubmitting ? "Enviando..." : "Enviar"}
                tipo="submit"
                desabilitado={isSubmitting}
              />
            </div>

            {mensagemEnviada && (
              <div
                role="status"
                aria-live="polite"
                className="mt-6 flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-emerald-900"
              >
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white"
                >
                  ✓
                </span>
                <div>
                  <p className="font-bold">Mensagem enviada com sucesso!</p>
                  <p className="mt-1 text-sm leading-6 text-emerald-800">
                    Obrigado pelo contato. Sua mensagem foi validada e recebida nesta página.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </Conteudo>
    </main>
  );
}
