import { ComponentInfo } from '../types.js';

/**
 * Component Tools - Handles all component-related operations
 * Provides comprehensive information about Fluent UI components
 */
export class ComponentTools {
  private componentsDatabase: Map<string, ComponentInfo> = new Map();

  constructor() {
    this.initializeComponentsDatabase();
  }

  /**
   * Initialize the components database with Fluent UI v9 components
   */
  private initializeComponentsDatabase() {
    // Button component
    this.componentsDatabase.set('Button', {
      name: 'Button',
      category: 'inputs',
      description: 'A button gives people a way to trigger an action. It\'s typically placed throughout your UI, in places like dialogs, modal windows, forms, and more.',
      packageName: '@fluentui/react-button',
      since: '9.0.0',
      status: 'stable',
      props: [
        {
          name: 'appearance',
          type: "'secondary' | 'primary' | 'outline' | 'subtle' | 'transparent'",
          required: false,
          defaultValue: "'secondary'",
          description: 'A button can have its content and borders styled for greater emphasis or to be subtle.',
          examples: ['primary', 'outline', 'subtle']
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          defaultValue: 'false',
          description: 'When set, the button will be disabled and cannot be interacted with.',
        },
        {
          name: 'disabledFocusable',
          type: 'boolean',
          required: false,
          defaultValue: 'false',
          description: 'When set, the button will be disabled but still focusable.',
        },
        {
          name: 'iconPosition',
          type: "'before' | 'after'",
          required: false,
          defaultValue: "'before'",
          description: 'The position of the icon relative to the text content.',
        },
        {
          name: 'shape',
          type: "'rounded' | 'circular' | 'square'",
          required: false,
          defaultValue: "'rounded'",
          description: 'A button can be rounded, circular, or square.',
        },
        {
          name: 'size',
          type: "'small' | 'medium' | 'large'",
          required: false,
          defaultValue: "'medium'",
          description: 'A button supports different sizes.',
        }
      ],
      slots: [
        {
          name: 'root',
          element: 'button',
          required: true,
          description: 'Root of the component that renders as either a <button> tag or an <a> tag.',
          elementTypes: ['button', 'a']
        },
        {
          name: 'icon',
          element: 'span',
          required: false,
          description: 'Icon that renders either before or after the children as specified by the iconPosition prop.',
        }
      ],
      examples: [
        {
          title: 'Basic Button',
          description: 'A simple button with default appearance',
          type: 'basic',
          code: `import { Button } from '@fluentui/react-components';

export const BasicButton = () => (
  <Button>Click me</Button>
);`,
          imports: ['@fluentui/react-components']
        },
        {
          title: 'Primary Button',
          description: 'A button with primary appearance for main actions',
          type: 'basic',
          code: `import { Button } from '@fluentui/react-components';

export const PrimaryButton = () => (
  <Button appearance="primary">Save</Button>
);`,
          imports: ['@fluentui/react-components']
        },
        {
          title: 'Button with Icon',
          description: 'A button that includes an icon',
          type: 'basic',
          code: `import { Button } from '@fluentui/react-components';
import { SaveRegular } from '@fluentui/react-icons';

export const IconButton = () => (
  <Button icon={<SaveRegular />}>Save</Button>
);`,
          imports: ['@fluentui/react-components', '@fluentui/react-icons']
        }
      ],
      designSpecs: {
        sizes: ['small', 'medium', 'large'],
        appearances: ['secondary', 'primary', 'outline', 'subtle', 'transparent'],
        shapes: ['rounded', 'circular', 'square'],
        figmaLink: 'https://www.figma.com/file/button-specs'
      },
      accessibility: {
        ariaRoles: ['button'],
        keyboardSupport: ['Enter', 'Space'],
        screenReaderSupport: true,
        focusManagement: 'Standard button focus behavior',
        guidelines: [
          'Use descriptive button text',
          'Provide aria-label for icon-only buttons',
          'Ensure sufficient color contrast'
        ]
      }
    });

    // Avatar component
    this.componentsDatabase.set('Avatar', {
      name: 'Avatar',
      category: 'data-display',
      description: 'An avatar is a graphical representation of a user, team, or entity. Avatar can display an image, icon, or initials, and supports various sizes and shapes.',
      packageName: '@fluentui/react-avatar',
      since: '9.0.0',
      status: 'stable',
      props: [
        {
          name: 'name',
          type: 'string',
          required: false,
          description: 'The name of the person or entity represented by this Avatar. This should always be provided for accessibility.',
        },
        {
          name: 'size',
          type: '16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 | 96 | 120 | 128',
          required: false,
          defaultValue: '32',
          description: 'Size of the avatar in pixels.',
        },
        {
          name: 'shape',
          type: "'circular' | 'square'",
          required: false,
          defaultValue: "'circular'",
          description: 'The avatar can be circular or square.',
        },
        {
          name: 'color',
          type: "'neutral' | 'brand' | 'colorful' | AvatarNamedColor",
          required: false,
          defaultValue: "'neutral'",
          description: 'The color when displaying either an icon or initials.',
        }
      ],
      slots: [
        {
          name: 'root',
          element: 'span',
          required: true,
          description: 'Root element of the Avatar.',
        },
        {
          name: 'image',
          element: 'img',
          required: false,
          description: 'The Avatar\'s image.',
        },
        {
          name: 'initials',
          element: 'span',
          required: false,
          description: 'Custom initials.',
        },
        {
          name: 'icon',
          element: 'span',
          required: false,
          description: 'Icon to be displayed when there is no image or initials.',
        },
        {
          name: 'badge',
          element: 'span',
          required: false,
          description: 'Badge to show the avatar\'s status.',
        }
      ],
      examples: [
        {
          title: 'Basic Avatar',
          description: 'An avatar with just a name',
          type: 'basic',
          code: `import { Avatar } from '@fluentui/react-components';

export const BasicAvatar = () => (
  <Avatar name="John Doe" />
);`,
          imports: ['@fluentui/react-components']
        },
        {
          title: 'Avatar with Image',
          description: 'An avatar displaying an image',
          type: 'basic',
          code: `import { Avatar } from '@fluentui/react-components';

export const ImageAvatar = () => (
  <Avatar 
    name="Jane Smith" 
    image={{ src: "https://example.com/avatar.jpg" }}
  />
);`,
          imports: ['@fluentui/react-components']
        }
      ],
      designSpecs: {
        sizes: ['16', '20', '24', '28', '32', '36', '40', '48', '56', '64', '72', '96', '120', '128'],
        shapes: ['circular', 'square'],
        colors: ['neutral', 'brand', 'colorful'],
        figmaLink: 'https://www.figma.com/file/avatar-specs'
      },
      accessibility: {
        ariaRoles: ['img'],
        screenReaderSupport: true,
        guidelines: [
          'Always provide a name prop for screen readers',
          'Use alt text for avatar images',
          'Ensure sufficient color contrast for initials'
        ]
      }
    });

    // Add more components...
    this.addInputComponents();
    this.addLayoutComponents();
    this.addNavigationComponents();
  }

