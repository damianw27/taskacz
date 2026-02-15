import { useApiStore } from '@/states/api';
import type { ApiValue } from '@/modules/api/types/api-value';

export const useApi = (): ApiValue => useApiStore(state => state.api);
