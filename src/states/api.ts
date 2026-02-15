import { create } from 'zustand';
import type { ApiValue } from '@/modules/api/types/api-value';

const missingApiError = (): never => {
  throw new Error('API is not configured. Call setApi(...) before rendering the app.');
};

const defaultApi: ApiValue = {
  taskService: {
    loadTasks: async () => missingApiError(),
    saveTasks: async () => missingApiError(),
  },
  appSettingsService: {
    getSettings: async () => missingApiError(),
    setSettings: async () => missingApiError(),
  },
};

interface ApiState {
  api: ApiValue;
  setApi: (api: ApiValue) => void;
}

export const useApiStore = create<ApiState>(set => ({
  api: defaultApi,
  setApi: (api: ApiValue) => set({ api }),
}));

export const setApi = (api: ApiValue): void => {
  useApiStore.getState().setApi(api);
};

export const getApi = (): ApiValue => useApiStore.getState().api;
