#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';
import { ComponentTools } from './tools/component-tools.js';
import { DesignTools } from './tools/design-tools.js';
import { GenerationTools } from './tools/generation-tools.js';
import { ValidationTools } from './tools/validation-tools.js';

/**
 * Fluent UI MCP Server
 * 
 * Provides comprehensive knowledge and tools for Fluent UI development:
 * - Component information and specifications
 * - Design system guidance and tokens
 * - Code generation for components, hooks, and styles
 * - Design validation and accessibility checking
 * - Migration assistance from v8 to v9
 */
class FluentUIMCPServer {
  private server: Server;
  private componentTools: ComponentTools;
  private designTools: DesignTools;
  private generationTools: GenerationTools;
  private validationTools: ValidationTools;

  constructor() {
    this.server = new Server(
      {
        name: 'fluentui-mcp-server',
        version: '1.0.0',
      }
    );

    // Initialize tool handlers
    this.componentTools = new ComponentTools();
    this.designTools = new DesignTools();
    this.generationTools = new GenerationTools();
    this.validationTools = new ValidationTools();

    this.setupToolHandlers();
  }

  private setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          // Component Knowledge Tools
          {
            name: 'get_component_info',
            description: 'Get comprehensive information about a Fluent UI component including props, slots, and examples',
            inputSchema: {
              type: 'object',
              properties: {
                componentName: {
                  type: 'string',
                  description: 'Name of the Fluent UI component (e.g., Button, Avatar, Dialog)',
                },
              },
              required: ['componentName'],
            },
          },
          {
            name: 'search_components',
            description: 'Search for Fluent UI components by functionality, category, or keywords',
            inputSchema: {
              type: 'object',
              properties: {
                query: {
                  type: 'string',
                  description: 'Search query for finding relevant components',
                },
                category: {
                  type: 'string',
                  enum: ['inputs', 'layout', 'navigation', 'surfaces', 'feedback', 'data-display'],
                  description: 'Optional: Filter by component category',
                },
              },
              required: ['query'],
            },
          },
          {
            name: 'get_component_props',
            description: 'Get detailed prop information for a specific Fluent UI component',
            inputSchema: {
              type: 'object',
              properties: {
                componentName: {
                  type: 'string',
                  description: 'Name of the Fluent UI component',
                },
              },
              required: ['componentName'],
            },
          },
          {
            name: 'get_component_examples',
            description: 'Get code examples and usage patterns for a Fluent UI component',
            inputSchema: {
              type: 'object',
              properties: {
                componentName: {
                  type: 'string',
                  description: 'Name of the Fluent UI component',
                },
                exampleType: {
                  type: 'string',
                  enum: ['basic', 'advanced', 'customization', 'accessibility'],
                  description: 'Type of examples to retrieve',
                },
              },
              required: ['componentName'],
            },
          },
          // Design System Tools
          {
            name: 'get_design_tokens',
            description: 'Get Fluent UI design tokens for colors, typography, spacing, etc.',
            inputSchema: {
              type: 'object',
              properties: {
                category: {
                  type: 'string',
                  enum: ['colors', 'typography', 'spacing', 'shadows', 'borders', 'motion'],
                  description: 'Optional: Filter tokens by category',
                },
              },
            },
          },
          {
            name: 'validate_design_tokens',
            description: 'Validate the usage of design tokens in component code',
            inputSchema: {
              type: 'object',
              properties: {
                code: {
                  type: 'string',
                  description: 'Component code to validate token usage',
                },
              },
              required: ['code'],
            },
          },
          // Code Generation Tools
          {
            name: 'generate_component',
            description: 'Generate a complete Fluent UI v9 component implementation',
            inputSchema: {
              type: 'object',
              properties: {
                componentName: {
                  type: 'string',
                  description: 'Name of the component to generate',
                },
                componentType: {
                  type: 'string',
                  enum: ['basic', 'composite', 'form-input', 'layout'],
                  description: 'Type of component to generate',
                },
                props: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      type: { type: 'string' },
                      required: { type: 'boolean' },
                      description: { type: 'string' },
                    },
                  },
                  description: 'Component props specification',
                },
                slots: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      element: { type: 'string' },
                      required: { type: 'boolean' },
                    },
                  },
                  description: 'Component slots specification',
                },
              },
              required: ['componentName'],
            },
          },
          {
            name: 'generate_component_hook',
            description: 'Generate a component hook following Fluent UI v9 patterns',
            inputSchema: {
              type: 'object',
              properties: {
                componentName: {
                  type: 'string',
                  description: 'Name of the component',
                },
              },
              required: ['componentName'],
            },
          },
          {
            name: 'generate_component_styles',
            description: 'Generate component styles using makeStyles following Fluent UI patterns',
            inputSchema: {
              type: 'object',
              properties: {
                componentName: {
                  type: 'string',
                  description: 'Name of the component',
                },
                slots: {
                  type: 'array',
                  items: { type: 'string' },
                  description: 'Component slots to style',
                },
              },
              required: ['componentName'],
            },
          },
          // Validation Tools
          {
            name: 'validate_component_design',
            description: 'Validate component implementation against Fluent UI design specifications',
            inputSchema: {
              type: 'object',
              properties: {
                componentCode: {
                  type: 'string',
                  description: 'Component code to validate',
                },
                componentName: {
                  type: 'string',
                  description: 'Name of the component being validated',
                },
              },
              required: ['componentCode'],
            },
          },
          {
            name: 'check_accessibility',
            description: 'Check component code for accessibility compliance',
            inputSchema: {
              type: 'object',
              properties: {
                componentCode: {
                  type: 'string',
                  description: 'Component code to check for accessibility issues',
                },
              },
              required: ['componentCode'],
            },
          },
          {
            name: 'analyze_component_patterns',
            description: 'Analyze component code for adherence to Fluent UI v9 patterns',
            inputSchema: {
              type: 'object',
              properties: {
                componentCode: {
                  type: 'string',
                  description: 'Component code to analyze',
                },
              },
              required: ['componentCode'],
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (!args) {
        throw new McpError(ErrorCode.InvalidParams, 'Missing arguments');
      }

      try {
        switch (name) {
          // Component Tools
          case 'get_component_info':
            return await this.componentTools.getComponentInfo(args.componentName as string);
          case 'search_components':
            return await this.componentTools.searchComponents(args.query as string, args.category as string);
          case 'get_component_props':
            return await this.componentTools.getComponentProps(args.componentName as string);
          case 'get_component_examples':
            return await this.componentTools.getComponentExamples(args.componentName as string, args.exampleType as string);

          // Design Tools
          case 'get_design_tokens':
            return await this.designTools.getDesignTokens(args.category as string);
          case 'validate_design_tokens':
            return await this.designTools.validateDesignTokens(args.code as string);

          // Generation Tools
          case 'generate_component':
            return await this.generationTools.generateComponent({
              componentName: args.componentName as string,
              componentType: args.componentType as any,
              props: args.props as any,
              slots: args.slots as any,
            });
          case 'generate_component_hook':
            return await this.generationTools.generateComponentHook(args.componentName as string);
          case 'generate_component_styles':
            return await this.generationTools.generateComponentStyles(args.componentName as string, args.slots as string[]);

          // Validation Tools
          case 'validate_component_design':
            return await this.validationTools.validateComponentDesign(args.componentCode as string, args.componentName as string);
          case 'check_accessibility':
            return await this.validationTools.checkAccessibility(args.componentCode as string);
          case 'analyze_component_patterns':
            return await this.validationTools.analyzeComponentPatterns(args.componentCode as string);

          default:
            throw new McpError(
              ErrorCode.MethodNotFound,
              `Unknown tool: ${name}`
            );
        }
      } catch (error) {
        if (error instanceof McpError) {
          throw error;
        }
        throw new McpError(
          ErrorCode.InternalError,
          `Error executing tool ${name}: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Fluent UI MCP Server running on stdio');
  }
}

// Start the server
const server = new FluentUIMCPServer();
server.run().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
