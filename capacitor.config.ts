import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pl.wilenskid.taskacz',
  appName: 'Taskacz',
  webDir: 'dist/mobile',
  server: {
    androidScheme: 'https',
  },
};

export default config;
