import { Plugin as VitePlugin } from 'vite';

interface Config {
  [key: string]: any;
}

export function globalConst(config: Config): VitePlugin {
  return {
    name: 'vite-plugin-global-const',
    config() {
      const define = defineConstCore(config);
      return {
        define,
      };
    },
  };
}


export function defineConstCore(config: Config) {
  const define = {};
  for (const key in config) {
    define[`import.meta.env.${key}`] = JSON.stringify(config[key]);
  }
  return define;
}