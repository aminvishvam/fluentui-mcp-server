import { ValidationResult, ValidationError, ValidationWarning } from '../types.js';

/**
 * Validation Tools - Handles design and code validation
 * Validates components against Fluent UI specifications and best practices
 */
export class ValidationTools {
  constructor() {}

  /**
   * Validate component implementation against Fluent UI design specifications
   */
  async validateComponentDesign(componentCode: string, componentName?: string) {
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];
    const suggestions: string[] = [];

    // Check for proper Fluent UI imports
    this.validateImports(componentCode, errors, warnings);

    // Check component structure
    this.validateComponentStructure(componentCode, errors, warnings);

    // Check for proper slot usage
    this.validateSlotUsage(componentCode, errors, warnings);

    // Check for proper styling patterns
    this.validateStylingPatterns(componentCode, errors, warnings);

    // Check for proper TypeScript usage
    this.validateTypeScript(componentCode, errors, warnings);

    // Generate suggestions
    this.generateSuggestions(componentCode, suggestions);

    const isValid = errors.length === 0;
    const resultText = this.formatValidationResult(isValid, errors, warnings, suggestions);

    return {
      content: [
        {
          type: 'text',
          text: resultText
        }
      ]
    };
  }

  /**
   * Check component code for accessibility compliance
   */
  async checkAccessibility(componentCode: string) {
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];
    const suggestions: string[] = [];

    // Check for semantic HTML
    this.validateSemanticHTML(componentCode, errors, warnings);

    // Check for ARIA attributes
    this.validateARIA(componentCode, errors, warnings);

    // Check for keyboard accessibility
    this.validateKeyboardAccessibility(componentCode, errors, warnings);

    // Check for focus management
    this.validateFocusManagement(componentCode, errors, warnings);

    // Check for color contrast considerations
    this.validateColorContrast(componentCode, warnings);

    // Generate accessibility suggestions
    this.generateAccessibilitySuggestions(componentCode, suggestions);

    const isValid = errors.length === 0;
    const resultText = this.formatAccessibilityResult(isValid, errors, warnings, suggestions);

    return {
      content: [
        {
          type: 'text',
          text: resultText
        }
      ]
    };
  }

  /**
   * Analyze component code for adherence to Fluent UI v9 patterns
   */
  async analyzeComponentPatterns(componentCode: string) {
    const analysis = {
      patterns: [] as string[],
      antiPatterns: [] as string[],
      suggestions: [] as string[],
      score: 0
    };

    // Check for v9 patterns
    this.analyzeV9Patterns(componentCode, analysis);

    // Check for anti-patterns
    this.analyzeAntiPatterns(componentCode, analysis);

    // Calculate score
    analysis.score = Math.max(0, 100 - (analysis.antiPatterns.length * 10));

    const resultText = this.formatPatternAnalysis(analysis);

    return {
      content: [
        {
          type: 'text',
          text: resultText
        }
      ]
    };
  }

  private validateImports(code: string, errors: ValidationError[], warnings: ValidationWarning[]) {
    // Check for proper Fluent UI imports
    if (!code.includes('@fluentui/react-utilities') && code.includes('slot.')) {
      errors.push({
        type: 'import',
        message: 'Missing @fluentui/react-utilities import for slot utilities',
        severity: 'error'
      });
    }

    if (!code.includes('@fluentui/react-theme') && code.includes('tokens.')) {
      errors.push({
        type: 'import',
        message: 'Missing @fluentui/react-theme import for design tokens',
        severity: 'error'
      });
    }

    if (!code.includes('@griffel/react') && code.includes('makeStyles')) {
      errors.push({
        type: 'import',
        message: 'Missing @griffel/react import for makeStyles',
        severity: 'error'
      });
    }

    // Check for deprecated imports
    if (code.includes('@fluentui/react/lib/')) {
      warnings.push({
        type: 'import',
        message: 'Using deprecated v8 import paths. Migrate to v9 imports.',
        severity: 'warning'
      });
    }
  }

  private validateComponentStructure(code: string, errors: ValidationError[], warnings: ValidationWarning[]) {
    // Check for proper component structure
    if (!code.includes('React.forwardRef')) {
      warnings.push({
        type: 'structure',
        message: 'Component should use React.forwardRef for proper ref forwarding',
        severity: 'warning',
        suggestion: 'Wrap component with React.forwardRef'
      });
    }

    // Check for proper hook usage
    if (!code.includes('_unstable')) {
      warnings.push({
        type: 'structure',
        message: 'Component should use Fluent UI hook patterns (use*_unstable)',
        severity: 'warning'
      });
    }

    // Check for displayName
    if (!code.includes('.displayName')) {
      warnings.push({
        type: 'structure',
        message: 'Component should have displayName set for better debugging',
        severity: 'warning',
        suggestion: 'Add Component.displayName = "ComponentName";'
      });
    }
  }

  private validateSlotUsage(code: string, errors: ValidationError[], warnings: ValidationWarning[]) {
    // Check for proper slot patterns
    if (code.includes('slot.always') || code.includes('slot.optional')) {
      if (!code.includes('assertSlots')) {
        warnings.push({
          type: 'slots',
          message: 'Use assertSlots in render function for better type safety',
          severity: 'warning'
        });
      }
    }

    // Check for slot naming
    const slotMatches = code.match(/slot\.(always|optional)\(([^,]+),/g);
    if (slotMatches) {
      slotMatches.forEach(match => {
        if (!match.includes('props.')) {
          warnings.push({
            type: 'slots',
            message: 'Slot should reference props object',
            severity: 'warning'
          });
        }
      });
    }
  }

  private validateStylingPatterns(code: string, errors: ValidationError[], warnings: ValidationWarning[]) {
    // Check for proper makeStyles usage
    if (code.includes('makeStyles') && !code.includes('mergeClasses')) {
      warnings.push({
        type: 'styling',
        message: 'makeStyles should be used with mergeClasses for proper class application',
        severity: 'warning'
      });
    }

    // Check for hardcoded values
    const hardcodedColors = code.match(/#[0-9a-f]{3,6}/gi);
    if (hardcodedColors) {
      warnings.push({
        type: 'styling',
        message: `Found hardcoded colors: ${hardcodedColors.join(', ')}. Use design tokens instead.`,
        severity: 'warning',
        suggestion: 'Replace with tokens.color* values'
      });
    }

    // Check for inline styles
    if (code.includes('style={{')) {
      warnings.push({
        type: 'styling',
        message: 'Avoid inline styles. Use makeStyles for better performance.',
        severity: 'warning'
      });
    }
  }

  private validateTypeScript(code: string, errors: ValidationError[], warnings: ValidationWarning[]) {
    // Check for proper type imports
    if (code.includes('type ') && !code.includes('import type')) {
      warnings.push({
        type: 'typescript',
        message: 'Use "import type" for type-only imports',
        severity: 'warning'
      });
    }

    // Check for any types
    if (code.includes(': any')) {
      warnings.push({
        type: 'typescript',
        message: 'Avoid using "any" type. Use proper TypeScript types.',
        severity: 'warning'
      });
    }
  }

  private validateSemanticHTML(code: string, errors: ValidationError[], warnings: ValidationWarning[]) {
    // Check for proper semantic elements
    if (code.includes('<div') && code.includes('button')) {
      warnings.push({
        type: 'accessibility',
        message: 'Consider using semantic button element instead of div for interactive elements',
        severity: 'warning'
      });
    }

    // Check for heading structure
    if (code.includes('<h1') && code.includes('<h3') && !code.includes('<h2')) {
      warnings.push({
        type: 'accessibility',
        message: 'Maintain proper heading hierarchy (h1 -> h2 -> h3)',
        severity: 'warning'
      });
    }
  }

  private validateARIA(code: string, errors: ValidationError[], warnings: ValidationWarning[]) {
    // Check for aria-label on interactive elements without text
    if (code.includes('onClick') && !code.includes('aria-label') && !code.includes('children')) {
      warnings.push({
        type: 'accessibility',
        message: 'Interactive elements without visible text should have aria-label',
        severity: 'warning'
      });
    }

    // Check for proper ARIA attributes
    if (code.includes('role=') && !code.includes('aria-')) {
      warnings.push({
        type: 'accessibility',
        message: 'Elements with custom roles should have appropriate ARIA attributes',
        severity: 'warning'
      });
    }
  }

  private validateKeyboardAccessibility(code: string, errors: ValidationError[], warnings: ValidationWarning[]) {
    // Check for keyboard event handlers
    if (code.includes('onClick') && !code.includes('onKeyDown')) {
      warnings.push({
        type: 'accessibility',
        message: 'Interactive elements should handle keyboard events (onKeyDown)',
        severity: 'warning'
      });
    }

    // Check for tabIndex usage
    if (code.includes('tabIndex={-1}') && !code.includes('focus')) {
      warnings.push({
        type: 'accessibility',
        message: 'Elements with tabIndex={-1} should have programmatic focus management',
        severity: 'warning'
      });
    }
  }

  private validateFocusManagement(code: string, errors: ValidationError[], warnings: ValidationWarning[]) {
    // Check for focus management patterns
    if (code.includes('useRef') && code.includes('.focus()')) {
      // Good pattern
    } else if (code.includes('modal') || code.includes('dialog')) {
      warnings.push({
        type: 'accessibility',
        message: 'Modal/Dialog components should manage focus properly',
        severity: 'warning'
      });
    }
  }

  private validateColorContrast(code: string, warnings: ValidationWarning[]) {
    // Check for potential contrast issues
    if (code.includes('colorNeutralForeground3') && code.includes('colorNeutralBackground1')) {
      warnings.push({
        type: 'accessibility',
        message: 'Check color contrast ratio meets WCAG AA standards (4.5:1)',
        severity: 'warning'
      });
    }
  }

  private generateSuggestions(code: string, suggestions: string[]) {
    if (!code.includes('use') && code.includes('React.useState')) {
      suggestions.push('Consider extracting component logic into a custom hook');
    }

    if (code.includes('className=') && !code.includes('mergeClasses')) {
      suggestions.push('Use mergeClasses for combining CSS classes');
    }

    if (!code.includes('tokens.') && code.includes('makeStyles')) {
      suggestions.push('Use design tokens from @fluentui/react-theme for consistent styling');
    }
  }

  private generateAccessibilitySuggestions(code: string, suggestions: string[]) {
    suggestions.push('Test with screen readers and keyboard-only navigation');
    suggestions.push('Ensure color is not the only way to convey information');
    suggestions.push('Use semantic HTML elements when possible');
    suggestions.push('Provide meaningful focus indicators');
  }

  private analyzeV9Patterns(code: string, analysis: any) {
    // Check for good v9 patterns
    if (code.includes('_unstable')) {
      analysis.patterns.push('✅ Uses Fluent UI v9 hook patterns');
    }

    if (code.includes('makeStyles') && code.includes('tokens.')) {
      analysis.patterns.push('✅ Uses design tokens with makeStyles');
    }

    if (code.includes('slot.always') || code.includes('slot.optional')) {
      analysis.patterns.push('✅ Uses proper slot patterns');
    }

    if (code.includes('ComponentProps') && code.includes('ComponentState')) {
      analysis.patterns.push('✅ Uses proper TypeScript patterns');
    }

    if (code.includes('React.forwardRef')) {
      analysis.patterns.push('✅ Uses React.forwardRef for proper ref handling');
    }
  }

  private analyzeAntiPatterns(code: string, analysis: any) {
    // Check for anti-patterns
    if (code.includes('style={{')) {
      analysis.antiPatterns.push('❌ Uses inline styles instead of makeStyles');
      analysis.suggestions.push('Replace inline styles with makeStyles');
    }

    if (code.includes('#') && /color:\s*['"]#[0-9a-f]{3,6}['"]/.test(code)) {
      analysis.antiPatterns.push('❌ Uses hardcoded colors instead of design tokens');
      analysis.suggestions.push('Replace hardcoded colors with design tokens');
    }

    if (code.includes('@fluentui/react/lib/')) {
      analysis.antiPatterns.push('❌ Uses deprecated v8 import paths');
      analysis.suggestions.push('Update to v9 import paths');
    }

    if (code.includes(': any')) {
      analysis.antiPatterns.push('❌ Uses "any" type instead of proper TypeScript types');
      analysis.suggestions.push('Add proper TypeScript types');
    }
  }

  private formatValidationResult(isValid: boolean, errors: ValidationError[], warnings: ValidationWarning[], suggestions: string[]): string {
    let result = `# Component Design Validation\n\n`;

    if (isValid) {
      result += `✅ **Validation Passed** - No critical issues found!\n\n`;
    } else {
      result += `❌ **Validation Failed** - Found ${errors.length} error(s)\n\n`;
    }

    if (errors.length > 0) {
      result += `## Errors\n\n`;
      errors.forEach(error => {
        result += `- **${error.type}**: ${error.message}\n`;
      });
      result += '\n';
    }

    if (warnings.length > 0) {
      result += `## Warnings\n\n`;
      warnings.forEach(warning => {
        result += `- **${warning.type}**: ${warning.message}`;
        if (warning.suggestion) {
          result += ` (Suggestion: ${warning.suggestion})`;
        }
        result += '\n';
      });
      result += '\n';
    }

    if (suggestions.length > 0) {
      result += `## Suggestions\n\n`;
      suggestions.forEach(suggestion => {
        result += `- ${suggestion}\n`;
      });
    }

    return result;
  }

  private formatAccessibilityResult(isValid: boolean, errors: ValidationError[], warnings: ValidationWarning[], suggestions: string[]): string {
    let result = `# Accessibility Compliance Check\n\n`;

    if (isValid) {
      result += `✅ **Accessibility Check Passed** - No critical accessibility issues found!\n\n`;
    } else {
      result += `❌ **Accessibility Issues Found** - ${errors.length} error(s) need attention\n\n`;
    }

    if (errors.length > 0) {
      result += `## Critical Issues\n\n`;
      errors.forEach(error => {
        result += `- ${error.message}\n`;
      });
      result += '\n';
    }

    if (warnings.length > 0) {
      result += `## Recommendations\n\n`;
      warnings.forEach(warning => {
        result += `- ${warning.message}\n`;
      });
      result += '\n';
    }

    if (suggestions.length > 0) {
      result += `## Best Practices\n\n`;
      suggestions.forEach(suggestion => {
        result += `- ${suggestion}\n`;
      });
    }

    return result;
  }

  private formatPatternAnalysis(analysis: any): string {
    let result = `# Fluent UI v9 Pattern Analysis\n\n`;
    
    result += `**Score: ${analysis.score}/100**\n\n`;

    if (analysis.patterns.length > 0) {
      result += `## Good Patterns Found\n\n`;
      analysis.patterns.forEach((pattern: string) => {
        result += `${pattern}\n`;
      });
      result += '\n';
    }

    if (analysis.antiPatterns.length > 0) {
      result += `## Anti-Patterns Found\n\n`;
      analysis.antiPatterns.forEach((antiPattern: string) => {
        result += `${antiPattern}\n`;
      });
      result += '\n';
    }

    if (analysis.suggestions.length > 0) {
      result += `## Improvement Suggestions\n\n`;
      analysis.suggestions.forEach((suggestion: string) => {
        result += `- ${suggestion}\n`;
      });
    }

    return result;
  }
}
