# 02-pokemon-static

## Project Overview
This project is a static website that showcases Pokémon information using data from the [PokeAPI](https://pokeapi.co/). It is built with **Astro v6**, demonstrating modern web features like **Static Site Generation (SSG)**, **Islands Architecture**, and **View Transitions**.

- **Purpose:** Educational/Demo project for building fast, content-driven websites.
- **Main Features:**
    - Pokémon listing with pagination (`/pokemons/[page]`).
    - Dynamic detail pages by name (`/pokemons/[name]`) and ID (`/pokemon/[id]`).
    - Favorites system implemented with interactive components.
    - Demo of Astro Islands for client-side interactivity.
    - Smooth navigation using Astro's `ClientRouter`.

## Technologies
- **Framework:** [Astro v6](https://astro.build/)
- **Interactivity:** [SolidJS](https://www.solidjs.com/) (Islands)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [astro-icon](https://github.com/natemoo-re/astro-icon)
- **Language:** TypeScript
- **Package Manager:** pnpm

## Project Structure
- `src/components/`: Modular UI components.
    - `pokemons/`: Pokémon-specific components (Astro and SolidJS).
    - `shared/`: Generic components like `NavBar.astro` and `Title.astro`.
- `src/consts/`: Global configuration and metadata (`site-info.ts`).
- `src/interfaces/`: TypeScript definitions for API responses and internal models.
- `src/layouts/`: Base layouts, primarily `MainLayout.astro`.
- `src/pages/`: File-based routing system.
    - `index.astro`: Home listing.
    - `favorites/`: Favorites management.
    - `islands/`: Demonstrations of interactive components.
    - `pokemon/[id].astro` & `pokemons/[name].astro`: Detail views.
- `src/styles/`: Global styles (`global.css`).

## Building and Running
All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `pnpm install` | Installs dependencies. |
| `pnpm dev` | Starts the local development server at `localhost:4321`. |
| `pnpm build` | Generates a production build in the `dist/` directory. |
| `pnpm preview` | Previews the production build locally. |
| `pnpm astro ...` | Executes Astro CLI commands (e.g., `astro add`, `astro check`). |

## Development Conventions
- **Type Safety:** TypeScript is used extensively. Define interfaces in `src/interfaces/` for all API data and props.
- **Path Aliases:** Use the following aliases for cleaner imports (defined in `tsconfig.json`):
    - `@components/*` -> `src/components/*`
    - `@layouts/*` -> `src/layouts/*`
    - `@interfaces/*` -> `src/interfaces/*`
- **Islands Architecture:** Use `.astro` components for static content and `.tsx` (SolidJS) for client-side interactivity. Ensure interactive components are hydrated using Astro directives (e.g., `client:load`, `client:visible`).
- **Styling:** Follow Utility-First CSS patterns using Tailwind CSS v4.
- **SEO & Metadata:** Always use `MainLayout` and provide relevant props (`title`, `description`, `image`) to ensure proper social media cards and document titles.
