import type { Namespace } from '@/i18n/types/namespace';

export const lv: Namespace = {
  common: {
    back: 'Atpakaļ',
    next: 'Tālāk',
    finish: 'Pabeigt',
    skipGuide: 'Izlaist ceļvedi',
    search: 'Meklēt...',
    select: 'Atlasīt...',
  },
  navigation: {
    tasks: 'Uzdevumi',
    projects: 'Projects',
    settings: 'Iestatījumi',
  },
  settings: {
    title: 'Iestatījumi',
    sections: {
      general: {
        label: 'Vispārīgi',
        language: {
          label: 'Valoda',
        },
      },
      lookAndFeel: {
        label: 'Izskats',
        theme: {
          label: 'Motīvs',
          light: 'Gaišs',
          dark: 'Tumšs',
          custom: 'Pielāgots',
        },
        customizeColors: 'Pielāgot krāsas',
        colorLabels: {
          primary: 'Primārā',
          accent: 'Akcents',
          danger: 'Briesmas',
          background: 'Fons',
          text: 'Teksts',
        },
      },
      about: {
        label: 'Par',
        autoSave: {
          label: 'Automātiskā saglabāšana',
          description:
            'Jūsu uzdevumi tiek automātiski saglabāti lokālajā krātuvē ik pēc 3 sekundēm. Manuāla saglabāšana nav nepieciešama.',
        },
        dataStorage: {
          label: 'Datu krātuve',
          description:
            'Visi dati tiek glabāti lokāli jūsu pārlūkprogrammā. Jūsu uzdevumi ir privāti un nekad netiek nosūtīti uz serveri.',
        },
        version: {
          label: 'Versija',
        },
        howToUse: {
          label: 'Kā lietot',
          items: {
            addTask: 'Ievadiet uzdevumu un nospiediet {{key}} vai noklikšķiniet +, lai pievienotu',
            completeTask: 'Noklikšķiniet uz apļa ikonas, lai atzīmētu uzdevumu kā pabeigtu',
            editTask: 'Veiciet dubultklikšķi uz uzdevuma teksta, lai to rediģētu',
            reorderTasks: 'Velciet rokturi, lai pārkārtotu uzdevumus',
            searchTasks: 'Izmantojiet meklēšanas lodziņu, lai filtrētu uzdevumus',
            deleteTask: 'Noklikšķiniet uz miskastes ikonas, lai dzēstu uzdevumu',
          },
        },
        keyboardShortcuts: {
          label: 'Tastatūras īsceļi',
          enter: '{{key}} — Pievienot jaunu uzdevumu vai saglabāt rediģētu uzdevumu',
          doubleClick: '{{key}} — Rediģēt uzdevuma tekstu',
        },
        guide: {
          label: 'Interaktīvais ceļvedis',
          description:
            'Pirmoreiz izmantojat Taskacz? Veiciet īsu apskati, lai iepazītos ar pamatiem.',
          startButton: 'Sākt ceļvedi',
        },
        author: {
          label: 'Autors',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Repozitorijs',
        },
      },
    },
  },
  tasks: {
    title: 'Mani uzdevumi',
    addNewTask: 'Pievienot jaunu uzdevumu',
    searchPlaceholder: 'Meklēt...',
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
    stepCounter: '{{current}}. solis no {{total}}',
    steps: {
      welcome: {
        title: 'Laipni lūdzam Taskacz!',
        description:
          'Ļaujiet iepazīstināt ar lietotni. Šis īsais ceļvedis palīdzēs jums sākt pārvaldīt uzdevumus.',
      },
      taskInput: {
        title: 'Pievienot jaunus uzdevumus',
        description:
          'Ievadiet savu uzdevumu šeit un nospiediet Enter vai noklikšķiniet +, lai to pievienotu sarakstam.',
      },
      taskList: {
        title: 'Jūsu uzdevumu saraksts',
        description:
          'Visi jūsu uzdevumi tiek rādīti šeit. Velciet rokturi pa kreisi, lai tos pārkārtotu.',
      },
      taskActions: {
        title: 'Uzdevumu darbības',
        description:
          'Noklikšķiniet uz apļa, lai pabeigtu. Dubultklikšķis rediģēšanai. Miskaste dzēšanai.',
      },
      search: {
        title: 'Meklēt uzdevumus',
        description:
          'Izmantojiet meklēšanas lodziņu, lai ātri atrastu uzdevumus, ievadot atslēgvārdus.',
      },
      tabs: {
        title: 'Navigācija',
        description:
          'Izmantojiet sānu joslu, lai pārslēgtos starp Uzdevumiem un Iestatījumiem. Novietojiet peli virs ikonām, lai redzētu padomus.',
      },
      settingsIntro: {
        title: 'Iestatījumi',
        description: 'Izpētīsim Iestatījumus. Noklikšķiniet Tālāk, lai atvērtu Iestatījumu cilni.',
      },
      settingsGeneral: {
        title: 'Vispārīgie iestatījumi',
        description: 'Šeit varat skatīt informāciju par automātisko saglabāšanu un datu krātuvi.',
      },
      settingsLookAndFeel: {
        title: 'Izskats',
        description:
          'Izvēlieties starp Gaišo, Tumšo vai izveidojiet savu pielāgoto motīvu ar personalizētām krāsām.',
      },
      settingsAbout: {
        title: 'Par un palīdzība',
        description:
          'Atrodiet palīdzības dokumentāciju, tastatūras īsceļus un jebkurā laikā no šejienes atsāknējiet šo ceļvedi.',
      },
      complete: {
        title: 'Viss ir gatavs!',
        description:
          'Tagad jūs zināt visus pamatus. Izbaudiet Taskacz! Ceļvedi var atsāknēt no Iestatījumi > Par.',
      },
    },
  },
};
