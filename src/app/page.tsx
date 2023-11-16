import { Required } from '@/components/Required'

export default function Home() {
    return (
        <div className=" bg-rose-100 flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-4 mt-16 mb-16">
                {/* Header */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-center">
                        CADASTRO PARA PROFISSIONAIS DE ARQUITETURA E DECORAÇÃO
                    </h1>
                    <h2 className="text-base font-bold text-justify">
                        Olá, para iniciar nossa parceria, por favor preencha e
                        selecione as informações corretas, após o cadastro, um
                        de nossos colaborares irá entrar em contato para
                        confirmar seus dados. Para qualquer tipo de dúvida entre
                        em contato no nosso whatsapp
                        <a
                            className="text-blue-900 underline"
                            href="https://api.whatsapp.com/send?phone=559132224751"
                            target="_blank"
                        >
                            {' '}
                            (91) 3222-4751
                        </a>
                    </h2>
                    <h3 className="text-sm text-red-500 text-right">
                        * Indica uma pergunta obrigatória
                    </h3>
                </div>

                {/* Nome completo */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        NOME COMPLETO <Required />
                    </label>
                    <input
                        className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                        name="NOMEPARC"
                        id="NOMEPARC"
                        placeholder="Informe seu nome completo"
                        required
                    />
                </div>

                {/* CPF */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        CPF <Required />
                    </label>
                    <input
                        className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                        name="CGC_CPF"
                        id="CGC_CPF"
                        placeholder="Digite apenas os números do seu CPF"
                        required
                    />
                </div>

                {/* TELEFONE */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        TELEFONE COM DDD <Required />
                    </label>
                    <input
                        className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                        name="TELEFONE"
                        id="TELEFONE"
                        placeholder="Digite apenas os número do seu telefone com DDD, exemplo 91912345678"
                        required
                    />
                </div>

                {/* E-MAIL */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        E-MAIL <Required />
                    </label>
                    <input
                        className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                        name="EMAIL"
                        id="EMAIL"
                        placeholder="Inform o seu email"
                        required
                    />
                </div>

                {/* CEP */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        CEP <Required />
                    </label>
                    <input
                        className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                        name="CEP"
                        id="cep"
                        placeholder="Informe o seu CEP"
                        required
                    />
                </div>

                {/* NÚMERO */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        NÚMERO <Required />
                    </label>
                    <input
                        className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                        name="NUMEND"
                        id="NUMEND"
                        placeholder="Informe o número da sua residência"
                        required
                    />
                </div>

                {/* COMPLEMENTO */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        COMPLEMENTO
                    </label>
                    <input
                        className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                        name="COMPLEMENTO"
                        id="COMPLEMENTO"
                        placeholder="Informe um complemento se necessário"
                    />
                </div>

                {/* LOGRADOURO */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        LOGRADOURO <Required />
                    </label>
                    <select name="CODEND" id="CODEND" required>
                        <option value="0">--</option>
                        <option value="427263">Padre Eutíquio</option>
                        <option value="146104">Pedro Miranda</option>
                    </select>
                </div>

                {/* BAIRRO */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        BAIRRO <Required />
                    </label>
                    <select name="CODBAI" id="CODBAI" required>
                        <option value="0">--</option>
                        <option value="5700">Batista Campos</option>
                        <option value="493">Nazaré</option>
                    </select>
                </div>

                {/* CIDADE */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        CIDADE <Required />
                    </label>
                    <select name="CODCID" id="CODCID" required>
                        <option value="0">--</option>
                        <option value="4564">Abaetetuba</option>
                        <option value="4581">Ananindeua</option>
                        <option value="4606">Belém</option>
                    </select>
                </div>

                {/* PROFISSAO */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        PROFISSÃO <Required />
                    </label>
                    <p>
                        <strong>
                            Por favor, selecione abaixo sua profissão na área de
                            arquitetura e decoração:
                        </strong>
                    </p>
                    <div>
                        <input
                            type="radio"
                            id="AD_PROFISSAOLV"
                            name="AD_PROFISSAOLV"
                            value="Arquiteto(a)"
                        />
                        <label> Arquiteto(a)</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="AD_PROFISSAOLV"
                            name="AD_PROFISSAOLV"
                            value="Designer de Interiores"
                        />
                        <label> Designer de Interiores</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="AD_PROFISSAOLV"
                            name="AD_PROFISSAOLV"
                            value="Decorador(a)"
                        />
                        <label> Decorador(a)</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="AD_PROFISSAOLV"
                            name="AD_PROFISSAOLV"
                            value="Paisagista"
                        />
                        <label> Paisagista</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="AD_PROFISSAOLV"
                            name="AD_PROFISSAOLV"
                            value="Outros"
                        />
                        <label> Outros</label>
                    </div>
                </div>

                {/* REGISTRO PROFISSIONAL */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        Registro de conselho profissional relacionado à sua área
                        de atuação <Required />
                    </label>
                    <input
                        className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                        name="AD_REGISTROPROFISSIONAL"
                        id="AD_REGISTROPROFISSIONAL"
                        placeholder="Digite apenas os números"
                        required
                    />
                </div>

                {/* PIX */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        CHAVE PIX <Required />
                    </label>
                    <input
                        className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                        name="CHAVEPIX"
                        id="CHAVEPIX"
                        placeholder="Informe o cpf, email ou chave pix"
                        required
                    />
                </div>

                {/* INSTAGRAM */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        INSTAGRAM
                    </label>
                    <input
                        className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                        name="AD_INSTAGRAMPROFILE"
                        id="AD_INSTAGRAMPROFILE"
                        placeholder="@SuaArroba"
                    />
                </div>

                {/* TERMO */}
                <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                    <label className="text-base font-bold italic">
                        Você está de acordo com os{' '}
                        <a
                            className="text-blue-900 underline"
                            href="https://termoarquiteto.casacontente.com.br/"
                            target="_blank"
                        >
                            TERMOS E CONDIÇÕES DA CASA CONTENTE PARA PARCERIA DE
                            CASHBACK COM PROFISSIONAIS DE ARQUITETURA E
                            DECORAÇÃO
                        </a>{' '}
                        <Required />
                    </label>
                    <input
                        className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                        name="AD_INSTAGRAMPROFILE"
                        id="AD_INSTAGRAMPROFILE"
                        placeholder="@SuaArroba"
                    />
                    <div className="flex gap-4">
                        <input
                            name="AD_TERMOACEITE"
                            id="AD_TERMOACEITE"
                            type="checkbox"
                            value="S"
                            checked
                            required
                        />
                        <p>
                            Aceito as condições do TERMOS E CONDIÇÕES DA CASA
                            CONTENTE PARA PARCERIA DE CASHBACK COM PROFISSIONAIS
                            DE ARQUITETURA E DECORAÇÃO
                        </p>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        className="bg-white px-8 py-4 text-red-500 rounded-2xl border border-zinc-300 shadow-xl hover:bg-zinc-100"
                        type="submit"
                    >
                        Cadastrar
                    </button>
                </div>
            </div>
        </div>
    )
}
