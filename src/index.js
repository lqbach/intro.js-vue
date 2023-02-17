import Intro from './directives/intro'
import introJs from 'intro.js'

const plugin = {
  install: (app, options) => {
    app.directive('intro', Intro)

    app.provide('introJs', introJs())
  },
}

export default plugin
