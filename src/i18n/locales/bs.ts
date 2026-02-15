import type { Namespace } from '@/i18n/types/namespace';

export const bs: Namespace = {
  common: {
    back: 'Nazad',
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
        label: 'Opšte',
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
          accent: 'Akcenat',
          danger: 'Opasnost',
          background: 'Pozadina',
          text: 'Tekst',
        },
      },
      about: {
        label: 'O aplikaciji',
        autoSave: {
          label: 'Automatsko čuvanje',
          description:
            'Vaši zadaci se automatski čuvaju u lokalno skladište svakih 3 sekunde. Ručno čuvanje nije potrebno.',
        },
        dataStorage: {
          label: 'Pohrana podataka',
          description:
            'Svi podaci se čuvaju lokalno u vašem pregledaču. Vaši zadaci su privatni i nikada se ne šalju na nikakav server.',
        },
        version: {
          label: 'Verzija',
        },
        howToUse: {
          label: 'Kako koristiti',
          items: {
            addTask: 'Unesite zadatak i pritisnite {{key}} ili kliknite +',
            completeTask: 'Kliknite ikonu kruga da označite zadatak kao završen',
            editTask: 'Dvostruki klik na tekst zadatka za uređivanje',
            reorderTasks: 'Povucite ručku za promjenu redosljeda zadataka',
            searchTasks: 'Koristite polje za pretragu za filtriranje zadataka',
            deleteTask: 'Kliknite ikonu kante za brisanje zadatka',
          },
        },
        keyboardShortcuts: {
          label: 'Prečice na tastaturi',
          enter: '{{key}} — Dodaj novi zadatak ili sačuvaj uređeni zadatak',
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
          'Dozvolite nam da vam pokažemo aplikaciju. Ovaj kratki vodič pomoći će vam da počnete s upravljanjem zadacima.',
      },
      taskInput: {
        title: 'Dodavanje novih zadataka',
        description:
          'Unesite ovdje svoj zadatak i pritisnite Enter ili kliknite +, da ga dodate na listu.',
      },
      taskList: {
        title: 'Vaša lista zadataka',
        description:
          'Svi vaši zadaci prikazuju se ovdje. Povucite ručku lijevo za promjenu redosljeda.',
      },
      taskActions: {
        title: 'Radnje sa zadacima',
        description:
          'Kliknite krug za završetak. Dvostruki klik za uređivanje. Kanta za brisanje.',
      },
      search: {
        title: 'Pretraži zadatke',
        description:
          'Koristite polje za pretragu za brzo pronalaženje zadataka unosom ključnih riječi.',
      },
      tabs: {
        title: 'Navigacija',
        description:
          'Koristite bočnu traku za prebacivanje između Zadataka i Postavki. Pređite kursorom iznad ikona za savjete.',
      },
      settingsIntro: {
        title: 'Postavke',
        description:
          'Istražimo Postavke. Kliknite Dalje za otvaranje kartice Postavke.',
      },
      settingsGeneral: {
        title: 'Opšte postavke',
        description:
          'Ovdje možete vidjeti informacije o automatskom čuvanju i pohrani podataka.',
      },
      settingsLookAndFeel: {
        title: 'Izgled',
        description:
          'Odaberite između Svijetle, Tamne ili napravite vlastitu prilagođenu temu s personaliziranim bojama.',
      },
      settingsAbout: {
        title: 'O aplikaciji i pomoć',
        description:
          'Pronađite dokumentaciju za pomoć, prečice na tastaturi i ponovo pokrenite ovaj vodič odavde.',
      },
      complete: {
        title: 'Sve je spremno!',
        description:
          'Sada znate sve osnove. Uživajte u Taskacz! Vodič možete ponovo pokrenuti iz Postavke > O aplikaciji.',
      },
    },
  },
};
