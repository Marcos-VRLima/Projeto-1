# PetShop Seu Pet Feliz

Projeto web construído com **Next.js (App Router)**, em fase inicial de scaffold — a base do projeto está pronta e segue um conjunto de convenções de arquitetura definidas para guiar o desenvolvimento das próximas features.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev) + TypeScript
- **Estilização:** [Tailwind CSS 4](https://tailwindcss.com)
- **Componentes:** [shadcn/ui](https://ui.shadcn.com) sobre [Base UI](https://base-ui.com), ícones via [lucide-react](https://lucide.dev)
- **Utilitários:** `class-variance-authority`, `clsx`, `tailwind-merge`
- **Validação de forms (planejado):** React Hook Form + Zod

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Outros scripts disponíveis:

```bash
npm run build        # build de produção
npm run start         # servidor de produção
npm run lint          # eslint
npm run type-check    # checagem de tipos (tsc --noEmit)
```

## Estrutura do projeto

```
app/                # rotas (App Router), Server Components por padrão
components/
  ui/                # primitivos reutilizáveis (shadcn)
actions/            # Server Actions ("use server")
lib/                # helpers e clients (ex: lib/utils.ts)
types/              # tipos globais e schemas Zod compartilhados
```

## Convenções de arquitetura

- **Server Components por padrão** — `'use client'` só quando o componente precisa de hooks, eventos ou APIs de browser.
- **Mutações via Server Actions** em `actions/` — Client Components nunca acessam o banco diretamente.
- Cada página pode ter suas próprias pastas privadas `_components/`, `_actions/` e `_data-access/` para lógica específica de rota.
- **Nunca usar `any` explícito** — preferir `unknown` + type guard.
- Nomes de arquivo em kebab-case; componentes em PascalCase.
- Tailwind é a única forma de estilização (sem CSS inline ou styled-components).

Mais detalhes de arquitetura, gotchas e workflow estão documentados em [`CLAUDE.md`](./CLAUDE.md).

## Variáveis de ambiente

Nenhuma variável de ambiente é exigida pela aplicação neste estágio. Quando forem adicionadas, seguir a convenção: segredos (chaves de API, banco de dados) acessíveis apenas em Server Actions/Route Handlers, e apenas valores seguros para o client com o prefixo `NEXT_PUBLIC_`. O arquivo `.env` não é versionado (`.gitignore`).
