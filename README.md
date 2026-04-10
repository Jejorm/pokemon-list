# Pokemon Static | Astro v6

Una aplicación web estática (SSG) de Pokémon construida con **Astro v6**, diseñada para demostrar el poder de la **Arquitectura de Islas**, **View Transitions** y la velocidad de los sitios generados estáticamente.

![Pokemon Static Preview](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png)

## 🚀 Características principales

- **Static Site Generation (SSG):** Todo el sitio se genera de forma estática para un rendimiento máximo.
- **Arquitectura de Islas:** Uso estratégico de **SolidJS** para componentes interactivos (Favoritos) solo donde es necesario.
- **View Transitions:** Navegación fluida y moderna entre páginas utilizando la API nativa de Astro.
- **Paginación dinámica:** Listado completo de Pokémon con sistema de paginación funcional (`/pokemons/[page]`).
- **Rutas dinámicas:** Páginas de detalle generadas por nombre (`/pokemons/[name]`) y por ID (`/pokemon/[id]`).
- **Sistema de Favoritos:** Persistencia en el cliente para marcar y desmarcar Pokémon favoritos.
- **Optimización de imágenes:** Uso de los componentes de imagen nativos de Astro.

## 🛠️ Tecnologías utilizadas

- **Framework:** [Astro v6](https://astro.build/)
- **Librería de UI (Islas):** [SolidJS](https://www.solidjs.com/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía:** [astro-icon](https://github.com/natemoo-re/astro-icon)
- **Lenguaje:** TypeScript
- **API:** [PokeAPI](https://pokeapi.co/)

## 📦 Instalación y Desarrollo

Para ejecutar este proyecto localmente, seguí estos pasos:

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/02-pokemon-static.git
   ```

2. Instalá las dependencias (se recomienda pnpm):
   ```bash
   pnpm install
   ```

3. Iniciá el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

4. Abrí [http://localhost:4321](http://localhost:4321) en tu navegador.

## 🏗️ Comandos disponibles

| Comando | Acción |
| :--- | :--- |
| `pnpm dev` | Inicia el entorno de desarrollo local. |
| `pnpm build` | Compila el proyecto para producción (genera la carpeta `dist/`). |
| `pnpm preview` | Previsualiza localmente la compilación de producción. |
| `pnpm astro ...` | Ejecuta comandos directos de la CLI de Astro. |

## 📂 Estructura del Proyecto

```text
/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes (Astro y SolidJS)
│   ├── consts/          # Configuraciones globales
│   ├── interfaces/      # Tipado de TypeScript
│   ├── layouts/         # Plantillas base (MainLayout)
│   ├── pages/           # Sistema de rutas basado en archivos
│   └── styles/          # Estilos globales (Tailwind)
└── astro.config.mjs     # Configuración de Astro e integraciones
```

---
Proyecto desarrollado como parte del curso de Astro en [DevTalles](https://devtalles.com/).
