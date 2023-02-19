import { DirectiveBinding } from 'vue'

function beforeMount(el: HTMLElement, binding: DirectiveBinding) {
  el.dataset.intro = binding.value
}

export const Intro = {
  beforeMount,
}

export default Intro
