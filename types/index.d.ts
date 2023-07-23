import { Plugin } from 'vite';
interface Config {
    [key: string]: any;
}
export declare function globalConst(config: Config): Plugin;
export declare function defineConstCore(config: Config): {};
export {};
