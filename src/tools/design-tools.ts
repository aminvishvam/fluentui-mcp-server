import { DesignToken } from '../types.js';

/**
 * Design Tools - Handles design system related operations
 * Provides design tokens, validation, and guidance
 */
export class DesignTools {
  private designTokens: Map<string, DesignToken[]> = new Map();

  constructor() {
    this.initializeDesignTokens();
  }

  /**
   * Initialize the design tokens database
   */
  private initializeDesignTokens() {
    // Color tokens
    this.designTokens.set('colors', [
      {
        name: 'colorNeutralForeground1',
        value: '#242424',
        category: 'colors',
        description: 'The default text color for most content',
        usage: ['body text', 'headings', 'primary content']
      },
      {
        name: 'colorNeutralForeground2',
        value: '#424242',
        category: 'colors',
        description: 'Secondary text color for less prominent content',
        usage: ['secondary text', 'captions', 'metadata']
      },
      {
        name: 'colorNeutralBackground1',
        value: '#ffffff',
        category: 'colors',
        description: 'The default background color',
        usage: ['page backgrounds', 'card backgrounds', 'dialog backgrounds']
      },
      {
        name: 'colorBrandBackground',
        value: '#0078d4',
        category: 'colors',
        description: 'Primary brand background color',
        usage: ['primary buttons', 'brand elements', 'call-to-action']
      },
      {
        name: 'colorBrandForeground1',
        value: '#ffffff',
        category: 'colors',
        description: 'Text color that contrasts with brand background',
        usage: ['text on brand backgrounds', 'button text']
      },
      {
        name: 'colorStatusSuccessBackground1',
        value: '#f1fdf1',
        category: 'colors',
        description: 'Success state background color',
        usage: ['success messages', 'positive feedback']
      },
      {
        name: 'colorStatusErrorBackground1',
        value: '#fdf1f1',
        category: 'colors',
        description: 'Error state background color',
        usage: ['error messages', 'validation errors']
      },
      {
        name: 'colorStatusWarningBackground1',
        value: '#fffdf1',
        category: 'colors',
        description: 'Warning state background color',
        usage: ['warning messages', 'caution indicators']
      }
    ]);

    // Typography tokens
    this.designTokens.set('typography', [
      {
        name: 'fontFamilyBase',
        value: '"Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
        category: 'typography',
        description: 'The default font family for most text',
        usage: ['body text', 'most UI elements']
      },
      {
        name: 'fontFamilyMonospace',
        value: 'Consolas, "Courier New", monospace',
        category: 'typography',
        description: 'Monospace font family for code and technical content',
        usage: ['code blocks', 'technical documentation', 'data tables']
      },
      {
        name: 'fontSizeBase100',
        value: '10px',
        category: 'typography',
        description: 'Smallest font size',
        usage: ['captions', 'fine print']
      },
      {
        name: 'fontSizeBase200',
        value: '12px',
        category: 'typography',
        description: 'Small font size',
        usage: ['small text', 'metadata']
      },
      {
        name: 'fontSizeBase300',
        value: '14px',
        category: 'typography',
        description: 'Default font size for most content',
        usage: ['body text', 'form labels', 'buttons']
      },
      {
        name: 'fontSizeBase400',
        value: '16px',
        category: 'typography',
        description: 'Medium font size',
        usage: ['headings', 'emphasized text']
      },
      {
        name: 'fontSizeBase500',
        value: '20px',
        category: 'typography',
        description: 'Large font size',
        usage: ['page titles', 'section headings']
      },
      {
        name: 'fontWeightRegular',
        value: '400',
        category: 'typography',
        description: 'Regular font weight',
        usage: ['body text', 'normal content']
      },
      {
        name: 'fontWeightMedium',
        value: '500',
        category: 'typography',
        description: 'Medium font weight',
        usage: ['button text', 'emphasized content']
      },
      {
        name: 'fontWeightSemibold',
        value: '600',
        category: 'typography',
        description: 'Semibold font weight',
        usage: ['headings', 'important text']
      }
    ]);

    // Spacing tokens
    this.designTokens.set('spacing', [
      {
        name: 'spacingHorizontalXXS',
        value: '2px',
        category: 'spacing',
        description: 'Extra extra small horizontal spacing',
        usage: ['tight layouts', 'icon spacing']
      },
      {
        name: 'spacingHorizontalXS',
        value: '4px',
        category: 'spacing',
        description: 'Extra small horizontal spacing',
        usage: ['small gaps', 'icon-text spacing']
      },
      {
        name: 'spacingHorizontalS',
        value: '8px',
        category: 'spacing',
        description: 'Small horizontal spacing',
        usage: ['element spacing', 'padding']
      },
      {
        name: 'spacingHorizontalM',
        value: '12px',
        category: 'spacing',
        description: 'Medium horizontal spacing',
        usage: ['default spacing', 'button padding']
      },
      {
        name: 'spacingHorizontalL',
        value: '16px',
        category: 'spacing',
        description: 'Large horizontal spacing',
        usage: ['section spacing', 'card padding']
      },
      {
        name: 'spacingHorizontalXL',
        value: '20px',
        category: 'spacing',
        description: 'Extra large horizontal spacing',
        usage: ['page margins', 'major sections']
      },
      {
        name: 'spacingVerticalXXS',
        value: '2px',
        category: 'spacing',
        description: 'Extra extra small vertical spacing',
        usage: ['tight layouts', 'line spacing']
      },
      {
        name: 'spacingVerticalXS',
        value: '4px',
        category: 'spacing',
        description: 'Extra small vertical spacing',
        usage: ['small gaps', 'element spacing']
      },
      {
        name: 'spacingVerticalS',
        value: '8px',
        category: 'spacing',
        description: 'Small vertical spacing',
        usage: ['element spacing', 'padding']
      },
      {
        name: 'spacingVerticalM',
        value: '12px',
        category: 'spacing',
        description: 'Medium vertical spacing',
        usage: ['default spacing', 'form elements']
      },
      {
        name: 'spacingVerticalL',
        value: '16px',
        category: 'spacing',
        description: 'Large vertical spacing',
        usage: ['section spacing', 'card content']
      }
    ]);

    // Shadow tokens
    this.designTokens.set('shadows', [
      {
        name: 'shadow2',
        value: '0 1px 2px rgba(0, 0, 0, 0.14), 0 0px 2px rgba(0, 0, 0, 0.12)',
        category: 'shadows',
        description: 'Light shadow for subtle elevation',
        usage: ['buttons', 'cards', 'subtle elevations']
      },
      {
        name: 'shadow4',
        value: '0 2px 4px rgba(0, 0, 0, 0.14), 0 0px 2px rgba(0, 0, 0, 0.12)',
        category: 'shadows',
        description: 'Medium shadow for moderate elevation',
        usage: ['dialogs', 'dropdowns', 'moderate elevations']
      },
      {
        name: 'shadow8',
        value: '0 4px 8px rgba(0, 0, 0, 0.14), 0 0px 2px rgba(0, 0, 0, 0.12)',
        category: 'shadows',
        description: 'Strong shadow for high elevation',
        usage: ['modals', 'tooltips', 'high elevations']
      },
      {
        name: 'shadow16',
        value: '0 8px 16px rgba(0, 0, 0, 0.14), 0 0px 2px rgba(0, 0, 0, 0.12)',
        category: 'shadows',
        description: 'Very strong shadow for maximum elevation',
        usage: ['popovers', 'maximum elevations']
      }
    ]);

    // Border tokens
    this.designTokens.set('borders', [
      {
        name: 'borderRadiusNone',
        value: '0px',
        category: 'borders',
        description: 'No border radius',
        usage: ['sharp corners', 'technical interfaces']
      },
      {
        name: 'borderRadiusSmall',
        value: '2px',
        category: 'borders',
        description: 'Small border radius',
        usage: ['buttons', 'form controls', 'small elements']
      },
      {
        name: 'borderRadiusMedium',
        value: '4px',
        category: 'borders',
        description: 'Medium border radius',
        usage: ['cards', 'panels', 'medium elements']
      },
      {
        name: 'borderRadiusLarge',
        value: '6px',
        category: 'borders',
        description: 'Large border radius',
        usage: ['large cards', 'containers']
      },
      {
        name: 'borderRadiusCircular',
        value: '50%',
        category: 'borders',
        description: 'Circular border radius',
        usage: ['avatars', 'circular buttons', 'badges']
      },
      {
        name: 'strokeWidthThin',
        value: '1px',
        category: 'borders',
        description: 'Thin border width',
        usage: ['default borders', 'form controls']
      },
      {
        name: 'strokeWidthThick',
        value: '2px',
        category: 'borders',
        description: 'Thick border width',
        usage: ['emphasized borders', 'focus indicators']
      }
    ]);

    // Motion tokens
    this.designTokens.set('motion', [
      {
        name: 'durationFast',
        value: '100ms',
        category: 'motion',
        description: 'Fast animation duration',
        usage: ['micro-interactions', 'state changes']
      },
      {
        name: 'durationNormal',
        value: '200ms',
        category: 'motion',
        description: 'Normal animation duration',
        usage: ['standard transitions', 'UI changes']
      },
      {
        name: 'durationSlow',
        value: '300ms',
        category: 'motion',
        description: 'Slow animation duration',
        usage: ['complex transitions', 'entrance animations']
      },
      {
        name: 'curveAccelerate',
        value: 'cubic-bezier(0.9, 0.1, 1, 0.2)',
        category: 'motion',
        description: 'Accelerating easing curve',
        usage: ['exit animations', 'disappearing elements']
      },
      {
        name: 'curveDecelerate',
        value: 'cubic-bezier(0.1, 0.9, 0.2, 1)',
        category: 'motion',
        description: 'Decelerating easing curve',
        usage: ['entrance animations', 'appearing elements']
      },
      {
        name: 'curveEasyEase',
        value: 'cubic-bezier(0.33, 0, 0.67, 1)',
        category: 'motion',
        description: 'Easy ease curve for smooth transitions',
        usage: ['standard transitions', 'general animations']
      }
    ]);
  }

