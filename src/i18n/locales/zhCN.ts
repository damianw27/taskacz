import type { Namespace } from '@/i18n/types/namespace';

export const zhCN: Namespace = {
  common: {
    back: '返回',
    next: '下一步',
    finish: '完成',
    skipGuide: '跳过指南',
    search: '搜索...',
    select: '选择...',
  },
  navigation: {
    tasks: '任务',
    settings: '设置',
  },
  settings: {
    title: '设置',
    sections: {
      general: {
        label: '常规',
        language: {
          label: '语言',
        },
      },
      lookAndFeel: {
        label: '外观',
        theme: {
          label: '主题',
          light: '浅色',
          dark: '深色',
          custom: '自定义',
        },
        customizeColors: '自定义颜色',
        colorLabels: {
          primary: '主色',
          accent: '强调色',
          danger: '危险色',
          background: '背景色',
          text: '文字色',
        },
      },
      about: {
        label: '关于',
        autoSave: {
          label: '自动保存',
          description: '您的任务每 3 秒自动保存到本地存储。无需手动保存。',
        },
        dataStorage: {
          label: '数据存储',
          description: '所有数据均存储在您的浏览器本地。您的任务是私密的，永远不会发送到任何服务器。',
        },
        version: {
          label: '版本',
        },
        howToUse: {
          label: '使用方法',
          items: {
            addTask: '输入任务后按 {{key}} 或点击 + 添加',
            completeTask: '点击圆圈图标将任务标记为已完成',
            editTask: '双击任务文本进行编辑',
            reorderTasks: '拖动手柄重新排列任务',
            searchTasks: '使用搜索框筛选任务',
            deleteTask: '点击垃圾桶图标删除任务',
          },
        },
        keyboardShortcuts: {
          label: '键盘快捷键',
          enter: '{{key}} — 添加新任务或保存已编辑的任务',
          doubleClick: '{{key}} — 编辑任务文本',
        },
        guide: {
          label: '互动指南',
          description: '初次使用 Taskacz？快速浏览以了解基础功能。',
          startButton: '开始指南',
        },
        author: {
          label: '作者',
          name: 'Damian Wileński',
        },
        repository: {
          label: '代码仓库',
        },
      },
    },
  },
  tasks: {
    title: '我的任务',
    addNewTask: '添加新任务',
    searchPlaceholder: '搜索...',
  },
  guide: {
    stepCounter: '第 {{current}} 步，共 {{total}} 步',
    steps: {
      welcome: {
        title: '欢迎使用 Taskacz！',
        description: '让我们带您了解这款应用。本快速指南将帮助您开始管理任务。',
      },
      taskInput: {
        title: '添加新任务',
        description: '在此处输入您的任务，然后按 Enter 或点击 + 按钮将其添加到列表中。',
      },
      taskList: {
        title: '您的任务列表',
        description: '所有任务显示在这里。拖动左侧手柄可重新排列顺序。',
      },
      taskActions: {
        title: '任务操作',
        description: '点击圆圈完成任务。双击文本进行编辑。点击垃圾桶删除任务。',
      },
      search: {
        title: '搜索任务',
        description: '使用搜索框输入关键词快速查找任务。',
      },
      tabs: {
        title: '导航',
        description: '使用侧边栏在任务和设置之间切换。将鼠标悬停在图标上可查看提示。',
      },
      settingsIntro: {
        title: '设置',
        description: '让我们探索设置。点击下一步打开设置选项卡。',
      },
      settingsGeneral: {
        title: '常规设置',
        description: '在这里您可以查看有关自动保存和数据存储功能的信息。',
      },
      settingsLookAndFeel: {
        title: '外观',
        description: '在浅色、深色之间选择，或使用个性化颜色创建自定义主题。',
      },
      settingsAbout: {
        title: '关于与帮助',
        description: '在此查找帮助文档、键盘快捷键，并可随时重新启动本指南。',
      },
      complete: {
        title: '一切就绪！',
        description: '您现在已掌握所有基础知识。祝您使用愉快！可从设置 > 关于重新启动指南。',
      },
    },
  },
};
