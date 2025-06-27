# DTI

This repository contains a very small Next.js application located in the
`frontend` folder. The app shows a simple chart of funding trends for defense
tech companies.

## Local development

Use the helper script to start a development server:

```bash
./scripts/dev.sh
```

The script installs dependencies if needed and then runs `npm run dev` inside the
`frontend` directory. The site will be available at `http://localhost:3000`.

## Local tests

A small test script is provided that lints the project and builds it to ensure
the code compiles correctly:

```bash
./scripts/test.sh
```

The script installs dependencies (if missing), runs `npm run lint`, and then
`npm run build`.

