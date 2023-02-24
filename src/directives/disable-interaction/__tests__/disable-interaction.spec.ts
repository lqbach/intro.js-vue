// @ts-nocheck

import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import DisableInteraction from '..'

describe('v-intro-disable-interaction', () => {
  it('v-intro-disable-interaction should insert data-intro-disable-interaction attribute', () => {
    const wrapper = mount({
      directives: { 'intro-disable-interaction': DisableInteraction },
      template: `<div v-intro-disable-interaction="true" />`,
    })

    const el = wrapper.wrapperElement.dataset
    expect(el.disableInteraction).toEqual('true')
  })
})
