var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import stdLibBrowser from "node-stdlib-browser";
import inject from "@rollup/plugin-inject";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    {
      ...inject({
        global: [
          __require.resolve(
            "node-stdlib-browser/helpers/esbuild/shim"
          ),
          "global"
        ],
        process: [
          __require.resolve(
            "node-stdlib-browser/helpers/esbuild/shim"
          ),
          "process"
        ],
        Buffer: [
          __require.resolve(
            "node-stdlib-browser/helpers/esbuild/shim"
          ),
          "Buffer"
        ]
      }),
      enforce: "post"
    }
  ],
  resolve: {
    alias: stdLibBrowser
  },
  optimizeDeps: {
    include: ["buffer", "process"]
  },
  build: {
    chunkSizeWarningLimit: 4e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHN0ZExpYkJyb3dzZXIgZnJvbSAnbm9kZS1zdGRsaWItYnJvd3Nlcic7XG5pbXBvcnQgaW5qZWN0IGZyb20gJ0Byb2xsdXAvcGx1Z2luLWluamVjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAge1xuICAgICAgLi4uaW5qZWN0KHtcbiAgICAgICAgZ2xvYmFsOiBbXG4gICAgICAgICAgcmVxdWlyZS5yZXNvbHZlKFxuICAgICAgICAgICAgJ25vZGUtc3RkbGliLWJyb3dzZXIvaGVscGVycy9lc2J1aWxkL3NoaW0nLFxuICAgICAgICAgICksXG4gICAgICAgICAgJ2dsb2JhbCcsXG4gICAgICAgIF0sXG4gICAgICAgIHByb2Nlc3M6IFtcbiAgICAgICAgICByZXF1aXJlLnJlc29sdmUoXG4gICAgICAgICAgICAnbm9kZS1zdGRsaWItYnJvd3Nlci9oZWxwZXJzL2VzYnVpbGQvc2hpbScsXG4gICAgICAgICAgKSxcbiAgICAgICAgICAncHJvY2VzcycsXG4gICAgICAgIF0sXG4gICAgICAgIEJ1ZmZlcjogW1xuICAgICAgICAgIHJlcXVpcmUucmVzb2x2ZShcbiAgICAgICAgICAgICdub2RlLXN0ZGxpYi1icm93c2VyL2hlbHBlcnMvZXNidWlsZC9zaGltJyxcbiAgICAgICAgICApLFxuICAgICAgICAgICdCdWZmZXInLFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgfSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBzdGRMaWJCcm93c2VyLFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbJ2J1ZmZlcicsICdwcm9jZXNzJ10sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiA0MDAwLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFBQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxZQUFZO0FBR25CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKO0FBQUEsTUFDRSxHQUFHLE9BQU87QUFBQSxRQUNSLFFBQVE7QUFBQSxVQUNOLFVBQVE7QUFBQSxZQUNOO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUCxVQUFRO0FBQUEsWUFDTjtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ04sVUFBUTtBQUFBLFlBQ047QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUNELFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxVQUFVLFNBQVM7QUFBQSxFQUMvQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsdUJBQXVCO0FBQUEsRUFDekI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
