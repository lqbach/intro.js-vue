import directive from './v-click-outside'

const plugin = {
  install(app, options) {
    app.provide('introJs', options)
  },
  directive,
}

export default plugin
