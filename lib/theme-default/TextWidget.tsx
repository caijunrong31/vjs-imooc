import { CommonWidgetPropsDefine, CommonWidgetDefine } from '../types'
import { computed, defineComponent } from 'vue'

import { withFormItem } from './FormItem'

const TextWidget: CommonWidgetDefine = withFormItem(
  defineComponent({
    name: 'TextWidget',
    props: CommonWidgetPropsDefine,
    setup(props) {
      const handleChange = (e: any) => {
        console.log(e)
        // e.target.value = props.value
        props.onChange(e.target.value)
      }
      return () => {
        // console.log('TextWidget', props.schema)
        const styleRef = computed(() => {
          return {
            color: (props.options && props.options.color) || 'black',
          }
        })

        return (
          <input
            type="text"
            value={props.value as any}
            onInput={handleChange}
            style={styleRef.value}
          />
        )
      }
    },
  }),
)

export default TextWidget
