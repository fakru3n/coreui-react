module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CoreUIReact',
      externals: {
        react: 'React'
      }
    }
  },
  devServer: {
    port: process.env.PORT || process.env.npm_config_user || '4020'
  }
}
console.log('process', process.env)
