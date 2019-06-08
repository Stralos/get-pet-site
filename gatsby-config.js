module.exports = {
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-root-import', {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/styles'],
      },
    },
  ],
};
