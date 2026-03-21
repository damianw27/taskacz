import type { Namespace } from '@/i18n/types/namespace';

export const mk: Namespace = {
  common: {
    back: 'Назад',
    next: 'Следно',
    finish: 'Заврши',
    skipGuide: 'Прескокни водич',
    search: 'Пребарај...',
    select: 'Избери...',
  },
  navigation: {
    tasks: 'Задачи',
    projects: 'Projects',
    settings: 'Поставки',
  },
  settings: {
    title: 'Поставки',
    sections: {
      general: {
        label: 'Општо',
        language: {
          label: 'Јазик',
        },
      },
      lookAndFeel: {
        label: 'Изглед',
        theme: {
          label: 'Тема',
          light: 'Светла',
          dark: 'Темна',
          custom: 'Прилагодена',
        },
        customizeColors: 'Приспособи бои',
        colorLabels: {
          primary: 'Примарна',
          accent: 'Акцент',
          danger: 'Опасност',
          background: 'Позадина',
          text: 'Текст',
        },
      },
      about: {
        label: 'За апликацијата',
        autoSave: {
          label: 'Автоматско зачувување',
          description:
            'Вашите задачи автоматски се зачувуваат во локалното складиште на секои 3 секунди. Не е потребно рачно зачувување.',
        },
        dataStorage: {
          label: 'Складирање на податоци',
          description:
            'Сите податоци се складираат локално во вашиот прелистувач. Вашите задачи се приватни и никогаш не се испраќаат до никаков сервер.',
        },
        version: {
          label: 'Верзија',
        },
        howToUse: {
          label: 'Kako да се користи',
          items: {
            addTask: 'Внесете задача и притиснете {{key}} или кликнете +',
            completeTask:
              'Кликнете на иконата на кругот за да ја означите задачата како завршена',
            editTask: 'Двоен клик на текстот на задачата за уредување',
            reorderTasks: 'Повлечете ја рачката за промена на редоследот на задачите',
            searchTasks: 'Користете го полето за пребарување за филтрирање на задачи',
            deleteTask: 'Кликнете на иконата на кошот за бришење на задачата',
          },
        },
        keyboardShortcuts: {
          label: 'Кратенки на тастатура',
          enter: '{{key}} — Додај нова задача или зачувај уредена задача',
          doubleClick: '{{key}} — Уреди текст на задача',
        },
        guide: {
          label: 'Интерактивен водич',
          description: 'Нов во Taskacz? Направете брза тура и научете ги основите.',
          startButton: 'Стартувај водич',
        },
        author: {
          label: 'Автор',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Складиште',
        },
      },
    },
  },
  tasks: {
    title: 'Моите задачи',
    addNewTask: 'Додај нова задача',
    searchPlaceholder: 'Пребарај...',
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
    stepCounter: 'Чекор {{current}} од {{total}}',
    steps: {
      welcome: {
        title: 'Добредојдовте во Taskacz!',
        description:
          'Дозволете ни да ви ја покажеме апликацијата. Овој краток водич ќе ви помогне да започнете со управување со задачи.',
      },
      taskInput: {
        title: 'Додавање нови задачи',
        description:
          'Внесете ја вашата задача тука и притиснете Enter или кликнете +, за да ја додадете на листата.',
      },
      taskList: {
        title: 'Вашата листа на задачи',
        description:
          'Сите ваши задачи се прикажуваат тука. Повлечете ја рачката лево за да ги преуредите.',
      },
      taskActions: {
        title: 'Акции со задачи',
        description:
          'Кликнете круг за завршување. Двоен клик за уредување. Кош за бришење.',
      },
      search: {
        title: 'Пребарај задачи',
        description:
          'Користете го полето за пребарување за брзо наоѓање на задачи внесувајќи клучни зборови.',
      },
      tabs: {
        title: 'Навигација',
        description:
          'Користете ја страничната лента за префрлување меѓу Задачи и Поставки. Поминете со глувчето над иконите за совети.',
      },
      settingsIntro: {
        title: 'Поставки',
        description:
          'Ајде да ги истражиме Поставките. Кликнете Следно за отворање на јазичето Поставки.',
      },
      settingsGeneral: {
        title: 'Општи поставки',
        description:
          'Тука можете да видите информации за автоматското зачувување и складирањето на податоци.',
      },
      settingsLookAndFeel: {
        title: 'Изглед',
        description:
          'Изберете меѓу Светла, Темна или создадете своја прилагодена тема со персонализирани бои.',
      },
      settingsAbout: {
        title: 'За апликацијата и помош',
        description:
          'Најдете документација за помош, кратенки на тастатура и рестартирајте го овој водич одовде.',
      },
      complete: {
        title: 'Сè е подготвено!',
        description:
          'Сега ги знаете сите основи. Уживајте во Taskacz! Можете да го рестартирате водичот од Поставки > За апликацијата.',
      },
    },
  },
};
