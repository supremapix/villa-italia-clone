# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/0a94fc75-533f-44ef-8943-f21cf001b2a2

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0a94fc75-533f-44ef-8943-f21cf001b2a2) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/0a94fc75-533f-44ef-8943-f21cf001b2a2) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Artigos recentes na home

A seção `Blog.tsx` usa exclusivamente `blogCatalog.ts` e seleciona seis matérias
com `latestPublishedArticles`. Não é necessário editar cards manualmente.
Cadastre a matéria no catálogo com `id`, título, imagem e `dateISO` de publicação
no formato YYYY-MM-DD. Datas ausentes, inválidas ou posteriores ao dia do build
em America/Sao_Paulo ficam fora da home; `status: "draft"` também fica fora.
Registros existentes sem status são considerados publicados. O status aqui filtra
somente a seleção da home: não use o catálogo público para guardar conteúdo privado.
A ordem é publicação decrescente, com desempate estável por `id` crescente.
`modifiedISO` não altera a posição de uma matéria antiga.

Execute `node scripts/test-latest-articles.mjs` e `npm run build` antes de publicar.
O build/prerender gera os cards em HTML e o cliente usa a mesma data de corte.
Cada nova matéria ou liberação de data futura exige novo build e deploy.
Não há CMS dinâmico, agendamento externo nem atualização automática sem deploy.
# Instagram, compartilhamento e identidade social

`src/pages/Instagram.tsx` fornece `/instagram`, incluída no prerender e no sitemap. O iframe público do Instagram pode exigir login, cookies ou não carregar; o link direto fica sempre disponível. Nenhuma promessa de stories, verificação oficial ou atendimento online é feita.

`SupremaCredit.tsx` é usado pelo único `Footer` montado em `App.tsx`, inclusive na página 404. `FloatingActions.tsx` substitui os controles antigos e usa o Dialog do Radix para foco, Escape e retorno ao acionador. Lê título, canonical e imagem OG da rota atual; nenhum compartilhamento é enviado automaticamente. A cópia só anuncia sucesso após `clipboard.writeText` resolver; em caso de falha oferece campo selecionável para cópia manual. Os contatos usam o telefone de reservas existente: +55 47 99273-8090.

Dependências já instaladas: React, React Router, lucide-react, @radix-ui/react-dialog e react-helmet-async. O projeto não possui biblioteca Motion; a entrada visual usa IntersectionObserver e CSS, respeitando prefers-reduced-motion. Não há SDK social, credenciais ou novas dependências de runtime.

Referências consultadas para os links (22/10/2026): [X Web Intents](https://docs.x.com/x-for-websites/web-intents/overview), [Threads Web Intents](https://developers.facebook.com/documentation/threads/threads-web-intents), [Pinterest Save Button](https://developers.pinterest.com/docs/web-features/buttons/), [WhatsApp Click to Chat](https://faq.whatsapp.com/5913398998672934), [LinkedIn Share Plugin](https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/plugins/share-plugin) e [Facebook Share Button](https://developers.facebook.com/docs/plugins/share-button/). As páginas Meta apresentaram restrições de acesso na consulta; os links de compartilhamento podem exigir login ou variar por navegador/app. A opção de copiar permanece independente dessas redes. Não foram realizados posts ou mensagens de teste.

`public/og-pousada.jpg` (1200×630) combina `logo-villa-ditalia-red.png` e `gallery-6.jpg`, materiais existentes da pousada, com telefone real. EnhancedSEO usa esse banner somente como fallback; artigos mantêm a imagem específica. OG e Twitter são absolutos e prerenderizados. O cache das redes, inclusive WhatsApp, pode demorar a atualizar.

Favicons produzidos localmente da logo original, sem enviar arquivos a geradores externos: ICO 16/32/48, PNG 16/32/48, Apple 180, Android 192/512, manifest e theme-color. O arquivo original é raster: não foi inventada uma vetorização SVG. São formatos compatíveis com o conjunto convencional do RealFaviconGenerator, sem alegação de certificação pelo serviço.

Validação adicional: `node scripts/test-sharing.mjs` após `npm run build`; verifica URLs codificadas, metadados, rodapé/controles únicos em todas as páginas, ICO e manifest. Novas alterações continuam exigindo build e deploy.
