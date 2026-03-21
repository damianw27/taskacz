import type { Namespace } from '@/i18n/types/namespace';

export const uk: Namespace = {
  common: {
    back: 'Назад',
    next: 'Далі',
    finish: 'Завершити',
    skipGuide: 'Пропустити посібник',
    search: 'Пошук...',
    select: 'Вибрати...',
  },
  navigation: {
    tasks: 'Завдання',
    projects: 'Projects',
    settings: 'Налаштування',
  },
  settings: {
    title: 'Налаштування',
    sections: {
      general: {
        label: 'Загальні',
        language: {
          label: 'Мова',
        },
      },
      lookAndFeel: {
        label: 'Зовнішній вигляд',
        theme: {
          label: 'Тема',
          light: 'Світла',
          dark: 'Темна',
          custom: 'Користувацька',
        },
        customizeColors: 'Налаштувати кольори',
        colorLabels: {
          primary: 'Основний',
          accent: 'Акцент',
          danger: 'Небезпека',
          background: 'Фон',
          text: 'Текст',
        },
      },
      about: {
        label: 'Про програму',
        autoSave: {
          label: 'Автозбереження',
          description:
            'Ваші завдання автоматично зберігаються у локальне сховище кожні 3 секунди. Ручне збереження не потрібне.',
        },
        dataStorage: {
          label: 'Зберігання даних',
          description:
            'Усі дані зберігаються локально у вашому браузері. Ваші завдання є приватними і ніколи не надсилаються на жодний сервер.',
        },
        version: {
          label: 'Версія',
        },
        howToUse: {
          label: 'Як використовувати',
          items: {
            addTask: 'Введіть завдання і натисніть {{key}} або + для додавання',
            completeTask: 'Натисніть на значок кола, щоб позначити завдання виконаним',
            editTask: 'Двічі клацніть на тексті завдання для редагування',
            reorderTasks: 'Перетягніть ручку для зміни порядку завдань',
            searchTasks: 'Використовуйте поле пошуку для фільтрації завдань',
            deleteTask: 'Натисніть на значок кошика для видалення завдання',
          },
        },
        keyboardShortcuts: {
          label: 'Гарячі клавіші',
          enter: '{{key}} — Додати нове завдання або зберегти відредаговане',
          doubleClick: '{{key}} — Редагувати текст завдання',
        },
        guide: {
          label: 'Інтерактивний посібник',
          description: 'Новачок у Taskacz? Пройдіть короткий тур для ознайомлення.',
          startButton: 'Розпочати посібник',
        },
        author: {
          label: 'Автор',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Репозиторій',
        },
      },
    },
  },
  tasks: {
    title: 'Мої завдання',
    addNewTask: 'Додати нове завдання',
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
        title: 'Ласкаво просимо до Taskacz!',
        description:
          'Дозвольте показати вам застосунок. Цей короткий посібник допоможе вам розпочати керування завданнями.',
      },
      taskInput: {
        title: 'Додавання нових завдань',
        description:
          'Введіть своє завдання тут і натисніть Enter або кнопку +, щоб додати його до списку.',
      },
      taskList: {
        title: 'Ваш список завдань',
        description:
          'Усі ваші завдання відображаються тут. Перетягніть ручку зліва для зміни порядку.',
      },
      taskActions: {
        title: 'Дії із завданнями',
        description:
          'Натисніть коло для завершення. Двічі клацніть для редагування. Кошик для видалення.',
      },
      search: {
        title: 'Пошук завдань',
        description:
          'Використовуйте поле пошуку для швидкого знаходження завдань за ключовими словами.',
      },
      tabs: {
        title: 'Навігація',
        description:
          'Використовуйте бічну панель для переключення між Завданнями та Налаштуваннями. Наведіть курсор на значки для підказок.',
      },
      settingsIntro: {
        title: 'Налаштування',
        description:
          'Давайте вивчимо Налаштування. Натисніть Далі, щоб відкрити вкладку Налаштування.',
      },
      settingsGeneral: {
        title: 'Загальні налаштування',
        description:
          'Тут ви можете побачити інформацію про автозбереження та зберігання даних.',
      },
      settingsLookAndFeel: {
        title: 'Зовнішній вигляд',
        description:
          'Вибирайте між Світлою, Темною темою або створіть власну з персоналізованими кольорами.',
      },
      settingsAbout: {
        title: 'Про програму та допомога',
        description:
          'Знайдіть довідкову документацію, гарячі клавіші та перезапустіть цей посібник звідси.',
      },
      complete: {
        title: 'Все готово!',
        description:
          'Тепер ви знаєте всі основи. Насолоджуйтеся Taskacz! Ви можете перезапустити посібник через Налаштування > Про програму.',
      },
    },
  },
};
