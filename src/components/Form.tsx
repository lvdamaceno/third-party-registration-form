import { Label } from './Label'

export function Form() {
    return (
        <form className="flex flex-col gap-4" method="POST">
            {/* Nome completo */}
            <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                <Label title="nome completo" required />
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
                <Label title="CPF" required />
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
                <Label title="TELEFONE COM DDD" required />
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
                <Label title="E-MAIL" required />
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
                <Label title="CEP" required />
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
                <Label title="NÚMERO" required />
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
                <Label title="complemento" />
                <input
                    className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                    name="COMPLEMENTO"
                    id="COMPLEMENTO"
                    placeholder="Informe um complemento se necessário"
                />
            </div>

            {/* LOGRADOURO */}
            <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                <Label title="logradouro" required />
                <select name="CODEND" id="CODEND" required>
                    <option value="0">--</option>
                    <option value="427263">Padre Eutíquio</option>
                    <option value="146104">Pedro Miranda</option>
                </select>
            </div>

            {/* BAIRRO */}
            <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                <Label title="bairro" required />
                <select name="CODBAI" id="CODBAI" required>
                    <option value="0">--</option>
                    <option value="5700">Batista Campos</option>
                    <option value="493">Nazaré</option>
                </select>
            </div>

            {/* CIDADE */}
            <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                <Label title="cidade" required />
                <select name="CODCID" id="CODCID" required>
                    <option value="0">--</option>
                    <option value="4564">Abaetetuba</option>
                    <option value="4581">Ananindeua</option>
                    <option value="4606">Belém</option>
                </select>
            </div>

            {/* PROFISSAO */}
            <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                <Label title="profissao" required />
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
                <Label
                    title="Registro de conselho profissional relacionado à sua
                            área de atuação "
                    required
                />
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
                <Label title="CHAVE PIX" required />
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
                <Label title="instagram" required />
                <input
                    className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                    name="AD_INSTAGRAMPROFILE"
                    id="AD_INSTAGRAMPROFILE"
                    placeholder="@SuaArroba"
                />
            </div>

            {/* TERMO */}
            <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                <a
                    className="text-blue-900 underline"
                    href="https://termoarquiteto.casacontente.com.br/"
                    target="_blank"
                >
                    TERMOS E CONDIÇÕES DA CASA CONTENTE PARA PARCERIA DE
                    CASHBACK COM PROFISSIONAIS DE ARQUITETURA E DECORAÇÃO
                </a>{' '}
                <div className="flex gap-4">
                    <input
                        name="AD_TERMOACEITE"
                        id="AD_TERMOACEITE"
                        type="checkbox"
                        value="S"
                        checked
                        required
                    />
                    <Label
                        title="Aceito as condições do TERMOS E CONDIÇÕES DA CASA
                        CONTENTE PARA PARCERIA DE CASHBACK COM PROFISSIONAIS DE
                        ARQUITETURA E DECORAÇÃO"
                        required
                    />
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
        </form>
    )
}
