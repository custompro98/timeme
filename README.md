# timeme

A tool to help keep time, tagged by tag and/or project.

## Components

### Bun

Get started with [Bun](https://bun.sh/) as the JavaScript runtime.

### Elysia

Get started with [Elysia](https://elysiajs.com/) as a Bun-friendly web framework that supports JSX.

### Turso

This template currently includes local SQLite vs [Turso](https://turso.tech) as the database of choice.

### HTMX

Get started with [htmx](https://htmx.org/) as the interactivity layer.

## Patterns

### Elysia

- Layout components exist in `src/layouts`
- Page components exist in `src/pages/`
- Each page should export both the component and its layout to be rendered via the router in `src/index.ts`
- Mutations should return an htmx-rendered element

### Turso

- `src/database` abstracts database connection functionality
- Intended to serve as an abstraction over local SQLite, Turso, etc.

### HTMX

- Layout components render `src/layouts/head.tsx`, which provides htmx 
- Fragment components exist in `src/components/`

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.
