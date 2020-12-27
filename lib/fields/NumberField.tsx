import { FiledPropsDefine, CommonWidgetNames } from '../types'
import { defineComponent } from 'vue'
import { getWidget } from '../theme'

export default defineComponent({
  name: 'NumberFeild',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (v: string) => {
      const value = v

      const num = Number(value)

      if (Number.isNaN(num)) {
        props.onChange(undefined)
      } else {
        props.onChange(num)
      }
    }

    const NumberWidgetRef = getWidget(CommonWidgetNames.NumberWidget)

    return () => {
      const { rootSchema, errorSchema, onChange, ...rest } = props

      const NumberWidget = NumberWidgetRef.value

      return (
        <NumberWidget
          {...rest}
          onChange={handleChange}
          errors={errorSchema.__errors}
        />
      )
    }
  },
})
