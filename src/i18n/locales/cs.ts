import type { Namespace } from '@/i18n/types/namespace';

export const cs: Namespace = {
  common: {
    back: 'Zpět',
    next: 'Další',
    finish: 'Dokončit',
    skipGuide: 'Přeskočit průvodce',
    search: 'Hledat...',
    select: 'Vybrat...',
  },
  navigation: {
    tasks: 'Úkoly',
    settings: 'Nastavení',
  },
  settings: {
    title: 'Nastavení',
    sections: {
      general: {
        label: 'Obecné',
        language: {
          label: 'Jazyk',
        },
      },
      lookAndFeel: {
        label: 'Vzhled',
        theme: {
          label: 'Motiv',
          light: 'Světlý',
          dark: 'Tmavý',
          custom: 'Vlastní',
        },
        customizeColors: 'Přizpůsobit barvy',
        colorLabels: {
          primary: 'Primární',
          accent: 'Akcent',
          danger: 'Nebezpečí',
          background: 'Pozadí',
          text: 'Text',
        },
      },
      about: {
        label: 'O aplikaci',
        autoSave: {
          label: 'Automatické ukládání',
          description:
            'Vaše úkoly jsou automaticky uloženy do místního úložiště každé 3 sekundy. Ruční ukládání není vyžadováno.',
        },
        dataStorage: {
          label: 'Úložiště dat',
          description:
            'Všechna data jsou uložena místně ve vašem prohlížeči. Vaše úkoly jsou soukromé a nikdy nejsou odesílány na žádný server.',
        },
        version: {
          label: 'Verze',
        },
        howToUse: {
          label: 'Jak používat',
          items: {
            addTask: 'Zadejte úkol a stiskněte {{key}} nebo klikněte na + pro přidání',
            completeTask: 'Kliknutím na ikonu kruhu označíte úkol jako dokončený',
            editTask: 'Dvojitým kliknutím na text úkolu ho upravíte',
            reorderTasks: 'Přetažením úchytu změníte pořadí úkolů',
            searchTasks: 'Použijte vyhledávací pole pro filtrování úkolů',
            deleteTask: 'Kliknutím na ikonu koše úkol odstraníte',
          },
        },
        keyboardShortcuts: {
          label: 'Klávesové zkratky',
          enter: '{{key}} — Přidat nový úkol nebo uložit upravený úkol',
          doubleClick: '{{key}} — Upravit text úkolu',
        },
        guide: {
          label: 'Interaktivní průvodce',
          description: 'Nový v Taskacz? Projděte si rychlý průvodce a naučte se základy.',
          startButton: 'Spustit průvodce',
        },
        author: {
          label: 'Autor',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Repozitář',
        },
      },
    },
  },
  tasks: {
    title: 'Moje úkoly',
    addNewTask: 'Přidat nový úkol',
    searchPlaceholder: 'Hledat...',
  },
  guide: {
    stepCounter: 'Krok {{current}} z {{total}}',
    steps: {
      welcome: {
        title: 'Vítejte v Taskacz!',
        description:
          'Dovolte nám ukázat vám aplikaci. Tento rychlý průvodce vám pomůže začít spravovat vaše úkoly.',
      },
      taskInput: {
        title: 'Přidání nových úkolů',
        description:
          'Zadejte svůj úkol zde a stiskněte Enter nebo klikněte na +, abyste ho přidali do svého seznamu.',
      },
      taskList: {
        title: 'Váš seznam úkolů',
        description:
          'Všechny vaše úkoly se zobrazí zde. Přetažením úchytu vlevo je přeuspořádáte.',
      },
      taskActions: {
        title: 'Akce s úkoly',
        description:
          'Klikněte na kruh pro dokončení. Dvojité kliknutí pro úpravu. Koš pro smazání.',
      },
      search: {
        title: 'Hledat úkoly',
        description:
          'Použijte vyhledávací pole pro rychlé nalezení úkolů zadáním klíčových slov.',
      },
      tabs: {
        title: 'Navigace',
        description:
          'Použijte postranní panel pro přepínání mezi Úkoly a Nastavením. Najeďte na ikony pro zobrazení nápověd.',
      },
      settingsIntro: {
        title: 'Nastavení',
        description:
          'Prozkoumejme Nastavení. Klikněte na Další pro otevření karty Nastavení.',
      },
      settingsGeneral: {
        title: 'Obecná nastavení',
        description:
          'Zde můžete vidět informace o automatickém ukládání a úložišti dat.',
      },
      settingsLookAndFeel: {
        title: 'Vzhled',
        description:
          'Vyberte mezi Světlým, Tmavým nebo vytvořte svůj vlastní motiv s personalizovanými barvami.',
      },
      settingsAbout: {
        title: 'O aplikaci a nápověda',
        description:
          'Najděte dokumentaci nápovědy, klávesové zkratky a kdykoli zde restartujte tohoto průvodce.',
      },
      complete: {
        title: 'Vše je připraveno!',
        description:
          'Nyní znáte vše základní. Užívejte si Taskacz! Průvodce můžete restartovat z Nastavení > O aplikaci.',
      },
    },
  },
};
