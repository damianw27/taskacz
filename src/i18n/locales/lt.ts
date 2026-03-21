import type { Namespace } from '@/i18n/types/namespace';

export const lt: Namespace = {
  common: {
    back: 'Atgal',
    next: 'Toliau',
    finish: 'Baigti',
    skipGuide: 'Praleisti gidą',
    search: 'Ieškoti...',
    select: 'Pasirinkti...',
  },
  navigation: {
    tasks: 'Užduotys',
    projects: 'Projects',
    settings: 'Nustatymai',
  },
  settings: {
    title: 'Nustatymai',
    sections: {
      general: {
        label: 'Bendra',
        language: {
          label: 'Kalba',
        },
      },
      lookAndFeel: {
        label: 'Išvaizda',
        theme: {
          label: 'Tema',
          light: 'Šviesi',
          dark: 'Tamsi',
          custom: 'Pasirinktinė',
        },
        customizeColors: 'Tinkinti spalvas',
        colorLabels: {
          primary: 'Pagrindinė',
          accent: 'Akcentas',
          danger: 'Pavojus',
          background: 'Fonas',
          text: 'Tekstas',
        },
      },
      about: {
        label: 'Apie',
        autoSave: {
          label: 'Automatinis išsaugojimas',
          description:
            'Jūsų užduotys automatiškai išsaugomos vietinėje saugykloje kas 3 sekundes. Rankinis išsaugojimas nereikalingas.',
        },
        dataStorage: {
          label: 'Duomenų saugykla',
          description:
            'Visi duomenys saugomi vietinėje naršyklėje. Jūsų užduotys yra privačios ir niekada nesiunčiamos į jokį serverį.',
        },
        version: {
          label: 'Versija',
        },
        howToUse: {
          label: 'Kaip naudotis',
          items: {
            addTask: 'Įveskite užduotį ir paspauskite {{key}} arba spustelėkite + jai pridėti',
            completeTask:
              'Spustelėkite apskritimo piktogramą, kad pažymėtumėte užduotį kaip atliktą',
            editTask: 'Dukart spustelėkite užduoties tekstą, kad jį redaguotumėte',
            reorderTasks: 'Vilkite rankenėlę, kad pakeistumėte užduočių tvarką',
            searchTasks: 'Naudokite paieškos lauką užduotims filtruoti',
            deleteTask: 'Spustelėkite šiukšliadėžės piktogramą, kad ištrintumėte užduotį',
          },
        },
        keyboardShortcuts: {
          label: 'Klaviatūros spartieji klavišai',
          enter: '{{key}} — Pridėti naują užduotį arba išsaugoti redaguotą užduotį',
          doubleClick: '{{key}} — Redaguoti užduoties tekstą',
        },
        guide: {
          label: 'Interaktyvus gidas',
          description:
            'Pirmą kartą naudojate Taskacz? Atlikite trumpą apžvalgą ir išmokite pagrindus.',
          startButton: 'Pradėti gidą',
        },
        author: {
          label: 'Autorius',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Saugykla',
        },
      },
    },
  },
  tasks: {
    title: 'Mano užduotys',
    addNewTask: 'Pridėti naują užduotį',
    searchPlaceholder: 'Ieškoti...',
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
    stepCounter: '{{current}} žingsnis iš {{total}}',
    steps: {
      welcome: {
        title: 'Sveiki atvykę į Taskacz!',
        description:
          'Leiskite pristatyti programą. Šis trumpas gidas padės jums pradėti valdyti užduotis.',
      },
      taskInput: {
        title: 'Pridėti naujas užduotis',
        description:
          'Įveskite užduotį čia ir paspauskite Enter arba spustelėkite +, kad ją pridėtumėte į sąrašą.',
      },
      taskList: {
        title: 'Jūsų užduočių sąrašas',
        description:
          'Visos jūsų užduotys rodomos čia. Vilkite rankenėlę kairėje, kad pakeistumėte tvarką.',
      },
      taskActions: {
        title: 'Užduočių veiksmai',
        description:
          'Spustelėkite apskritimą, kad užbaigtumėte. Dukart spustelėkite, kad redaguotumėte. Šiukšliadėžė – ištrinimui.',
      },
      search: {
        title: 'Ieškoti užduočių',
        description:
          'Naudokite paieškos lauką, kad greitai rastumėte užduotis įvesdami raktinius žodžius.',
      },
      tabs: {
        title: 'Navigacija',
        description:
          'Naudokite šoninę juostą, kad perjungtumėte tarp Užduočių ir Nustatymų. Užveskite pelę ant piktogramų, kad pamatytumėte patarimus.',
      },
      settingsIntro: {
        title: 'Nustatymai',
        description:
          'Išnagrinėkime nustatymus. Spustelėkite Toliau, kad atidarytumėte Nustatymų skirtuką.',
      },
      settingsGeneral: {
        title: 'Bendrieji nustatymai',
        description:
          'Čia galite peržiūrėti informaciją apie automatinį išsaugojimą ir duomenų saugyklą.',
      },
      settingsLookAndFeel: {
        title: 'Išvaizda',
        description:
          'Pasirinkite tarp Šviesios, Tamsios arba sukurkite savo pasirinktinę temą su personalizuotomis spalvomis.',
      },
      settingsAbout: {
        title: 'Apie ir pagalba',
        description:
          'Raskite pagalbos dokumentaciją, klaviatūros sparčiuosius klavišus ir bet kada iš čia iš naujo paleiskite šį gidą.',
      },
      complete: {
        title: 'Viskas paruošta!',
        description:
          'Dabar žinote visus pagrindus. Mėgaukitės Taskacz! Gidą galite paleisti iš naujo iš Nustatymai > Apie.',
      },
    },
  },
};
