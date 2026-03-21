import type { Namespace } from '@/i18n/types/namespace';

export const sk: Namespace = {
  common: {
    back: 'Späť',
    next: 'Ďalej',
    finish: 'Dokončiť',
    skipGuide: 'Preskočiť sprievodcu',
    search: 'Hľadať...',
    select: 'Vybrať...',
  },
  navigation: {
    tasks: 'Úlohy',
    projects: 'Projects',
    settings: 'Nastavenia',
  },
  settings: {
    title: 'Nastavenia',
    sections: {
      general: {
        label: 'Všeobecné',
        language: {
          label: 'Jazyk',
        },
      },
      lookAndFeel: {
        label: 'Vzhľad',
        theme: {
          label: 'Motív',
          light: 'Svetlý',
          dark: 'Tmavý',
          custom: 'Vlastný',
        },
        customizeColors: 'Prispôsobiť farby',
        colorLabels: {
          primary: 'Primárny',
          accent: 'Akcent',
          danger: 'Nebezpečenstvo',
          background: 'Pozadie',
          text: 'Text',
        },
      },
      about: {
        label: 'O aplikácii',
        autoSave: {
          label: 'Automatické ukladanie',
          description:
            'Vaše úlohy sa automaticky ukladajú do lokálneho úložiska každé 3 sekundy. Manuálne ukladanie nie je potrebné.',
        },
        dataStorage: {
          label: 'Úložisko dát',
          description:
            'Všetky údaje sú uložené lokálne vo vašom prehliadači. Vaše úlohy sú súkromné a nikdy nie sú odosielané na žiadny server.',
        },
        version: {
          label: 'Verzia',
        },
        howToUse: {
          label: 'Ako používať',
          items: {
            addTask: 'Zadajte úlohu a stlačte {{key}} alebo kliknite na + pre pridanie',
            completeTask: 'Kliknite na ikonu kruhu, aby ste označili úlohu ako dokončenú',
            editTask: 'Dvojitým kliknutím na text úlohy ho upravíte',
            reorderTasks: 'Presuňte úchyt na zmenu poradia úloh',
            searchTasks: 'Použite vyhľadávacie pole na filtrovanie úloh',
            deleteTask: 'Kliknite na ikonu koša na odstránenie úlohy',
          },
        },
        keyboardShortcuts: {
          label: 'Klávesové skratky',
          enter: '{{key}} — Pridať novú úlohu alebo uložiť upravenú úlohu',
          doubleClick: '{{key}} — Upraviť text úlohy',
        },
        guide: {
          label: 'Interaktívny sprievodca',
          description: 'Nový v Taskacz? Prejdite si rýchleho sprievodcu a naučte sa základy.',
          startButton: 'Spustiť sprievodcu',
        },
        author: {
          label: 'Autor',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Repozitár',
        },
      },
    },
  },
  tasks: {
    title: 'Moje úlohy',
    addNewTask: 'Pridať novú úlohu',
    searchPlaceholder: 'Hľadať...',
  },
  projects: {
    title: 'Projects',
    addNewProject: 'Add new project',
    colorLabel: 'Color',
    emptyState: 'No projects yet. Create one below.',
    noProject: 'No Project',
    searchPlaceholder: 'Search projects...',
    assignProject: 'Assign Project',
  },
  guide: {
    stepCounter: 'Krok {{current}} z {{total}}',
    steps: {
      welcome: {
        title: 'Vitajte v Taskacz!',
        description:
          'Dovoľte nám ukázať vám aplikáciu. Tento rýchly sprievodca vám pomôže začať spravovať vaše úlohy.',
      },
      taskInput: {
        title: 'Pridávanie nových úloh',
        description:
          'Zadajte svoju úlohu tu a stlačte Enter alebo kliknite na +, aby ste ju pridali do zoznamu.',
      },
      taskList: {
        title: 'Váš zoznam úloh',
        description:
          'Všetky vaše úlohy sa zobrazia tu. Presuňte úchyt vľavo na ich preusporiadanie.',
      },
      taskActions: {
        title: 'Akcie s úlohami',
        description:
          'Kliknite na kruh pre dokončenie. Dvojitý klik na úpravu. Kôš na odstránenie.',
      },
      search: {
        title: 'Hľadať úlohy',
        description:
          'Použite vyhľadávacie pole na rýchle nájdenie úloh zadaním kľúčových slov.',
      },
      tabs: {
        title: 'Navigácia',
        description:
          'Použite bočný panel na prepínanie medzi Úlohami a Nastaveniami. Prejdite kurzorom na ikony pre zobrazenie tipov.',
      },
      settingsIntro: {
        title: 'Nastavenia',
        description:
          'Preskúmajme Nastavenia. Kliknite na Ďalej pre otvorenie karty Nastavenia.',
      },
      settingsGeneral: {
        title: 'Všeobecné nastavenia',
        description:
          'Tu môžete vidieť informácie o automatickom ukladaní a úložisku dát.',
      },
      settingsLookAndFeel: {
        title: 'Vzhľad',
        description:
          'Vyberte medzi Svetlým, Tmavým alebo vytvorte vlastný motív s personalizovanými farbami.',
      },
      settingsAbout: {
        title: 'O aplikácii a pomoc',
        description:
          'Nájdite dokumentáciu pomoci, klávesové skratky a kedykoľvek tu reštartujte tohto sprievodcu.',
      },
      complete: {
        title: 'Všetko je pripravené!',
        description:
          'Teraz poznáte všetko základné. Užívajte si Taskacz! Sprievodcu môžete reštartovať cez Nastavenia > O aplikácii.',
      },
    },
  },
};
