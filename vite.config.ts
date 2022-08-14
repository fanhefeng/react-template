import { defineConfig, loadEnv, UserConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

export default ({ mode }: UserConfig) => {
  // mode is not null as UserConfig is an interface with all optional types
  process.env = { ...process.env, ...loadEnv(mode!, process.cwd()) }; // eslint-disable-line no-non-null-assertion
  
  return defineConfig({
    plugins: [
      react(),
      reactRefresh(),
      svgrPlugin({
        svgrOptions: {
          icon: true
        }
      })
    ],

    define: {
      global: "globalThis",
      "process.env": process.env
    }
  });
};
