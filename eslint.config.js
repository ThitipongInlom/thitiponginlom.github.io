import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import prettierConfig from 'eslint-config-prettier'

export default createConfigForNuxt().append(prettierConfig, {
  languageOptions: {
    globals: {
      // Nuxt auto-imported composables/helpers used across the app
      defineNuxtPlugin: 'readonly',
      useI18n: 'readonly',
    },
  },
  rules: {
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: true,
      },
    ],
    // Single-word section components (Header, About, Footer, ...) are intentional
    // for this portfolio; Vue 3 also supports multiple template roots.
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
})
