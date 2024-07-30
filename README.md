# Next.js App Router Course - Final

This is the final template for the Next.js App Router Course. It contains the final code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

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

# Install debounce
pnpm i use-debounce

# Install NextAuth
pnpm i next-auth@beta

# Update
pnpm add -g pnpm

# Generate a secret key for your application. This key is used to encrypt cookies, 
# ensuring the security of user sessions. You can do this by running the following 
# command in your terminal:
openssl rand -base64 32
# Output
your-xxx-secret-key

# In .env
AUTH_SECRET=<your-xxx-secret-key>
```

File: `package.json`
```json
"scripts": {
    "build": "next build",
    "dev": "next dev",
    "start": "next start",
    "lint": "next lint"
},
```

```sh
# Run lint
pnpm lint
```

Now, try it out. You should be able to log in and out of your application 
using the following credentials:

- Email: user@nextmail.com
- Password: 123456

### Fix Cannot find module 'next/xxxxx' errors

Type: `ctrl + shift + p` in VS Code
choose: `> TypeScript: Restart TS server`

----
For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.
