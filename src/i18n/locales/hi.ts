import type { Namespace } from '@/i18n/types/namespace';

export const hi: Namespace = {
  common: {
    back: 'वापस',
    next: 'अगला',
    finish: 'समाप्त',
    skipGuide: 'गाइड छोड़ें',
    search: 'खोजें...',
    select: 'चुनें...',
  },
  navigation: {
    tasks: 'कार्य',
    settings: 'सेटिंग्स',
  },
  settings: {
    title: 'सेटिंग्स',
    sections: {
      general: {
        label: 'सामान्य',
        language: {
          label: 'भाषा',
        },
      },
      lookAndFeel: {
        label: 'दिखावट',
        theme: {
          label: 'थीम',
          light: 'हल्की',
          dark: 'गहरी',
          custom: 'कस्टम',
        },
        customizeColors: 'रंग कस्टमाइज़ करें',
        colorLabels: {
          primary: 'प्राथमिक',
          accent: 'एक्सेंट',
          danger: 'खतरा',
          background: 'पृष्ठभूमि',
          text: 'पाठ',
        },
      },
      about: {
        label: 'के बारे में',
        autoSave: {
          label: 'स्वतः सहेजें',
          description: 'आपके कार्य हर 3 सेकंड में स्वचालित रूप से स्थानीय स्टोरेज में सहेजे जाते हैं। मैन्युअल सहेजने की आवश्यकता नहीं है।',
        },
        dataStorage: {
          label: 'डेटा संग्रहण',
          description: 'सभी डेटा आपके ब्राउज़र में स्थानीय रूप से संग्रहीत है। आपके कार्य निजी हैं और कभी भी किसी सर्वर पर नहीं भेजे जाते।',
        },
        version: {
          label: 'संस्करण',
        },
        howToUse: {
          label: 'उपयोग कैसे करें',
          items: {
            addTask: 'कार्य टाइप करें और {{key}} दबाएं या + क्लिक करें',
            completeTask: 'कार्य को पूर्ण चिह्नित करने के लिए वृत्त आइकन क्लिक करें',
            editTask: 'कार्य के टेक्स्ट पर डबल-क्लिक करके संपादित करें',
            reorderTasks: 'कार्यों को पुनर्व्यवस्थित करने के लिए ग्रिप हैंडल खींचें',
            searchTasks: 'कार्यों को फ़िल्टर करने के लिए खोज बॉक्स का उपयोग करें',
            deleteTask: 'कार्य हटाने के लिए ट्रैश आइकन क्लिक करें',
          },
        },
        keyboardShortcuts: {
          label: 'कीबोर्ड शॉर्टकट',
          enter: '{{key}} — नया कार्य जोड़ें या संपादित कार्य सहेजें',
          doubleClick: '{{key}} — कार्य का टेक्स्ट संपादित करें',
        },
        guide: {
          label: 'इंटरैक्टिव गाइड',
          description: 'Taskacz में नए हैं? बुनियादी बातें जानने के लिए एक त्वरित दौरा करें।',
          startButton: 'गाइड शुरू करें',
        },
        author: {
          label: 'लेखक',
          name: 'Damian Wileński',
        },
        repository: {
          label: 'रिपॉज़िटरी',
        },
      },
    },
  },
  tasks: {
    title: 'मेरे कार्य',
    addNewTask: 'नया कार्य जोड़ें',
    searchPlaceholder: 'खोजें...',
  },
  guide: {
    stepCounter: 'चरण {{current}} / {{total}}',
    steps: {
      welcome: {
        title: 'Taskacz में आपका स्वागत है!',
        description: 'हम आपको ऐप से परिचित कराते हैं। यह त्वरित गाइड आपको कार्य प्रबंधन शुरू करने में मदद करेगी।',
      },
      taskInput: {
        title: 'नए कार्य जोड़ें',
        description: 'यहाँ अपना कार्य टाइप करें और Enter दबाएं या + बटन क्लिक करें।',
      },
      taskList: {
        title: 'आपकी कार्य सूची',
        description: 'आपके सभी कार्य यहाँ दिखाई देते हैं। क्रम बदलने के लिए बाईं ओर के हैंडल को खींचें।',
      },
      taskActions: {
        title: 'कार्य क्रियाएं',
        description: 'पूर्ण करने के लिए वृत्त क्लिक करें। संपादन के लिए डबल-क्लिक करें। हटाने के लिए ट्रैश।',
      },
      search: {
        title: 'कार्य खोजें',
        description: 'कीवर्ड टाइप करके कार्य खोजने के लिए खोज बॉक्स का उपयोग करें।',
      },
      tabs: {
        title: 'नेविगेशन',
        description: 'कार्य और सेटिंग्स के बीच स्विच करने के लिए साइडबार का उपयोग करें। टूलटिप देखने के लिए आइकन पर होवर करें।',
      },
      settingsIntro: {
        title: 'सेटिंग्स',
        description: 'आइए सेटिंग्स देखें। सेटिंग्स टैब खोलने के लिए अगला क्लिक करें।',
      },
      settingsGeneral: {
        title: 'सामान्य सेटिंग्स',
        description: 'यहाँ आप स्वतः सहेजें और डेटा संग्रहण सुविधाओं के बारे में जानकारी देख सकते हैं।',
      },
      settingsLookAndFeel: {
        title: 'दिखावट',
        description: 'हल्की, गहरी थीम में से चुनें या व्यक्तिगत रंगों के साथ अपनी कस्टम थीम बनाएं।',
      },
      settingsAbout: {
        title: 'के बारे में और सहायता',
        description: 'सहायता दस्तावेज़, कीबोर्ड शॉर्टकट खोजें और यहाँ से इस गाइड को कभी भी पुनः प्रारंभ करें।',
      },
      complete: {
        title: 'सब तैयार है!',
        description: 'अब आप सभी मूल बातें जानते हैं। Taskacz का आनंद लें! सेटिंग्स > के बारे में से गाइड पुनः प्रारंभ करें।',
      },
    },
  },
};
