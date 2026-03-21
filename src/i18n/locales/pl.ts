import type { Namespace } from '@/i18n/types/namespace';

export const pl: Namespace = {
  common: {
    back: 'Wstecz',
    next: 'Dalej',
    finish: 'Zakończ',
    skipGuide: 'Pomiń przewodnik',
    search: 'Szukaj...',
    select: 'Wybierz...',
  },
  navigation: {
    tasks: 'Zadania',
    projects: 'Projects',
    settings: 'Ustawienia',
  },
  settings: {
    title: 'Ustawienia',
    sections: {
      general: {
        label: 'Ogólne',
        language: {
          label: 'Język',
        },
      },
      lookAndFeel: {
        label: 'Wygląd',
        theme: {
          label: 'Motyw',
          light: 'Jasny',
          dark: 'Ciemny',
          custom: 'Niestandardowy',
        },
        customizeColors: 'Dostosuj kolory',
        colorLabels: {
          primary: 'Podstawowy',
          accent: 'Akcent',
          danger: 'Niebezpieczeństwo',
          background: 'Tło',
          text: 'Tekst',
        },
      },
      about: {
        label: 'O aplikacji',
        autoSave: {
          label: 'Automatyczne zapisywanie',
          description:
            'Twoje zadania są automatycznie zapisywane do lokalnego magazynu co 3 sekundy. Ręczne zapisywanie nie jest wymagane.',
        },
        dataStorage: {
          label: 'Przechowywanie danych',
          description:
            'Wszystkie dane są przechowywane lokalnie w Twojej przeglądarce. Twoje zadania są prywatne i nigdy nie są wysyłane na żaden serwer.',
        },
        version: {
          label: 'Wersja',
        },
        howToUse: {
          label: 'Jak używać',
          items: {
            addTask: 'Wpisz zadanie i naciśnij {{key}} lub kliknij +, aby je dodać',
            completeTask: 'Kliknij ikonę koła, aby oznaczyć zadanie jako ukończone',
            editTask: 'Kliknij dwukrotnie tekst zadania, aby go edytować',
            reorderTasks: 'Przeciągnij uchwyt, aby zmienić kolejność zadań',
            searchTasks: 'Użyj pola wyszukiwania, aby filtrować zadania',
            deleteTask: 'Kliknij ikonę kosza, aby usunąć zadanie',
          },
        },
        keyboardShortcuts: {
          label: 'Skróty klawiszowe',
          enter: '{{key}} — Dodaj nowe zadanie lub zapisz edytowane zadanie',
          doubleClick: '{{key}} — Edytuj tekst zadania',
        },
        guide: {
          label: 'Interaktywny przewodnik',
          description: 'Nowy w Taskacz? Zrób szybki przewodnik, aby poznać podstawy.',
          startButton: 'Rozpocznij przewodnik',
        },
        author: {
          label: 'Autor',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Repozytorium',
        },
      },
    },
  },
  tasks: {
    title: 'Moje zadania',
    addNewTask: 'Dodaj nowe zadanie',
    searchPlaceholder: 'Szukaj...',
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
        title: 'Witaj w Taskacz!',
        description:
          'Pozwól, że pokażemy Ci aplikację. Ten krótki przewodnik pomoże Ci zacząć zarządzać zadaniami.',
      },
      taskInput: {
        title: 'Dodawanie nowych zadań',
        description:
          'Wpisz tutaj swoje zadanie i naciśnij Enter lub kliknij +, aby dodać je do listy.',
      },
      taskList: {
        title: 'Twoja lista zadań',
        description:
          'Wszystkie Twoje zadania pojawiają się tutaj. Przeciągnij uchwyt po lewej, aby zmienić kolejność.',
      },
      taskActions: {
        title: 'Akcje zadań',
        description:
          'Kliknij koło, aby zakończyć. Dwukrotne kliknięcie, aby edytować. Kosz, aby usunąć.',
      },
      search: {
        title: 'Wyszukaj zadania',
        description: 'Użyj pola wyszukiwania, aby szybko znaleźć zadania wpisując słowa kluczowe.',
      },
      tabs: {
        title: 'Nawigacja',
        description:
          'Używaj paska bocznego do przełączania między Zadaniami a Ustawieniami. Najedź na ikony, aby zobaczyć podpowiedzi.',
      },
      settingsIntro: {
        title: 'Ustawienia',
        description: 'Odkryjmy Ustawienia. Kliknij Dalej, aby otworzyć kartę Ustawienia.',
      },
      settingsGeneral: {
        title: 'Ustawienia ogólne',
        description:
          'Tutaj możesz zobaczyć informacje o automatycznym zapisywaniu i przechowywaniu danych.',
      },
      settingsLookAndFeel: {
        title: 'Wygląd',
        description:
          'Wybierz między Jasnym, Ciemnym lub stwórz własny niestandardowy motyw z spersonalizowanymi kolorami.',
      },
      settingsAbout: {
        title: 'O aplikacji i pomoc',
        description:
          'Znajdź dokumentację pomocy, skróty klawiszowe i uruchom ponownie ten przewodnik stąd.',
      },
      complete: {
        title: 'Wszystko gotowe!',
        description:
          'Teraz znasz wszystkie podstawy. Ciesz się Taskacz! Możesz ponownie uruchomić przewodnik z Ustawienia > O aplikacji.',
      },
    },
  },
};
