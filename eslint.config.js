import nuxtEslintConfig from '@nuxt/eslint-config'
import prettierConfig from 'eslint-config-prettier'

export default [
  ...nuxtEslintConfig,
  prettierConfig,
  {
    rules: {
      'vue/no-unused-components': [
        'error',
        {
          ignoreWhenBindingPresent: true,
        },
      ],
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
]
