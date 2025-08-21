import { ComponentGenerationSpec } from '../types.js';

/**
 * Generation Tools - Handles code generation for Fluent UI components
 * Generates components, hooks, styles, and types following v9 patterns
 */
export class GenerationTools {
  constructor() {}

  /**
   * Generate a complete Fluent UI v9 component implementation
   */
  async generateComponent(spec: ComponentGenerationSpec) {
    const { componentName, componentType = 'basic', props = [], slots = [] } = spec;

    // Generate all component files
    const componentFiles = {
      component: this.generateComponentFile(componentName, props, slots),
      hook: this.generateHookFile(componentName, props, slots),
      styles: this.generateStylesFile(componentName, slots),
      render: this.generateRenderFile(componentName, slots),
      types: this.generateTypesFile(componentName, props, slots),
      index: this.generateIndexFile(componentName),
    };

    const filesList = Object.entries(componentFiles)
      .map(([fileName, content]) => `## ${fileName}.tsx\n\n\`\`\`tsx\n${content}\n\`\`\``)
      .join('\n\n');

    return {
      content: [
        {
          type: 'text',
          text: `# ${componentName} Component Generation\n\nGenerated a complete Fluent UI v9 component with the following files:\n\n${filesList}`
        }
      ]
    };
  }

  /**
   * Generate component hook
   */
  async generateComponentHook(componentName: string) {
    const hookCode = this.generateHookFile(componentName, [], []);

    return {
      content: [
        {
          type: 'text',
          text: `# ${componentName} Hook\n\n\`\`\`tsx\n${hookCode}\n\`\`\``
        }
      ]
    };
  }

  /**
   * Generate component styles
   */
  async generateComponentStyles(componentName: string, slots: string[] = []) {
    const slotsInfo = slots.map(slot => ({ name: slot, element: 'div', required: false, description: `${slot} slot` }));
    const stylesCode = this.generateStylesFile(componentName, slotsInfo);

    return {
      content: [
        {
          type: 'text',
          text: `# ${componentName} Styles\n\n\`\`\`tsx\n${stylesCode}\n\`\`\``
        }
      ]
    };
  }

  /**
   * Generate the main component file
   */
  private generateComponentFile(componentName: string, props: any[], slots: any[]): string {
    return `import * as React from 'react';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { use${componentName}_unstable } from './use${componentName}';
import { render${componentName}_unstable } from './render${componentName}';
import { use${componentName}Styles_unstable } from './use${componentName}Styles.styles';
import type { ${componentName}Props } from './${componentName}.types';

/**
 * ${componentName} component provides ${componentName.toLowerCase()} functionality.
 */
export const ${componentName}: ForwardRefComponent<${componentName}Props> = React.forwardRef((props, ref) => {
  const state = use${componentName}_unstable(props, ref);

  use${componentName}Styles_unstable(state);

  return render${componentName}_unstable(state);
});

${componentName}.displayName = '${componentName}';`;
  }

  /**
   * Generate the component hook file
   */
  private generateHookFile(componentName: string, props: any[], slots: any[]): string {
    const slotDefinitions = slots.map(slot => 
      `    ${slot.name}: slot.${slot.required ? 'always' : 'optional'}(props.${slot.name}, {
      elementType: '${slot.element}',
    }),`
    ).join('\n');

    const propsDestructure = props.length > 0 
      ? `const {
    ${props.map(prop => prop.name).join(',\n    ')},
    ...restProps
  } = props;`
      : 'const { ...restProps } = props;';

    return `import * as React from 'react';
import { getIntrinsicElementProps, slot } from '@fluentui/react-utilities';
import type { ${componentName}Props, ${componentName}State } from './${componentName}.types';

/**
 * Create the state required to render ${componentName}.
 *
 * The returned state can be modified with hooks such as use${componentName}Styles_unstable,
 * before being passed to render${componentName}_unstable.
 *
 * @param props - props from this instance of ${componentName}
 * @param ref - reference to root HTMLDivElement of ${componentName}
 */
export const use${componentName}_unstable = (
  props: ${componentName}Props,
  ref: React.Ref<HTMLElement>,
): ${componentName}State => {
  ${propsDestructure}

  return {
    // Props passed to ${componentName}
${props.map(prop => `    ${prop.name},`).join('\n')}

    // Slots definition
    components: {
      root: 'div',
${slots.map(slot => `      ${slot.name}: '${slot.element}',`).join('\n')}
    },

    // Slots resolved
    root: slot.always(
      getIntrinsicElementProps('div', {
        ref,
        ...restProps,
      }),
      { elementType: 'div' },
    ),
${slotDefinitions}
  };
};`;
  }

