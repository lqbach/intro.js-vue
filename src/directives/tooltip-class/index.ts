import { DirectiveBinding } from 'vue'

function beforeMount(el: HTMLElement, binding: DirectiveBinding) {
  el.dataset.tooltipClass = binding.value
}

export const TooltipClass = {
  beforeMount,
}

export default TooltipClass
