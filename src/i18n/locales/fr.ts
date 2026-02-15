import type { Namespace } from '@/i18n/types/namespace';

export const fr: Namespace = {
  common: {
    back: 'Retour',
    next: 'Suivant',
    finish: 'Terminer',
    skipGuide: 'Passer le guide',
    search: 'Rechercher...',
    select: 'Sélectionner...',
  },
  navigation: {
    tasks: 'Tâches',
    settings: 'Paramètres',
  },
  settings: {
    title: 'Paramètres',
    sections: {
      general: {
        label: 'Général',
        language: {
          label: 'Langue',
        },
      },
      lookAndFeel: {
        label: 'Apparence',
        theme: {
          label: 'Thème',
          light: 'Clair',
          dark: 'Sombre',
          custom: 'Personnalisé',
        },
        customizeColors: 'Personnaliser les couleurs',
        colorLabels: {
          primary: 'Primaire',
          accent: 'Accent',
          danger: 'Danger',
          background: 'Arrière-plan',
          text: 'Texte',
        },
      },
      about: {
        label: 'À propos',
        autoSave: {
          label: 'Sauvegarde automatique',
          description:
            'Vos tâches sont automatiquement sauvegardées dans le stockage local toutes les 3 secondes. Aucune sauvegarde manuelle requise.',
        },
        dataStorage: {
          label: 'Stockage des données',
          description:
            'Toutes les données sont stockées localement dans votre navigateur. Vos tâches sont privées et ne sont jamais envoyées à un serveur.',
        },
        version: {
          label: 'Version',
        },
        howToUse: {
          label: 'Comment utiliser',
          items: {
            addTask: 'Saisir une tâche et appuyer sur {{key}} ou cliquer sur +',
            completeTask: "Cliquer sur l'icône cercle pour marquer une tâche comme terminée",
            editTask: "Double-cliquer sur le texte d'une tâche pour le modifier",
            reorderTasks: 'Faire glisser la poignée pour réorganiser les tâches',
            searchTasks: 'Utiliser la boîte de recherche pour filtrer les tâches',
            deleteTask: "Cliquer sur l'icône corbeille pour supprimer une tâche",
          },
        },
        keyboardShortcuts: {
          label: 'Raccourcis clavier',
          enter: '{{key}} — Ajouter une nouvelle tâche ou sauvegarder la tâche modifiée',
          doubleClick: '{{key}} — Modifier le texte de la tâche',
        },
        guide: {
          label: 'Guide interactif',
          description: 'Nouveau sur Taskacz ? Faites un tour rapide pour apprendre les bases.',
          startButton: 'Démarrer le guide',
        },
        author: {
          label: 'Auteur',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Dépôt',
        },
      },
    },
  },
  tasks: {
    title: 'Mes tâches',
    addNewTask: 'Ajouter une nouvelle tâche',
    searchPlaceholder: 'Rechercher...',
  },
  guide: {
    stepCounter: 'Étape {{current}} sur {{total}}',
    steps: {
      welcome: {
        title: 'Bienvenue sur Taskacz !',
        description:
          "Laissez-nous vous faire découvrir l'application. Ce guide rapide vous aidera à gérer vos tâches.",
      },
      taskInput: {
        title: 'Ajouter de nouvelles tâches',
        description: 'Saisissez votre tâche ici et appuyez sur Entrée ou cliquez sur +.',
      },
      taskList: {
        title: 'Votre liste de tâches',
        description:
          'Toutes vos tâches apparaissent ici. Faites glisser la poignée à gauche pour les réorganiser.',
      },
      taskActions: {
        title: 'Actions sur les tâches',
        description:
          'Cliquer sur le cercle pour terminer. Double-cliquer pour modifier. Corbeille pour supprimer.',
      },
      search: {
        title: 'Rechercher des tâches',
        description: 'Utilisez la boîte de recherche pour trouver rapidement des tâches.',
      },
      tabs: {
        title: 'Navigation',
        description:
          'Utilisez la barre latérale pour basculer entre Tâches et Paramètres. Survolez les icônes pour voir les infobulles.',
      },
      settingsIntro: {
        title: 'Paramètres',
        description:
          "Explorons les paramètres. Cliquez sur Suivant pour ouvrir l'onglet Paramètres.",
      },
      settingsGeneral: {
        title: 'Paramètres généraux',
        description:
          'Ici vous pouvez voir les informations sur la sauvegarde automatique et le stockage des données.',
      },
      settingsLookAndFeel: {
        title: 'Apparence',
        description: 'Choisissez entre Clair, Sombre ou créez votre propre thème personnalisé.',
      },
      settingsAbout: {
        title: 'À propos et aide',
        description:
          'Trouvez la documentation, les raccourcis clavier et redémarrez ce guide depuis Paramètres > À propos.',
      },
      complete: {
        title: 'Vous êtes prêt !',
        description:
          'Vous connaissez maintenant toutes les bases. Profitez de Taskacz ! Redémarrez le guide depuis Paramètres > À propos.',
      },
    },
  },
};
