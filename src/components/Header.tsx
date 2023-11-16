export function Header() {
    return (
        <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-center">
                CADASTRO PARA PROFISSIONAIS DE ARQUITETURA E DECORAÇÃO
            </h1>
            <h2 className="text-base font-bold text-justify">
                Olá, para iniciar nossa parceria, por favor preencha e selecione
                as informações corretas, após o cadastro, um de nossos
                colaborares irá entrar em contato para confirmar seus dados.
                Para qualquer tipo de dúvida entre em contato no nosso whatsapp
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
    )
}
