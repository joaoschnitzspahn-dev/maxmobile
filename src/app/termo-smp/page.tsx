import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termo SMP — Contrato de Prestação do Serviço Móvel Pessoal",
  description: `Contrato de Prestação do Serviço Móvel Pessoal (SMP) por meio de Rede Virtual da ${SITE.name}. Condições de planos, portabilidade, acúmulo e uso.`,
  alternates: {
    canonical: `${SITE.url}/termo-smp`,
  },
};

export default function TermoSmpPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>

          <header className="mb-12 border-b border-white/8 pb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Documentos legais
            </span>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Contrato de Prestação do Serviço Móvel Pessoal por meio de Rede
              Virtual
            </h1>
            <p className="mt-4 text-sm text-foreground-muted">
              Termo de Adesão — {SITE.name}
            </p>
          </header>

          <div className="prose-termo space-y-8 text-sm leading-relaxed text-foreground-muted">
            <section>
              <p>
                O plano/benefício de serviço pré-pago é realizado em conjunto com
                a prestadora de serviços Telecom — {SITE.networkProvider}, com
                sede em Setor de Grandes Áreas Norte (SGAN) Quadra 601 Bloco H —
                Ed. ION Salas 1059, 1060, 1061 e 1062 — CEP 70.830-018 —
                Brasília/DF, inscrita no Cadastro Nacional de Pessoas Jurídicas
                (CNPJ/MF) sob o nº {SITE.networkCnpj}, e para toda pessoa física
                ou jurídica, doravante denominada como consumidor. Ao comprar um
                chip e carregando-o com um dos valores de planos/benefícios
                disponíveis, o consumidor está aderindo automaticamente ao
                plano/benefício correspondente ao plano/benefício de serviço
                comercializado, conforme previsto no presente Termo de Adesão e
                divulgado no site {SITE.url}.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                1. Ativação do plano/benefício de serviço
              </h2>
              <p>
                A ativação do plano/benefício de serviço é realizada após a
                aquisição do plano/benefício pelo consumidor.
              </p>
              <p className="mt-3">
                Para aderir a um plano/benefício de serviço, o consumidor deve
                ter adquirido previamente o chip da {SITE.name}.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                2. Planos/benefícios de serviços
              </h2>
              <p>
                A {SITE.name} possui planos/benefícios correspondentes a 1 mês
                de validade.
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-5">
                <li>
                  <strong className="text-white">PLANO 1 (Essencial)</strong> —
                  6GB de internet (4GB da franquia principal + 2GB bônus mensal);
                  Ligações Ilimitadas para qualquer operadora; WhatsApp não
                  desconta dados; 60 SMS; Acúmulo de benefícios. Linha portada
                  possui benefício de mais 5GB de bônus mensal, totalizando 11GB
                  neste plano.
                </li>
                <li>
                  <strong className="text-white">PLANO 2 (Plus)</strong> — 10GB
                  de internet (7GB da franquia principal + 3GB bônus mensal);
                  Ligações Ilimitadas para qualquer operadora; WhatsApp não
                  desconta dados; 100 SMS; Acúmulo de benefícios. Linha portada
                  possui benefício de mais 5GB de bônus mensal, totalizando 15GB
                  neste plano.
                </li>
                <li>
                  <strong className="text-white">PLANO 3 (Pro)</strong> — 15GB
                  de internet (11GB da franquia principal + 4GB bônus mensal);
                  Ligações Ilimitadas para qualquer operadora; WhatsApp e Waze
                  não descontam dados; 100 SMS; Acúmulo de benefícios. Linha
                  portada possui benefício de mais 5GB de bônus mensal,
                  totalizando 20GB neste plano.
                </li>
                <li>
                  <strong className="text-white">PLANO 4 (Ultra)</strong> — 23GB
                  de internet (19GB da franquia principal + 4GB bônus mensal);
                  Ligações Ilimitadas para qualquer operadora; WhatsApp e Waze
                  não descontam dados; 100 SMS; Acúmulo de benefícios. Linha
                  portada possui benefício de mais 5GB de bônus mensal,
                  totalizando 28GB neste plano.
                </li>
                <li>
                  <strong className="text-white">PLANO 5 (Max)</strong> — 45GB
                  de internet (41GB da franquia principal + 4GB bônus mensal);
                  Ligações Ilimitadas para qualquer operadora; WhatsApp e Waze
                  não descontam dados; 100 SMS; Acúmulo de benefícios. Linha
                  portada possui benefício de mais 5GB de bônus mensal,
                  totalizando 50GB neste plano.
                </li>
              </ul>
              <p className="mt-4">
                Os valores dos planos/benefícios de serviços estão disponíveis
                na seção Planos do site {SITE.url}.
              </p>

              <h3 className="font-display mt-6 mb-2 text-lg font-semibold text-white">
                2.1 Bônus de portabilidade e/ou recarga programada
              </h3>
              <p>
                Os planos/benefícios podem ter bônus de portabilidade e/ou
                recarga programada.
              </p>
              <p className="mt-3">
                O primeiro bônus de portabilidade será concedido em até 7 dias
                úteis após a conclusão, com sucesso, do processo de
                portabilidade.
              </p>
              <p className="mt-3">
                Nas próximas aquisições de planos/benefícios os bônus de
                portabilidade e recarga programada são disponibilizados
                automaticamente acompanhando a vigência do plano, ou seja, se o
                consumidor adquirir o plano sendo um consumidor portado ou com
                recarga programada, ele não receberá essa bonificação apenas no
                seu primeiro mês de uso do chip, mas sim durante todo o período
                que o consumidor manter o seu plano ativo.
              </p>

              <h3 className="font-display mt-6 mb-2 text-lg font-semibold text-white">
                2.2 Plano Anual Promocional
              </h3>
              <p>
                A {SITE.name} poderá disponibilizar também o Plano Anual
                Promocional, composto por 12 meses de utilização contínua do
                serviço, com condições comerciais diferenciadas e preço reduzido
                em relação às ofertas mensais.
              </p>
              <p className="mt-3">
                O Plano Anual pode ser adquirido de duas formas: (a) pagamento à
                vista via PIX ou boleto bancário; ou (b) pagamento parcelado no
                cartão de crédito, em até 12 (doze) vezes, conforme
                disponibilidade do emissor. No pagamento parcelado, o valor
                total da compra é lançado integralmente no limite do cartão no
                momento da contratação, sendo as parcelas debitadas mensalmente
                na fatura.
              </p>
              <p className="mt-3">
                Por se tratar de uma oferta promocional com benefício estendido,
                o Plano Anual não permite upgrade, downgrade, troca de oferta ou
                alteração para outro plano durante sua vigência. A contratação
                do Plano Anual implica adesão integral às suas condições e
                permanência até o final do período contratado.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                3. Mecânica dos planos
              </h2>

              <h3 className="font-display mt-4 mb-2 text-lg font-semibold text-white">
                3.1 Internet sem Cortes
              </h3>
              <p>
                Durante a validade do plano/benefício contratado, mesmo após o
                consumo de 100% do plano/benefício de dados, o acesso à internet
                não será cortado e o consumidor continuará navegando em
                velocidade reduzida (32 Kbps) até o final do prazo de validade
                do plano/benefício.
              </p>

              <h3 className="font-display mt-4 mb-2 text-lg font-semibold text-white">
                3.2 Data de Expiração do plano/benefício
              </h3>
              <p>
                O consumidor que adquirir um plano/benefício terá a data de
                expiração garantida pelo período do plano/benefício adquirido.
              </p>
              <p className="mt-3">
                Planos/benefícios correspondentes a 1 mês terão como data de
                validade 1 mês após a data de adesão do plano, período não
                acumulativo.
              </p>

              <h3 className="font-display mt-4 mb-2 text-lg font-semibold text-white">
                3.3 Acúmulo de benefícios
              </h3>
              <p>
                Quando o consumidor adquirir uma nova oferta antes da data de
                vencimento do benefício vigente, o saldo remanescente de dados
                poderá ser acumulado, desde que respeitado o limite máximo de
                até duas vezes (2x) a Franquia Principal do novo plano
                contratado.
              </p>
              <p className="mt-3">
                O limite de acúmulo se aplica exclusivamente ao saldo
                remanescente do plano anterior, não afetando o volume de dados
                do plano contratado. Assim, no momento da renovação:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  O consumidor recebe integralmente o volume de dados da nova
                  oferta contratada, independentemente do limite de acúmulo;
                </li>
                <li>
                  Do saldo remanescente, somente a quantidade equivalente a até
                  2x a Franquia Principal da nova oferta poderá ser transportada
                  para o ciclo seguinte;
                </li>
                <li>
                  Qualquer saldo excedente ao limite será descartado no momento
                  da renovação.
                </li>
              </ul>
              <p className="mt-3">
                Para fins desta regra, considera-se Franquia Principal apenas o
                volume principal de dados previsto em cada plano, excluídos
                bônus de portabilidade, recarga programada ou promocionais.
              </p>
              <p className="mt-3">
                Limite de acúmulo para cada plano:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>PLANO 1 – Limite máximo de acúmulo: 8GB (Franquia Principal: 4GB)</li>
                <li>PLANO 2 – Limite máximo de acúmulo: 14GB (Franquia Principal: 7GB)</li>
                <li>PLANO 3 – Limite máximo de acúmulo: 22GB (Franquia Principal: 11GB)</li>
                <li>PLANO 4 – Limite máximo de acúmulo: 38GB (Franquia Principal: 19GB)</li>
                <li>PLANO 5 – Limite máximo de acúmulo: 82GB (Franquia Principal: 41GB)</li>
              </ul>
              <p className="mt-3">
                Caso a recarga seja realizada após o vencimento do plano
                anterior, não haverá acúmulo, pois o benefício remanescente já
                terá expirado.
              </p>

              <h3 className="font-display mt-4 mb-2 text-lg font-semibold text-white">
                3.4 Acesso a aplicativos e sites gratuitos
              </h3>
              <p>
                Caso o plano/benefício contratado ofereça promocionalmente
                acessos gratuitos a aplicativos e sites, como os de redes
                sociais, estes acessos não serão descontados do plano/benefício
                desde que as utilizações não sejam para chamadas de vídeo,
                downloads de vídeos e backups da própria ferramenta.
              </p>

              <h3 className="font-display mt-4 mb-2 text-lg font-semibold text-white">
                3.5 WhatsApp ilimitado
              </h3>
              <p>
                Nos casos dos planos/benefícios com WhatsApp ilimitado,
                aplica-se para o envio/recebimento de mensagens de texto,
                arquivos de foto e arquivos de áudio, os quais não deduzem do
                pacote de dados.
              </p>
              <p className="mt-3">
                As ligações (chamadas) de voz ou vídeo realizadas e/ou recebidas
                através do WhatsApp são cobradas (deduzidas do pacote de dados)
                normalmente.
              </p>
              <p className="mt-3">
                Da mesma forma, qualquer utilização de internet fora do
                aplicativo, mesmo que originada de um link enviado via
                aplicativo, irá gerar desconto do pacote de internet que o
                consumidor tiver ativo.
              </p>
              <p className="mt-3">
                Após consumo de 100% do pacote, a velocidade de navegação é
                reduzida para 32kbps, independente do aplicativo.
              </p>

              <h3 className="font-display mt-4 mb-2 text-lg font-semibold text-white">
                3.6 Ligações ilimitadas
              </h3>
              <p>
                Para plano/benefício que contenha ligações ilimitadas serão
                concedidos 1.000 minutos para serem utilizados. Consumido este
                plano/benefício de minutos dentro do prazo de validade do
                plano/benefício, o consumidor receberá sem custo, 1.000 minutos
                adicionais, desde que não haja uso fraudulento e não esteja
                enquadrada em uso indevido.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                4. Ligações
              </h2>
              <p>
                Todas as chamadas para os serviços públicos de emergência são
                gratuitas. As chamadas para os demais serviços de utilidade
                pública, por sua vez, poderão ser tarifadas pelo valor de uma
                chamada local, embora a prestação do serviço propriamente dita
                seja gratuita.
              </p>
              <p className="mt-3">
                <strong className="text-white">4.1</strong> As chamadas
                ilimitadas são para ligações locais e longa distância nacionais
                com código de seleção de prestadora 41 (CSP 41) para números de
                telefone fixos ou móveis de qualquer prestadora dentro do
                território nacional, desde que não esteja caracterizado o uso
                fraudulento.
              </p>
              <p className="mt-3">
                <strong className="text-white">4.2</strong> Para
                plano/benefício que contenha ligações ilimitadas, o consumidor
                poderá usufruir do benefício dentro do seu prazo de validade,
                desde que não haja uso fraudulento e não esteja enquadrada em
                uso indevido, conforme descrito no item 8 do presente Termo de
                Adesão.
              </p>
              <p className="mt-3">
                <strong className="text-white">4.3</strong> Chamadas não
                incluídas no benefício da oferta:
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  Ligações de Longa Distância Internacional, Roaming
                  Internacional de Voz, Dados e SMS com qualquer código de
                  prestadora, inclusive o código 41 da TIM;
                </li>
                <li>Ligações de Longa Distância Nacional sem o código 41;</li>
                <li>
                  Ligações para códigos não geográficos como 0300, 0500 e 0900;
                </li>
                <li>
                  Ligações para números especiais com três ou quatro dígitos,
                  com exceção às chamadas para os Serviços de Utilidade Pública
                  e de Emergência (SUP) listados na regulamentação da ANATEL;
                </li>
                <li>
                  Utilização de qualquer serviço fora da Rede Surf Telecom;
                </li>
                <li>
                  Serviços adicionais por ligação como downloads de sons e
                  jogos, votação e concursos, portais de voz etc., possuem
                  custos variáveis, de acordo com o provedor da campanha ou
                  serviço em questão;
                </li>
                <li>Chamadas a cobrar não são contempladas nas ofertas.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                5. SMS
              </h2>
              <p>
                O serviço de mensagens curtas (SMS) é apenas para números
                móveis nacionais, de acordo com o plano/benefício contratado no
                plano/benefício de serviço.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                6. Pagamento e Renovação
              </h2>
              <p>
                <strong className="text-white">6.1</strong> O consumidor poderá
                optar por fazer renovações mensais mediante aquisição dos
                planos/benefícios que melhor lhe convier dentro dos disponíveis
                em qualquer canal de atendimento da operadora presencial ou
                remoto num dos valores disponíveis.
              </p>
              <p className="mt-3">
                <strong className="text-white">6.1.1</strong> Considera-se
                atendimento presencial todo atendimento realizado nos
                estabelecimentos e nos pontos de atendimento associados à{" "}
                {SITE.name}.
              </p>
              <p className="mt-3">
                <strong className="text-white">6.1.2</strong> Considera-se
                atendimento remoto aquele realizado por meio de Centro de
                Atendimento Telefônico, do Atendimento por Internet, bem como
                por qualquer outro meio disponibilizado ou utilizado pela
                prestadora para interação remota com o consumidor.
              </p>
              <p className="mt-3">
                <strong className="text-white">6.2</strong> O consumidor que
                não realizar uma recarga até a data de vencimento do
                plano/benefício vigente terá seu plano/benefício remanescente
                expirado.
              </p>
              <p className="mt-3">
                <strong className="text-white">6.3</strong> As compras
                realizadas por meio dos canais oficiais com pagamento em cartão
                de crédito podem ativar automaticamente a recorrência mensal,
                renovando o mesmo plano contratado e realizando a cobrança no
                mesmo cartão utilizado na compra original. Caso o consumidor
                deseje cancelar a recorrência, deverá solicitar a desativação
                pelos canais oficiais de atendimento. Se a cobrança não puder
                ser processada, a renovação automática poderá não ocorrer.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                7. Rede e Cobertura
              </h2>
              <h3 className="font-display mt-4 mb-2 text-lg font-semibold text-white">
                7.1 Roaming Nacional
              </h3>
              <p>
                Dentro da área de cobertura de sua operadora de serviço, o
                Roaming é gratuito para o consumidor. Não haverá cobrança
                adicional para o encaminhamento das chamadas de longa distância
                em todo o território nacional.
              </p>
              <p className="mt-3">
                Não haverá cobrança de taxa de deslocamento para as chamadas
                recebidas fora de sua localidade quando em território nacional.
              </p>
              <h3 className="font-display mt-4 mb-2 text-lg font-semibold text-white">
                7.2 Velocidades de navegação na internet
              </h3>
              <p>
                Desde que a qualidade de sinal esteja satisfatória onde o
                aparelho se encontra, a velocidade de referência padrão na rede
                3G é de até 1 Mbps para download e de até 100 Kbps para upload,
                enquanto na rede 4G é de até 5 Mbps para download e de até 500
                Kbps para upload.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                8. Usos não autorizados no plano/benefício de serviço
              </h2>
              <p>
                O consumidor estará passível de bloqueio e cancelamento de sua
                adesão a este termo, quando for identificado o uso indevido do
                plano/benefício enquadrado em quaisquer dos itens abaixo:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  8.1 Comercialização de minutos/serviços ou utilização de SMS
                  com finalidade comercial, destinados à obtenção de lucro por
                  parte do consumidor;
                </li>
                <li>
                  8.2 Envio de SMS através de máquinas, computadores ou outro
                  dispositivo que não seja o aparelho celular do consumidor;
                </li>
                <li>
                  8.3 Envio de SMS indesejados classificados como SPAM;
                </li>
                <li>
                  8.4 Realização de chamadas através de máquinas, computadores
                  ou outro dispositivo que não seja o aparelho celular utilizado
                  pelo consumidor;
                </li>
                <li>
                  8.5 Realização de chamadas indesejadas classificadas como
                  SPAM;
                </li>
                <li>
                  8.6 Utilização de equipamentos como GSM Box, Black Box e
                  equipamentos similares;
                </li>
                <li>
                  8.7 Desbalanceamento do tráfego sainte/entrante, contendo
                  volume de chamadas originadas acima de três vezes o de
                  chamadas recebidas;
                </li>
                <li>
                  8.8 Utilização do plano/benefício para realização de
                  conferências;
                </li>
                <li>
                  8.9 Utilização do plano/benefício para serviços de salas de
                  conversação, tele amizade, telesexo e similares.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                9. Cancelamento
              </h2>
              <p>
                O consumidor pode solicitar o cancelamento da oferta entrando em
                contato com a Central de Atendimento pelos canais oficiais
                disponíveis, inclusive o {SITE.phone}.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                10. Renovação da Adesão à plano/benefício de serviço
              </h2>
              <p>
                <strong className="text-white">10.1</strong> A
                renovação/contratação do plano/benefício ocorre sempre que o
                consumidor da operadora de serviço efetuar uma recarga do
                plano/benefício correspondente.
              </p>
              <p className="mt-3">
                <strong className="text-white">10.2</strong> O consumidor tem o
                direito de escolher o plano/benefício que melhor lhe convier com
                base nas recargas que estão disponíveis nos canais de recarga da
                prestadora.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                11. Suspensão do serviço
              </h2>
              <p>
                Caso o consumidor não adquira nenhum novo plano/benefício de
                serviço até a expiração do seu plano/benefício atual, o cliente
                passará por estágios até o cancelamento da linha:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white">1º estágio</strong> —
                  Suspensão parcial (até 45 dias após expiração): o Cliente
                  recebe chamadas e recebe mensagens de texto SMS, mas terá
                  todos os saldos remanescentes do plano/benefício de dados, voz
                  e SMS excluídos.
                </li>
                <li>
                  <strong className="text-white">2º estágio</strong> —
                  Suspensão total (de 46 a 75 dias após expiração): o Cliente
                  terá os serviços totalmente suspensos, mantendo as restrições
                  do estágio anterior e incluindo restrições de recebimento de
                  chamadas e mensagens de texto SMS.
                </li>
                <li>
                  <strong className="text-white">3º estágio</strong> —
                  Quarentena (de 76 a 255 dias): não fazendo adesão a novo
                  plano/benefício, o número será definitivamente cancelado e
                  atribuído a um novo usuário.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                12. Disponibilização de Planos/Benefícios
              </h2>
              <p>
                Os Planos/Benefícios estão disponíveis para aquisição no site,
                aplicativos e pontos de venda da {SITE.name}.
              </p>
              <h3 className="font-display mt-4 mb-2 text-lg font-semibold text-white">
                12.1 Pacote adicional
              </h3>
              <p>
                O Cliente pode contratar um pacote adicional de dados, quando
                disponível. Observe a validade do pacote adicional, que
                normalmente é diferente do plano/benefício. O Pacote adicional
                só pode ser adquirido durante a vigência do Plano/Benefício
                (enquanto o Plano/Benefício estiver ativo).
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                13. Sobre os serviços de dados do plano/benefício adquirido
              </h2>
              <p>
                A velocidade disponível no acesso pode ter oscilações e
                variações conforme condições topográficas e/ou climáticas,
                velocidade de movimento, distância que o Cliente se encontrar da
                Estação Rádio Base (ERB), número de Clientes que utilizarem ao
                mesmo tempo a cobertura provida pela mesma Estação Rádio Base,
                modem usado na conexão, aplicações utilizadas e sites de
                conteúdo e informação que estão sendo acessados, além de outros
                fatores externos que porventura venham a interferir no nível do
                sinal, que independem de ações das empresas envolvidas.
              </p>
              <p className="mt-3">
                A exploradora de serviço não se responsabiliza pelas diferenças
                de velocidades ocorridas em razão de fatores externos, bem como
                problemas no equipamento utilizado pelo Cliente, entre outros.
              </p>
              <p className="mt-3">
                Consulte a cobertura no site da sua operadora de serviço.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                14. Aparelhos celulares a serem utilizados
              </h2>
              <p>
                O correto funcionamento e desempenho do aparelho somente será
                possível por meio do uso de equipamentos homologados pela
                ANATEL, compatíveis com as frequências autorizadas, em uso pela
                exploradora de serviço e cujo IMEI não esteja bloqueado por
                autoridades competentes.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                15. Outras informações
              </h2>
              <p>
                Para consultar informações sobre o plano contratado, consumo de
                dados, detalhes de portabilidade, realização de recargas,
                atendimento e demais serviços, o consumidor poderá obter suporte
                e informações adicionais pelo site {SITE.url} ou entrando em
                contato com o SAC, por ligação ou WhatsApp, no número{" "}
                {SITE.phone}.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                16. Privacidade e Proteção de Dados
              </h2>
              <p>
                Os dados pessoais coletados e processados para a execução do
                serviço serão tratados conforme disposto na Lei Geral de
                Proteção de Dados — LGPD (Lei n. 13.709/2018), pelo Marco Civil
                da Internet (Lei n. 12.965/14), pelo Código Civil (Lei n.
                10.406/02), pelo Código de Defesa do Consumidor (Lei n.
                8.078/90), pela Constituição Federal e pelas regulamentações
                pertinentes.
              </p>
              <p className="mt-3">
                Conforme regulamentação vigente, os dados pessoais recebidos ou
                acessados em decorrência do Termo de Adesão, quais sejam, a
                confirmação do CPF do titular associado ao número de telefone da
                linha contratada e dados de pagamento, serão tratados com a
                devida aplicação de medidas técnicas e administrativas aptas a
                protegê-los de acessos e utilizações não autorizadas e/ou de
                situações acidentais ou ilícitas de destruição, perda,
                alteração, comunicação ou difusão.
              </p>
              <p className="mt-3">
                Caso o Cliente deseje exercer qualquer de seus direitos
                elencados no art. 18 da LGPD, deverá entrar em contato com a
                central de atendimento pelo e-mail {SITE.email} ou pelo{" "}
                {SITE.phone}.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                17. Promoções Sazonais
              </h2>
              <p>
                A {SITE.name} poderá realizar, em períodos específicos do ano,
                promoções sazonais com condições comerciais diferenciadas,
                válidas por tempo determinado e conforme regras próprias de
                elegibilidade. Essas ações podem incluir, entre outros
                benefícios, dobro de gigas, combos promocionais, descontos
                exclusivos ou vantagens adicionais em determinados planos e
                serviços. As condições e prazos de validade de cada promoção
                serão divulgados previamente nos canais oficiais, e sua adesão
                implica aceite integral das regras específicas de cada campanha.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl font-semibold text-white">
                18. Cupons de Desconto
              </h2>
              <p>
                Os cupons de desconto disponibilizados são pessoais e
                intransferíveis, sendo válidos para uso único por CPF ou CNPJ. O
                uso do cupom é não cumulativo, não podendo ser combinado com
                outras promoções, campanhas, descontos ou condições comerciais
                vigentes. Cada cupom é válido apenas uma vez por cliente, seja
                para ativação de um novo plano ou para renovação de um plano
                existente, conforme as regras específicas de cada campanha
                promocional. A utilização do cupom implica aceite integral das
                condições deste Termo, bem como das regras complementares
                eventualmente divulgadas junto à promoção. A {SITE.name}{" "}
                reserva-se o direito de cancelar, suspender ou alterar as
                condições de uso dos cupons a qualquer momento.
              </p>
            </section>

            <section className="rounded-2xl border border-white/8 bg-background-secondary p-6">
              <h2 className="font-display mb-3 text-lg font-semibold text-white">
                Contato
              </h2>
              <p>
                SAC / WhatsApp:{" "}
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="text-primary hover:underline"
                >
                  {SITE.phone}
                </a>
              </p>
              <p className="mt-2">
                E-mail:{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-primary hover:underline"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="mt-2">
                Site:{" "}
                <a href={SITE.url} className="text-primary hover:underline">
                  {SITE.url}
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
