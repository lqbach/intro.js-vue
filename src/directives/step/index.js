function beforeMount(el, binding) {
  el.dataset.step = binding.value
}

export const Step = {
  beforeMount,
}

export default Step
