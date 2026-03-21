import type { Namespace } from '@/i18n/types/namespace';

export const ko: Namespace = {
  common: {
    back: '뒤로',
    next: '다음',
    finish: '완료',
    skipGuide: '가이드 건너뛰기',
    search: '검색...',
    select: '선택...',
  },
  navigation: {
    tasks: '할 일',
    projects: 'Projects',
    settings: '설정',
  },
  settings: {
    title: '설정',
    sections: {
      general: {
        label: '일반',
        language: {
          label: '언어',
        },
      },
      lookAndFeel: {
        label: '모양',
        theme: {
          label: '테마',
          light: '라이트',
          dark: '다크',
          custom: '사용자 지정',
        },
        customizeColors: '색상 사용자 지정',
        colorLabels: {
          primary: '기본',
          accent: '강조',
          danger: '위험',
          background: '배경',
          text: '텍스트',
        },
      },
      about: {
        label: '정보',
        autoSave: {
          label: '자동 저장',
          description: '할 일이 3초마다 로컬 저장소에 자동으로 저장됩니다. 수동 저장이 필요 없습니다.',
        },
        dataStorage: {
          label: '데이터 저장',
          description: '모든 데이터는 브라우저에 로컬로 저장됩니다. 할 일은 비공개이며 서버로 전송되지 않습니다.',
        },
        version: {
          label: '버전',
        },
        howToUse: {
          label: '사용 방법',
          items: {
            addTask: '할 일을 입력하고 {{key}}를 누르거나 +를 클릭하여 추가하세요',
            completeTask: '원형 아이콘을 클릭하여 할 일을 완료로 표시하세요',
            editTask: '할 일 텍스트를 더블 클릭하여 편집하세요',
            reorderTasks: '핸들을 드래그하여 할 일 순서를 변경하세요',
            searchTasks: '검색창을 사용하여 할 일을 필터링하세요',
            deleteTask: '휴지통 아이콘을 클릭하여 할 일을 삭제하세요',
          },
        },
        keyboardShortcuts: {
          label: '키보드 단축키',
          enter: '{{key}} — 새 할 일 추가 또는 편집한 할 일 저장',
          doubleClick: '{{key}} — 할 일 텍스트 편집',
        },
        guide: {
          label: '인터랙티브 가이드',
          description: 'Taskacz가 처음이신가요? 빠른 투어를 통해 기본 사항을 알아보세요.',
          startButton: '가이드 시작',
        },
        author: {
          label: '작성자',
          name: 'Damian Wileński',
        },
        repository: {
          label: '저장소',
        },
      },
    },
  },
  tasks: {
    title: '내 할 일',
    addNewTask: '새 할 일 추가',
    searchPlaceholder: '검색...',
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
    stepCounter: '{{total}}단계 중 {{current}}단계',
    steps: {
      welcome: {
        title: 'Taskacz에 오신 것을 환영합니다!',
        description: '앱을 소개해 드리겠습니다. 이 빠른 가이드가 할 일 관리를 시작하는 데 도움이 될 것입니다.',
      },
      taskInput: {
        title: '새 할 일 추가',
        description: '여기에 할 일을 입력하고 Enter를 누르거나 + 버튼을 클릭하여 목록에 추가하세요.',
      },
      taskList: {
        title: '할 일 목록',
        description: '모든 할 일이 여기에 표시됩니다. 왼쪽 핸들을 드래그하여 순서를 변경하세요.',
      },
      taskActions: {
        title: '할 일 작업',
        description: '원을 클릭하여 완료하세요. 더블 클릭하여 편집하세요. 휴지통으로 삭제하세요.',
      },
      search: {
        title: '할 일 검색',
        description: '검색창을 사용하여 키워드를 입력해 할 일을 빠르게 찾으세요.',
      },
      tabs: {
        title: '탐색',
        description: '사이드바를 사용하여 할 일과 설정 사이를 전환하세요. 아이콘 위에 마우스를 올려 툴팁을 확인하세요.',
      },
      settingsIntro: {
        title: '설정',
        description: '설정을 살펴보겠습니다. 다음을 클릭하여 설정 탭을 여세요.',
      },
      settingsGeneral: {
        title: '일반 설정',
        description: '자동 저장 및 데이터 저장 기능에 대한 정보를 확인할 수 있습니다.',
      },
      settingsLookAndFeel: {
        title: '모양',
        description: '라이트, 다크 중에서 선택하거나 개인화된 색상으로 사용자 지정 테마를 만드세요.',
      },
      settingsAbout: {
        title: '정보 및 도움말',
        description: '도움말 문서, 키보드 단축키를 찾고 여기서 이 가이드를 언제든지 다시 시작할 수 있습니다.',
      },
      complete: {
        title: '준비 완료!',
        description: '이제 모든 기본 사항을 알았습니다. Taskacz를 즐기세요! 설정 > 정보에서 가이드를 다시 시작할 수 있습니다.',
      },
    },
  },
};
