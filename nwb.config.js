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
    port: process.env.PORT || '4020'
  }
}
console.log('process', process.env)
