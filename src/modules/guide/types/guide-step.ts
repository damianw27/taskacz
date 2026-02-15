import type { GuideActionType } from '@/modules/guide/types/enums/guide-action-type';

export interface GuideStep {
  id: string;
  title: string;
  description: string;
  targetSelector?: string;
  action?: GuideActionType;
  settingsPage?: string;
}