  private addInputComponents() {
    // Checkbox
    this.componentsDatabase.set('Checkbox', {
      name: 'Checkbox',
      category: 'inputs',
      description: 'A checkbox allows users to select multiple options from a set of choices, or to toggle a single setting on or off.',
      packageName: '@fluentui/react-checkbox',
      since: '9.0.0',
      status: 'stable',
      props: [
        {
          name: 'checked',
          type: "'mixed' | boolean",
          required: false,
          description: 'Whether the checkbox is checked, unchecked, or mixed (indeterminate).',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          defaultValue: 'false',
          description: 'Disable the checkbox.',
        },
        {
          name: 'label',
          type: 'string',
          required: false,
          description: 'Label for the checkbox.',
        },
        {
          name: 'labelPosition',
          type: "'before' | 'after'",
          required: false,
          defaultValue: "'after'",
          description: 'Position of the label relative to the checkbox.',
        },
        {
          name: 'shape',
          type: "'circular' | 'square'",
          required: false,
          defaultValue: "'square'",
          description: 'Shape of the checkbox.',
        },
        {
          name: 'size',
          type: "'medium' | 'large'",
          required: false,
          defaultValue: "'medium'",
          description: 'Size of the checkbox.',
        }
      ],
      slots: [
        {
          name: 'root',
          element: 'span',
          required: true,
          description: 'Root element of the Checkbox.',
        },
        {
          name: 'input',
          element: 'input',
          required: true,
          description: 'The hidden input element for the Checkbox.',
        },
        {
          name: 'indicator',
          element: 'div',
          required: true,
          description: 'The visual indicator for the Checkbox.',
        },
        {
          name: 'label',
          element: 'label',
          required: false,
          description: 'The label for the Checkbox.',
        }
      ],
      examples: [
        {
          title: 'Basic Checkbox',
          description: 'A simple checkbox with a label',
          type: 'basic',
          code: `import { Checkbox } from '@fluentui/react-components';

export const BasicCheckbox = () => (
  <Checkbox label="I agree to the terms" />
);`,
          imports: ['@fluentui/react-components']
        }
      ],
      designSpecs: {
        sizes: ['medium', 'large'],
        shapes: ['circular', 'square'],
      },
      accessibility: {
        ariaRoles: ['checkbox'],
        keyboardSupport: ['Space'],
        screenReaderSupport: true,
        guidelines: [
          'Always provide a label',
          'Use proper ARIA attributes',
          'Support keyboard navigation'
        ]
      }
    });
  }

