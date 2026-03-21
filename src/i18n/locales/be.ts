import type { Namespace } from '@/i18n/types/namespace';

export const be: Namespace = {
  common: {
    back: 'Назад',
    next: 'Далей',
    finish: 'Завяршыць',
    skipGuide: 'Прапусціць кіраўніцтва',
    search: 'Пошук...',
    select: 'Выбраць...',
  },
  navigation: {
    tasks: 'Задачы',
    projects: 'Projects',
    settings: 'Налады',
  },
  settings: {
    title: 'Налады',
    sections: {
      general: {
        label: 'Агульныя',
        language: {
          label: 'Мова',
        },
      },
      lookAndFeel: {
        label: 'Знешні выгляд',
        theme: {
          label: 'Тэма',
          light: 'Светлая',
          dark: 'Цёмная',
          custom: 'Карыстальніцкая',
        },
        customizeColors: 'Наладзіць колеры',
        colorLabels: {
          primary: 'Асноўны',
          accent: 'Акцэнт',
          danger: 'Небяспека',
          background: 'Фон',
          text: 'Тэкст',
        },
      },
      about: {
        label: 'Аб праграме',
        autoSave: {
          label: 'Аўтазахаванне',
          description:
            'Вашы задачы аўтаматычна захоўваюцца ў лакальным сховішчы кожныя 3 секунды. Ручное захаванне не патрабуецца.',
        },
        dataStorage: {
          label: 'Захоўванне дадзеных',
          description:
            'Усе дадзеныя захоўваюцца лакальна ў вашым браўзеры. Вашы задачы прыватныя і ніколі не адпраўляюцца на які-небудзь сервер.',
        },
        version: {
          label: 'Версія',
        },
        howToUse: {
          label: 'Як выкарыстоўваць',
          items: {
            addTask: 'Увядзіце задачу і націсніце {{key}} або + для дадання',
            completeTask: 'Націсніце на значок кола, каб адзначыць задачу як выкананую',
            editTask: 'Двойчы пстрыкніце на тэксце задачы для рэдагавання',
            reorderTasks: 'Перацягніце ручку для змены парадку задач',
            searchTasks: 'Выкарыстоўвайце поле пошуку для фільтрацыі задач',
            deleteTask: 'Націсніце на значок смецця для выдалення задачы',
          },
        },
        keyboardShortcuts: {
          label: 'Гарачыя клавішы',
          enter: '{{key}} — Дадаць новую задачу або захаваць адрэдагаваную',
          doubleClick: '{{key}} — Рэдагаваць тэкст задачы',
        },
        guide: {
          label: 'Інтэрактыўнае кіраўніцтва',
          description: 'Новы ў Taskacz? Прайдзіце кароткае знаёмства.',
          startButton: 'Пачаць кіраўніцтва',
        },
        author: {
          label: 'Аўтар',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Рэпазіторый',
        },
      },
    },
  },
  tasks: {
    title: 'Мае задачы',
    addNewTask: 'Дадаць новую задачу',
    searchPlaceholder: 'Пошук...',
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
    stepCounter: 'Крок {{current}} з {{total}}',
    steps: {
      welcome: {
        title: 'Сардэчна запрашаем у Taskacz!',
        description:
          'Дазвольце нам паказаць вам прыкладанне. Гэта кароткае кіраўніцтва дапаможа вам пачаць кіраванне задачамі.',
      },
      taskInput: {
        title: 'Дабаўленне задач',
        description:
          'Увядзіце сваю задачу тут і націсніце Enter або кнопку +, каб дадаць яе ў спіс.',
      },
      taskList: {
        title: 'Ваш спіс задач',
        description: 'Усе вашы задачы адлюстраваны тут. Перацягніце ручку злева для змены парадку.',
      },
      taskActions: {
        title: 'Дзеянні з задачамі',
        description:
          'Націсніце кола для завяршэння. Двойчы пстрыкніце для рэдагавання. Сметніца для выдалення.',
      },
      search: {
        title: 'Пошук задач',
        description:
          'Выкарыстоўвайце поле пошуку для хуткага знаходжання задач па ключавых словах.',
      },
      tabs: {
        title: 'Навігацыя',
        description:
          'Выкарыстоўвайце бакавую панэль для пераключэння паміж Задачамі і Наладамі. Навядзіце курсор на значкі для падказак.',
      },
      settingsIntro: {
        title: 'Налады',
        description: 'Давайце вывучым Налады. Націсніце Далей, каб адкрыць укладку Налады.',
      },
      settingsGeneral: {
        title: 'Агульныя налады',
        description: 'Тут вы можаце ўбачыць інфармацыю аб аўтазахаванні і захоўванні дадзеных.',
      },
      settingsLookAndFeel: {
        title: 'Знешні выгляд',
        description:
          'Выбірайце паміж Светлай, Цёмнай тэмай або стварыце ўласную з персаналізаванымі колерамі.',
      },
      settingsAbout: {
        title: 'Аб праграме і дапамога',
        description:
          'Знайдзіце дакументацыю, гарачыя клавішы і перазапусціце гэтае кіраўніцтва адсюль.',
      },
      complete: {
        title: 'Усё гатова!',
        description:
          'Цяпер вы ведаеце ўсе асновы. Насалоджвайцеся Taskacz! Вы можаце перазапусціць кіраўніцтва праз Налады > Аб праграме.',
      },
    },
  },
};
