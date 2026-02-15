export interface Language {
  readonly code: string;
  readonly nativeName: string;
  readonly englishName: string;
}

export const Languages: readonly Language[] = [
  { code: 'en', nativeName: 'English', englishName: 'English' },
  { code: 'de', nativeName: 'Deutsch', englishName: 'German' },
  { code: 'fr', nativeName: 'Français', englishName: 'French' },
  { code: 'es', nativeName: 'Español', englishName: 'Spanish' },
  { code: 'it', nativeName: 'Italiano', englishName: 'Italian' },
  { code: 'sv', nativeName: 'Svenska', englishName: 'Swedish' },
  { code: 'no', nativeName: 'Norsk', englishName: 'Norwegian' },
  { code: 'da', nativeName: 'Dansk', englishName: 'Danish' },
  { code: 'hu', nativeName: 'Magyar', englishName: 'Hungarian' },
  { code: 'lt', nativeName: 'Lietuvių', englishName: 'Lithuanian' },
  { code: 'lv', nativeName: 'Latviešu', englishName: 'Latvian' },
  { code: 'et', nativeName: 'Eesti', englishName: 'Estonian' },
  { code: 'pl', nativeName: 'Polski', englishName: 'Polish' },
  { code: 'cs', nativeName: 'Čeština', englishName: 'Czech' },
  { code: 'sk', nativeName: 'Slovenčina', englishName: 'Slovak' },
  { code: 'ru', nativeName: 'Русский', englishName: 'Russian' },
  { code: 'uk', nativeName: 'Українська', englishName: 'Ukrainian' },
  { code: 'be', nativeName: 'Беларуская', englishName: 'Belarusian' },
  { code: 'bg', nativeName: 'Български', englishName: 'Bulgarian' },
  { code: 'mk', nativeName: 'Македонски', englishName: 'Macedonian' },
  { code: 'sr', nativeName: 'Српски', englishName: 'Serbian' },
  { code: 'hr', nativeName: 'Hrvatski', englishName: 'Croatian' },
  { code: 'sl', nativeName: 'Slovenščina', englishName: 'Slovenian' },
  { code: 'bs', nativeName: 'Bosanski', englishName: 'Bosnian' },
  { code: 'ko', nativeName: '한국어', englishName: 'Korean' },
  { code: 'ja', nativeName: '日本語', englishName: 'Japanese' },
  { code: 'zh-CN', nativeName: '中文（简体）', englishName: 'Chinese (Simplified)' },
  { code: 'zh-TW', nativeName: '中文（繁體）', englishName: 'Chinese (Traditional)' },
  { code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi' },
];
