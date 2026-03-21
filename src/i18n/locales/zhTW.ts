import type { Namespace } from '@/i18n/types/namespace';

export const zhTW: Namespace = {
  common: {
    back: '返回',
    next: '下一步',
    finish: '完成',
    skipGuide: '跳過指南',
    search: '搜尋...',
    select: '選擇...',
  },
  navigation: {
    tasks: '任務',
    projects: 'Projects',
    settings: '設定',
  },
  settings: {
    title: '設定',
    sections: {
      general: {
        label: '一般',
        language: {
          label: '語言',
        },
      },
      lookAndFeel: {
        label: '外觀',
        theme: {
          label: '主題',
          light: '淺色',
          dark: '深色',
          custom: '自訂',
        },
        customizeColors: '自訂顏色',
        colorLabels: {
          primary: '主色',
          accent: '強調色',
          danger: '危險色',
          background: '背景色',
          text: '文字色',
        },
      },
      about: {
        label: '關於',
        autoSave: {
          label: '自動儲存',
          description: '您的任務每 3 秒自動儲存至本機存儲。無需手動儲存。',
        },
        dataStorage: {
          label: '資料儲存',
          description:
            '所有資料均儲存在您的瀏覽器本機端。您的任務是私密的，永遠不會傳送至任何伺服器。',
        },
        version: {
          label: '版本',
        },
        howToUse: {
          label: '使用方法',
          items: {
            addTask: '輸入任務後按 {{key}} 或點擊 + 新增',
            completeTask: '點擊圓圈圖示將任務標記為已完成',
            editTask: '雙擊任務文字進行編輯',
            reorderTasks: '拖曳手柄重新排列任務',
            searchTasks: '使用搜尋框篩選任務',
            deleteTask: '點擊垃圾桶圖示刪除任務',
          },
        },
        keyboardShortcuts: {
          label: '鍵盤快捷鍵',
          enter: '{{key}} — 新增任務或儲存已編輯的任務',
          doubleClick: '{{key}} — 編輯任務文字',
        },
        guide: {
          label: '互動指南',
          description: '初次使用 Taskacz？快速瀏覽以了解基礎功能。',
          startButton: '開始指南',
        },
        author: {
          label: '作者',
          name: 'Damian Wileński',
        },
        repository: {
          label: '程式碼儲存庫',
        },
      },
    },
  },
  tasks: {
    title: '我的任務',
    addNewTask: '新增任務',
    searchPlaceholder: '搜尋...',
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
    stepCounter: '第 {{current}} 步，共 {{total}} 步',
    steps: {
      welcome: {
        title: '歡迎使用 Taskacz！',
        description: '讓我們帶您了解這款應用程式。本快速指南將協助您開始管理任務。',
      },
      taskInput: {
        title: '新增任務',
        description: '在此輸入您的任務，然後按 Enter 或點擊 + 按鈕將其新增至清單中。',
      },
      taskList: {
        title: '您的任務清單',
        description: '所有任務顯示在這裡。拖曳左側手柄可重新排列順序。',
      },
      taskActions: {
        title: '任務操作',
        description: '點擊圓圈完成任務。雙擊文字進行編輯。點擊垃圾桶刪除任務。',
      },
      search: {
        title: '搜尋任務',
        description: '使用搜尋框輸入關鍵字快速尋找任務。',
      },
      tabs: {
        title: '導覽',
        description: '使用側邊欄在任務和設定之間切換。將滑鼠懸停在圖示上可查看提示。',
      },
      settingsIntro: {
        title: '設定',
        description: '讓我們探索設定。點擊下一步開啟設定分頁。',
      },
      settingsGeneral: {
        title: '一般設定',
        description: '在這裡您可以查看有關自動儲存和資料儲存功能的資訊。',
      },
      settingsLookAndFeel: {
        title: '外觀',
        description: '在淺色、深色之間選擇，或使用個人化顏色建立自訂主題。',
      },
      settingsAbout: {
        title: '關於與說明',
        description: '在此查找說明文件、鍵盤快捷鍵，並可隨時重新啟動本指南。',
      },
      complete: {
        title: '一切就緒！',
        description: '您現在已掌握所有基礎知識。祝您使用愉快！可從設定 > 關於重新啟動指南。',
      },
    },
  },
};
