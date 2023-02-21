// @ts-nocheck

import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import TooltipClass from '..'

describe('v-intro-tooltip-class', () => {
  it('v-intro-tooltip-class should insert data-intro-tooltip-class attribute', () => {
    const wrapper = mount({
      directives: { 'intro-tooltip-class': TooltipClass },
      template: `<div v-intro-tooltip-class="'example-class'" />`,
    })

    const el = wrapper.wrapperElement.dataset
    expect(el.tooltipClass).toEqual('example-class')
  })
})
