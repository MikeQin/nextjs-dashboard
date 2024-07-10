## Next.js Dashboard with App Router

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

```sh
npm install -g pnpm

npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm

# Run pnpm i to install the project's packages.
pnpm i
# Followed by pnpm dev to start the development server.
pnpm dev

# Install the Vercel Postgres SDK
pnpm i @vercel/postgres

# Fix: Cannot find module 'next/font/google' or its corresponding type declarations
npx @next/codemod built-in-next-font .
```

### Fix Cannot find module 'next/xxxxx' errors

Type: `ctrl + shift + p` in VS Code
choose: `> TypeScript: Restart TS server`

----
For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.
