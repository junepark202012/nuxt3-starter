# Starter guide for Nuxt 3

- [Starter guide for Nuxt 3](#starter-guide-for-nuxt-3)
  - [Recommended Package manager](#recommended-package-manager)
  - [VS Code](#vs-code)
    - [Volar](#volar)
    - [TypeScript Vue Plugin](#typescript-vue-plugin)
  - [ESLint](#eslint)
    - [Anthony Fu's Settings](#anthony-fus-settings)
    - [Nuxt plugin](#nuxt-plugin)
    - [ES Lint - VS Code](#es-lint---vs-code)
  - [Nuxt Configurations](#nuxt-configurations)
  - [Modules](#modules)
    - [Tailwind CSS](#tailwind-css)
    - [Google Fonts](#google-fonts)
    - [Pinia](#pinia)
  - [Additionals](#additionals)
  - [Tailwind UI](#tailwind-ui)
  - [Nuxt-icon](#nuxt-icon)

## Recommended Package manager

- If you're using **pnpm**, follow the guides below
  - [Installation](https://v3.nuxtjs.org/getting-started/installation#new-project)
  - [Enable Corepack](https://v3.nuxtjs.org/community/contribution#package-manager)
  - As fo 2022-10-03, you have to be aware of the following items
    - ⭐ `pnpm install` with flag `--shamefully-hoist`
    - ~~Initialize project with pnpm~~*(probably not required)*

## VS Code

### Volar

[marketplace](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

- Enable **takeover mode**

  - [Vue 3 docs](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode)
  - [Nuxt 3 docs](https://v3.nuxtjs.org/getting-started/installation#prerequisites)

- Check [tips](https://github.com/johnsoncodehk/volar/discussions/53)
- Recommended extension settings

  ```json
  // settings.json
  "volar.autoCompleteRefs": true,
  ```

- You might have *Vue3 Extraneous non-emits event listeners* related errors when using the **preview** menu in VS Code.
  - This is because the root level HTML element is not wrapped in a single tag.
  - This wasn't allowed in **Vue 2**, but is [allowed in Vue 3](https://v3-migration.vuejs.org/new/fragments.html#fragments)
  - Just wrap the top level element with a single tab, such as a `div`

### TypeScript Vue Plugin

[marketplace](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

> 💡 The [Nuxt 3 docs](https://v3.nuxtjs.org/getting-started/installation#prerequisites) have a vague description, but you need to install both **Volar** and the **Typescript Vue Plugin**. Check the related [github issue](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1369954).

## ESLint

### Anthony Fu's Settings

[Github](https://github.com/antfu/eslint-config)

- Install Anthony's eslint settings. (It also supports [npm](@antfu/eslint-config))

### Nuxt plugin

[Nuxt 3 docs](https://v3.nuxtjs.org/community/contribution#use-eslint)
[github](https://github.com/nuxt/eslint-config)

- ❗The plugin also uses vue2 specific settings, and gives a lot of unnecessary errors(probably due to using `plugin:vue/recommended`). Don't use for now.

  ~~Install `@nuxtjs/eslint-config-typescript` and `eslint`~~

  > ~~make sure you install the typescript version according to the [docs](https://github.com/nuxt/eslint-config#typescript)~~

### ES Lint - VS Code

- Configure VS Code according to [vscode extension docs](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
  - As fo 2022-10-03, needed configurations are as below. Check the [docs](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) just in case.

  ```json
  // settings.json
  {
    "eslint.format.enable": true,
    "editor.codeActionsOnSave": {
      "source.fixAll": false,
      "source.fixAll.eslint": true
    }
  }
  ```

## Nuxt Configurations

Update `nuxt.config.ts`.

- Create `main.css` and add link in head

  ```typescript
  // nuxt.config.ts
  css: ["~/assets/css/main.css"];
  ```

  - [Nuxt 3 docs](https://v3.nuxtjs.org/api/configuration/nuxt.config#css)

- Install `vue-tsc` manually(not included in Nuxt 3)
  - You need this to enable `typescript.typeCheck` option

  - [npm docs](https://www.npmjs.com/package/vue-tsc)
  - [Nuxt 3 docs](https://v3.nuxtjs.org/api/commands/typecheck#nuxi-typecheck)

- Configure typescript

  ```typescript
  // nuxt.config.ts
  typescript: {
    shim: false, // Needed for Volar takeover mode
    strict: true,
    typeCheck: true,
  }
  ```

  - [Why you should disable generating shim](https://v3.nuxtjs.org/getting-started/installation#prerequisites)

## Modules

[Explore Nuxt Modules](https://modules.nuxtjs.org/)

### Tailwind CSS

> `@nuxtjs/tailwindcss`
>
> [Official docs, getting started](https://tailwindcss.nuxtjs.org/getting-started/setup)

1. Install module
   1. You also have to install `tailwindcss` in order to add it to `package.json`
      1. The folder `tailwindcss` is will be automatically created even if you only install `@nuxtjs/tailwindcss`, but to ad it as a devDep in `package.json`, you have to install.
2. Install webpack(when using **pnpm**, it requires **Webpack5** as a dependency)
3. Add configurations

   1. `nuxt.config.ts`

      ```typescript
      // nuxt.config.ts
      modules: ["@nuxtjs/tailwindcss"],
      tailwindcss: {
      // Unnecessary if you are using .js for your tailwind.config file
      configPath: "~/tailwind.config.ts",
      // Unnecessary if your viewer works without error.
      viewer: false,
      }
      ```

   2. Add `@tailwind` to `main.css`. No need to create a separate `tailwind.css`file. If you don't use any `@layer` css rules relate to `base`, `component` or `utilities`, you don't need to add `@tailwind` rules at all since they're auto imported.
   3. Add `darkMode: 'class'` `tailwindcss.config.js` This is needed because it will give more specifity to `dark:` classes in dark mode. It's described in [tailwindcss v2 docs](https://v2.tailwindcss.com/docs/dark-mode#specificity-considerations).

4. If you're using **VS Code**, make sure you're folloiwng the [marketplace guidelines](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), such as adding extension settings. As of date **2022-10-02, v0.8.7** there are only 3 configuration recommendations.

   ```json
   // settings.json
   "files.associations": {
     "*.css": "tailwindcss"
   },
   "editor.quickSuggestions": {
     "strings": true
   },
   "tailwindCSS.includeLanguages": {
   "plaintext": "html"
   }
   ```

### Google Fonts

> `@nuxtjs/google-fonts`
>
> [Official docs, getting started](https://google-fonts.nuxtjs.org/setup)

1. Install module
2. Add configurations(fonts)

   1. `nuxt.config.ts`

      ```typescript
      // nuxt.config.ts
      modules: [@nuxtjs/google-fonts],
      googleFonts: {
        families: {
          //...
        }
      }
      ```

   2. Additional configurations will be unnecessary(`display`, `prefetch`, etc.). It seems like they're all following [best practices](https://web.dev/font-best-practices/).

### Pinia

> @pinia/nuxt
>
> [Official docs](https://pinia.vuejs.org/ssr/nuxt.html)

1. Install module
2. Add [configurations](https://pinia.vuejs.org/api/interfaces/pinia_nuxt.ModuleOptions.html#autoimports). Recommend you add `autoImports`.

**Additional info**

- You don't have to install **pinia**.
- I got some errors once, but it just solved out by reinstalling.
  - Delete *node_modules* and *package-lock.json*, then run `npm install`.

## Additionals

- Consider using **yarn** or **pnpm**
  - [Nuxt 3 docs](https://v3.nuxtjs.org/community/contribution#package-manager)

----------

## Tailwind UI

- Install according to the [docs](https://tailwindui.com/documentation)
  - `@headlessui/vue`
  - `@heroicons/vue`

## Nuxt-icon

- Install and cofig according to the [docs](https://github.com/nuxt-modules/icon)
  - You might have to also install `@iconify/vue`, as it shows add a peer depdency error in **pnpm**
