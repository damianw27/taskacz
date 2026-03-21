import type { Namespace } from '@/i18n/types/namespace';

export const sv: Namespace = {
  common: {
    back: 'Tillbaka',
    next: 'Nästa',
    finish: 'Slutför',
    skipGuide: 'Hoppa över guide',
    search: 'Sök...',
    select: 'Välj...',
  },
  navigation: {
    tasks: 'Uppgifter',
    projects: 'Projects',
    settings: 'Inställningar',
  },
  settings: {
    title: 'Inställningar',
    sections: {
      general: {
        label: 'Allmänt',
        language: {
          label: 'Språk',
        },
      },
      lookAndFeel: {
        label: 'Utseende',
        theme: {
          label: 'Tema',
          light: 'Ljust',
          dark: 'Mörkt',
          custom: 'Anpassat',
        },
        customizeColors: 'Anpassa färger',
        colorLabels: {
          primary: 'Primär',
          accent: 'Accent',
          danger: 'Fara',
          background: 'Bakgrund',
          text: 'Text',
        },
      },
      about: {
        label: 'Om',
        autoSave: {
          label: 'Autospara',
          description: 'Dina uppgifter sparas automatiskt till lokal lagring var 3:e sekund. Ingen manuell sparning krävs.',
        },
        dataStorage: {
          label: 'Datalagring',
          description: 'All data lagras lokalt i din webbläsare. Dina uppgifter är privata och skickas aldrig till någon server.',
        },
        version: {
          label: 'Version',
        },
        howToUse: {
          label: 'Hur man använder',
          items: {
            addTask: 'Skriv en uppgift och tryck {{key}} eller klicka + för att lägga till',
            completeTask: 'Klicka på cirkelikonen för att markera en uppgift som klar',
            editTask: 'Dubbelklicka på uppgiftstexten för att redigera den',
            reorderTasks: 'Dra i handtaget för att ordna om uppgifter',
            searchTasks: 'Använd sökrutan för att filtrera uppgifter',
            deleteTask: 'Klicka på papperskorgsikonen för att ta bort en uppgift',
          },
        },
        keyboardShortcuts: {
          label: 'Tangentbordsgenvägar',
          enter: '{{key}} — Lägg till ny uppgift eller spara redigerad uppgift',
          doubleClick: '{{key}} — Redigera uppgiftstext',
        },
        guide: {
          label: 'Interaktiv guide',
          description: 'Ny i Taskacz? Ta en snabb rundtur för att lära dig grunderna.',
          startButton: 'Starta guide',
        },
        author: {
          label: 'Författare',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Arkiv',
        },
      },
    },
  },
  tasks: {
    title: 'Mina uppgifter',
    addNewTask: 'Lägg till ny uppgift',
    searchPlaceholder: 'Sök...',
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
    stepCounter: 'Steg {{current}} av {{total}}',
    steps: {
      welcome: {
        title: 'Välkommen till Taskacz!',
        description: 'Låt oss visa dig runt. Denna snabbguide hjälper dig att komma igång med att hantera dina uppgifter.',
      },
      taskInput: {
        title: 'Lägg till nya uppgifter',
        description: 'Skriv din uppgift här och tryck Enter eller klicka på + för att lägga till den i listan.',
      },
      taskList: {
        title: 'Din uppgiftslista',
        description: 'Alla dina uppgifter visas här. Dra i handtaget till vänster för att ordna om dem.',
      },
      taskActions: {
        title: 'Uppgiftsåtgärder',
        description: 'Klicka på cirkeln för att slutföra. Dubbelklicka för att redigera. Papperskorgen för att ta bort.',
      },
      search: {
        title: 'Sök uppgifter',
        description: 'Använd sökrutan för att snabbt hitta uppgifter genom att skriva nyckelord.',
      },
      tabs: {
        title: 'Navigering',
        description: 'Använd sidofältet för att växla mellan Uppgifter och Inställningar. Håll muspekaren över ikoner för att se verktygstips.',
      },
      settingsIntro: {
        title: 'Inställningar',
        description: 'Låt oss utforska Inställningarna. Klicka på Nästa för att öppna fliken Inställningar.',
      },
      settingsGeneral: {
        title: 'Allmänna inställningar',
        description: 'Här kan du se information om autospara och datalagringsfunktioner.',
      },
      settingsLookAndFeel: {
        title: 'Utseende',
        description: 'Välj mellan Ljust, Mörkt eller skapa ditt eget anpassade tema med personliga färger.',
      },
      settingsAbout: {
        title: 'Om och hjälp',
        description: 'Hitta hjälpdokumentation, tangentbordsgenvägar och starta om denna guide när som helst härifrån.',
      },
      complete: {
        title: 'Allt är klart!',
        description: 'Nu kan du alla grunderna. Njut av Taskacz! Du kan starta om guiden från Inställningar > Om.',
      },
    },
  },
};