  private addLayoutComponents() {
    // Card
    this.componentsDatabase.set('Card', {
      name: 'Card',
      category: 'surfaces',
      description: 'A card provides a way to display content in a structured, scannable way. Cards can contain text, images, actions, and other content.',
      packageName: '@fluentui/react-card',
      since: '9.0.0',
      status: 'stable',
      props: [
        {
          name: 'appearance',
          type: "'filled' | 'filled-alternative' | 'outline' | 'subtle'",
          required: false,
          defaultValue: "'filled'",
          description: 'Controls the appearance of the card.',
        },
        {
          name: 'orientation',
          type: "'horizontal' | 'vertical'",
          required: false,
          defaultValue: "'vertical'",
          description: 'Controls the orientation of the card content.',
        },
        {
          name: 'size',
          type: "'small' | 'medium' | 'large'",
          required: false,
          defaultValue: "'medium'",
          description: 'Controls the size of the card.',
        }
      ],
      slots: [
        {
          name: 'root',
          element: 'div',
          required: true,
          description: 'Root element of the Card.',
        }
      ],
      examples: [
        {
          title: 'Basic Card',
          description: 'A simple card with content',
          type: 'basic',
          code: `import { Card, CardHeader, CardPreview } from '@fluentui/react-components';

export const BasicCard = () => (
  <Card>
    <CardHeader header={<Text weight="semibold">Card Title</Text>} />
    <CardPreview>
      <img src="https://example.com/image.jpg" alt="Preview" />
    </CardPreview>
  </Card>
);`,
          imports: ['@fluentui/react-components']
        }
      ],
      designSpecs: {
        appearances: ['filled', 'filled-alternative', 'outline', 'subtle'],
        orientations: ['horizontal', 'vertical'],
        sizes: ['small', 'medium', 'large'],
      },
      accessibility: {
        screenReaderSupport: true,
        guidelines: [
          'Use semantic HTML structure',
          'Provide meaningful content hierarchy',
          'Ensure interactive elements are focusable'
        ]
      }
    });
  }

  private addNavigationComponents() {
    // Add navigation components like Link, Menu, etc.
  }

