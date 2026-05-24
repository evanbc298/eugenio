# Eugenio Macedo — MazyOS

Operação de conteúdo e presença digital do Eugenio Macedo. Empresário, vendedor e permutador de veículos. Perfil em construção no Instagram — foco em crescimento orgânico com identidade autêntica.

## O que é esse workspace

Pasta central da operação digital do Eugenio. Aqui ficam o contexto do negócio, a linha editorial, os conteúdos produzidos e as regras de como o sistema trabalha.

**Estrutura de pastas:**
- `_memoria/` — quem é o Eugenio, como ele fala, foco atual
- `identidade/` — direção visual aplicada em tudo que o sistema gera
- `marketing/` — conteúdo, linha editorial, posts produzidos
- `saidas/` — documentos pontuais
- `dados/` — arquivos a analisar
- `templates/` — moldes e ferramentas do sistema

## Sobre o negócio

Eugenio Macedo é vendedor focado em repasse e permuta de veículos — incluindo trocas por imóveis e outros ativos de alto valor. Atende empresários que trabalham com carros ou querem fazer negócios no nicho de permuta. Operação individual: Eugenio no comercial e relacionamento, assistente de operação/marketing cuidando do digital.

## Setores e responsáveis

- **Comercial:** Eugenio (relacionamento, fechamento, operações de permuta)
- **Marketing / Digital:** Assistente (conteúdo Instagram, identidade, organização do perfil)

## O que mais fazemos aqui

- Posts semanais para Instagram (1 por semana)
- Conteúdo que mescla espiritualidade, pessoas e negócios/veículos
- Exposição dos carros disponíveis para venda/permuta
- Construção de identidade e presença digital do zero

## Tom de voz

Sóbrio, direto e humano. Sem emojis, sem gírias, sem linguagem de coach ou guru. Eugenio é um empresário de 53 anos com trajetória real — o texto fala de igual pra igual com quem entende de negócio. Quando toca em espiritualidade, é com profundidade, não leveza superficial.

Evitar: emojis, gírias, expressões de guru ("alavancar", "mindset", "propósito", "vamos juntos"), superlativo vazio, posts motivacionais genéricos sem ancoragem na realidade do Eugenio.

## Regras do sistema

- Conteúdo produzido vai em `marketing/`
- Identidade visual e direção estética em `identidade/design-guide.md`
- Contexto do negócio em `_memoria/empresa.md`
- Tom e estilo em `_memoria/preferencias.md`
- Prioridades e foco em `_memoria/estrategia.md`

## Ferramentas conectadas

- [ ] Instagram (Meta Graph API)
- [ ] Google Drive
- [ ] Gmail

*(Marcar conforme for instalando os MCPs)*

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o Eugenio, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Não é necessário listar o que foi lido nem confirmar a leitura. Apenas usar o contexto naturalmente.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar `identidade/design-guide.md` como referência de estilo.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível, perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

---

## Aprender com correções

Quando o usuário corrigir algo ou dar instrução permanente, perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, salvar no arquivo de memória correspondente.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante, perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`
2. Perguntar se é específica desse projeto ou útil em qualquer contexto
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar o conteúdo ao contexto do Eugenio
