import type { Namespace } from '@/i18n/types/namespace';

export const no: Namespace = {
  common: {
    back: 'Tilbake',
    next: 'Neste',
    finish: 'Fullfør',
    skipGuide: 'Hopp over veiledning',
    search: 'Søk...',
    select: 'Velg...',
  },
  navigation: {
    tasks: 'Oppgaver',
    settings: 'Innstillinger',
  },
  settings: {
    title: 'Innstillinger',
    sections: {
      general: {
        label: 'Generelt',
        language: {
          label: 'Språk',
        },
      },
      lookAndFeel: {
        label: 'Utseende',
        theme: {
          label: 'Tema',
          light: 'Lyst',
          dark: 'Mørkt',
          custom: 'Tilpasset',
        },
        customizeColors: 'Tilpass farger',
        colorLabels: {
          primary: 'Primær',
          accent: 'Aksent',
          danger: 'Fare',
          background: 'Bakgrunn',
          text: 'Tekst',
        },
      },
      about: {
        label: 'Om',
        autoSave: {
          label: 'Automatisk lagring',
          description:
            'Oppgavene dine lagres automatisk til lokal lagring hvert 3. sekund. Ingen manuell lagring er nødvendig.',
        },
        dataStorage: {
          label: 'Datalagring',
          description:
            'Alle data lagres lokalt i nettleseren din. Oppgavene dine er private og sendes aldri til noen server.',
        },
        version: {
          label: 'Versjon',
        },
        howToUse: {
          label: 'Slik bruker du',
          items: {
            addTask: 'Skriv en oppgave og trykk {{key}} eller klikk + for å legge til',
            completeTask: 'Klikk på sirkelikonet for å merke en oppgave som fullført',
            editTask: 'Dobbeltklikk på oppgaveteksten for å redigere den',
            reorderTasks: 'Dra i håndtaket for å omorganisere oppgaver',
            searchTasks: 'Bruk søkeboksen for å filtrere oppgaver',
            deleteTask: 'Klikk på søppelikonet for å slette en oppgave',
          },
        },
        keyboardShortcuts: {
          label: 'Tastatursnarveier',
          enter: '{{key}} — Legg til ny oppgave eller lagre redigert oppgave',
          doubleClick: '{{key}} — Rediger oppgavetekst',
        },
        guide: {
          label: 'Interaktiv veiledning',
          description: 'Ny i Taskacz? Ta en rask omvisning for å lære det grunnleggende.',
          startButton: 'Start veiledning',
        },
        author: {
          label: 'Forfatter',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Arkiv',
        },
      },
    },
  },
  tasks: {
    title: 'Mine oppgaver',
    addNewTask: 'Legg til ny oppgave',
    searchPlaceholder: 'Søk...',
  },
  guide: {
    stepCounter: 'Trinn {{current}} av {{total}}',
    steps: {
      welcome: {
        title: 'Velkommen til Taskacz!',
        description:
          'La oss vise deg rundt. Denne raske veiledningen hjelper deg å komme i gang med å administrere oppgavene dine.',
      },
      taskInput: {
        title: 'Legg til nye oppgaver',
        description:
          'Skriv oppgaven din her og trykk Enter eller klikk på + for å legge den til i listen.',
      },
      taskList: {
        title: 'Oppgavelisten din',
        description:
          'Alle oppgavene dine vises her. Dra i håndtaket til venstre for å omorganisere dem.',
      },
      taskActions: {
        title: 'Oppgavehandlinger',
        description:
          'Klikk på sirkelen for å fullføre. Dobbeltklikk for å redigere. Søppel for å slette.',
      },
      search: {
        title: 'Søk etter oppgaver',
        description: 'Bruk søkeboksen for raskt å finne oppgaver ved å skrive nøkkelord.',
      },
      tabs: {
        title: 'Navigasjon',
        description:
          'Bruk sidefeltet for å bytte mellom Oppgaver og Innstillinger. Hold musepekeren over ikoner for å se verktøytips.',
      },
      settingsIntro: {
        title: 'Innstillinger',
        description: 'La oss utforske Innstillinger. Klikk Neste for å åpne Innstillinger-fanen.',
      },
      settingsGeneral: {
        title: 'Generelle innstillinger',
        description: 'Her kan du se informasjon om automatisk lagring og datalagringsfunksjoner.',
      },
      settingsLookAndFeel: {
        title: 'Utseende',
        description:
          'Velg mellom Lyst, Mørkt eller lag ditt eget tilpassede tema med personlige farger.',
      },
      settingsAbout: {
        title: 'Om og hjelp',
        description:
          'Finn hjelpedokumentasjon, tastatursnarveier og start denne veiledningen på nytt når som helst herfra.',
      },
      complete: {
        title: 'Alt er klart!',
        description:
          'Nå kan du alt det grunnleggende. Nyt Taskacz! Du kan starte veiledningen på nytt fra Innstillinger > Om.',
      },
    },
  },
};
