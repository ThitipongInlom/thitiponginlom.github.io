module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:prettier/recommended'],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // suppress errors for missing 'import Vue' in .vue files
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: true,
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow console.log during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
