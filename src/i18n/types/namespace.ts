export interface Namespace {
  readonly common: {
    readonly back: string;
    readonly next: string;
    readonly finish: string;
    readonly skipGuide: string;
    readonly search: string;
    readonly select: string;
  };
  readonly navigation: {
    readonly tasks: string;
    readonly settings: string;
  };
  readonly settings: {
    readonly title: string;
    readonly sections: {
      readonly general: {
        readonly label: string;
        readonly language: {
          readonly label: string;
        };
      };
      readonly lookAndFeel: {
        readonly label: string;
        readonly theme: {
          readonly label: string;
          readonly light: string;
          readonly dark: string;
          readonly custom: string;
        };
        readonly customizeColors: string;
        readonly colorLabels: {
          readonly primary: string;
          readonly accent: string;
          readonly danger: string;
          readonly background: string;
          readonly text: string;
        };
      };
      readonly about: {
        readonly label: string;
        readonly autoSave: {
          readonly label: string;
          readonly description: string;
        };
        readonly dataStorage: {
          readonly label: string;
          readonly description: string;
        };
        readonly version: {
          readonly label: string;
        };
        readonly howToUse: {
          readonly label: string;
          readonly items: {
            readonly addTask: string;
            readonly completeTask: string;
            readonly editTask: string;
            readonly reorderTasks: string;
            readonly searchTasks: string;
            readonly deleteTask: string;
          };
        };
        readonly keyboardShortcuts: {
          readonly label: string;
          readonly enter: string;
          readonly doubleClick: string;
        };
        readonly guide: {
          readonly label: string;
          readonly description: string;
          readonly startButton: string;
        };
        readonly author: {
          readonly label: string;
          readonly name: string;
        };
        readonly repository: {
          readonly label: string;
        };
      };
    };
  };
  readonly tasks: {
    readonly title: string;
    readonly addNewTask: string;
    readonly searchPlaceholder: string;
  };
  readonly guide: {
    readonly stepCounter: string;
    readonly steps: {
      readonly welcome: {
        readonly title: string;
        readonly description: string;
      };
      readonly taskInput: {
        readonly title: string;
        readonly description: string;
      };
      readonly taskList: {
        readonly title: string;
        readonly description: string;
      };
      readonly taskActions: {
        readonly title: string;
        readonly description: string;
      };
      readonly search: {
        readonly title: string;
        readonly description: string;
      };
      readonly tabs: {
        readonly title: string;
        readonly description: string;
      };
      readonly settingsIntro: {
        readonly title: string;
        readonly description: string;
      };
      readonly settingsGeneral: {
        readonly title: string;
        readonly description: string;
      };
      readonly settingsLookAndFeel: {
        readonly title: string;
        readonly description: string;
      };
      readonly settingsAbout: {
        readonly title: string;
        readonly description: string;
      };
      readonly complete: {
        readonly title: string;
        readonly description: string;
      };
    };
  };
}

export type NamespaceKey<T = Namespace> = T extends readonly (infer U)[]
  ? `${number}${NamespaceKey<U> extends never ? '' : `.${NamespaceKey<U>}`}`
  : T extends object
    ? {
        [K in keyof T & string]: T[K] extends string ? `${K}` : `${K}.${NamespaceKey<T[K]>}`;
      }[keyof T & string]
    : never;
