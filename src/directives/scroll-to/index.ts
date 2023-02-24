import { DirectiveBinding } from 'vue'

function beforeMount(el: HTMLElement, binding: DirectiveBinding) {
  el.dataset.scrollTo = binding.value
}

export const ScrollTo = {
  beforeMount,
}

export default ScrollTo
