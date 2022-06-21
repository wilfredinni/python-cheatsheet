import { ViteSSG } from "vite-ssg";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "~pages";
import App from "./App.vue";

import "./styles/index.css";

const routes = setupLayouts(generatedRoutes);

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager("./modules/*.ts")).forEach((i) =>
      i.install?.(ctx)
    );
  }
);
