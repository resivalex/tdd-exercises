import React from 'react'
import { configure, mount } from 'enzyme'
import App from '../src/App'
import Adapter from 'enzyme-adapter-react-16'

jest.mock('../src/retrieveInitialValue')

configure({ adapter: new Adapter() })

test('Gets initial value from backend', (done) => {
  const wrapper = mount(<App />)
  setTimeout(() => {
    try {
      wrapper.update()
      expect(wrapper.find('span').text()).toBe('15')
      done()
    } catch (e) {
      done.fail(e)
    }
  }, 100)
})

test('Adds new counter', (done) => {
  const wrapper = mount(<App />)
  setTimeout(() => {
    try {
      wrapper.update()
      expect(wrapper.find('span').text()).toBe('15')
      const addButton = wrapper.findWhere(
        (e) => e.type() === 'button' && e.text() === 'Add Counter'
      )
      addButton.simulate('click')
      setTimeout(() => {
        wrapper.update()
        expect(
          wrapper
            .find('span')
            .last()
            .text()
        ).toBe('18')
        addButton.simulate('click')
        setTimeout(() => {
          wrapper.update()
          expect(
            wrapper
              .find('span')
              .last()
              .text()
          ).toBe('21')
          done()
        }, 100)
      }, 100)
    } catch (e) {
      done.fail(e)
    }
  }, 100)
})
