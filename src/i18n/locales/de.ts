import type { Namespace } from '@/i18n/types/namespace';

export const de: Namespace = {
  common: {
    back: 'Zurück',
    next: 'Weiter',
    finish: 'Fertig',
    skipGuide: 'Anleitung überspringen',
    search: 'Suchen...',
    select: 'Auswählen...',
  },
  navigation: {
    tasks: 'Aufgaben',
    settings: 'Einstellungen',
  },
  settings: {
    title: 'Einstellungen',
    sections: {
      general: {
        label: 'Allgemein',
        language: {
          label: 'Sprache',
        },
      },
      lookAndFeel: {
        label: 'Aussehen',
        theme: {
          label: 'Design',
          light: 'Hell',
          dark: 'Dunkel',
          custom: 'Benutzerdefiniert',
        },
        customizeColors: 'Farben anpassen',
        colorLabels: {
          primary: 'Primär',
          accent: 'Akzent',
          danger: 'Gefahr',
          background: 'Hintergrund',
          text: 'Text',
        },
      },
      about: {
        label: 'Über',
        autoSave: {
          label: 'Auto-Speichern',
          description:
            'Ihre Aufgaben werden automatisch alle 3 Sekunden im lokalen Speicher gespeichert. Kein manuelles Speichern erforderlich.',
        },
        dataStorage: {
          label: 'Datenspeicherung',
          description:
            'Alle Daten werden lokal in Ihrem Browser gespeichert. Ihre Aufgaben sind privat und werden nie an einen Server gesendet.',
        },
        version: {
          label: 'Version',
        },
        howToUse: {
          label: 'Verwendung',
          items: {
            addTask: 'Aufgabe eingeben und {{key}} drücken oder + klicken',
            completeTask: 'Kreissymbol klicken, um Aufgabe abzuschließen',
            editTask: 'Doppelklick auf Aufgabentext zum Bearbeiten',
            reorderTasks: 'Griffpunkt ziehen, um Aufgaben neu zu ordnen',
            searchTasks: 'Suchfeld verwenden, um Aufgaben zu filtern',
            deleteTask: 'Papierkorbsymbol klicken, um Aufgabe zu löschen',
          },
        },
        keyboardShortcuts: {
          label: 'Tastenkombinationen',
          enter: '{{key}} — Neue Aufgabe hinzufügen oder gespeicherte Aufgabe speichern',
          doubleClick: '{{key}} — Aufgabentext bearbeiten',
        },
        guide: {
          label: 'Interaktive Anleitung',
          description: 'Neu bei Taskacz? Machen Sie eine kurze Tour.',
          startButton: 'Anleitung starten',
        },
        author: {
          label: 'Autor',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Repository',
        },
      },
    },
  },
  tasks: {
    title: 'Meine Aufgaben',
    addNewTask: 'Neue Aufgabe hinzufügen',
    searchPlaceholder: 'Suchen...',
  },
  guide: {
    stepCounter: 'Schritt {{current}} von {{total}}',
    steps: {
      welcome: {
        title: 'Willkommen bei Taskacz!',
        description:
          'Lassen Sie uns Ihnen zeigen, wie es funktioniert. Diese kurze Anleitung hilft Ihnen beim Einstieg.',
      },
      taskInput: {
        title: 'Neue Aufgaben hinzufügen',
        description:
          'Geben Sie Ihre Aufgabe hier ein und drücken Sie Enter oder klicken Sie auf +.',
      },
      taskList: {
        title: 'Ihre Aufgabenliste',
        description:
          'Alle Ihre Aufgaben erscheinen hier. Ziehen Sie den Griffpunkt links, um sie neu zu ordnen.',
      },
      taskActions: {
        title: 'Aufgabenaktionen',
        description:
          'Kreis klicken zum Abschließen. Doppelklick zum Bearbeiten. Papierkorb zum Löschen.',
      },
      search: {
        title: 'Aufgaben suchen',
        description: 'Verwenden Sie das Suchfeld, um Aufgaben schnell zu finden.',
      },
      tabs: {
        title: 'Navigation',
        description:
          'Verwenden Sie die Seitenleiste, um zwischen Aufgaben und Einstellungen zu wechseln. Fahren Sie über Symbole für Tooltips.',
      },
      settingsIntro: {
        title: 'Einstellungen',
        description: 'Lassen Sie uns die Einstellungen erkunden. Klicken Sie auf Weiter.',
      },
      settingsGeneral: {
        title: 'Allgemeine Einstellungen',
        description:
          'Hier sehen Sie Informationen zu Auto-Speichern und Datenspeicherung.',
      },
      settingsLookAndFeel: {
        title: 'Aussehen',
        description:
          'Wählen Sie zwischen Hell, Dunkel oder erstellen Sie ein eigenes Design.',
      },
      settingsAbout: {
        title: 'Über & Hilfe',
        description:
          'Hier finden Sie Hilfedokumentation und Tastenkombinationen.',
      },
      complete: {
        title: 'Alles erledigt!',
        description:
          'Sie kennen jetzt alle Grundlagen. Viel Spaß mit Taskacz! Über Einstellungen > Über neu starten.',
      },
    },
  },
};
