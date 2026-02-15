import type { Namespace } from '@/i18n/types/namespace';

export const hr: Namespace = {
  common: {
    back: 'Natrag',
    next: 'Dalje',
    finish: 'Završi',
    skipGuide: 'Preskoči vodič',
    search: 'Traži...',
    select: 'Odaberi...',
  },
  navigation: {
    tasks: 'Zadaci',
    settings: 'Postavke',
  },
  settings: {
    title: 'Postavke',
    sections: {
      general: {
        label: 'Opće',
        language: {
          label: 'Jezik',
        },
      },
      lookAndFeel: {
        label: 'Izgled',
        theme: {
          label: 'Tema',
          light: 'Svijetla',
          dark: 'Tamna',
          custom: 'Prilagođena',
        },
        customizeColors: 'Prilagodi boje',
        colorLabels: {
          primary: 'Primarna',
          accent: 'Naglasak',
          danger: 'Opasnost',
          background: 'Pozadina',
          text: 'Tekst',
        },
      },
      about: {
        label: 'O aplikaciji',
        autoSave: {
          label: 'Automatsko spremanje',
          description:
            'Vaši zadaci automatski se spremaju u lokalno pohranište svakih 3 sekunde. Ručno spremanje nije potrebno.',
        },
        dataStorage: {
          label: 'Pohrana podataka',
          description:
            'Svi podaci pohranjeni su lokalno u vašem pregledniku. Vaši zadaci su privatni i nikada se ne šalju na nikakav poslužitelj.',
        },
        version: {
          label: 'Verzija',
        },
        howToUse: {
          label: 'Kako koristiti',
          items: {
            addTask: 'Upišite zadatak i pritisnite {{key}} ili kliknite + za dodavanje',
            completeTask: 'Kliknite ikonu kruga za označavanje zadatka kao završenog',
            editTask: 'Dvostruki klik na tekst zadatka za uređivanje',
            reorderTasks: 'Povucite ručku za promjenu redoslijeda zadataka',
            searchTasks: 'Koristite polje za pretraživanje za filtriranje zadataka',
            deleteTask: 'Kliknite ikonu koša za brisanje zadatka',
          },
        },
        keyboardShortcuts: {
          label: 'Tipkovni prečaci',
          enter: '{{key}} — Dodaj novi zadatak ili spremi uređeni zadatak',
          doubleClick: '{{key}} — Uredi tekst zadatka',
        },
        guide: {
          label: 'Interaktivni vodič',
          description: 'Novi u Taskacz? Prođite kroz brzi vodič i naučite osnove.',
          startButton: 'Pokreni vodič',
        },
        author: {
          label: 'Autor',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Repozitorij',
        },
      },
    },
  },
  tasks: {
    title: 'Moji zadaci',
    addNewTask: 'Dodaj novi zadatak',
    searchPlaceholder: 'Traži...',
  },
  guide: {
    stepCounter: 'Korak {{current}} od {{total}}',
    steps: {
      welcome: {
        title: 'Dobrodošli u Taskacz!',
        description:
          'Dopustite nam da vam pokažemo aplikaciju. Ovaj brzi vodič pomoći će vam da počnete upravljati zadacima.',
      },
      taskInput: {
        title: 'Dodavanje novih zadataka',
        description:
          'Upišite ovdje svoj zadatak i pritisnite Enter ili kliknite +, da ga dodate na popis.',
      },
      taskList: {
        title: 'Vaš popis zadataka',
        description:
          'Svi vaši zadaci prikazuju se ovdje. Povucite ručku lijevo za promjenu redoslijeda.',
      },
      taskActions: {
        title: 'Radnje sa zadacima',
        description:
          'Kliknite krug za završetak. Dvostruki klik za uređivanje. Koš za brisanje.',
      },
      search: {
        title: 'Pretraži zadatke',
        description:
          'Koristite polje za pretraživanje za brzo pronalaženje zadataka unosom ključnih riječi.',
      },
      tabs: {
        title: 'Navigacija',
        description:
          'Koristite bočnu traku za prebacivanje između Zadataka i Postavki. Prijeđite kursorom preko ikona za savjete.',
      },
      settingsIntro: {
        title: 'Postavke',
        description:
          'Istražimo Postavke. Kliknite Dalje za otvaranje kartice Postavke.',
      },
      settingsGeneral: {
        title: 'Opće postavke',
        description:
          'Ovdje možete vidjeti informacije o automatskom spremanju i pohrani podataka.',
      },
      settingsLookAndFeel: {
        title: 'Izgled',
        description:
          'Odaberite između Svijetle, Tamne ili napravite vlastitu prilagođenu temu s personaliziranim bojama.',
      },
      settingsAbout: {
        title: 'O aplikaciji i pomoć',
        description:
          'Pronađite dokumentaciju za pomoć, tipkovne prečace i ponovo pokrenite ovaj vodič odavde.',
      },
      complete: {
        title: 'Sve je spremno!',
        description:
          'Sada znate sve osnove. Uživajte u Taskacz! Vodič možete ponovo pokrenuti iz Postavke > O aplikaciji.',
      },
    },
  },
};
