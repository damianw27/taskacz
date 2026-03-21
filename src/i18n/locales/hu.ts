import type { Namespace } from '@/i18n/types/namespace';

export const hu: Namespace = {
  common: {
    back: 'Vissza',
    next: 'Következő',
    finish: 'Befejezés',
    skipGuide: 'Útmutató kihagyása',
    search: 'Keresés...',
    select: 'Kiválasztás...',
  },
  navigation: {
    tasks: 'Feladatok',
    projects: 'Projects',
    settings: 'Beállítások',
  },
  settings: {
    title: 'Beállítások',
    sections: {
      general: {
        label: 'Általános',
        language: {
          label: 'Nyelv',
        },
      },
      lookAndFeel: {
        label: 'Megjelenés',
        theme: {
          label: 'Téma',
          light: 'Világos',
          dark: 'Sötét',
          custom: 'Egyéni',
        },
        customizeColors: 'Színek testreszabása',
        colorLabels: {
          primary: 'Elsődleges',
          accent: 'Kiemelés',
          danger: 'Veszély',
          background: 'Háttér',
          text: 'Szöveg',
        },
      },
      about: {
        label: 'Névjegy',
        autoSave: {
          label: 'Automatikus mentés',
          description: 'A feladatok automatikusan mentésre kerülnek a helyi tárhelyre minden 3 másodpercben. Nincs szükség kézi mentésre.',
        },
        dataStorage: {
          label: 'Adattárolás',
          description: 'Minden adat helyi tárolóban, a böngészőben tárolódik. A feladatok privátak, és soha nem kerülnek semmilyen szerverre.',
        },
        version: {
          label: 'Verzió',
        },
        howToUse: {
          label: 'Használati útmutató',
          items: {
            addTask: 'Írjon be egy feladatot, majd nyomja meg a {{key}} billentyűt vagy kattintson a + gombra',
            completeTask: 'Kattintson a kör ikonra a feladat befejezettként való jelöléséhez',
            editTask: 'Kattintson duplán a feladat szövegére a szerkesztéshez',
            reorderTasks: 'Húzza a fogópontot a feladatok átrendezéséhez',
            searchTasks: 'Használja a keresőmezőt a feladatok szűréséhez',
            deleteTask: 'Kattintson a kuka ikonra a feladat törléséhez',
          },
        },
        keyboardShortcuts: {
          label: 'Gyorsbillentyűk',
          enter: '{{key}} — Új feladat hozzáadása vagy szerkesztett feladat mentése',
          doubleClick: '{{key}} — Feladat szövegének szerkesztése',
        },
        guide: {
          label: 'Interaktív útmutató',
          description: 'Először használja a Taskacz-t? Tekintse meg a gyors bemutatót az alapok megismeréséhez.',
          startButton: 'Útmutató indítása',
        },
        author: {
          label: 'Szerző',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'Tároló',
        },
      },
    },
  },
  tasks: {
    title: 'Saját feladataim',
    addNewTask: 'Új feladat hozzáadása',
    searchPlaceholder: 'Keresés...',
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
    stepCounter: '{{current}}. lépés / {{total}}',
    steps: {
      welcome: {
        title: 'Üdvözli a Taskacz!',
        description: 'Engedje meg, hogy bemutassuk az alkalmazást. Ez a rövid útmutató segít a feladatkezelés megkezdésében.',
      },
      taskInput: {
        title: 'Új feladatok hozzáadása',
        description: 'Írja be ide a feladatát, majd nyomja meg az Enter billentyűt vagy kattintson a + gombra a listához való hozzáadáshoz.',
      },
      taskList: {
        title: 'Feladatlista',
        description: 'Az összes feladat itt jelenik meg. Húzza a fogópontot a bal oldalon az átrendezéshez.',
      },
      taskActions: {
        title: 'Feladatműveletek',
        description: 'Kattintson a körre a befejezéshez. Dupla kattintás a szerkesztéshez. Kuka a törléshez.',
      },
      search: {
        title: 'Feladatok keresése',
        description: 'Használja a keresőmezőt a feladatok gyors megtalálásához kulcsszavak beírásával.',
      },
      tabs: {
        title: 'Navigáció',
        description: 'Használja az oldalsávot a Feladatok és Beállítások közötti váltáshoz. Vigye az egeret az ikonok fölé az eszköztippek megtekintéséhez.',
      },
      settingsIntro: {
        title: 'Beállítások',
        description: 'Fedezzük fel a Beállításokat. Kattintson a Következő gombra a Beállítások fül megnyitásához.',
      },
      settingsGeneral: {
        title: 'Általános beállítások',
        description: 'Itt megtekintheti az automatikus mentésről és az adattárolásról szóló információkat.',
      },
      settingsLookAndFeel: {
        title: 'Megjelenés',
        description: 'Válasszon a Világos és Sötét téma közül, vagy hozzon létre saját egyéni témát személyre szabott színekkel.',
      },
      settingsAbout: {
        title: 'Névjegy és súgó',
        description: 'Keressen súgódokumentációt, gyorsbillentyűket, és indítsa újra ezt az útmutatót bármikor innen.',
      },
      complete: {
        title: 'Minden készen áll!',
        description: 'Most már ismeri az összes alapot. Élvezze a Taskacz-t! Az útmutatót újraindíthatja a Beállítások > Névjegy menüből.',
      },
    },
  },
};
