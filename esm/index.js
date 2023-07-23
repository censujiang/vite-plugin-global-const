export function globalConst(config) {
    return {
        name: 'vite-plugin-global-const',
        config() {
            const define = defineConst(config);
            return {
                define,
            };
        },
    };
}
function defineConst(config) {
    const define = {};
    for (const key in config) {
        define[`import.meta.env.${key}`] = JSON.stringify(config[key]);
    }
    return define;
}
