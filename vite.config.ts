import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ tsDecorators: true }),
    tsconfigPaths(),
    VitePWA({
      // add this to cache all the imports
      // workbox: {
      //   globPatterns: ['**/*'],
      // },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ['**/*'],
      registerType: 'autoUpdate',
      manifest: {
        theme_color: '#f69435',
        background_color: '#f69435',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        short_name: 'smartani',
        description: 'smartani web app',
        name: 'Smartani Indonesia',
        orientation: 'portrait',
        icons: [
          {
            src: 'maskable_icon_x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'maskable_icon_x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'maskable_icon_x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'maskable_icon_x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'maskable_icon_x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'maskable_icon_x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'maskable_icon_x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
