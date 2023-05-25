export function globalConst(config) {
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
