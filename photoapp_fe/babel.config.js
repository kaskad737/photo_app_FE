module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  overrides: [
    {
      test: /node_modules\/oh-vue-icons\/icons/,
      compact: true, // Skip deoptimization for large files
    },
  ],
};
