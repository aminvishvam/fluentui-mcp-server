export interface ComponentInfo {
  name: string;
  category: 'inputs' | 'layout' | 'navigation' | 'surfaces' | 'feedback' | 'data-display';
  description: string;
  props: PropInfo[];
  slots: SlotInfo[];
  examples: CodeExample[];
  designSpecs: DesignSpecs;
  accessibility: AccessibilityInfo;
  migrationNotes?: MigrationNotes;
  packageName: string;
  since: string;
  status: 'stable' | 'preview' | 'deprecated';
}

export interface PropInfo {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  description: string;
  examples?: string[];
}

export interface SlotInfo {
  name: string;
  element: string;
  required: boolean;
  description: string;
  elementTypes?: string[];
}

export interface CodeExample {
  title: string;
  description: string;
  code: string;
  type: 'basic' | 'advanced' | 'customization' | 'accessibility';
  imports?: string[];
}

export interface DesignSpecs {
  sizes?: string[];
  appearances?: string[];
  shapes?: string[];
  variants?: string[];
  colors?: string[];
  orientations?: string[];
  figmaLink?: string;
}

export interface AccessibilityInfo {
  ariaRoles?: string[];
  keyboardSupport?: string[];
  screenReaderSupport: boolean;
  focusManagement?: string;
  guidelines?: string[];
}

export interface MigrationNotes {
  v8Component?: string;
  breakingChanges?: string[];
  migrationSteps?: string[];
  codemod?: string;
}

export interface ComponentGenerationSpec {
  componentName: string;
  componentType?: 'basic' | 'composite' | 'form-input' | 'layout';
  props?: PropInfo[];
  slots?: SlotInfo[];
}

export interface DesignToken {
  name: string;
  value: string;
  category: 'colors' | 'typography' | 'spacing' | 'shadows' | 'borders' | 'motion';
  description: string;
  usage?: string[];
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
  suggestions: string[];
}

export interface ValidationError {
  type: string;
  message: string;
  line?: number;
  column?: number;
  severity: 'error' | 'warning' | 'info';
}

export interface ValidationWarning {
  type: string;
  message: string;
  line?: number;
  column?: number;
  severity: 'error' | 'warning' | 'info';
  suggestion?: string;
}
