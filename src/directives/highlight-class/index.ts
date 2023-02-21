import { DirectiveBinding } from 'vue'

function beforeMount(el: HTMLElement, binding: DirectiveBinding) {
  el.dataset.highlightClass = binding.value
}

export const HighlightClass = {
  beforeMount,
}

export default HighlightClass
