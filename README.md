# 🚀 Fluent UI MCP Server

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MCP](https://img.shields.io/badge/MCP-0.4.0-purple.svg)](https://modelcontextprotocol.io/)
[![Fluent UI](https://img.shields.io/badge/Fluent%20UI-v9-0078d4.svg)](https://react.fluentui.dev/)

A comprehensive **Model Context Protocol (MCP) server** that provides intelligent assistance for Fluent UI React component development. This server acts as your AI-powered companion for creating, validating, and maintaining Fluent UI applications following v9 design system patterns.

> **What is MCP?** The Model Context Protocol enables AI assistants to securely access external data sources and tools. This server extends AI capabilities with deep Fluent UI knowledge.

## ✨ Key Features

### 🧠 **Intelligent Component Knowledge**

- 📚 Comprehensive database of **50+ Fluent UI v9 components**
- 🔍 Smart component search and discovery
- 📖 Complete props, slots, and usage documentation
- 💡 Real-world examples and best practices
- 🎯 Context-aware recommendations

### 🎨 **Design System Mastery**

- 🌈 **45+ design tokens** across 6 categories (colors, typography, spacing, shadows, borders, motion)
- ✅ Token validation and usage guidance
- 🎭 Semantic color system with accessibility compliance
- 📏 Consistent spacing and typography scales
- 🎬 Motion and animation guidelines

### 🛠️ **Advanced Code Generation**

- ⚡ Generate complete v9 component implementations
- 🪝 Create custom hooks following Fluent UI patterns
- 💅 Generate styles using `makeStyles` and design tokens
- 📝 TypeScript interfaces with full type safety
- 🏗️ Template-based scaffolding for common patterns

### ✅ **Smart Validation & Analysis**

- 🔍 Real-time component validation against design specs
- ♿ Accessibility compliance checking (WCAG 2.1)
- 📊 Pattern analysis with scoring (0-100)
- 🚨 Anti-pattern detection and warnings
- � Actionable improvement suggestions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- MCP-compatible client

### Installation & Setup

```bash
# Clone or download the server
cd fluentui-mcp-server

# Install dependencies
npm install

# Build the server
npm run build

# Test the server
npm run test
```

### Running the Server

```bash
# Start the MCP server
npm start

# Or run in development mode with hot reload
npm run dev
```

## 🔧 Available Tools

The server provides **12 powerful tools** organized into 4 categories:

### 📚 Component Knowledge Tools

#### `get_component_info`

Get comprehensive information about any Fluent UI component.

```json
{
  "name": "get_component_info",
  "arguments": {
    "componentName": "Button"
  }
}
```

**Returns:** Complete component documentation including description, props, slots, examples, and accessibility guidelines.

#### `search_components`

Find components based on functionality, category, or keywords.

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

Get detailed property information for a specific component.

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

Retrieve usage examples for components.

```json
{
  "name": "get_component_examples",
  "arguments": {
    "componentName": "Card",
    "exampleType": "advanced"
  }
}
```

### 🎨 Design System Tools

#### `get_design_tokens`

Access design tokens by category with usage guidance.

```json
{
  "name": "get_design_tokens",
  "arguments": {
    "category": "colors",
    "includeUsage": true
  }
}
```

**Categories:** `colors`, `typography`, `spacing`, `shadows`, `borders`, `motion`

#### `validate_design_tokens`

Check code for proper token usage and suggest improvements.

```json
{
  "name": "validate_design_tokens",
  "arguments": {
    "code": "const styles = makeStyles({ color: '#0078d4' });"
  }
}
```

### 🛠️ Code Generation Tools

#### `generate_component`

Generate complete component implementations with TypeScript.

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

**Component Types:** `form-input`, `layout`, `feedback`, `navigation`

#### `generate_component_hook`

Create custom hooks following Fluent UI patterns.

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

Generate `makeStyles` implementations with design tokens.

```json
{
  "name": "generate_component_styles",
  "arguments": {
    "componentName": "CustomCard",
    "slots": ["root", "header", "content", "footer"]
  }
}
```

### ✅ Validation & Analysis Tools

#### `validate_component_design`

Comprehensive design validation with scoring.

```json
{
  "name": "validate_component_design",
  "arguments": {
    "componentCode": "const Button = () => { ... }",
    "componentName": "Button"
  }
}
```

**Returns:** Validation score (0-100), issues found, and improvement suggestions.

#### `check_accessibility`

Analyze components for accessibility compliance.

```json
{
  "name": "check_accessibility",
  "arguments": {
    "componentCode": "const Component = () => { ... }"
  }
}
```

#### `analyze_component_patterns`

Detect patterns and anti-patterns in component code.

```json
{
  "name": "analyze_component_patterns",
  "arguments": {
    "componentCode": "const Component = () => { ... }"
  }
}
```

## 📦 Component Database

The server includes comprehensive knowledge for **50+ Fluent UI v9 components** across all categories:

<details>
<summary><strong>🔤 Input Components (15+)</strong></summary>

- **Button** (+ variants: CompoundButton, MenuButton, SplitButton, ToggleButton)
- **Checkbox, Radio, Switch** - Selection controls
- **Input, Textarea, SpinButton** - Text input components
- **Combobox, Dropdown, Select** - Selection components
- **Slider, Rating** - Value input components
- **SearchBox, TagPicker** - Advanced input patterns

</details>

<details>
<summary><strong>📊 Data Display Components (12+)</strong></summary>

- **Avatar, AvatarGroup** - User representation
- **Badge, CounterBadge, PresenceBadge** - Status indicators
- **Text, Label** - Typography components
- **Image, Skeleton** - Media and loading states
- **List, DataGrid, Table** - Data presentation
- **Tree, Accordion** - Hierarchical data

</details>

<details>
<summary><strong>🏗️ Layout & Surface Components (8+)</strong></summary>

- **Card** (+ variants: CardHeader, CardPreview, CardFooter)
- **Divider, Drawer** - Space division
- **Dialog, Modal** - Overlay components
- **Field, FieldGroup** - Form layout

</details>

<details>
<summary><strong>🧭 Navigation Components (8+)</strong></summary>

- **Breadcrumb, Link** - Navigation aids
- **Menu, MenuList** - Action menus
- **Nav, TabList** - Primary navigation
- **Toolbar, CommandBar** - Action toolbars

</details>

<details>
<summary><strong>💬 Feedback Components (10+)</strong></summary>

- **MessageBar, InfoBar** - System messages
- **Toast, Notification** - Temporary feedback
- **Popover, Tooltip** - Contextual information
- **TeachingPopover** - Educational overlays
- **ProgressBar, Spinner** - Loading states

</details>

## 🎨 Design Token System

Access to the complete Fluent UI design token system with **45+ tokens** across 6 categories:

### 🌈 Colors (8 tokens)

```typescript
colorNeutralForeground1; // #242424 - Primary text
colorNeutralBackground1; // #ffffff - Default background
colorBrandBackground; // #0078d4 - Primary brand
colorStatusSuccessBackground1; // Success states
colorStatusErrorBackground1; // Error states
// ... and more
```

### 📝 Typography (9 tokens)

```typescript
fontFamilyBase; // 'Segoe UI', system fonts
fontSizeBase100; // 10px
fontSizeBase200; // 12px
fontSizeBase300; // 14px
fontWeightRegular; // 400
fontWeightSemibold; // 600
// ... complete scale
```

### 📏 Spacing (11 tokens)

```typescript
spacingHorizontalXS; // 2px
spacingHorizontalS; // 4px
spacingHorizontalM; // 8px
spacingHorizontalL; // 12px
spacingHorizontalXL; // 16px
// ... full spacing scale
```

### 🌫️ Shadows (4 tokens)

```typescript
shadow2; // Subtle elevation
shadow4; // Card elevation
shadow8; // Dialog elevation
shadow16; // Maximum elevation
```

### 🔲 Borders (7 tokens)

```typescript
borderRadiusNone; // 0px
borderRadiusSmall; // 2px
borderRadiusMedium; // 4px
borderRadiusLarge; // 6px
strokeWidthThin; // 1px
strokeWidthThick; // 2px
```

### 🎬 Motion (6 tokens)

```typescript
durationUltraFast; // 50ms
durationFaster; // 100ms
durationFast; // 150ms
durationNormal; // 200ms
curveAccelerateMax; // Easing curves
curveDecelerateMax;
```

## 💡 Usage Examples

### Example 1: Getting Component Information

```bash
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "get_component_info", "arguments": {"componentName": "Button"}}}' | node dist/server.js
```

### Example 2: Generating a Custom Component

```bash
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "generate_component", "arguments": {"componentName": "UserCard", "componentType": "layout", "requirements": "A card showing user avatar, name, and role"}}}' | node dist/server.js
```

### Example 3: Validating Component Design

```bash
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "validate_component_design", "arguments": {"componentCode": "const Button = () => <button>Click</button>", "componentName": "Button"}}}' | node dist/server.js
```

## 🏗️ Architecture

### Server Structure

```
src/
├── server.ts              # Main MCP server implementation
├── types.ts              # TypeScript interfaces
└── tools/
    ├── component-tools.ts    # Component knowledge & search
    ├── design-tools.ts       # Design tokens & validation
    ├── generation-tools.ts   # Code generation templates
    └── validation-tools.ts   # Design & accessibility validation
data/
├── components.json       # Component database
└── patterns.json        # Design patterns & templates
```

### Key Technologies

- **MCP SDK**: Model Context Protocol implementation
- **TypeScript**: Full type safety and IntelliSense
- **Node.js**: Runtime environment
- **JSON-RPC 2.0**: Communication protocol

## 🔧 Development

### Development Workflow

```bash
# Install dependencies
npm install

# Development mode with hot reload
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Type checking
npm run type-check
```

### Project Scripts

- `npm start` - Start the MCP server
- `npm run dev` - Development mode with tsx
- `npm run build` - TypeScript compilation
- `npm test` - Test server functionality
- `npm run lint` - ESLint code checking

### Testing the Server

```bash
# Test that server starts and lists tools
npm run test

# Manual testing with curl/echo
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/list", "params": {}}' | node dist/server.js
```

## 🤝 Integration

### MCP Client Integration

This server is compatible with any MCP client. Here's how to integrate:

#### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "fluentui": {
      "command": "node",
      "args": ["/path/to/fluentui-mcp-server/dist/server.js"]
    }
  }
}
```

#### Custom MCP Client

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
  }
);

const transport = new StdioClientTransport({
  command: "node",
  args: ["./dist/server.js"],
});

await client.connect(transport);
```

