module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^vue', '^@?\\w', '^[./]'],
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  semi: false,
}
