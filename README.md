# vite-plugin-global-const

Define constants for your project to facilitate reuse of your code across multiple products

## INSTALL

```bash
npm i vite-plugin-global-const -D
#or
yarn add vite-plugin-global-const -D
```

## CONFIG

In your `vite.config.js`, you can add your global constants to the plugin options.For example:

```js
// vite.config.js
import { defineConfig } from 'vite'
import { globalConst } from 'vite-plugin-global-const'

export default defineConfig({
  plugins: [
    globalConst({
      // Global constants for your needs
      MAIN: true
    }),
  ],
})

```

## USAGE

You can use the global constants in your code, they are injected into the `import.meta.env` object.For example:

```js
// content.js
const main = import.meta.env.MAIN
console.log(main)
```

and you will get the following results in the browser console or terminal:

```console
true
```

## For Development Other Plugins

If you are developing a plugin, you can use the global constants in your plugin code, they are injected into the `import.meta.env` object.For example:

```js
import { defineConstCore } from 'vite-plugin-global-const'

export function customPlugin() {
  return {
    name: 'vite-plugin-custom',
    config: () => {
      const defineConst = defineConstCore({
        YourConst: true
      })
      return {
        define: {
          ...defineConst
        }
      }
    }
  }
}
```

## LAST

If you have any questions, please submit an issue, thank you for your support, and if you like this plugin, please give me a star, thank you!