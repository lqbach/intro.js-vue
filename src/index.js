import Intro from './directives/intro'
import introJs from 'intro.js'
import 'intro.js/introjs.css'

const plugin = {
  install: (app, options) => {
    app.directive('intro', Intro)

    app.provide('introJs', introJs())
  },
}

export default plugin