  /**
   * Generate the styles file
   */
  private generateStylesFile(componentName: string, slots: any[]): string {
    const slotStyles = slots.map(slot => `
  ${slot.name}: {
    // Add styles for ${slot.name} slot
  },`).join('');

    return `import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';
import type { SlotClassNames } from '@fluentui/react-utilities';
import type { ${componentName}Slots, ${componentName}State } from './${componentName}.types';

export const ${componentName.toLowerCase()}ClassNames: SlotClassNames<${componentName}Slots> = {
  root: '${componentName.toLowerCase()}',
${slots.map(slot => `  ${slot.name}: '${componentName.toLowerCase()}__${slot.name}',`).join('\n')}
};

/**
 * Styles for the root slot
 */
const useRootStyles = makeStyles({
  base: {
    display: 'block',
    // Add base styles here
  },

  // Add variants here
});

${slots.map(slot => `
/**
 * Styles for the ${slot.name} slot
 */
const use${slot.name.charAt(0).toUpperCase() + slot.name.slice(1)}Styles = makeStyles({
  base: {
    // Add styles for ${slot.name}
  },
});`).join('')}

/**
 * Apply styling to the ${componentName} slots based on the state
 */
export const use${componentName}Styles_unstable = (state: ${componentName}State): ${componentName}State => {
  const rootStyles = useRootStyles();
${slots.map(slot => `  const ${slot.name}Styles = use${slot.name.charAt(0).toUpperCase() + slot.name.slice(1)}Styles();`).join('\n')}

  state.root.className = mergeClasses(
    ${componentName.toLowerCase()}ClassNames.root,
    rootStyles.base,
    state.root.className,
  );

${slots.map(slot => `  if (state.${slot.name}) {
    state.${slot.name}.className = mergeClasses(
      ${componentName.toLowerCase()}ClassNames.${slot.name},
      ${slot.name}Styles.base,
      state.${slot.name}.className,
    );
  }`).join('\n\n')}

  return state;
};`;
  }

  /**
   * Generate the render function file
   */
  private generateRenderFile(componentName: string, slots: any[]): string {
    const slotRenders = slots.map(slot => 
      `      {state.${slot.name} && <state.${slot.name} />}`
    ).join('\n');

    return `/** @jsxRuntime automatic */
/** @jsxImportSource @fluentui/react-jsx-runtime */

import { assertSlots } from '@fluentui/react-utilities';
import type { ${componentName}State, ${componentName}Slots } from './${componentName}.types';

/**
 * Render the final JSX of ${componentName}
 */
export const render${componentName}_unstable = (state: ${componentName}State) => {
  assertSlots<${componentName}Slots>(state);

  return (
    <state.root>
${slotRenders}
    </state.root>
  );
};`;
  }

  /**
   * Generate the types file
   */
  private generateTypesFile(componentName: string, props: any[], slots: any[]): string {
    const propDefinitions = props.map(prop => 
      `  /**
   * ${prop.description}
   */
  ${prop.name}${prop.required ? '' : '?'}: ${prop.type};`
    ).join('\n\n');

    const slotDefinitions = slots.map(slot => 
      `  /**
   * ${slot.description}
   */
  ${slot.name}${slot.required ? '' : '?'}: Slot<'${slot.element}'>;`
    ).join('\n\n');

    return `import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type ${componentName}Slots = {
  /**
   * Root element of the ${componentName}.
   */
  root: NonNullable<Slot<'div'>>;

${slotDefinitions}
};

/**
 * ${componentName} Props
 */
export type ${componentName}Props = ComponentProps<${componentName}Slots> & {
${propDefinitions}
};

/**
 * State used in rendering ${componentName}
 */
export type ${componentName}State = ComponentState<${componentName}Slots> & 
  Required<Pick<${componentName}Props, ${props.filter(p => p.required).map(p => `'${p.name}'`).join(' | ') || 'never'}>> &
  Pick<${componentName}Props, ${props.filter(p => !p.required).map(p => `'${p.name}'`).join(' | ') || 'never'}>;`;
  }

  /**
   * Generate the index file
   */
  private generateIndexFile(componentName: string): string {
    return `export { ${componentName} } from './${componentName}';
export type { ${componentName}Props, ${componentName}Slots, ${componentName}State } from './${componentName}.types';
export { render${componentName}_unstable } from './render${componentName}';
export { use${componentName}_unstable } from './use${componentName}';
export { ${componentName.toLowerCase()}ClassNames, use${componentName}Styles_unstable } from './use${componentName}Styles.styles';`;
  }