  /**
   * Get design tokens by category
   */
  async getDesignTokens(category?: string) {
    if (category) {
      const tokens = this.designTokens.get(category);
      if (!tokens) {
        return {
          content: [
            {
              type: 'text',
              text: `Category "${category}" not found. Available categories: ${Array.from(this.designTokens.keys()).join(', ')}`
            }
          ]
        };
      }

      const tokensList = tokens.map(token => 
        `**${token.name}**: \`${token.value}\`\n${token.description}\n*Usage: ${token.usage?.join(', ')}}*`
      ).join('\n\n');

      return {
        content: [
          {
            type: 'text',
            text: `# ${category.charAt(0).toUpperCase() + category.slice(1)} Design Tokens\n\n${tokensList}`
          }
        ]
      };
    }

    // Return all categories overview
    const allCategories = Array.from(this.designTokens.entries()).map(([cat, tokens]) => 
      `**${cat}**: ${tokens.length} tokens`
    ).join('\n');

    return {
      content: [
        {
          type: 'text',
          text: `# Fluent UI Design Tokens\n\nAvailable token categories:\n\n${allCategories}\n\nUse get_design_tokens with a specific category to see detailed tokens.`
        }
      ]
    };
  }

  /**
   * Validate design token usage in code
   */
  async validateDesignTokens(code: string) {
    const issues: string[] = [];
    const suggestions: string[] = [];

    // Check for hardcoded values that should use tokens
    const colorRegex = /#[0-9a-f]{3,6}/gi;
    const colorMatches = code.match(colorRegex);
    if (colorMatches) {
      issues.push(`Found hardcoded color values: ${colorMatches.join(', ')}. Consider using color tokens instead.`);
      suggestions.push('Replace hardcoded colors with tokens like colorNeutralForeground1, colorBrandBackground, etc.');
    }

    // Check for hardcoded spacing values
    const spacingRegex = /(?:margin|padding|gap|top|left|right|bottom|width|height):\s*['"]?(\d+px)['"]?/gi;
    const spacingMatches = code.match(spacingRegex);
    if (spacingMatches) {
      const uniqueSpacings = [...new Set(spacingMatches)];
      issues.push(`Found hardcoded spacing values: ${uniqueSpacings.join(', ')}. Consider using spacing tokens.`);
      suggestions.push('Replace hardcoded spacing with tokens like spacingHorizontalM, spacingVerticalL, etc.');
    }

    // Check for hardcoded font sizes
    const fontSizeRegex = /font-size:\s*['"]?(\d+px)['"]?/gi;
    const fontSizeMatches = code.match(fontSizeRegex);
    if (fontSizeMatches) {
      issues.push(`Found hardcoded font sizes: ${fontSizeMatches.join(', ')}. Use typography tokens instead.`);
      suggestions.push('Replace hardcoded font sizes with tokens like fontSizeBase300, fontSizeBase400, etc.');
    }

    // Check for proper token import
    const hasTokenImport = code.includes('@fluentui/react-theme') || code.includes('tokens');
    if (!hasTokenImport && (colorMatches || spacingMatches || fontSizeMatches)) {
      issues.push('Missing design tokens import. Add: import { tokens } from "@fluentui/react-theme";');
    }

    // Check for makeStyles usage
    const hasMakeStyles = code.includes('makeStyles');
    if (!hasMakeStyles && code.includes('style=')) {
      suggestions.push('Consider using makeStyles instead of inline styles for better performance and consistency.');
    }

    const isValid = issues.length === 0;
    const resultText = isValid 
      ? '✅ Design token usage looks good!'
      : `❌ Found ${issues.length} issue(s) with design token usage:\n\n${issues.map(issue => `• ${issue}`).join('\n')}`;

    const suggestionText = suggestions.length > 0 
      ? `\n\n**Suggestions:**\n${suggestions.map(suggestion => `• ${suggestion}`).join('\n')}`
      : '';

    return {
      content: [
        {
          type: 'text',
          text: `# Design Token Validation\n\n${resultText}${suggestionText}`
        }
      ]
    };
  }

  /**
   * Get specific token information
   */
  async getTokenInfo(tokenName: string) {
    for (const [category, tokens] of this.designTokens) {
      const token = tokens.find(t => t.name === tokenName);
      if (token) {
        return {
          content: [
            {
              type: 'text',
              text: `# ${token.name}\n\n**Value:** \`${token.value}\`\n**Category:** ${token.category}\n\n${token.description}\n\n**Usage:** ${token.usage?.join(', ')}`
            }
          ]
        };
      }
    }

    return {
      content: [
        {
          type: 'text',
          text: `Token "${tokenName}" not found. Use get_design_tokens to see available tokens.`
        }
      ]
    };
  }

  /**
   * Get design guidance for specific use cases
   */
  async getDesignGuidance(useCase: string) {
    const guidance: { [key: string]: string } = {
      'button-styling': `# Button Styling Guidance

Use these tokens for consistent button styling:

**Background Colors:**
- Primary: \`colorBrandBackground\`
- Secondary: \`colorNeutralBackground1\` with \`colorNeutralStroke1\` border
- Subtle: \`colorSubtleBackground\`

**Text Colors:**
- On brand background: \`colorBrandForeground1\`
- On neutral background: \`colorNeutralForeground1\`

**Spacing:**
- Padding: \`spacingHorizontalM spacingVerticalS\`
- Icon gap: \`spacingHorizontalXS\`

**Border Radius:**
- Default: \`borderRadiusSmall\`
- Circular: \`borderRadiusCircular\``,

      'form-layout': `# Form Layout Guidance

**Spacing:**
- Between form fields: \`spacingVerticalM\`
- Label to input: \`spacingVerticalXS\`
- Field groups: \`spacingVerticalL\`

**Typography:**
- Labels: \`fontSizeBase300\` with \`fontWeightMedium\`
- Input text: \`fontSizeBase300\`
- Help text: \`fontSizeBase200\`

**Colors:**
- Labels: \`colorNeutralForeground1\`
- Help text: \`colorNeutralForeground2\`
- Error text: \`colorStatusErrorForeground1\``,

      'card-design': `# Card Design Guidance

**Background:**
- Default: \`colorNeutralBackground1\`
- Alternative: \`colorNeutralBackground2\`

**Borders:**
- Outline cards: \`strokeWidthThin\` with \`colorNeutralStroke1\`
- Border radius: \`borderRadiusMedium\`

**Shadows:**
- Subtle elevation: \`shadow2\`
- Moderate elevation: \`shadow4\`

**Spacing:**
- Internal padding: \`spacingHorizontalL spacingVerticalL\`
- Content spacing: \`spacingVerticalM\``
    };

    const result = guidance[useCase.toLowerCase()];
    if (!result) {
      const availableUseCases = Object.keys(guidance).join(', ');
      return {
        content: [
          {
            type: 'text',
            text: `Use case "${useCase}" not found. Available use cases: ${availableUseCases}`
          }
        ]
      };
    }

    return {
      content: [
        {
          type: 'text',
          text: result
        }
      ]
    };
  }
}
