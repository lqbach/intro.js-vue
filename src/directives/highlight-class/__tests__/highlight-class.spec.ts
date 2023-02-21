// @ts-nocheck

import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import HighlightClass from '..'

describe('v-intro-highlight-class', () => {
  it('v-intro-highlight-class should insert data-intro-highlight-class attribute', () => {
    const wrapper = mount({
      directives: { 'intro-highlight-class': HighlightClass },
      template: `<div v-intro-highlight-class="'example-class'" />`,
    })

    const el = wrapper.wrapperElement.dataset
    expect(el.highlightClass).toEqual('example-class')
  })
})
