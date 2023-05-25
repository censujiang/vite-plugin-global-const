import { Plugin } from 'vite';

interface Config {
  [key: string]: any;
}

export function globalConst(config: Config): Plugin {
  return {
    name: 'vite-plugin-global-const',
    config() {
      const define = {};
      for (const key in config) {
        define[`import.meta.env.${key}`] = JSON.stringify(config[key]);
      }
      return {
        define,
      };
    },
  };
}
