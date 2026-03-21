import type { Namespace } from '@/i18n/types/namespace';

export const bg: Namespace = {
  common: {
    back: 'Назад',
    next: 'Напред',
    finish: 'Завърши',
    skipGuide: 'Пропусни ръководството',
    search: 'Търси...',
    select: 'Избери...',
  },
  navigation: {
    tasks: 'Задачи',
    projects: 'Projects',
    settings: 'Настройки',
  },
  settings: {
    title: 'Настройки',
    sections: {
      general: {
        label: 'Общи',
        language: {
          label: 'Език',
        },
      },
      lookAndFeel: {
        label: 'Изглед',
        theme: {
          label: 'Тема',
          light: 'Светла',
          dark: 'Тъмна',
          custom: 'Персонализирана',
        },
        customizeColors: 'Персонализиране на цветовете',
        colorLabels: {
          primary: 'Основен',
          accent: 'Акцент',
          danger: 'Опасност',
          background: 'Фон',
          text: 'Текст',
        },
      },
      about: {
        label: 'За приложението',
        autoSave: {
          label: 'Автоматично запазване',
          description:
            'Вашите задачи се запазват автоматично в локалното хранилище на всеки 3 секунди. Не е необходимо ръчно запазване.',
        },
        dataStorage: {
          label: 'Съхранение на данни',
          description:
            'Всички данни се съхраняват локално в браузъра ви. Вашите задачи са поверителни и никога не се изпращат до сървър.',
        },
        version: {
          label: 'Версия',
        },
        howToUse: {
          label: 'Как да използвате',
          items: {
            addTask: 'Въведете задача и натиснете {{key}} или кликнете +',
            completeTask:
              'Кликнете иконата на кръг, за да маркирате задачата като завършена',
            editTask: 'Двойно кликване върху текста на задача за редактиране',
            reorderTasks: 'Плъзнете дръжката, за да пренаредите задачите',
            searchTasks: 'Използвайте полето за търсене за филтриране на задачи',
            deleteTask: 'Кликнете иконата на кошче, за да изтриете задача',
          },
        },
        keyboardShortcuts: {
          label: 'Клавишни комбинации',
          enter: '{{key}} — Добавяне на нова задача или запазване на редактирана задача',
          doubleClick: '{{key}} — Редактиране на текст на задача',
        },
        guide: {
          label: 'Интерактивно ръководство',
          description: 'Нов в Taskacz? Направете кратка обиколка, за да научите основите.',
          startButton: 'Стартиране на ръководството',
        },
        author: {
          label: 'Автор',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Хранилище',
        },
      },
    },
  },
  tasks: {
    title: 'Моите задачи',
    addNewTask: 'Добавяне на нова задача',
    searchPlaceholder: 'Търси...',
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
    stepCounter: 'Стъпка {{current}} от {{total}}',
    steps: {
      welcome: {
        title: 'Добре дошли в Taskacz!',
        description:
          'Нека ви покажем приложението. Това кратко ръководство ще ви помогне да започнете да управлявате задачите си.',
      },
      taskInput: {
        title: 'Добавяне на нови задачи',
        description:
          'Въведете задачата тук и натиснете Enter или кликнете +, за да я добавите в списъка.',
      },
      taskList: {
        title: 'Вашият списък с задачи',
        description:
          'Всички ваши задачи се показват тук. Плъзнете дръжката вляво, за да ги пренаредите.',
      },
      taskActions: {
        title: 'Действия със задачи',
        description:
          'Кликнете кръга за завършване. Двойно кликване за редактиране. Кошче за изтриване.',
      },
      search: {
        title: 'Търсене на задачи',
        description:
          'Използвайте полето за търсене, за да намерите бързо задачи чрез ключови думи.',
      },
      tabs: {
        title: 'Навигация',
        description:
          'Използвайте страничната лента за превключване между Задачи и Настройки. Задръжте курсора върху иконите за подсказки.',
      },
      settingsIntro: {
        title: 'Настройки',
        description:
          'Нека разгледаме Настройките. Кликнете Напред, за да отворите раздела Настройки.',
      },
      settingsGeneral: {
        title: 'Общи настройки',
        description:
          'Тук можете да видите информация за автоматичното запазване и съхранението на данни.',
      },
      settingsLookAndFeel: {
        title: 'Изглед',
        description:
          'Изберете между Светла, Тъмна или създайте своя персонализирана тема с персонализирани цветове.',
      },
      settingsAbout: {
        title: 'За приложението и помощ',
        description:
          'Намерете документация за помощ, клавишни комбинации и рестартирайте това ръководство от тук.',
      },
      complete: {
        title: 'Готови сте!',
        description:
          'Вече знаете всички основи. Наслаждавайте се на Taskacz! Можете да рестартирате ръководството от Настройки > За приложението.',
      },
    },
  },
};
