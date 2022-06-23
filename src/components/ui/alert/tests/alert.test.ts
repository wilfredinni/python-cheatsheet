import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseAlert from '../BaseAlert.vue'

describe('BaseAlert.vue', () => {
  it('should render default', () => {
    const wrapper = mount(BaseAlert)
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('.text-green-400').exists()).toBe(true)
    expect(wrapper.find('.text-green-800').exists()).toBe(true)
    expect(wrapper.find('.bg-green-50').exists()).toBe(true)
    expect(wrapper.text()).toContain('Alert message')
  })

  it('should render success', () => {
    const wrapper = mount(BaseAlert, { props: { alertType: 'success' } })
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('.text-green-400').exists()).toBe(true)
    expect(wrapper.find('.text-green-800').exists()).toBe(true)
    expect(wrapper.find('.bg-green-50').exists()).toBe(true)
    expect(wrapper.text()).toContain('Alert message')
  })

  it('should render info', () => {
    const wrapper = mount(BaseAlert, { props: { alertType: 'info' } })
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('.text-blue-400').exists()).toBe(true)
    expect(wrapper.find('.text-blue-800').exists()).toBe(true)
    expect(wrapper.find('.bg-blue-50').exists()).toBe(true)
    expect(wrapper.text()).toContain('Alert message')
  })

  it('should render warning', () => {
    const wrapper = mount(BaseAlert, { props: { alertType: 'warning' } })
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('.text-yellow-400').exists()).toBe(true)
    expect(wrapper.find('.text-yellow-800').exists()).toBe(true)
    expect(wrapper.find('.bg-yellow-50').exists()).toBe(true)
    expect(wrapper.text()).toContain('Alert message')
  })

  it('should render error', () => {
    const wrapper = mount(BaseAlert, { props: { alertType: 'error' } })
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('.text-red-400').exists()).toBe(true)
    expect(wrapper.find('.text-red-800').exists()).toBe(true)
    expect(wrapper.find('.bg-red-50').exists()).toBe(true)
    expect(wrapper.text()).toContain('Alert message')
  })
})
