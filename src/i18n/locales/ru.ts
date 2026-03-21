import type { Namespace } from '@/i18n/types/namespace';

export const ru: Namespace = {
  common: {
    back: 'Назад',
    next: 'Далее',
    finish: 'Завершить',
    skipGuide: 'Пропустить руководство',
    search: 'Поиск...',
    select: 'Выбрать...',
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
        label: 'Общие',
        language: {
          label: 'Язык',
        },
      },
      lookAndFeel: {
        label: 'Внешний вид',
        theme: {
          label: 'Тема',
          light: 'Светлая',
          dark: 'Тёмная',
          custom: 'Пользовательская',
        },
        customizeColors: 'Настроить цвета',
        colorLabels: {
          primary: 'Основной',
          accent: 'Акцент',
          danger: 'Опасность',
          background: 'Фон',
          text: 'Текст',
        },
      },
      about: {
        label: 'О программе',
        autoSave: {
          label: 'Автосохранение',
          description:
            'Ваши задачи автоматически сохраняются в локальное хранилище каждые 3 секунды. Ручное сохранение не требуется.',
        },
        dataStorage: {
          label: 'Хранение данных',
          description:
            'Все данные хранятся локально в вашем браузере. Ваши задачи конфиденциальны и никогда не отправляются на какой-либо сервер.',
        },
        version: {
          label: 'Версия',
        },
        howToUse: {
          label: 'Как использовать',
          items: {
            addTask: 'Введите задачу и нажмите {{key}} или + для добавления',
            completeTask: 'Нажмите на значок круга, чтобы отметить задачу выполненной',
            editTask: 'Дважды щёлкните на тексте задачи для редактирования',
            reorderTasks: 'Перетащите ручку, чтобы изменить порядок задач',
            searchTasks: 'Используйте поле поиска для фильтрации задач',
            deleteTask: 'Нажмите на значок корзины для удаления задачи',
          },
        },
        keyboardShortcuts: {
          label: 'Горячие клавиши',
          enter: '{{key}} — Добавить новую задачу или сохранить изменённую',
          doubleClick: '{{key}} — Редактировать текст задачи',
        },
        guide: {
          label: 'Интерактивное руководство',
          description: 'Новичок в Taskacz? Пройдите краткое ознакомление.',
          startButton: 'Начать руководство',
        },
        author: {
          label: 'Автор',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Репозиторий',
        },
      },
    },
  },
  tasks: {
    title: 'Мои задачи',
    addNewTask: 'Добавить новую задачу',
    searchPlaceholder: 'Поиск...',
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
    stepCounter: 'Шаг {{current}} из {{total}}',
    steps: {
      welcome: {
        title: 'Добро пожаловать в Taskacz!',
        description:
          'Позвольте нам показать вам приложение. Это краткое руководство поможет вам начать управлять задачами.',
      },
      taskInput: {
        title: 'Добавление задач',
        description:
          'Введите задачу здесь и нажмите Enter или кнопку +, чтобы добавить её в список.',
      },
      taskList: {
        title: 'Ваш список задач',
        description:
          'Все ваши задачи отображаются здесь. Перетащите ручку слева, чтобы изменить порядок.',
      },
      taskActions: {
        title: 'Действия с задачами',
        description:
          'Нажмите круг для завершения. Дважды щёлкните для редактирования. Корзина для удаления.',
      },
      search: {
        title: 'Поиск задач',
        description:
          'Используйте поле поиска для быстрого нахождения задач по ключевым словам.',
      },
      tabs: {
        title: 'Навигация',
        description:
          'Используйте боковую панель для переключения между Задачами и Настройками. Наведите курсор на значки для подсказок.',
      },
      settingsIntro: {
        title: 'Настройки',
        description:
          'Давайте изучим Настройки. Нажмите Далее, чтобы открыть вкладку Настройки.',
      },
      settingsGeneral: {
        title: 'Общие настройки',
        description:
          'Здесь вы можете увидеть информацию об автосохранении и хранении данных.',
      },
      settingsLookAndFeel: {
        title: 'Внешний вид',
        description:
          'Выберите между Светлой, Тёмной темой или создайте собственную с персонализированными цветами.',
      },
      settingsAbout: {
        title: 'О программе и помощь',
        description:
          'Найдите документацию, горячие клавиши и перезапустите это руководство отсюда.',
      },
      complete: {
        title: 'Всё готово!',
        description:
          'Теперь вы знаете все основы. Наслаждайтесь Taskacz! Вы можете перезапустить руководство через Настройки > О программе.',
      },
    },
  },
};
