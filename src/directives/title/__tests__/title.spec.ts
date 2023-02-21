// @ts-nocheck

import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Title from '..'

describe('v-intro-title', () => {
  it('v-intro-title should add data-title attribute with the proper value', () => {
    const wrapper = mount({
      directives: { 'intro-title': Title },
      template: `<div v-intro-title="'ILOVEVUE'" />`,
    })

    const el = wrapper.wrapperElement.dataset
    expect(el.title).toEqual('ILOVEVUE')
  })
})
