import { mount, shallowMount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'

import JsonSchemaForm, { NumberField } from '../../lib'

import TestComponent from './utils/TestComponent'

describe('JsonSchemaForm', () => {
  it('should render correct number field', async () => {
    let value = ''
    const wrapper = mount(TestComponent, {
      props: {
        schema: {
          type: 'number',
        },
        value: value,
        onChange: (v: any) => {
          value = v
        },
      },
    })

    const numberField = wrapper.findComponent(NumberField)
    expect(numberField.exists()).toBeTruthy()
    // await numberField.props('onChange')('123')
    const input = numberField.find('input')
    input.element.value = '123'
    input.trigger('input')
    expect(value).toBe(123)
  })
})

// const HelloWorld = defineComponent({
//   name: 'HelloWorld',
//   props: {
//     msg: String,
//   },
//   setup(props) {
//     return () => {
//       return h('div', props.msg)
//     }
//   },
// })

// describe('HelloWorld.vue', () => {
//   beforeEach(() => {
//     console.log('before each')
//   })

//   afterEach(() => {
//     console.log('after each')
//   })

//   beforeAll(() => {
//     console.log('before All')
//   })

//   afterAll(() => {
//     console.log('after All')
//   })
//   it('renders props.msg when passed', async () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld as any, {
//       props: { msg },
//     })
//     // setTimeout(() => {
//     //   expect(wrapper.text()).toEqual(msg)
//     //   done()
//     // }, 100)
//     // return new Promise((resolve) => {
//     //   expect(wrapper.text()).toEqual('123')
//     //   resolve()
//     // })
//     await wrapper.setProps({
//       msg: '123',
//     })
//     expect(wrapper.text()).toEqual('123')
//   })

//   it('should work', () => {
//     expect(1 + 1).toBe(2)
//   })
// })

// describe('another', () => {
//   beforeEach(() => {
//     console.log('before each111')
//   })

//   afterEach(() => {
//     console.log('after each111')
//   })

//   beforeAll(() => {
//     console.log('before All111')
//   })

//   afterAll(() => {
//     console.log('after All111')
//   })
//   it('should work', () => {
//     expect(1 + 1).toBe(2)
//   })
// })

// test('renders props.msg when passed', () => {
//   const msg = 'new message'
//   const wrapper = shallowMount(HelloWorld as any, {
//     props: { msg },
//   })
//   expect(wrapper.text()).toMatch(msg)
// })
