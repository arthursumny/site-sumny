# BRIEF v2 — sumny.tech (site novo, do zero)

Construa o site pessoal/profissional de Arthur Sumny Saggin, **estático e multipágina**, em HTML + CSS +
JavaScript puro. **Sem frameworks, sem build step, sem CDN, sem fonte externa, sem npm.** Tem que abrir com
duplo clique em `index.html` e funcionar offline. Será servido por nginx em https://sumny.tech.

## Objetivo

Site que Arthur manda para recrutador técnico, coordenador de polo de inovação e dono de empresa. Precisa
parecer obra de engenheiro sênior com senso editorial — **não** um template de IA, **não** uma landing de
startup. Autoridade vem de contenção: tipografia, régua fina, números reais, zero hype.

## Direção visual (siga à risca) — diferente do site antigo (que era dark)

- **Tema claro tipo "documento técnico / caderno de engenharia"**: fundo papel `#F6F4EF`, superfície
  `#FFFDF9`, tinta `#16181C`, tinta secundária `#5C6470`, régua `#DCD8CF`.
- **Uma cor de acento: laranja-queimado `#C2410C`**, só em links, numeração e um filete por seção. Nada de
  gradiente, nada de neon, nada de glassmorphism.
- Tipografia: títulos em serifa de sistema (`Georgia, "Iowan Old Style", "Times New Roman", serif`) com
  `letter-spacing:-0.02em`; corpo em pilha sans de sistema; rótulos em monoespaçada do sistema, maiúsculas,
  `letter-spacing:.14em`, 11px. Hero `clamp(2.8rem, 8vw, 5.4rem)`.
- Layout: container `max-width: 1140px`; no desktop, **índice fixo à esquerda** (sticky, monoespaçado,
  `01 Introdução … 05 Contato`) e conteúdo à direita; no mobile o índice some e vira nav no topo.
- Régua horizontal de 1px separando seções; numeração `01 —`, `02 —` no início de cada seção.
- Micro-detalhe de personalidade: um bloco "agora" (o que está em produção hoje) e um `kbd`-style nos
  links de projeto.
- Proibido: emoji, ícone colorido, carrossel, contador animado, depoimento falso, "disponível para freelas"
  piscando, badge "Powered by AI", foto de banco de imagens.

## Páginas

1. `index.html` — página principal, com as seções abaixo.
2. `projetos.html` — aprofundamento de 3 casos (plataforma multicanal, Pallagi Med, Pront.ai) em formato
   de estudo de caso curto: contexto → problema → o que fiz → resultado/decisão técnica. Fatos só do BRIEF.
3. `404.html` — minimalista, com link para a home.

## Seções de index.html (nesta ordem)

1. **Topo**: nome à esquerda, link do GitHub e botão "Currículo" (baixa `assets/curriculo-arthur-sumny.pdf`).
2. **Hero**: nome grande, posicionamento, frase de apoio, dois links (Ver projetos / Baixar currículo) e
   faixa de 4 números verdadeiros e conservadores.
3. **Sobre**: 2 parágrafos em 1ª pessoa + 3 linhas "como eu trabalho".
4. **Trabalho selecionado**: 6 blocos numerados (nome, período, 2–4 linhas, tags, um destaque técnico),
   com link "estudo de caso →" nos 3 primeiros apontando para `projetos.html#âncora`.
5. **Outros produtos**: lista compacta de 5 itens, uma linha cada.
6. **Stack**: 5 blocos (linguagens/frameworks, dados, IA, infraestrutura, integrações e segurança).
7. **Agora**: 3–4 linhas sobre o que está rodando em produção neste momento.
8. **Contato**: e-mail, telefone, LinkedIn, GitHub, cidade. Links `mailto:`/`tel:`/`https` reais.
9. **Footer** mínimo, com ano e "feito à mão em HTML".

## Conteúdo (use exatamente estes fatos — não invente clientes, números, prêmios nem datas)

Nome: Arthur Sumny Saggin · Local: Joaçaba, SC
E-mail: arthur_sumny2000@hotmail.com · Telefone: (49) 99804-9138
LinkedIn: https://linkedin.com/in/arthur-sumny-saggin · GitHub: https://github.com/arthursumny

Posicionamento: "Desenvolvedor full stack. Construo produtos SaaS com IA que rodam em produção."
Apoio: "Do problema do negócio ao servidor: arquitetura, backend, integrações, deploy e operação. Hoje
mantenho uma plataforma de atendimento multicanal e construo agentes de IA em cima dela."

Sobre (1ª pessoa, tom sóbrio, sem adjetivo de propaganda):
- Trabalho com TypeScript, Node.js, Python, PostgreSQL e Docker. Nos últimos anos, com integração de LLMs,
  agentes de IA e automação de processos.
