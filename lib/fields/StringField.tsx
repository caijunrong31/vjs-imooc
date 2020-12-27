import { computed, defineComponent } from 'vue'

import { FiledPropsDefine, CommonWidgetNames } from '../types'
import { getWidget } from '../theme'

export default defineComponent({
  name: 'StringFeild',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (v: string) => {
      // console.log(v)
      props.onChange(v)
    }

    const TextWidgetRef = computed(() => {
      const widgetRef = getWidget(CommonWidgetNames.TextWidget, props)
      return widgetRef.value
    })

    const widgetOptionsRef = computed(() => {
      const { widget, properties, items, ...rest } = props.uiSchema
      return rest
    })

    return () => {
      const { rootSchema, errorSchema, onChange, ...rest } = props

      const TextWidget = TextWidgetRef.value

      return (
        <TextWidget
          {...rest}
          onChange={handleChange}
          errors={errorSchema.__errors}
          options={widgetOptionsRef.value}
        />
      )
    }
  },
})
