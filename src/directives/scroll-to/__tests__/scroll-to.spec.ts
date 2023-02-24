// @ts-nocheck

import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import ScrollTo from '..'

describe('v-intro-scroll-to', () => {
  it('v-intro-scroll-to should insert data-intro-scroll-to attribute', () => {
    const wrapper = mount({
      directives: { 'intro-scroll-to': ScrollTo },
      template: `<div v-intro-scroll-to="'element'" />`,
    })

    const el = wrapper.wrapperElement.dataset
    expect(el.scrollTo).toEqual('element')
  })
})
