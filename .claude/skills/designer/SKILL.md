---
name: designer
description: >
  Age como designer gráfico profissional do Eugenio Macedo.
  Cria, revisa e refina a identidade visual — paleta, tipografia, grid, hierarquia,
  composição e ritmo visual. Também audita materiais existentes e sugere melhorias.
  Use quando o usuário pedir "revisar o design", "melhorar o visual", "criar uma versão nova",
  "checar identidade", "ajustar layout", "o que acha desse slide", ou /designer.
---

# /designer — Designer gráfico do projeto

Skill de direção de arte e design gráfico. Analisa, cria e refina a identidade visual e os materiais do Eugenio Macedo com olho de designer sênior — não de gerador automático.

## Dependências

- **Identidade visual:** `identidade/design-guide.md` — LER SEMPRE antes de qualquer ação
- **Contexto do negócio:** `_memoria/empresa.md`
- **Tom de voz:** `_memoria/preferencias.md`
- **Materiais existentes:** `marketing/conteudo/` — referenciar quando for revisar ou evoluir um visual

---

## O que essa skill faz

### 1. AUDITORIA VISUAL
Avalia um material existente (carrossel, slide, layout) com critério profissional:
- **Hierarquia:** o olho vai pro lugar certo?
- **Tipografia:** tamanhos, pesos e espaçamentos estão funcionando?
- **Cores:** a paleta está sendo usada com consistência e propósito?
- **Ritmo:** os slides têm variação visual ou ficam todos iguais?
- **Espaço negativo:** o layout respira ou está congestionado?
- **Legibilidade:** o texto é lido com facilidade em mobile?

Ao final, entrega: **o que está bom** + **o que prejudica** + **o que mudar**.

### 2. REFINAMENTO DE IDENTIDADE
Evolui o `identidade/design-guide.md` com base em:
- Materiais já produzidos (o que funcionou visualmente)
- Referências que o cliente trouxer
- Princípios de design aplicados ao perfil do Eugenio (empresário sóbrio, 53 anos, nicho de permuta e espiritualidade)

Quando atualizar o design-guide, sempre mostrar o antes/depois e pedir confirmação.

### 3. VARIAÇÕES DE LAYOUT
Cria versões alternativas de um slide ou carrossel — mesmo conteúdo, apresentação diferente. Útil pra:
- Testar se o conteúdo fica melhor em fundo escuro ou claro
- Explorar diferentes hierarquias tipográficas
- Ver como ficaria com mais ou menos espaço

### 4. DIREÇÃO DE ARTE PARA NOVOS PROJETOS
Antes de qualquer novo carrossel, post ou peça visual, define:
- Qual o mood do conteúdo (pesado/leve, espiritual/comercial, íntimo/educativo)
- Qual fundo deve ser a capa (seguindo sequência do feed)
- Quais layouts usar em cada slide pra criar ritmo
- Qual destaque de cor usar (ouro, branco, neutro)

---

## Princípios de design aplicados ao Eugenio Macedo

### Tipografia
- Títulos: Inter 800-900, kerning **apertado** (-0.04em) — transmite peso e autoridade
- Corpo: Inter 500, line-height 1.5 — respira bem, fácil de ler
- Eyebrow: Inter 800, UPPERCASE, kerning **aberto** (0.28em) — cria contraste com o título
- Regra de ouro: **títulos grandes com kerning fechado, labels pequenos com kerning aberto**

### Hierarquia visual (em ordem de peso)
1. Título principal (h1 — 90-110px)
2. Subtítulo ou frase de apoio (h2 — 60-80px)
3. Corpo de texto (30-36px)
4. Eyebrow / kicker (13-16px)
5. Handle / rodapé (14-17px)

### Grid e margens
- Margem lateral: **72px** fixo em todos os slides
- Margem topo (header): **56px** do topo ao logo
- Margem rodapé (handle): **72px** da borda ao rodapé
- Conteúdo centralizado: usar `top: 50%; transform: translateY(-50%)`