  /**
   * Generate a custom hook based on Fluent UI patterns
   */
  async generateCustomHook(hookName: string, functionality: string) {
    const hookCode = `import * as React from 'react';

/**
 * ${hookName} provides ${functionality} functionality.
 */
export const ${hookName} = () => {
  // TODO: Implement hook logic
  
  return {
    // Return hook interface
  };
};`;

    return {
      content: [
        {
          type: 'text',
          text: `# ${hookName}\n\n\`\`\`tsx\n${hookCode}\n\`\`\``
        }
      ]
    };
  }

  /**
   * Generate a component template with specific patterns
   */
  async generateComponentTemplate(templateType: 'form-input' | 'layout' | 'feedback' | 'navigation') {
    const templates = {
      'form-input': this.generateFormInputTemplate(),
      'layout': this.generateLayoutTemplate(),
      'feedback': this.generateFeedbackTemplate(),
      'navigation': this.generateNavigationTemplate(),
    };

    const template = templates[templateType];

    return {
      content: [
        {
          type: 'text',
          text: `# ${templateType.charAt(0).toUpperCase() + templateType.slice(1)} Component Template\n\n\`\`\`tsx\n${template}\n\`\`\``
        }
      ]
    };
  }

  private generateFormInputTemplate(): string {
    return `// Form Input Component Template
import * as React from 'react';
import { useField_unstable } from '@fluentui/react-field';
import { makeStyles } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
  input: {
    padding: tokens.spacingHorizontalM,
    borderRadius: tokens.borderRadiusSmall,
    border: \`\${tokens.strokeWidthThin} solid \${tokens.colorNeutralStroke1}\`,
    fontSize: tokens.fontSizeBase300,
    '&:focus': {
      borderColor: tokens.colorBrandStroke1,
      outline: \`\${tokens.strokeWidthThick} solid \${tokens.colorBrandStroke1}\`,
    },
  },
});

export const CustomFormInput = (props) => {
  const field = useField_unstable(props);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {field.label && <label>{field.label}</label>}
      <input className={styles.input} {...field.inputProps} />
      {field.validationMessage}
    </div>
  );
};`;
  }

  private generateLayoutTemplate(): string {
    return `// Layout Component Template
import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    gap: tokens.spacingHorizontalM,
    padding: tokens.spacingHorizontalL,
  },
  aside: {
    flex: '0 0 200px',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingHorizontalM,
  },
  main: {
    flex: '1',
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingHorizontalL,
  },
});

export const CustomLayout = ({ aside, children }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {aside && <div className={styles.aside}>{aside}</div>}
      <main className={styles.main}>{children}</main>
    </div>
  );
};`;
  }

  private generateFeedbackTemplate(): string {
    return `// Feedback Component Template
import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';

const useStyles = makeStyles({
  root: {
    padding: tokens.spacingHorizontalM,
    borderRadius: tokens.borderRadiusSmall,
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  success: {
    backgroundColor: tokens.colorStatusSuccessBackground1,
    color: tokens.colorStatusSuccessForeground1,
  },
  error: {
    backgroundColor: tokens.colorStatusErrorBackground1,
    color: tokens.colorStatusErrorForeground1,
  },
  warning: {
    backgroundColor: tokens.colorStatusWarningBackground1,
    color: tokens.colorStatusWarningForeground1,
  },
  icon: {
    fontSize: tokens.fontSizeBase400,
  },
});

export const CustomFeedback = ({ intent = 'success', icon, children }) => {
  const styles = useStyles();

  return (
    <div className={mergeClasses(styles.root, styles[intent])}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </div>
  );
};`;
  }

  private generateNavigationTemplate(): string {
    return `// Navigation Component Template
import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: tokens.spacingHorizontalS,
  },
  item: {
    padding: \`\${tokens.spacingVerticalS} \${tokens.spacingHorizontalM}\`,
    borderRadius: tokens.borderRadiusSmall,
    textDecoration: 'none',
    color: tokens.colorNeutralForeground1,
    '&:hover': {
      backgroundColor: tokens.colorNeutralBackground2,
    },
  },
  active: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorBrandForeground1,
  },
});

export const CustomNavigation = ({ items }) => {
  const styles = useStyles();

  return (
    <nav>
      <ul className={styles.root}>
        {items.map((item, index) => (
          <li key={index}>
            <a 
              href={item.href}
              className={mergeClasses(
                styles.item,
                item.active && styles.active
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};`;
  }
}