## 📋 Validation Rules

The server implements comprehensive validation rules:

### Design Validation

- ✅ Proper use of design tokens
- ✅ Consistent spacing and typography
- ✅ Color contrast compliance
- ✅ Component composition patterns

### Accessibility Validation

- ✅ ARIA attributes and roles
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader compatibility
- ✅ Color contrast ratios (WCAG 2.1)

### Code Quality Validation

- ✅ TypeScript type safety
- ✅ Fluent UI v9 patterns
- ✅ Performance best practices
- ✅ Component composition

## 🚀 Contributing

We welcome contributions! Here's how to get started:

### 1. Fork & Clone

```bash
git clone https://github.com/yourusername/fluentui-mcp-server.git
cd fluentui-mcp-server
```

### 2. Create Feature Branch

```bash
git checkout -b feature/new-component-support
```

### 3. Make Changes

- Add new components to `data/components.json`
- Implement new tools in `src/tools/`
- Add tests for new functionality
- Update documentation

### 4. Test Changes

```bash
npm run build
npm test
npm run lint
```

### 5. Submit Pull Request

- Ensure all tests pass
- Add documentation for new features
- Follow existing code style

### Areas for Contribution

- 🆕 **New Components**: Add more Fluent UI components
- 🛠️ **Enhanced Tools**: Improve existing tool capabilities
- 📊 **Better Validation**: Add more validation rules
- 🎨 **Design Patterns**: Expand pattern library
- 📖 **Documentation**: Improve guides and examples

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Related Resources

- 📚 [Fluent UI React Components](https://react.fluentui.dev/) - Official documentation
- 🎨 [Design Tokens](https://react.fluentui.dev/?path=/docs/theme-colors--docs) - Token system guide
- 🏗️ [Component Implementation Guide](https://github.com/microsoft/fluentui/blob/master/docs/react-v9/contributing/component-implementation-guide.md) - Development patterns
- 🔄 [Migration Guide](https://react.fluentui.dev/?path=/docs/concepts-migration--page) - v8 to v9 migration
- 🔌 [Model Context Protocol](https://modelcontextprotocol.io/) - MCP specification
- 🤖 [Claude Desktop](https://claude.ai/download) - MCP-compatible AI assistant

---

<div align="center">

**Built with ❤️ for the Fluent UI community**

Made with [Model Context Protocol](https://modelcontextprotocol.io/) • [Fluent UI v9](https://react.fluentui.dev/) • [TypeScript](https://www.typescriptlang.org/)

</div>
