# Projeto: PetShop Seu Pet Feliz

> Landing page institucional de um petshop, construída em Next.js (App Router). O projeto está na fase de scaffold/MVP: a página inicial já está completa e funcional, com formulário de contato validado, mas sem persistência real dos dados (sem banco de dados, e-mail ou CRM integrados ainda).

## 1. Visão geral

- **Nome do negócio:** PetShop Seu Pet Feliz
- **Proposta:** banho, tosa, consultas veterinárias e pet shop num só endereço
- **Slogan/tom:** "Cuidado de verdade, todos os dias" — comunicação calorosa, próxima, focada em carinho e confiança
- **Localização fictícia:** Rua das Flores, 123 — Jardim Primavera, São Paulo/SP
- **Horário de atendimento:** Terça a Sexta 9h–19h · Sábado e Domingo 9h–15h
- **Contato:** (11) 99999-9999 · contato@petshopfelizaula.com.br · WhatsApp (`https://wa.me/5511999999999`)
- **Branch atual:** `feat/petshop-landing-page`

## 2. Stack técnica

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TypeScript |
| Estilização | Tailwind CSS 4 (tokens via `@theme`, paleta em OKLCH) |
| Componentes | shadcn/ui sobre Base UI (`@base-ui/react`) |
| Ícones | lucide-react |
| Formulários | React Hook Form + `@hookform/resolvers` |
| Validação | Zod |
| Utilitários | `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css` |

### Scripts (`package.json`)
```bash
npm run dev         # servidor local (porta 3000)
npm run build        # build de produção
npm run start         # servidor de produção
npm run lint          # eslint
npm run type-check    # tsc --noEmit
```

## 3. Estrutura do projeto

```
app/
├── layout.tsx              # RootLayout — fontes Fredoka (display) + Inter (body), metadata SEO
├── page.tsx                 # Home — composição das seções da landing page
├── globals.css               # design tokens (paleta OKLCH), animações (fade-up, float-slow)
├── _components/               # componentes específicos da home
│   ├── site-header.tsx        # header sticky, logo, nav, CTA "Agendar horário", MobileNav
│   ├── mobile-nav.tsx          # navegação mobile (menu)
│   ├── nav-links.ts             # array de links de navegação
│   ├── hero-section.tsx          # hero com headline, CTAs e stat "500+ tutores"
│   ├── paw-trail.tsx              # decoração animada (trilha de patinhas) no hero
│   ├── trust-bar.tsx               # 3 estatísticas de credibilidade (12 anos, 500+, 4.9)
│   ├── services-section.tsx         # grid de 4 serviços (Banho&Tosa, Veterinário, Pet shop, Hospedagem)
│   ├── why-us-section.tsx            # diferenciais (lista de 4 razões)
│   ├── testimonial-section.tsx        # 3 depoimentos de clientes
│   ├── testimonial-card.tsx            # card individual de depoimento
│   ├── cta-section.tsx                  # CTA de fundo primary com link para WhatsApp
│   ├── contact-section.tsx               # informações de contato + formulário
│   └── contact-form.tsx                   # client component do formulário (RHF + Zod)
└── _actions/
    ├── contact-schema.ts                   # schema Zod do formulário de contato
    └── send-contact-message.ts              # Server Action (sem integração real ainda)

components/
└── ui/                       # primitivos shadcn: button.tsx, input.tsx, label.tsx, textarea.tsx

lib/
└── utils.ts                   # helper `cn` (clsx + tailwind-merge)

types/                          # tipos e schemas Zod globais (ainda vazio)
actions/                         # server actions globais (ainda vazio, convenção reservada)
```

## 4. Composição da landing page (`app/page.tsx`)

Ordem das seções renderizadas em `Home`:

1. **SiteHeader** — header fixo com logo, navegação e CTA de agendamento
2. **HeroSection** — headline principal + CTAs ("Agendar horário", "Ver serviços") + selo de avaliação (4.9)
3. **TrustBar** — estatísticas de confiança (12 anos, 500+ tutores/mês, 4.9 de nota)
4. **ServicesSection** — 4 cards de serviço (`#servicos`)
5. **WhyUsSection** — diferenciais da empresa (`#diferenciais`)
6. **TestimonialSection** — depoimentos de 3 clientes
7. **CtaSection** — chamada final para WhatsApp
8. **ContactSection** — dados de contato + formulário (`#contato`)
9. **SiteFooter** — logo, endereço, horário, telefone, copyright

## 5. Formulário de contato

- **Schema (`contact-schema.ts`)**: valida `name` (2–100 chars), `email` (formato válido), `phone` (8–20 chars), `message` (10–1000 chars) via Zod.
- **Server Action (`send-contact-message.ts`)**: recebe o input, revalida com Zod no servidor e retorna `{ success: true }` ou `{ success: false, errors }`. **Ainda não há envio real de e-mail/CRM** — é um estágio intermediário até a integração ser definida.
- Segue a convenção do projeto: Client Component (`contact-form.tsx`) nunca acessa dados diretamente, apenas chama a Server Action.

## 6. Identidade visual

- **Paleta** ("paleta de parque"): verde-pinho (`--primary`), marigold (`--brand-marigold`) e coral (`--brand-coral`), definida em OKLCH com suporte a dark mode (`.dark`)
- **Tipografia:** Fredoka (títulos/display, `--font-display`) + Inter (corpo, `--font-body`)
- **Border radius:** escala customizada baseada em `--radius: 1.1rem` (sm → 4xl)
- **Animações:** `fade-up` (entrada de elementos) e `float-slow`, respeitando `prefers-reduced-motion`
- **SEO:** título "PetShop Seu Pet Feliz | Banho, tosa e cuidado pet em cada visita", `lang="pt-BR"`

## 7. Convenções de arquitetura (definidas em `CLAUDE.md` / `rules-global.md`)

- Server Components por padrão — `'use client'` somente quando necessário (hooks, eventos, browser APIs)
- Mutações via Server Actions em `_actions/` (ou `actions/` globais) — nunca acesso a dados direto em Client Components
- Estrutura por página: `_components/`, `_actions/`, `_data-access/` (prefixo `_` evita geração de rota)
- Nunca usar `any` explícito — preferir `unknown` + type guard
- Tailwind como única forma de estilização (sem CSS inline/styled-components)
- Nomes de arquivo em kebab-case; componentes em PascalCase
- Commits em inglês, imperativo, seguindo Conventional Commits (sempre via skill `commit`, nunca `git commit` direto)

## 8. Estado atual e próximos passos

**Concluído:**
- Scaffold completo da landing page (todas as seções visuais)
- Design system aplicado (cores, tipografia, animações)
- Formulário de contato com validação client + server (Zod)
- Componentes shadcn/ui base instalados (button, input, label, textarea)

**Pendente / não implementado ainda:**
- Integração real do formulário de contato (envio de e-mail, CRM ou banco de dados)
- Pasta `types/` e `actions/` globais ainda vazias — reservadas pela convenção do projeto
- Nenhuma variável de ambiente é exigida neste estágio (`.env` não versionado)
- Sem testes automatizados configurados até o momento
