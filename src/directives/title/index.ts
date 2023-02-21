import { DirectiveBinding } from 'vue'

function beforeMount(el: HTMLElement, binding: DirectiveBinding) {
  el.dataset.title = binding.value
}

export const Title = {
  beforeMount,
}

export default Title
