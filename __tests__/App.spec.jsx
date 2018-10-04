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
