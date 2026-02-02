# CIVet Rosario - Landing Page

Sitio estático para CIVet Rosario (veterinaria). Tailwind CSS + vanilla JS, sin framework.

## Build

```bash
node node_modules/tailwindcss/lib/cli.js -i ./src/input.css -o ./src/output.css
```

Ejecutar después de cambiar HTML o agregar clases Tailwind nuevas.

## Reglas

- Idioma: español argentino para todo texto visible al usuario
- Cuando cambie un dato de negocio (métricas, teléfonos, horarios), actualizar en **todas** las páginas HTML y en los docs `.claude/*.md`
- Cuando cambie contenido o estructura de una página, actualizar el `.claude/` markdown correspondiente para mantenerlo sincronizado

## Contexto de marketing

@.claude/product-marketing-context.md
@.claude/landing-microchip-copy.md
