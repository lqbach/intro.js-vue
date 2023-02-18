import introJs from 'intro.js'
import 'intro.js/introjs.css'

import * as DIRECTIVES from './directives'

const plugin = {
  install: (app, options) => {
    app.directive('intro', DIRECTIVES.Intro)
    app.directive('intro-step', DIRECTIVES.Step)

    app.provide('introJs', introJs())
  },
}

export default plugin
