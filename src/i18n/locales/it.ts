import type { Namespace } from '@/i18n/types/namespace';

export const it: Namespace = {
  common: {
    back: 'Indietro',
    next: 'Avanti',
    finish: 'Fine',
    skipGuide: 'Salta guida',
    search: 'Cerca...',
    select: 'Seleziona...',
  },
  navigation: {
    tasks: 'Attività',
    projects: 'Projects',
    settings: 'Impostazioni',
  },
  settings: {
    title: 'Impostazioni',
    sections: {
      general: {
        label: 'Generale',
        language: {
          label: 'Lingua',
        },
      },
      lookAndFeel: {
        label: 'Aspetto',
        theme: {
          label: 'Tema',
          light: 'Chiaro',
          dark: 'Scuro',
          custom: 'Personalizzato',
        },
        customizeColors: 'Personalizza colori',
        colorLabels: {
          primary: 'Primario',
          accent: 'Accento',
          danger: 'Pericolo',
          background: 'Sfondo',
          text: 'Testo',
        },
      },
      about: {
        label: 'Informazioni',
        autoSave: {
          label: 'Salvataggio automatico',
          description:
            "Le tue attività vengono salvate automaticamente nell'archivio locale ogni 3 secondi. Nessun salvataggio manuale richiesto.",
        },
        dataStorage: {
          label: 'Archiviazione dati',
          description:
            'Tutti i dati vengono archiviati localmente nel tuo browser. Le tue attività sono private e non vengono mai inviate a nessun server.',
        },
        version: {
          label: 'Versione',
        },
        howToUse: {
          label: 'Come usare',
          items: {
            addTask: "Digita un'attività e premi {{key}} o clicca + per aggiungerla",
            completeTask:
              "Clicca sull'icona cerchio per contrassegnare un'attività come completata",
            editTask: "Doppio clic sul testo di un'attività per modificarla",
            reorderTasks: 'Trascina la maniglia per riordinare le attività',
            searchTasks: 'Usa la casella di ricerca per filtrare le attività',
            deleteTask: "Clicca sull'icona cestino per eliminare un'attività",
          },
        },
        keyboardShortcuts: {
          label: 'Scorciatoie da tastiera',
          enter: '{{key}} — Aggiungi nuova attività o salva attività modificata',
          doubleClick: '{{key}} — Modifica testo attività',
        },
        guide: {
          label: 'Guida interattiva',
          description: 'Nuovo su Taskacz? Fai un tour rapido per imparare le basi.',
          startButton: 'Avvia guida',
        },
        author: {
          label: 'Autore',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Repository',
        },
      },
    },
  },
  tasks: {
    title: 'Le mie attività',
    addNewTask: 'Aggiungi nuova attività',
    searchPlaceholder: 'Cerca...',
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
    stepCounter: 'Passo {{current}} di {{total}}',
    steps: {
      welcome: {
        title: 'Benvenuto in Taskacz!',
        description:
          'Lascia che ti mostriamo come funziona. Questa guida rapida ti aiuterà a iniziare a gestire le tue attività.',
      },
      taskInput: {
        title: 'Aggiungi nuove attività',
        description:
          'Digita la tua attività qui e premi Invio o clicca su + per aggiungerla alla tua lista.',
      },
      taskList: {
        title: 'La tua lista di attività',
        description:
          'Tutte le tue attività appaiono qui. Trascina la maniglia a sinistra per riordinarle.',
      },
      taskActions: {
        title: 'Azioni attività',
        description:
          'Clic sul cerchio per completare. Doppio clic per modificare. Cestino per eliminare.',
      },
      search: {
        title: 'Cerca attività',
        description:
          'Usa la casella di ricerca per trovare rapidamente le attività digitando parole chiave.',
      },
      tabs: {
        title: 'Navigazione',
        description:
          'Usa la barra laterale per passare tra Attività e Impostazioni. Passa il mouse sulle icone per vedere i tooltip.',
      },
      settingsIntro: {
        title: 'Impostazioni',
        description:
          'Esploriamo le Impostazioni. Clicca su Avanti per aprire la scheda Impostazioni.',
      },
      settingsGeneral: {
        title: 'Impostazioni generali',
        description:
          "Qui puoi vedere le informazioni sul salvataggio automatico e sull'archiviazione dei dati.",
      },
      settingsLookAndFeel: {
        title: 'Aspetto',
        description:
          'Scegli tra Chiaro, Scuro o crea il tuo tema personalizzato con colori personalizzati.',
      },
      settingsAbout: {
        title: 'Informazioni e Aiuto',
        description:
          'Trova documentazione di aiuto, scorciatoie da tastiera e riavvia questa guida da qui.',
      },
      complete: {
        title: 'Sei pronto!',
        description:
          'Ora conosci tutte le basi. Goditi Taskacz! Puoi riavviare questa guida da Impostazioni > Informazioni.',
      },
    },
  },
};
