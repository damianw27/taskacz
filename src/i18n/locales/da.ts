import type { Namespace } from '@/i18n/types/namespace';

export const da: Namespace = {
  common: {
    back: 'Tilbage',
    next: 'Næste',
    finish: 'Afslut',
    skipGuide: 'Spring vejledning over',
    search: 'Søg...',
    select: 'Vælg...',
  },
  navigation: {
    tasks: 'Opgaver',
    projects: 'Projects',
    settings: 'Indstillinger',
  },
  settings: {
    title: 'Indstillinger',
    sections: {
      general: {
        label: 'Generelt',
        language: {
          label: 'Sprog',
        },
      },
      lookAndFeel: {
        label: 'Udseende',
        theme: {
          label: 'Tema',
          light: 'Lyst',
          dark: 'Mørkt',
          custom: 'Tilpasset',
        },
        customizeColors: 'Tilpas farver',
        colorLabels: {
          primary: 'Primær',
          accent: 'Accent',
          danger: 'Fare',
          background: 'Baggrund',
          text: 'Tekst',
        },
      },
      about: {
        label: 'Om',
        autoSave: {
          label: 'Automatisk gem',
          description: 'Dine opgaver gemmes automatisk til lokal lagring hvert 3. sekund. Manuel lagring er ikke nødvendig.',
        },
        dataStorage: {
          label: 'Datalagring',
          description: 'Alle data gemmes lokalt i din browser. Dine opgaver er private og sendes aldrig til nogen server.',
        },
        version: {
          label: 'Version',
        },
        howToUse: {
          label: 'Sådan bruges',
          items: {
            addTask: 'Indtast en opgave og tryk {{key}} eller klik + for at tilføje',
            completeTask: 'Klik på cirkelikonet for at markere en opgave som fuldført',
            editTask: 'Dobbeltklik på opgaveteksten for at redigere den',
            reorderTasks: 'Træk i håndtaget for at omarrangere opgaver',
            searchTasks: 'Brug søgefeltet til at filtrere opgaver',
            deleteTask: 'Klik på skraldespandsikonet for at slette en opgave',
          },
        },
        keyboardShortcuts: {
          label: 'Tastaturgenveje',
          enter: '{{key}} — Tilføj ny opgave eller gem redigeret opgave',
          doubleClick: '{{key}} — Rediger opgavetekst',
        },
        guide: {
          label: 'Interaktiv vejledning',
          description: 'Ny i Taskacz? Tag en hurtig rundvisning for at lære det grundlæggende.',
          startButton: 'Start vejledning',
        },
        author: {
          label: 'Forfatter',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Lager',
        },
      },
    },
  },
  tasks: {
    title: 'Mine opgaver',
    addNewTask: 'Tilføj ny opgave',
    searchPlaceholder: 'Søg...',
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
    stepCounter: 'Trin {{current}} af {{total}}',
    steps: {
      welcome: {
        title: 'Velkommen til Taskacz!',
        description: 'Lad os vise dig rundt. Denne hurtige vejledning hjælper dig med at komme i gang med at administrere dine opgaver.',
      },
      taskInput: {
        title: 'Tilføj nye opgaver',
        description: 'Indtast din opgave her og tryk Enter eller klik på + for at tilføje den til din liste.',
      },
      taskList: {
        title: 'Din opgaveliste',
        description: 'Alle dine opgaver vises her. Træk i håndtaget til venstre for at omarrangere dem.',
      },
      taskActions: {
        title: 'Opgavehandlinger',
        description: 'Klik på cirklen for at fuldføre. Dobbeltklik for at redigere. Skraldespand for at slette.',
      },
      search: {
        title: 'Søg opgaver',
        description: 'Brug søgefeltet til hurtigt at finde opgaver ved at skrive nøgleord.',
      },
      tabs: {
        title: 'Navigation',
        description: 'Brug sidebjælken til at skifte mellem Opgaver og Indstillinger. Hold musen over ikoner for at se værktøjstip.',
      },
      settingsIntro: {
        title: 'Indstillinger',
        description: 'Lad os udforske Indstillinger. Klik Næste for at åbne fanen Indstillinger.',
      },
      settingsGeneral: {
        title: 'Generelle indstillinger',
        description: 'Her kan du se oplysninger om automatisk gem og datalagringsfunktioner.',
      },
      settingsLookAndFeel: {
        title: 'Udseende',
        description: 'Vælg mellem Lyst, Mørkt eller opret dit eget tilpassede tema med personlige farver.',
      },
      settingsAbout: {
        title: 'Om og hjælp',
        description: 'Find hjælpedokumentation, tastaturgenveje og genstart denne vejledning når som helst herfra.',
      },
      complete: {
        title: 'Alt er klar!',
        description: 'Nu kender du alle grundlæggende funktioner. Nyd Taskacz! Du kan genstarte vejledningen fra Indstillinger > Om.',
      },
    },
  },
};
