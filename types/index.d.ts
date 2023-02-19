import { Directive, Plugin } from 'vue'

declare const IntroJsVue: Plugin

declare const directive: Directive
declare const mixin: {
  directives: {
    Intro: Directive
    Step: Directive
  }
}

export { mixin, directive }
export default IntroJsVue
