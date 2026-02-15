import type { Namespace } from '@/i18n/types/namespace';

export const en: Namespace = {
  common: {
    back: 'Back',
    next: 'Next',
    finish: 'Finish',
    skipGuide: 'Skip Guide',
    search: 'Search...',
    select: 'Select...',
  },
  navigation: {
    tasks: 'Tasks',
    settings: 'Settings',
  },
  settings: {
    title: 'Settings',
    sections: {
      general: {
        label: 'General',
        language: {
          label: 'Language',
        },
      },
      lookAndFeel: {
        label: 'Look and Feel',
        theme: {
          label: 'Theme',
          light: 'Light',
          dark: 'Dark',
          custom: 'Custom',
        },
        customizeColors: 'Customize Colors',
        colorLabels: {
          primary: 'Primary',
          accent: 'Accent',
          danger: 'Danger',
          background: 'Background',
          text: 'Text',
        },
      },
      about: {
        label: 'About',
        autoSave: {
          label: 'Auto-Save',
          description:
            'Your tasks are automatically saved to local storage every 3 seconds. No manual saving required.',
        },
        dataStorage: {
          label: 'Data Storage',
          description:
            'All data is stored locally in your browser. Your tasks are private and never sent to any server.',
        },
        version: {
          label: 'Version',
        },
        howToUse: {
          label: 'How to Use',
          items: {
            addTask: 'Type a task and press {{key}} or click + to add it',
            completeTask: 'Click the circle icon to mark a task as complete',
            editTask: 'Double-click on a task text to edit it',
            reorderTasks: 'Drag the grip handle to reorder tasks',
            searchTasks: 'Use the search box to filter tasks',
            deleteTask: 'Click the trash icon to delete a task',
          },
        },
        keyboardShortcuts: {
          label: 'Keyboard Shortcuts',
          enter: '{{key}} — Add new task or save edited task',
          doubleClick: '{{key}} — Edit task text',
        },
        guide: {
          label: 'Interactive Guide',
          description: 'New to Taskacz? Take a quick tour to learn the basics.',
          startButton: 'Start Guide',
        },
        author: {
          label: 'Author',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Repository',
        },
      },
    },
  },
  tasks: {
    title: 'My Tasks',
    addNewTask: 'Add new task',
    searchPlaceholder: 'Search...',
  },
  guide: {
    stepCounter: 'Step {{current}} of {{total}}',
    steps: {
      welcome: {
        title: 'Welcome to Taskacz!',
        description:
          'Let us show you around. This quick guide will help you get started with managing your tasks.',
      },
      taskInput: {
        title: 'Add New Tasks',
        description:
          'Type your task here and press Enter or click the + button to add it to your list.',
      },
      taskList: {
        title: 'Your Task List',
        description:
          'All your tasks appear here. Drag the grip handle on the left to reorder them.',
      },
      taskActions: {
        title: 'Task Actions',
        description:
          'Click the circle to complete a task. Double-click text to edit. Use the trash icon to delete.',
      },
      search: {
        title: 'Search Tasks',
        description: 'Use the search box to quickly find tasks by typing keywords.',
      },
      tabs: {
        title: 'Navigation',
        description:
          'Use the sidebar to switch between Tasks and Settings. Hover over icons to see tooltips.',
      },
      settingsIntro: {
        title: 'Settings',
        description: "Let's explore the Settings. Click Next to open the Settings tab.",
      },
      settingsGeneral: {
        title: 'General Settings',
        description: 'Here you can see information about auto-save and data storage features.',
      },
      settingsLookAndFeel: {
        title: 'Look and Feel',
        description:
          'Choose between Light, Dark, or create your own Custom theme with personalized colors.',
      },
      settingsAbout: {
        title: 'About & Help',
        description:
          'Find help documentation, keyboard shortcuts, and restart this guide anytime from here.',
      },
      complete: {
        title: "You're All Set!",
        description:
          'You now know all the basics. Enjoy using Taskacz! You can restart this guide from Settings > About.',
      },
    },
  },
};
