module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    // 'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/prettier',
  ],
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {}
};
