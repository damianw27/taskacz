import type { Namespace } from '@/i18n/types/namespace';

export const sl: Namespace = {
  common: {
    back: 'Nazaj',
    next: 'Naprej',
    finish: 'Dokončaj',
    skipGuide: 'Preskoči vodnik',
    search: 'Iskanje...',
    select: 'Izberi...',
  },
  navigation: {
    tasks: 'Naloge',
    settings: 'Nastavitve',
  },
  settings: {
    title: 'Nastavitve',
    sections: {
      general: {
        label: 'Splošno',
        language: {
          label: 'Jezik',
        },
      },
      lookAndFeel: {
        label: 'Videz',
        theme: {
          label: 'Tema',
          light: 'Svetla',
          dark: 'Temna',
          custom: 'Po meri',
        },
        customizeColors: 'Prilagodi barve',
        colorLabels: {
          primary: 'Primarna',
          accent: 'Poudarek',
          danger: 'Nevarnost',
          background: 'Ozadje',
          text: 'Besedilo',
        },
      },
      about: {
        label: 'O aplikaciji',
        autoSave: {
          label: 'Samodejno shranjevanje',
          description:
            'Vaše naloge se samodejno shranijo v lokalno shrambo vsake 3 sekunde. Ročno shranjevanje ni potrebno.',
        },
        dataStorage: {
          label: 'Shranjevanje podatkov',
          description:
            'Vsi podatki so shranjeni lokalno v vašem brskalniku. Vaše naloge so zasebne in nikoli niso poslane na noben strežnik.',
        },
        version: {
          label: 'Različica',
        },
        howToUse: {
          label: 'Kako uporabljati',
          items: {
            addTask: 'Vnesite nalogo in pritisnite {{key}} ali kliknite +',
            completeTask: 'Kliknite ikono kroga za označitev naloge kot dokončane',
            editTask: 'Dvokliknite besedilo naloge za urejanje',
            reorderTasks: 'Povlecite ročico za spremembo vrstnega reda nalog',
            searchTasks: 'Uporabite iskalno polje za filtriranje nalog',
            deleteTask: 'Kliknite ikono koša za brisanje naloge',
          },
        },
        keyboardShortcuts: {
          label: 'Bljižnjice na tipkovnici',
          enter: '{{key}} — Dodaj novo nalogo ali shrani urejeno nalogo',
          doubleClick: '{{key}} — Uredi besedilo naloge',
        },
        guide: {
          label: 'Interaktivni vodnik',
          description: 'Ste novi v Taskacz? Oglejte si hiter vodnik in spoznajte osnove.',
          startButton: 'Začni vodnik',
        },
        author: {
          label: 'Avtor',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Repozitorij',
        },
      },
    },
  },
  tasks: {
    title: 'Moje naloge',
    addNewTask: 'Dodaj novo nalogo',
    searchPlaceholder: 'Iskanje...',
  },
  guide: {
    stepCounter: 'Korak {{current}} od {{total}}',
    steps: {
      welcome: {
        title: 'Dobrodošli v Taskacz!',
        description:
          'Dovolite nam, da vam pokažemo aplikacijo. Ta kratki vodnik vam bo pomagal začeti z upravljanjem nalog.',
      },
      taskInput: {
        title: 'Dodajanje novih nalog',
        description:
          'Vnesite svojo nalogo tukaj in pritisnite Enter ali kliknite +, da jo dodate na seznam.',
      },
      taskList: {
        title: 'Vaš seznam nalog',
        description:
          'Vse vaše naloge so prikazane tukaj. Povlecite ročico na levi strani za spremembo vrstnega reda.',
      },
      taskActions: {
        title: 'Dejanja z nalogami',
        description:
          'Kliknite krog za dokončanje. Dvoklik za urejanje. Koš za brisanje.',
      },
      search: {
        title: 'Iskanje nalog',
        description:
          'Uporabite iskalno polje za hitro iskanje nalog z vnosom ključnih besed.',
      },
      tabs: {
        title: 'Navigacija',
        description:
          'Uporabite stransko vrstico za preklapljanje med Nalogami in Nastavitvami. Premaknite miško nad ikone za orodne napotke.',
      },
      settingsIntro: {
        title: 'Nastavitve',
        description:
          'Raziščimo Nastavitve. Kliknite Naprej za odpiranje zavihka Nastavitve.',
      },
      settingsGeneral: {
        title: 'Splošne nastavitve',
        description:
          'Tukaj si lahko ogledate informacije o samodejnem shranjevanju in shranjevanju podatkov.',
      },
      settingsLookAndFeel: {
        title: 'Videz',
        description:
          'Izberite med Svetlo, Temno ali ustvarite svojo temo po meri s personaliziranimi barvami.',
      },
      settingsAbout: {
        title: 'O aplikaciji in pomoč',
        description:
          'Poiščite dokumentacijo za pomoč, bljižnjice na tipkovnici in kadarkoli od tukaj znova zaženite ta vodnik.',
      },
      complete: {
        title: 'Vse je pripravljeno!',
        description:
          'Zdaj poznate vse osnove. Uživajte v Taskacz! Vodnik lahko znova zaženete iz Nastavitve > O aplikaciji.',
      },
    },
  },
};
