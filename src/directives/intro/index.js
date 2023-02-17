function beforeMount(el, binding) {
  el.dataset.intro = binding.value
}

export const Intro = {
  beforeMount,
}

export default Intro
