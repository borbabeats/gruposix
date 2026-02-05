export default function PoliticaDePrivacidade(){
    return(
        <main className="container mx-auto px-4 py-10 max-w-4xl">
            <h1 className="font-bold mb-3">Política de Privacidade</h1>
            <p className="mb-6">Última atualização: [insira a data – ex: 04 de fevereiro de 2026]</p>

            <p className="mb-4">
                A [NOME DA EMPRESA / MARCA], pessoa jurídica de direito privado, inscrita no CNPJ sob o nº [XX.XXX.XXX/XXXX-XX],
                com sede em [endereço completo], doravante denominada “Nós” ou “Controlador”, está comprometida em proteger a
                privacidade e a segurança dos dados pessoais de seus usuários (“Você”), em conformidade com a Lei nº 13.709/2018
                (Lei Geral de Proteção de Dados Pessoais – LGPD) e demais legislações aplicáveis.
            </p>
            <p className="mb-8">
                Esta Política de Privacidade explica como coletamos, usamos, armazenamos, compartilhamos e protegemos seus dados
                pessoais quando Você utiliza nosso site [www.seusite.com.br], aplicativo, plataforma ou serviços (“Serviços”).
            </p>

            <section className="mb-8">
                <h2 className="font-bold mb-3">1. Dados que coletamos</h2>
                <p className="mb-4">Podemos coletar os seguintes tipos de dados pessoais, dependendo do serviço utilizado:</p>

                <h3 className="font-bold mb-2">1.1 Dados fornecidos diretamente por Você</h3>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                    <li>Nome completo</li>
                    <li>CPF / CNPJ</li>
                    <li>E-mail</li>
                    <li>Telefone (fixo e/ou celular)</li>
                    <li>Endereço completo</li>
                    <li>Data de nascimento</li>
                    <li>Dados de pagamento (número do cartão, nome do titular, validade, CVV – processados diretamente por gateway seguro)</li>
                    <li>Login e senha (armazenados de forma criptografada)</li>
                    <li>Informações enviadas em formulários, chats, e-mails ou WhatsApp</li>
                    <li>Foto de perfil (quando aplicável)</li>
                </ul>

                <h3 className="font-bold mb-2">1.2 Dados coletados automaticamente</h3>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                    <li>Endereço IP</li>
                    <li>Localização geográfica aproximada</li>
                    <li>Dispositivo, sistema operacional, navegador e resolução de tela</li>
                    <li>Páginas visitadas, tempo de navegação e interações</li>
                    <li>Cookies, pixel tags, beacons e tecnologias semelhantes</li>
                    <li>Dados de navegação e comportamento (analytics)</li>
                </ul>

                <h3 className="font-bold mb-2">1.3 Dados de terceiros</h3>
                <p>
                    Podemos receber informações sobre Você de parceiros comerciais, redes sociais (quando Você autoriza a integração),
                    bureaus de crédito (quando há análise de crédito) e prestadores de serviços de pagamento.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="font-bold mb-3">2. Finalidades do tratamento</h2>
                <p className="mb-3">Utilizamos seus dados pessoais para as seguintes finalidades principais:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Identificação, autenticação e autorização de acesso</li>
                    <li>Prestação e melhoria dos Serviços contratados</li>
                    <li>Atendimento ao cliente e suporte técnico</li>
                    <li>Cumprimento de obrigações legais, regulatórias e judiciais</li>
                    <li>Prevenção e combate a fraudes, abusos e atividades ilegais</li>
                    <li>Análise de perfil e comportamento para personalização de conteúdo e ofertas</li>
                    <li>Envio de comunicações comerciais, newsletters e promoções (com possibilidade de opt-out)</li>
                    <li>Realização de pesquisas de satisfação e estatísticas</li>
                    <li>Exercício regular de direitos em processos judiciais ou administrativos</li>
                    <li>Proteção do crédito (quando aplicável)</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="font-bold mb-3">3. Base legal para o tratamento</h2>
                <p className="mb-3">Realizamos o tratamento de dados com fundamento em uma ou mais das bases legais previstas na LGPD, incluindo:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Consentimento (art. 7º, I)</li>
                    <li>Cumprimento de obrigação legal ou regulatória (art. 7º, II)</li>
                    <li>Execução de contrato ou de procedimentos preliminares (art. 7º, V)</li>
                    <li>Exercício regular de direitos (art. 7º, VI)</li>
                    <li>Legítimo interesse (art. 7º, IX) – sempre respeitando a sua privacidade e os seus direitos</li>
                    <li>Proteção do crédito (art. 7º, X) – quando aplicável</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="font-bold mb-3">4. Compartilhamento de dados</h2>
                <p className="mb-3">Compartilhamos seus dados pessoais apenas nas situações abaixo:</p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li>Com empresas do mesmo grupo econômico (quando houver)</li>
                    <li>Com prestadores de serviços contratados (hospedagem, armazenamento em nuvem, pagamento, e-mail marketing, analytics, antifraude, logística, etc.)</li>
                    <li>Com autoridades públicas, quando exigido por lei, ordem judicial ou requisição administrativa</li>
                    <li>Em caso de operação societária (fusão, aquisição, cisão, incorporação, etc.)</li>
                    <li>Para proteção de direitos da [NOME DA EMPRESA], de terceiros ou do público em geral</li>
                </ul>
                <p>Não vendemos dados pessoais a terceiros.</p>
            </section>

            <section className="mb-8">
                <h2 className="font-bold mb-3">5. Armazenamento e segurança</h2>
                <p className="mb-4">
                    Os dados são armazenados em servidores localizados no Brasil e/ou em provedores de nuvem com data centers no Brasil
                    ou que garantam nível adequado de proteção (cláusulas contratuais padrão ou selos de adequação).
                </p>
                <p className="mb-3">Adotamos medidas técnicas e administrativas de segurança compatíveis com o estado da arte, incluindo:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Criptografia em trânsito e em repouso</li>
                    <li>Controle de acesso</li>
                    <li>Monitoramento de logs</li>
                    <li>Testes periódicos de vulnerabilidade</li>
                    <li>Backup e plano de contingência</li>
                </ul>
                <p>
                    Ainda assim, nenhum sistema é 100% imune a incidentes. Caso ocorra qualquer violação de dados que possa gerar risco
                    ou dano relevante a Você, notificaremos os titulares e a Autoridade Nacional de Proteção de Dados (ANPD), conforme
                    exigido pela LGPD.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="font-bold mb-3">6. Seus direitos como titular de dados</h2>
                <p className="mb-3">Você tem os seguintes direitos garantidos pela LGPD (art. 18):</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Confirmação da existência de tratamento</li>
                    <li>Acesso aos dados</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                    <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade</li>
                    <li>Portabilidade dos dados a outro fornecedor (quando tecnicamente viável)</li>
                    <li>Eliminação dos dados tratados com base no consentimento</li>
                    <li>Informação sobre compartilhamento com terceiros</li>
                    <li>Revogação do consentimento (quando a base for consentimento)</li>
                    <li>Oposição a tratamento baseado em legítimo interesse</li>
                </ul>
                <p className="mb-1">Para exercer qualquer desses direitos, envie um e-mail para: privacidade@seusite.com.br</p>
                <p>Responderemos em até 15 dias (prazo prorrogável por mais 15 dias mediante justificativa).</p>
            </section>

            <section className="mb-8">
                <h2 className="font-bold mb-3">7. Cookies e tecnologias semelhantes</h2>
                <p>
                    Utilizamos cookies essenciais, de desempenho, funcionais e de publicidade. Você pode gerenciar suas preferências no
                    banner de cookies ou nas configurações do navegador. Para mais detalhes, consulte nossa Política de Cookies (link).
                </p>
            </section>

            <section className="mb-8">
                <h2 className="font-bold mb-3">8. Transferência internacional de dados</h2>
                <p>
                    Quando houver transferência de dados para fora do Brasil, ela ocorrerá apenas para países que ofereçam nível adequado
                    de proteção ou com as salvaguardas contratuais exigidas pela ANPD (cláusulas padrão, BCR, etc.).
                </p>
            </section>

            <section className="mb-8">
                <h2 className="font-bold mb-3">9. Prazo de retenção</h2>
                <p>
                    Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas, bem como para cumprir obrigações legais,
                    contratuais e regulatórias. Após esse período, os dados são eliminados ou anonimizados, quando possível.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="font-bold mb-3">10. Alterações nesta Política</h2>
                <p>
                    Podemos atualizar esta Política periodicamente. A versão mais recente sempre estará disponível nesta página, com a data
                    da última atualização. Recomendamos consultar esta página regularmente. Mudanças relevantes serão comunicadas por e-mail
                    ou por aviso destacado nos Serviços.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="font-bold mb-3">11. Contato</h2>
                <p className="mb-3">
                    Dúvidas sobre esta Política ou sobre o tratamento de seus dados pessoais devem ser direcionadas ao nosso Encarregado de
                    Proteção de Dados (DPO):
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Nome do DPO / Canal de Atendimento: [Nome ou “Encarregado de Proteção de Dados”]</li>
                    <li>E-mail: privacidade@seusite.com.br</li>
                    <li>Telefone (opcional): [número]</li>
                </ul>
            </section>

            <section>
                <h2 className="font-bold mb-3">Aceitação</h2>
                <p className="mb-4">
                    Ao continuar utilizando nossos Serviços após a publicação desta Política, Você declara ter lido, compreendido e
                    concordado com os termos aqui descritos.
                </p>
                <p className="mb-6">Boa navegação e uso dos nossos serviços!</p>
                <p className="mb-1">[NOME DA EMPRESA]</p>
                <p>CNPJ: XX.XXX.XXX/XXXX-XX</p>
            </section>
        </main>
    )
}