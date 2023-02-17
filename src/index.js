import Intro from './intro'

const plugin = {
  install(app, options) {
    app.directive('intro', Intro)
  },
  directive,
}

export default plugin
