import { css } from '@emotion/css';
import { type FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/components/app-layout';
import { Spinner } from '@/components/spinner';

const TasksPage = lazy(() => import('@/pages/tasks-page').then(m => ({ default: m.TasksPage })));

const SettingsPage = lazy(() =>
  import('@/pages/settings-page').then(m => ({ default: m.SettingsPage })),
);

const loaderClassName = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 200px;
`;

const RouteLoader: FC = () => (
  <div className={loaderClassName}>
    <Spinner size={40} />
  </div>
);

export const AppRoutes: FC = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<RouteLoader />}>
            <TasksPage />
          </Suspense>
        }
      />
      <Route
        path="settings"
        element={
          <Suspense fallback={<RouteLoader />}>
            <SettingsPage />
          </Suspense>
        }
      />
    </Route>
  </Routes>
);