  /**
   * Get comprehensive information about a component
   */
  async getComponentInfo(componentName: string) {
    const component = this.componentsDatabase.get(componentName);
    
    if (!component) {
      return {
        content: [
          {
            type: 'text',
            text: `Component "${componentName}" not found. Available components: ${Array.from(this.componentsDatabase.keys()).join(', ')}`
          }
        ]
      };
    }

    const content = [
      {
        type: 'text',
        text: `# ${component.name}\n\n**Category:** ${component.category}\n**Package:** ${component.packageName}\n**Status:** ${component.status}\n\n${component.description}`
      },
      {
        type: 'text',
        text: `## Props\n\n${component.props.map(prop => 
          `- **${prop.name}** (${prop.type})${prop.required ? ' *required*' : ''}: ${prop.description}${prop.defaultValue ? ` Default: \`${prop.defaultValue}\`` : ''}`
        ).join('\n')}`
      },
      {
        type: 'text',
        text: `## Slots\n\n${component.slots.map(slot => 
          `- **${slot.name}** (${slot.element})${slot.required ? ' *required*' : ''}: ${slot.description}`
        ).join('\n')}`
      }
    ];

    if (component.examples.length > 0) {
      content.push({
        type: 'text',
        text: `## Basic Example\n\n\`\`\`tsx\n${component.examples[0].code}\n\`\`\``
      });
    }

    return { content };
  }

  /**
   * Search for components by query and category
   */
  async searchComponents(query: string, category?: string) {
    const searchTerm = query.toLowerCase();
    const results: ComponentInfo[] = [];

    for (const [name, component] of this.componentsDatabase) {
      const matchesCategory = !category || component.category === category;
      const matchesQuery = 
        component.name.toLowerCase().includes(searchTerm) ||
        component.description.toLowerCase().includes(searchTerm) ||
        component.props.some(prop => prop.name.toLowerCase().includes(searchTerm)) ||
        component.slots.some(slot => slot.name.toLowerCase().includes(searchTerm));

      if (matchesCategory && matchesQuery) {
        results.push(component);
      }
    }

    const content = results.length > 0 
      ? results.map(component => 
          `**${component.name}** (${component.category}): ${component.description.substring(0, 100)}...`
        ).join('\n\n')
      : `No components found matching "${query}"${category ? ` in category "${category}"` : ''}`;

    return {
      content: [
        {
          type: 'text',
          text: `# Search Results\n\n${content}`
        }
      ]
    };
  }

  /**
   * Get detailed prop information for a component
   */
  async getComponentProps(componentName: string) {
    const component = this.componentsDatabase.get(componentName);
    
    if (!component) {
      return {
        content: [
          {
            type: 'text',
            text: `Component "${componentName}" not found.`
          }
        ]
      };
    }

    const propsTable = component.props.map(prop => {
      return `| ${prop.name} | ${prop.type} | ${prop.required ? 'Yes' : 'No'} | ${prop.defaultValue || 'N/A'} | ${prop.description} |`;
    }).join('\n');

    return {
      content: [
        {
          type: 'text',
          text: `# ${componentName} Props\n\n| Name | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n${propsTable}`
        }
      ]
    };
  }

  /**
   * Get code examples for a component
   */
  async getComponentExamples(componentName: string, exampleType?: string) {
    const component = this.componentsDatabase.get(componentName);
    
    if (!component) {
      return {
        content: [
          {
            type: 'text',
            text: `Component "${componentName}" not found.`
          }
        ]
      };
    }

    const filteredExamples = exampleType 
      ? component.examples.filter(example => example.type === exampleType)
      : component.examples;

    if (filteredExamples.length === 0) {
      return {
        content: [
          {
            type: 'text',
            text: `No examples found for ${componentName}${exampleType ? ` of type "${exampleType}"` : ''}.`
          }
        ]
      };
    }

    const examplesContent = filteredExamples.map(example => 
      `## ${example.title}\n\n${example.description}\n\n\`\`\`tsx\n${example.code}\n\`\`\``
    ).join('\n\n');

    return {
      content: [
        {
          type: 'text',
          text: `# ${componentName} Examples\n\n${examplesContent}`
        }
      ]
    };
  }
}
