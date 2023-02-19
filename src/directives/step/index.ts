import { DirectiveBinding } from 'vue'

function beforeMount(el: HTMLElement, binding: DirectiveBinding) {
  el.dataset.step = binding.value
}

export const Step = {
  beforeMount,
}

export default Step
