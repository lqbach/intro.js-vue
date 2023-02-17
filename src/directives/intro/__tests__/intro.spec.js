import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Intro from '../'

describe('v-intro', () => {
  it('v-intro should add data-intro attribute with content data', () => {
    const wrapper = mount({
      directives: { Intro },
      template: `<div v-intro="'content'" />`,
    })

    const el = wrapper.wrapperElement.dataset

    expect(el.intro).toEqual('content')
  })
})
