// @ts-nocheck

import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Step from '..'

describe('v-intro-step', () => {
  it('v-intro-step should add data-step attribute with a number constant', () => {
    const testNum = 4
    const wrapper = mount({
      directives: { 'intro-step': Step },
      template: `<div v-intro-step="${testNum}" />`,
    })

    const el = wrapper.wrapperElement.dataset
    expect(el.step).toEqual(testNum.toString())
  })
  it('v-intro-step should add data-step attribute with a number literal', () => {
    const wrapper = mount({
      directives: { 'intro-step': Step },
      template: `<div v-intro-step="4" />`,
    })

    const el = wrapper.wrapperElement.dataset
    expect(el.step).toEqual('4')
  })
})