- Sou cofundador da Pront.ai, SaaS de documentação clínica assistida por IA, e responsável pela
  infraestrutura de uma plataforma de atendimento multicanal usada por empresas com marca própria.
- Gosto do problema que ninguém quer pegar: legado, integração quebrada, deploy que ninguém sabe refazer.

Números (conservadores): 4+ anos construindo software · 10+ produtos entregues · 6 agentes de IA em
produção · 1 SaaS cofundado.

Projetos:
1. **Plataforma multicanal whitelabel + agentes de IA** — DevzGroup, desde 2025.
   "Plataforma de atendimento multicanal que empresas usam com a própria marca, em vários canais. Sou
   responsável pela infraestrutura, atualizações, integração com WhatsApp (Evolution API), monitoramento e
   suporte aos clientes. Sobre ela construí uma camada de agentes de IA com servidores MCP e RAG."
   Tags: multi-tenant, Evolution API, MCP, RAG, Docker/Dokploy.
2. **Pallagi Med** — DevzGroup, 2025–2026.
   "Sistema de gestão para clínicas: agenda, prontuário, financeiro e repasses. Responsável pela cobrança
   por boleto com a Safe2Pay: confirmação automática de pagamento, proteção contra duplicidade e registro
   de auditoria obrigatório em toda operação financeira."
   Tags: webhook idempotente, auditoria fail-closed.
3. **Pront.ai** — cofundador, desde 2025.
   "SaaS de documentação clínica assistida por IA, do zero ao cliente pagante. O médico grava a consulta e
   recebe o registro estruturado: transcrição com Whisper, estruturação automática do texto e busca
   semântica no histórico do paciente."
   Tags: Whisper, pgvector, filas assíncronas.
4. **Agentes de IA para atendimento e suporte** — DevzGroup, 2025–2026.
   "Agentes que atendem no WhatsApp: respondem com base no conhecimento de cada cliente, consultam sistemas
   internos e transferem para atendimento humano quando necessário." Tags: tool calling, MCP.
5. **Agente de previsão de mercados** — projeto pessoal, 2026.
   "Agente que pesquisa mercados de predição e decide com um comitê de LLMs, operando em simulação com
   gestão de risco e teto de custo de IA. O desempenho é medido por Brier Score contra o baseline do
   mercado antes de qualquer capital real." Tags: multi-LLM, Brier Score, controle de custo.
6. **Automação de cortes para YouTube** — projeto pessoal, 2026.
   "Pipeline que baixa lives, transcreve, escolhe os trechos com LLM, renderiza em 9:16 com enquadramento
   por detecção de faces e publica no canal dentro de limites e horários definidos."
   Tags: FFmpeg, YouTube API, agendamento.

Outros produtos (uma linha cada): Minha Prece · Elo Padel · Central de Vendas · FinanSaaS ·
Automações Devz.

Stack:
- Linguagens e frameworks: TypeScript, JavaScript, Python, Node.js, NestJS, Fastify, React, Next.js, FastAPI
- Dados: PostgreSQL, Prisma, Drizzle, Redis, pgvector
- IA: LLMs, agentes, tool calling, MCP, RAG, embeddings, Whisper, avaliação de modelos
- Infraestrutura: Docker, Linux, VPS, Dokploy, Traefik, Nginx, Cloudflare, S3/MinIO, CI/CD
- Integrações e segurança: Keycloak, OAuth2/OIDC, WhatsApp Business Platform, Evolution API, Safe2Pay,
  YouTube Data API, SharePoint

Agora (fatos): plataforma multicanal e agentes de IA em produção no ar; ERP próprio rodando em homologação;
app de transcrição de reuniões com Whisper e Telegram; infraestrutura em VPS com deploy automático por push.

## Requisitos técnicos

- `styles.css` único compartilhado + `script.js` único. Nada de CSS inline gigante.
- Semântica correta, `h1` único por página, foco visível, contraste AA, `lang="pt-BR"`.
- Responsivo de 320px a 1920px, sem scroll horizontal; `prefers-reduced-motion` respeitado.
- Meta tags completas (title, description, og:title, og:description, og:type, og:url) + favicon SVG inline
  com monograma "AS".
- Navegação por âncora com scroll suave e offset do topo; menu mobile acessível (botão com aria-expanded).
- Sem caminho absoluto: os links entre páginas são relativos (`projetos.html`, `index.html`).
- Referencie `assets/curriculo-arthur-sumny.pdf` (o arquivo já está lá; não gere outro).
- Comentários só onde não é óbvio.

## Entregáveis

`index.html`, `projetos.html`, `404.html`, `styles.css`, `script.js`, `README.md` curto (como abrir e como
publicar em nginx/Dokploy). Ao terminar, liste os arquivos criados e as decisões de design.
