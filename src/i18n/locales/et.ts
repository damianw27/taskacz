import type { Namespace } from '@/i18n/types/namespace';

export const et: Namespace = {
  common: {
    back: 'Tagasi',
    next: 'Edasi',
    finish: 'Lõpeta',
    skipGuide: 'Jäta juhend vahele',
    search: 'Otsi...',
    select: 'Vali...',
  },
  navigation: {
    tasks: 'Ülesanded',
    settings: 'Seaded',
  },
  settings: {
    title: 'Seaded',
    sections: {
      general: {
        label: 'Üldine',
        language: {
          label: 'Keel',
        },
      },
      lookAndFeel: {
        label: 'Välimus',
        theme: {
          label: 'Teema',
          light: 'Hele',
          dark: 'Tume',
          custom: 'Kohandatud',
        },
        customizeColors: 'Kohanda värve',
        colorLabels: {
          primary: 'Esmane',
          accent: 'Aktsent',
          danger: 'Oht',
          background: 'Taust',
          text: 'Tekst',
        },
      },
      about: {
        label: 'Info',
        autoSave: {
          label: 'Automaatne salvestamine',
          description: 'Teie ülesanded salvestatakse automaatselt kohalikku salvestusruumi iga 3 sekundi järel. Käsitsi salvestamine pole vajalik.',
        },
        dataStorage: {
          label: 'Andmete salvestamine',
          description: 'Kõik andmed salvestatakse kohalikult teie brauserisse. Teie ülesanded on privaatsed ega saadeta kunagi ühelegi serverile.',
        },
        version: {
          label: 'Versioon',
        },
        howToUse: {
          label: 'Kuidas kasutada',
          items: {
            addTask: 'Sisesta ülesanne ja vajuta {{key}} või klõpsa + lisamiseks',
            completeTask: 'Klõpsa ringi ikoonil, et märkida ülesanne lõpetatuks',
            editTask: 'Topeltklõpsa ülesande tekstil selle muutmiseks',
            reorderTasks: 'Lohista käepidet ülesannete ümber järjestamiseks',
            searchTasks: 'Kasuta otsingukasti ülesannete filtreerimiseks',
            deleteTask: 'Klõpsa prügikasti ikoonil ülesande kustutamiseks',
          },
        },
        keyboardShortcuts: {
          label: 'Kiirklahvid',
          enter: '{{key}} — Lisa uus ülesanne või salvesta muudetud ülesanne',
          doubleClick: '{{key}} — Muuda ülesande teksti',
        },
        guide: {
          label: 'Interaktiivne juhend',
          description: 'Kasutad Taskacz esimest korda? Tutvu rakendusega kiirjuhendi abil.',
          startButton: 'Alusta juhendit',
        },
        author: {
          label: 'Autor',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Repositoorium',
        },
      },
    },
  },
  tasks: {
    title: 'Minu ülesanded',
    addNewTask: 'Lisa uus ülesanne',
    searchPlaceholder: 'Otsi...',
  },
  guide: {
    stepCounter: 'Samm {{current}} / {{total}}',
    steps: {
      welcome: {
        title: 'Tere tulemast Taskacz-i!',
        description: 'Tutvustame sulle rakendust. See lühijuhend aitab sul alustada ülesannete haldamisega.',
      },
      taskInput: {
        title: 'Lisa uusi ülesandeid',
        description: 'Sisesta siia oma ülesanne ja vajuta Enter või klõpsa +, et see loendisse lisada.',
      },
      taskList: {
        title: 'Sinu ülesannete loend',
        description: 'Kõik sinu ülesanded kuvatakse siin. Lohista vasakpoolset käepidet järjestuse muutmiseks.',
      },
      taskActions: {
        title: 'Ülesannete toimingud',
        description: 'Klõpsa ringil lõpetamiseks. Topeltklõps muutmiseks. Prügikast kustutamiseks.',
      },
      search: {
        title: 'Otsi ülesandeid',
        description: 'Kasuta otsingukasti, et leida ülesandeid kiiresti märksõnade sisestamise teel.',
      },
      tabs: {
        title: 'Navigeerimine',
        description: 'Kasuta külgriba Ülesannete ja Seadete vahel lülitumiseks. Vii hiir ikoonide kohale, et näha tööriistavihjeid.',
      },
      settingsIntro: {
        title: 'Seaded',
        description: 'Uurime Seadeid. Klõpsa Edasi, et avada Seadete vahekaart.',
      },
      settingsGeneral: {
        title: 'Üldised seaded',
        description: 'Siin saad vaadata teavet automaatse salvestamise ja andmete salvestamise kohta.',
      },
      settingsLookAndFeel: {
        title: 'Välimus',
        description: 'Vali Hele, Tume vahel või loo oma kohandatud teema personaliseeritud värvidega.',
      },
      settingsAbout: {
        title: 'Info ja abi',
        description: 'Leia abidokumentatsioon, kiirklahvid ja taaskäivita see juhend siit igal ajal.',
      },
      complete: {
        title: 'Kõik on valmis!',
        description: 'Nüüd tead kõiki põhitõdesid. Naudi Taskacz-i! Juhendi saad taaskäivitada Seaded > Info kaudu.',
      },
    },
  },
};
