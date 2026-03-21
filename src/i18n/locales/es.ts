import type { Namespace } from '@/i18n/types/namespace';

export const es: Namespace = {
  common: {
    back: 'Atrás',
    next: 'Siguiente',
    finish: 'Finalizar',
    skipGuide: 'Saltar guía',
    search: 'Buscar...',
    select: 'Seleccionar...',
  },
  navigation: {
    tasks: 'Tareas',
    projects: 'Projects',
    settings: 'Configuración',
  },
  settings: {
    title: 'Configuración',
    sections: {
      general: {
        label: 'General',
        language: {
          label: 'Idioma',
        },
      },
      lookAndFeel: {
        label: 'Apariencia',
        theme: {
          label: 'Tema',
          light: 'Claro',
          dark: 'Oscuro',
          custom: 'Personalizado',
        },
        customizeColors: 'Personalizar colores',
        colorLabels: {
          primary: 'Primario',
          accent: 'Acento',
          danger: 'Peligro',
          background: 'Fondo',
          text: 'Texto',
        },
      },
      about: {
        label: 'Acerca de',
        autoSave: {
          label: 'Guardado automático',
          description:
            'Sus tareas se guardan automáticamente en el almacenamiento local cada 3 segundos. No se requiere guardado manual.',
        },
        dataStorage: {
          label: 'Almacenamiento de datos',
          description:
            'Todos los datos se almacenan localmente en su navegador. Sus tareas son privadas y nunca se envían a ningún servidor.',
        },
        version: {
          label: 'Versión',
        },
        howToUse: {
          label: 'Cómo usar',
          items: {
            addTask: 'Escriba una tarea y presione {{key}} o haga clic en + para agregarla',
            completeTask: 'Haga clic en el icono de círculo para marcar una tarea como completada',
            editTask: 'Doble clic en el texto de una tarea para editarla',
            reorderTasks: 'Arrastre el asa para reordenar las tareas',
            searchTasks: 'Use el cuadro de búsqueda para filtrar tareas',
            deleteTask: 'Haga clic en el icono de papelera para eliminar una tarea',
          },
        },
        keyboardShortcuts: {
          label: 'Atajos de teclado',
          enter: '{{key}} — Agregar nueva tarea o guardar tarea editada',
          doubleClick: '{{key}} — Editar texto de tarea',
        },
        guide: {
          label: 'Guía interactiva',
          description: '¿Nuevo en Taskacz? Haga un recorrido rápido para aprender lo básico.',
          startButton: 'Iniciar guía',
        },
        author: {
          label: 'Autor',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Repositorio',
        },
      },
    },
  },
  tasks: {
    title: 'Mis tareas',
    addNewTask: 'Agregar nueva tarea',
    searchPlaceholder: 'Buscar...',
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
    stepCounter: 'Paso {{current}} de {{total}}',
    steps: {
      welcome: {
        title: '¡Bienvenido a Taskacz!',
        description:
          'Permítanos mostrarle cómo funciona. Esta guía rápida le ayudará a empezar a gestionar sus tareas.',
      },
      taskInput: {
        title: 'Agregar nuevas tareas',
        description:
          'Escriba su tarea aquí y presione Enter o haga clic en + para agregarla a su lista.',
      },
      taskList: {
        title: 'Su lista de tareas',
        description:
          'Todas sus tareas aparecen aquí. Arrastre el asa a la izquierda para reordenarlas.',
      },
      taskActions: {
        title: 'Acciones de tarea',
        description:
          'Clic en el círculo para completar. Doble clic para editar. Papelera para eliminar.',
      },
      search: {
        title: 'Buscar tareas',
        description:
          'Use el cuadro de búsqueda para encontrar tareas rápidamente escribiendo palabras clave.',
      },
      tabs: {
        title: 'Navegación',
        description:
          'Use la barra lateral para cambiar entre Tareas y Configuración. Pase el cursor sobre los iconos para ver tooltips.',
      },
      settingsIntro: {
        title: 'Configuración',
        description:
          'Exploremos la Configuración. Haga clic en Siguiente para abrir la pestaña de Configuración.',
      },
      settingsGeneral: {
        title: 'Configuración general',
        description:
          'Aquí puede ver información sobre el guardado automático y el almacenamiento de datos.',
      },
      settingsLookAndFeel: {
        title: 'Apariencia',
        description:
          'Elija entre Claro, Oscuro o cree su propio tema personalizado con colores personalizados.',
      },
      settingsAbout: {
        title: 'Acerca de y Ayuda',
        description:
          'Encuentre documentación de ayuda, atajos de teclado y reinicie esta guía desde aquí.',
      },
      complete: {
        title: '¡Todo listo!',
        description:
          'Ahora conoce todos los conceptos básicos. ¡Disfrute de Taskacz! Puede reiniciar esta guía desde Configuración > Acerca de.',
      },
    },
  },
};
