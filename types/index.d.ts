import { Plugin as VitePlugin } from 'vite';
interface Config {
    [key: string]: any;
}
export declare function globalConst(config: Config): VitePlugin;
export declare function defineConstCore(config: Config): {};
export {};
