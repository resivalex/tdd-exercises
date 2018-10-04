import React from 'react'
import { configure, shallow } from 'enzyme'
import Counter from '../src/Counter'
import Adapter from 'enzyme-adapter-react-16'
import _ from 'lodash'

configure({ adapter: new Adapter() })

test('Counter accepts initial value', () => {
  const wrapper = shallow(<Counter initial={123} />)
  expect(wrapper.find('span').text()).toBe('123')

  const wrapper2 = shallow(<Counter initial={345} />)
  expect(wrapper2.find('span').text()).toBe('345')
})

test('Counter increments and decrements by buttons', () => {
  const wrapper = shallow(<Counter initial={123} />)

  expect(wrapper.find('span').text()).toBe('123')
  const incButton = wrapper.findWhere((e) => e.type() === 'button' && e.text() === 'Increment')
  const decButton = wrapper.findWhere((e) => e.type() === 'button' && e.text() === 'Decrement')
  incButton.simulate('click')
  expect(wrapper.find('span').text()).toBe('124')
  decButton.simulate('click')
  expect(wrapper.find('span').text()).toBe('123')
  decButton.simulate('click')
  expect(wrapper.find('span').text()).toBe('122')
  incButton.simulate('click')
  expect(wrapper.find('span').text()).toBe('123')
})

test('Counter randomize functionality', () => {
  const wrapper = shallow(<Counter initial={543} />)

  const PROBES = 10

  expect(wrapper.find('span').text()).toBe('543')
  const randButton = wrapper.findWhere((e) => e.type() === 'button' && e.text() === 'Randomize')
  const values = _.times(PROBES, () => {
    randButton.simulate('click')
    return parseInt(wrapper.find('span').text())
  })
  expect(_.uniq(values).length).toBeGreaterThan(PROBES - 2)
  expect(values).not.toEqual(_.sortBy(values))
  expect(values).not.toEqual(_.reverse(_.sortBy(values)))
})
