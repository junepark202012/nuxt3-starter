# Starter guide for Nuxt 3

- [Starter guide for Nuxt 3](#starter-guide-for-nuxt-3)
  - [VS Code](#vs-code)
    - [Volar](#volar)
    - [TypeScript Vue Plugin](#typescript-vue-plugin)
  - [ESLint](#eslint)
  - [Nuxt Configurations](#nuxt-configurations)
  - [Modules](#modules)
    - [Tailwind CSS](#tailwind-css)
    - [Google Fonts](#google-fonts)
    - [Pinia](#pinia)

## VS Code

### Volar

[marketplace](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

- Enable **takeover mode**

  - [Vue 3 docs](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode)
  - [Nuxt 3 docs](https://v3.nuxtjs.org/getting-started/installation#prerequisites)

- Check [tips](https://github.com/johnsoncodehk/volar/discussions/53)
- Recommended extension settings

  ```json
  "volar.autoCompleteRefs": true,
  ```

### TypeScript Vue Plugin

[marketplace](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

> 💡 The [Nuxt 3 docs](https://v3.nuxtjs.org/getting-started/installation#prerequisites) have a vague description, but you need to install both **Volar** and the **Typescript Vue Plugin**. Check the related [github issue](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1369954).

## ESLint

Install `@nuxtjs/eslint-config` and configure according to [github](https://github.com/nuxt/eslint-config) instructions

## Nuxt Configurations

Update `nuxt.config.ts`.

- Create `main.css` and add link in head

  ```typescript
  css: ["~/assets/css/main.css"];
  ```

  - [Nuxt 3 docs](https://v3.nuxtjs.org/api/configuration/nuxt.config#css)

- Install `vue-tsc` manually(not included in Nuxt 3)

  - [npm docs](https://www.npmjs.com/package/vue-tsc)
  - [Nuxt 3 docs](https://v3.nuxtjs.org/api/commands/typecheck#nuxi-typecheck)

- Configure typescript

  ```typescript
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
2. Add configurations

   1. `nuxt.config.ts`

      ```typescript
      modules: ["@nuxtjs/tailwindcss"],
      tailwindcss: {
      // Unnecessary if you are using .js for your tailwind.config file
      configPath: "~/tailwind.config.ts",
      // Warnings occur with tailwind config viewer. It opens on the same port as devserver.
      viewer: false,
      }
      ```

   2. `tailwind.config.{js, ts}`

      ```typescript
      content: ["~/assets/**/*.{vue, js, ts, jsx, tsx}"],
      ```

3. If you're using **VS Code**, make sure you're folloiwng the [marketplace guidelines](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), such as adding extension settings. As of date **2022-10-02, v0.8.7** there are only 3 configuration recommendations.

   ```json
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
      modules: [@nuxtjs/google-fonts],
      googleFonts: {
        families: {
          \\ ...
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
  - Delete _node_modules_ and _package-lock.json_, then run `npm install`.
