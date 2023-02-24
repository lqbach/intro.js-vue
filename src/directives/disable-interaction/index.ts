import { DirectiveBinding } from 'vue'

function beforeMount(el: HTMLElement, binding: DirectiveBinding) {
  el.dataset.disableInteraction = binding.value
}

export const DisableInteraction = {
  beforeMount,
}

export default DisableInteraction