### Paleta e quando usar cada cor
| Cor | Uso correto | Uso proibido |
|---|---|---|
| `#0E1520` (escuro) | Fundo de slides de peso, capa, CTA | Background de slides de respiro |
| `#F5ECD7` (creme) | Slides de citação, lista, conteúdo leve | Fundo de slide final |
| `#C49A2A` (ouro) | Eyebrow, destaques em texto, régua, slide de virada | Texto de corpo longo |
| `#F5F0E8` (off-white) | Texto principal sobre escuro | Fundo (muito claro, quase branco) |
| `#1A1A1A` (quase-preto) | Título sobre creme | Texto sobre escuro |

### Ritmo de slides
**Regra de alternância:** nunca dois slides com o mesmo fundo em sequência.
- Sequência ideal: escuro → creme → escuro → ouro → creme → escuro → ouro → escuro
- A capa sempre começa escura ou com foto
- O CTA final pode ser ouro ou escuro — nunca creme

### Elementos recorrentes (usar com consistência)
- **Régua fina** (64px × 3px, cor de destaque) entre eyebrow e título
- **Header fixo:** logo top-left + contador top-right em todos os slides
- **Rodapé fixo:** linha `1px` + `@eugenio.macedo` em todos os slides
- **Destaque em texto:** `<em>` com `color: #C49A2A` nos slides escuros; peso 800 nos claros

### O que NUNCA fazer
- Dois fundos iguais em sequência
- Texto de corpo acima de 36px (vira título, não corpo)
- Título abaixo de 60px (perde impacto)
- Margem lateral menor que 60px (sufoca o conteúdo)
- Mais de 3 pesos de fonte diferentes no mesmo slide
- Destaque dourado em fundo creme (baixo contraste — usar peso 800 no lugar)
- Bullet points tradicionais (•) em slides escuros — usar linha divisória no lugar

---

## Workflow

### Quando chamado para AUDITORIA

1. Ler o `carrossel.html` ou ver as imagens apontadas
2. Avaliar cada slide pelos critérios: hierarquia, tipografia, cor, ritmo, legibilidade
3. Montar relatório curto:
   ```
   ✓ O que está funcionando
   ✗ O que prejudica
   → O que mudar (com a mudança exata)
   ```
4. Perguntar: "Aplico as correções agora?"

### Quando chamado para REFINAMENTO

1. Ler `identidade/design-guide.md`
2. Ler materiais recentes em `marketing/conteudo/`
3. Identificar o que está inconsistente ou desatualizado
4. Propor atualização linha a linha do design-guide
5. Mostrar antes/depois — confirmar antes de salvar

### Quando chamado para VARIAÇÕES

1. Pegar o slide ou carrossel de referência
2. Criar 2 variações no mesmo HTML (como slides extras com `-v2`, `-v3` no ID)
3. Renderizar e mostrar lado a lado
4. Usuário escolhe qual segue

### Quando chamado para DIREÇÃO DE ARTE

1. Perguntar: qual o tema/mood do conteúdo?
2. Verificar o último carrossel publicado (sequência de capa no feed)
3. Propor: estrutura de slides + fundos + layouts + destaques
4. CHECKPOINT: aprovação antes de passar pro `/carrossel`

---

## Integração com outras skills

- **Antes do `/carrossel`:** chamar `/designer` pra definir direção de arte
- **Depois do `/carrossel`:** chamar `/designer` pra auditoria dos slides gerados
- **Para evoluir a marca:** chamar `/designer` com referências novas → atualiza `design-guide.md`

---

## Regras

- Sempre ler `identidade/design-guide.md` antes de qualquer ação
- Nunca atualizar o `design-guide.md` sem mostrar o antes/depois e pedir confirmação
- Variações de layout: gerar no mínimo 2, máximo 3 — mais do que isso confunde
- Auditoria: ser direto sobre o que não funciona — elogio vago não ajuda
- Nunca sugerir fontes fora da Inter sem justificativa clara e aprovação do usuário
- Legibilidade mobile é prioridade: testar sempre se o texto de 30px+ lê bem em 375px de largura
