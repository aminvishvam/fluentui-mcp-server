

# 🚀 Servidor MCP de Fluent UI

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MCP](https://img.shields.io/badge/MCP-0.4.0-purple.svg)](https://modelcontextprotocol.io/)
[![Fluent UI](https://img.shields.io/badge/Fluent%20UI-v9-0078d4.svg)](https://react.fluentui.dev/)

Un **servidor Model Context Protocol (MCP)** completo que proporciona asistencia inteligente para el desarrollo de componentes React de Fluent UI. Este servidor actúa como tu compañero potenciado por IA para crear, validar y mantener aplicaciones de Fluent UI siguiendo los patrones del sistema de diseño v9.

> **¿Qué es MCP?** El Protocolo de Contexto de Modelos (Model Context Protocol) permite a los asistentes de IA acceder de forma segura a fuentes de datos y herramientas externas. Este servidor extiende las capacidades de la IA con un conocimiento profundo de Fluent UI.

## ✨ Características Principales

### 🧠 **Conocimiento Inteligente de Componentes**

- 📚 Base de datos completa de **más de 50 componentes de Fluent UI v9**
- 🔍 Búsqueda y descubrimiento inteligente de componentes
- 📖 Documentación completa de propiedades (props), slots y uso
- 💡 Ejemplos del mundo real y mejores prácticas
- 🎯 Recomendaciones con conciencia del contexto

### 🎨 **Dominio del Sistema de Diseño**

- 🌈 **Más de 45 tokens de diseño** en 6 categorías (colores, tipografía, espaciado, sombras, bordes, movimiento)
- ✅ Validación de tokens y guía de uso
- 🎭 Sistema de color semántico con cumplimiento de accesibilidad
- 📏 Escalas de espaciado y tipografía consistentes
- 🎬 Directrices de movimiento y animación

### 🛠️ **Generación Avanzada de Código**

- ⚡ Genera implementaciones completas de componentes v9
- 🪝 Crea hooks personalizados siguiendo patrones de Fluent UI
- 💅 Genera estilos usando `makeStyles` y tokens de diseño
- 📝 Interfaces de TypeScript con seguridad de tipos completa
- 🏗️ Andamiaje basado en plantillas para patrones comunes

### ✅ **Validación y Análisis Inteligente**

- 🔍 Validación en tiempo real de componentes contra especificaciones de diseño
- ♿ Verificación de cumplimiento de accesibilidad (WCAG 2.1)
- 📊 Análisis de patrones con puntuación (0-100)
- 🚨 Detección de antipatrones y advertencias
- ✅ Sugerencias de mejora accionables

## 🚀 Inicio Rápido

```bash
npx fluentui-mcp-server
```

### Prerequisitos

- Node.js 18+
- npm o yarn
- Cliente compatible con MCP

### Instalación y Configuración

```bash
# Clona o descarga el servidor
cd fluentui-mcp-server

# Instala las dependencias
npm install

# Compila el servidor
npm run build

# Prueba el servidor
npm run test
```

### Ejecución del Servidor

```bash
# Inicia el servidor MCP
npm start

# O ejecuta en modo desarrollo con recarga automática
npm run dev
```

El ejecutable de CLI publicado apunta directamente a `dist/server.js`.

## 🔧 Herramientas Disponibles

El servidor proporciona **12 herramientas potentes** organizadas en 4 categorías:

### 📚 Herramientas de Conocimiento de Componentes

#### `get_component_info`

Obtén información completa sobre cualquier componente de Fluent UI.

```json
{
  "name": "get_component_info",
  "arguments": {
    "componentName": "Button"
  }
}
```

**Devuelve:** Documentación completa del componente que incluye descripción, propiedades, slots, ejemplos y directrices de accesibilidad.

#### `search_components`

Encuentra componentes basados en funcionalidad, categoría o palabras clave.

```json
{
  "name": "search_components",
  "arguments": {
    "query": "form input",
    "category": "inputs",
    "limit": 5
  }
}
```

#### `get_component_props`

Obtén información detallada sobre las propiedades de un componente específico.

```json
{
  "name": "get_component_props",
  "arguments": {
    "componentName": "Avatar",
    "propName": "size"
  }
}
```

#### `get_component_examples`

Recupera ejemplos de uso para componentes.

```json
{
  "name": "get_component_examples",
  "arguments": {
    "componentName": "Card",
    "exampleType": "advanced"
  }
}
```

### 🎨 Herramientas del Sistema de Diseño

#### `get_design_tokens`

Accede a los tokens de diseño por categoría con guía de uso.

```json
{
  "name": "get_design_tokens",
  "arguments": {
    "category": "colors",
    "includeUsage": true
  }
}
```

**Categorías:** `colors`, `typography`, `spacing`, `shadows`, `borders`, `motion`

#### `validate_design_tokens`

Verifica el código para un uso correcto de los tokens y sugiere mejoras.

```json
{
  "name": "validate_design_tokens",
  "arguments": {
    "code": "const styles = makeStyles({ color: '#0078d4' });"
  }
}
```

### 🛠️ Herramientas de Generación de Código

#### `generate_component`

Genera implementaciones completas de componentes con TypeScript.

```json
{
  "name": "generate_component",
  "arguments": {
    "componentName": "CustomCard",
    "componentType": "layout",
    "requirements": "A card component for user profiles with avatar and bio"
  }
}
```

**Tipos de Componente:** `form-input`, `layout`, `feedback`, `navigation`

#### `generate_component_hook`

Crea hooks personalizados siguiendo patrones de Fluent UI.

```json
{
  "name": "generate_component_hook",
  "arguments": {
    "componentName": "CustomButton",
    "hookType": "state-management"
  }
}
```

#### `generate_component_styles`

Genera implementaciones de `makeStyles` con tokens de diseño.

```json
{
  "name": "generate_component_styles",
  "arguments": {
    "componentName": "CustomCard",
    "slots": ["root", "header", "content", "footer"]
  }
}
```

### ✅ Herramientas de Validación y Análisis

#### `validate_component_design`

Validación integral de diseño con puntuación.

```json
{
  "name": "validate_component_design",
  "arguments": {
    "componentCode": "const Button = () => { ... }",
    "componentName": "Button"
  }
}
```

**Devuelve:** Puntuación de validación (0-100), problemas encontrados y sugerencias de mejora.

#### `check_accessibility`

Analiza componentes por cumplimiento de accesibilidad.

```json
{
  "name": "check_accessibility",
  "arguments": {
    "componentCode": "const Component = () => { ... }"
  }
}
```

#### `analyze_component_patterns`

Detecta patrones y antipatrones en el código de componentes.

```json
{
  "name": "analyze_component_patterns",
  "arguments": {
    "componentCode": "const Component = () => { ... }"
  }
}
```

## 📦 Base de Datos de Componentes

El servidor incluye conocimiento completo sobre **más de 50 componentes de Fluent UI v9** en todas las categorías:

<details>
<summary><strong>🔤 Componentes de Entrada (15+)</strong></summary>

- **Button** (+ variantes: CompoundButton, MenuButton, SplitButton, ToggleButton)
- **Checkbox, Radio, Switch** - Controles de selección
- **Input, Textarea, SpinButton** - Componentes de entrada de texto
- **Combobox, Dropdown, Select** - Componentes de selección
- **Slider, Rating** - Componentes de entrada de valores
- **SearchBox, TagPicker** - Patrones de entrada avanzados

</details>

<details>
<summary><strong>📊 Componentes de Visualización de Datos (12+)</strong></summary>

- **Avatar, AvatarGroup** - Representación de usuario
- **Badge, CounterBadge, PresenceBadge** - Indicadores de estado
- **Text, Label** - Componentes de tipografía
- **Image, Skeleton** - Estados de medios y carga
- **List, DataGrid, Table** - Presentación de datos
- **Tree, Accordion** - Datos jerárquicos

</details>

<details>
<summary><strong>🏗️ Componentes de Diseño y Superficie (8+)</strong></summary>

- **Card** (+ variantes: CardHeader, CardPreview, CardFooter)
- **Divider, Drawer** - División de espacio
- **Dialog, Modal** - Componentes superpuestos
- **Field, FieldGroup** - Diseño de formularios

</details>

<details>
<summary><strong>🧭 Componentes de Navegación (8+)</strong></summary>

- **Breadcrumb, Link** - Ayudas de navegación
- **Menu, MenuList** - Menús de acción
- **Nav, TabList** - Navegación principal
- **Toolbar, CommandBar** - Barras de acción

</details>

<details>
<summary><strong>💬 Componentes de Retroalimentación (10+)</strong></summary>

- **MessageBar, InfoBar** - Mensajes del sistema
- **Toast, Notification** - Retroalimentación temporal
- **Popover, Tooltip** - Información contextual
- **TeachingPopover** - Superposiciones educativas
- **ProgressBar, Spinner** - Estados de carga

</details>

## 🎨 Sistema de Tokens de Diseño

Acceso al sistema completo de tokens de diseño de Fluent UI con **más de 45 tokens** en 6 categorías:

### 🌈 Colores (8 tokens)

```typescript
colorNeutralForeground1; // #242424 - Texto principal
colorNeutralBackground1; // #ffffff - Fondo predeterminado
colorBrandBackground; // #0078d4 - Marca principal
colorStatusSuccessBackground1; // Estados de éxito
colorStatusErrorBackground1; // Estados de error
// ... y más
```

### 📝 Tipografía (9 tokens)

```typescript
fontFamilyBase; // 'Segoe UI', fuentes del sistema
fontSizeBase100; // 10px
fontSizeBase200; // 12px
fontSizeBase300; // 14px
fontWeightRegular; // 400
fontWeightSemibold; // 600
// ... escala completa
```

### 📏 Espaciado (11 tokens)

```typescript
spacingHorizontalXS; // 2px
spacingHorizontalS; // 4px
spacingHorizontalM; // 8px
spacingHorizontalL; // 12px
spacingHorizontalXL; // 16px
// ... escala completa de espaciado
```

### 🌫️ Sombras (4 tokens)

```typescript
shadow2; // Elevación sutil
shadow4; // Elevación de tarjeta
shadow8; // Elevación de diálogo
shadow16; // Elevación máxima
```

### 🔲 Bordes (7 tokens)

```typescript
borderRadiusNone; // 0px
borderRadiusSmall; // 2px
borderRadiusMedium; // 4px
borderRadiusLarge; // 6px
strokeWidthThin; // 1px
strokeWidthThick; // 2px
```

### 🎬 Movimiento (6 tokens)

```typescript
durationUltraFast; // 50ms
durationFaster; // 100ms
durationFast; // 150ms
durationNormal; // 200ms
curveAccelerateMax; // Curvas de suavizado
curveDecelerateMax;
```

## 💡 Ejemplos de Uso

### Ejemplo 1: Obtener Información de un Componente

```bash
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "get_component_info", "arguments": {"componentName": "Button"}}}' | node dist/server.js
```

### Ejemplo 2: Generar un Componente Personalizado

```bash
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "generate_component", "arguments": {"componentName": "UserCard", "componentType": "layout", "requirements": "A card showing user avatar, name, and role"}}}' | node dist/server.js
```

### Ejemplo 3: Validar el Diseño de un Componente

```bash
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "validate_component_design", "arguments": {"componentCode": "const Button = () => <button>Click</button>", "componentName": "Button"}}}' | node dist/server.js
```

## 🏗️ Arquitectura

### Estructura del Servidor

```
src/
├── server.ts              # Implementación principal del servidor MCP
├── types.ts              # Interfaces de TypeScript
└── tools/
    ├── component-tools.ts    # Conocimiento y búsqueda de componentes
    ├── design-tools.ts       # Tokens de diseño y validación
    ├── generation-tools.ts   # Plantillas de generación de código
    └── validation-tools.ts   # Validación de diseño y accesibilidad
data/
├── components.json       # Base de datos de componentes
└── patterns.json        # Patrones de diseño y plantillas
```

### Tecnologías Clave

- **MCP SDK**: Implementación del Protocolo de Contexto de Modelos
- **TypeScript**: Seguridad de tipos completa y IntelliSense
- **Node.js**: Entorno de ejecución
- **JSON-RPC 2.0**: Protocolo de comunicación

## 🔧 Desarrollo

### Flujo de Trabajo de Desarrollo

```bash
# Instala las dependencias
npm install

# Modo desarrollo con recarga automática
npm run dev

# Compila para producción
npm run build

# Ejecuta pruebas
npm test

# Verifica el código
npm run lint

# Verificación de tipos
npm run type-check
```

### Scripts del Proyecto

- `npm start` - Inicia el servidor MCP
- `npm run dev` - Modo desarrollo con tsx
- `npm run build` - Compilación de TypeScript
- `npm test` - Prueba la funcionalidad del servidor
- `npm run lint` - Verificación de código con ESLint

### Pruebas del Servidor

```bash
# Prueba que el servidor inicie y liste las herramientas
npm run test

# Prueba manual con curl/echo
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/list", "params": {}}' | node dist/server.js
```

## 🤝 Integración

### Integración con Cliente MCP

Este servidor es compatible con cualquier cliente MCP. Aquí te mostramos cómo integrarlo:

#### Claude Desktop

Agrega lo siguiente a tu `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "fluentui": {
      "command": "npx",
      "args": ["-y", "fluentui-mcp-server"]
    }
  }
}
```

#### Cliente MCP Personalizado

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const client = new Client(
  {
    name: "my-app",
    version: "1.0.0",
  },
  {
    capabilities: {},
  },
);

const transport = new StdioClientTransport({
  command: "npx",
  args: ["-y", "fluentui-mcp-server"],
});

await client.connect(transport);
```

## 📋 Reglas de Validación

El servidor implementa reglas de validación integrales:

### Validación de Diseño

- ✅ Uso correcto de los tokens de diseño
- ✅ Espaciado y tipografía consistentes
- ✅ Cumplimiento del contraste de color
- ✅ Patrones de composición de componentes

### Validación de Accesibilidad

- ✅ Atributos y roles ARIA
- ✅ Soporte para navegación por teclado
- ✅ Gestión del foco
- ✅ Compatibilidad con lectores de pantalla
- ✅ Relaciones de contraste de color (WCAG 2.1)

### Validación de Calidad de Código

- ✅ Seguridad de tipos de TypeScript
- ✅ Patrones de Fluent UI v9
- ✅ Mejores prácticas de rendimiento
- ✅ Composición de componentes

## 🚀 Contribuciones

¡Aceptamos contribuciones! Aquí te contamos cómo comenzar:

### 1. Bifurcar y Clonar

```bash
git clone https://github.com/yourusername/fluentui-mcp-server.git
cd fluentui-mcp-server
```

### 2. Crear Rama de Funcionalidad

```bash
git checkout -b feature/new-component-support
```

### 3. Realizar Cambios

- Agrega nuevos componentes a `data/components.json`
- Implementa nuevas herramientas en `src/tools/`
- Agrega pruebas para la nueva funcionalidad
- Actualiza la documentación

### 4. Probar Cambios

```bash
npm run build
npm test
npm run lint
```

### 5. Enviar Solicitud de Extracción (Pull Request)

- Asegúrate de que todas las pruebas pasen
- Agrega documentación para las nuevas funciones
- Sigue el estilo de código existente

### Áreas para Contribuir

- 🆕 **Nuevos Componentes**: Agrega más componentes de Fluent UI
- 🛠️ **Herramientas Mejoradas**: Mejora las capacidades de las herramientas existentes
- 📊 **Mejor Validación**: Agrega más reglas de validación
- 🎨 **Patrones de Diseño**: Amplía la biblioteca de patrones
- 📖 **Documentación**: Mejora guías y ejemplos

## 📄 Licencia

Licencia MIT - consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

## 🔗 Recursos Relacionados

- 📚 [Componentes React de Fluent UI](https://react.fluentui.dev/) - Documentación oficial
- 🎨 [Tokens de Diseño](https://react.fluentui.dev/?path=/docs/theme-colors--docs) - Guía del sistema de tokens
- 🏗️ [Guía de Implementación de Componentes](https://github.com/microsoft/fluentui/blob/master/docs/react-v9/contributing/component-implementation-guide.md) - Patrones de desarrollo
- 🔄 [Guía de Migración](https://react.fluentui.dev/?path=/docs/concepts-migration--page) - Migración de v8 a v9
- 🔌 [Model Context Protocol](https://modelcontextprotocol.io/) - Especificación de MCP
- 🤖 [Claude Desktop](https://claude.ai/download) - Asistente de IA compatible con MCP

---

<div align="center">

**Construido con ❤️ para la comunidad de Fluent UI**

Hecho con [Model Context Protocol](https://modelcontextprotocol.io/) • [Fluent UI v9](https://react.fluentui.dev/) • [TypeScript](https://www.typescriptlang.org/)

</div>
