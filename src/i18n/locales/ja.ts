import type { Namespace } from '@/i18n/types/namespace';

export const ja: Namespace = {
  common: {
    back: '戻る',
    next: '次へ',
    finish: '完了',
    skipGuide: 'ガイドをスキップ',
    search: '検索...',
    select: '選択...',
  },
  navigation: {
    tasks: 'タスク',
    settings: '設定',
  },
  settings: {
    title: '設定',
    sections: {
      general: {
        label: '一般',
        language: {
          label: '言語',
        },
      },
      lookAndFeel: {
        label: '外観',
        theme: {
          label: 'テーマ',
          light: 'ライト',
          dark: 'ダーク',
          custom: 'カスタム',
        },
        customizeColors: 'カラーをカスタマイズ',
        colorLabels: {
          primary: 'プライマリ',
          accent: 'アクセント',
          danger: '危険',
          background: '背景',
          text: 'テキスト',
        },
      },
      about: {
        label: 'について',
        autoSave: {
          label: '自動保存',
          description: 'タスクは3秒ごとにローカルストレージに自動保存されます。手動での保存は不要です。',
        },
        dataStorage: {
          label: 'データ保存',
          description: 'すべてのデータはブラウザにローカルで保存されます。タスクはプライベートであり、サーバーに送信されることはありません。',
        },
        version: {
          label: 'バージョン',
        },
        howToUse: {
          label: '使い方',
          items: {
            addTask: 'タスクを入力して{{key}}を押すか+をクリックして追加する',
            completeTask: '円アイコンをクリックしてタスクを完了としてマークする',
            editTask: 'タスクのテキストをダブルクリックして編集する',
            reorderTasks: 'グリップハンドルをドラッグしてタスクを並べ替える',
            searchTasks: '検索ボックスを使ってタスクをフィルタリングする',
            deleteTask: 'ゴミ箱アイコンをクリックしてタスクを削除する',
          },
        },
        keyboardShortcuts: {
          label: 'キーボードショートカット',
          enter: '{{key}} — 新しいタスクを追加または編集したタスクを保存',
          doubleClick: '{{key}} — タスクのテキストを編集',
        },
        guide: {
          label: 'インタラクティブガイド',
          description: 'Taskaczは初めてですか？クイックツアーで基本を学びましょう。',
          startButton: 'ガイドを開始',
        },
        author: {
          label: '作者',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'リポジトリ',
        },
      },
    },
  },
  tasks: {
    title: '私のタスク',
    addNewTask: '新しいタスクを追加',
    searchPlaceholder: '検索...',
  },
  guide: {
    stepCounter: '{{total}}ステップ中{{current}}ステップ目',
    steps: {
      welcome: {
        title: 'Taskaczへようこそ！',
        description: 'アプリをご紹介します。このクイックガイドでタスク管理を始めましょう。',
      },
      taskInput: {
        title: '新しいタスクを追加',
        description: 'ここにタスクを入力し、Enterを押すか+ボタンをクリックしてリストに追加してください。',
      },
      taskList: {
        title: 'タスクリスト',
        description: 'すべてのタスクがここに表示されます。左側のグリップハンドルをドラッグして並べ替えてください。',
      },
      taskActions: {
        title: 'タスクアクション',
        description: '円をクリックして完了。ダブルクリックして編集。ゴミ箱で削除。',
      },
      search: {
        title: 'タスクを検索',
        description: '検索ボックスを使ってキーワードでタスクをすばやく見つけましょう。',
      },
      tabs: {
        title: 'ナビゲーション',
        description: 'サイドバーを使ってタスクと設定を切り替えましょう。アイコンにカーソルを合わせるとツールチップが表示されます。',
      },
      settingsIntro: {
        title: '設定',
        description: '設定を探索しましょう。次へをクリックして設定タブを開いてください。',
      },
      settingsGeneral: {
        title: '一般設定',
        description: '自動保存とデータ保存機能の情報を確認できます。',
      },
      settingsLookAndFeel: {
        title: '外観',
        description: 'ライト、ダーク、またはパーソナライズされた色でカスタムテーマを作成しましょう。',
      },
      settingsAbout: {
        title: 'についてとヘルプ',
        description: 'ヘルプドキュメント、キーボードショートカットを確認し、ここからいつでもガイドを再開できます。',
      },
      complete: {
        title: '準備完了！',
        description: '基本はすべて習得しました。Taskaczをお楽しみください！設定 > についてからガイドを再開できます。',
      },
    },
  },
};
