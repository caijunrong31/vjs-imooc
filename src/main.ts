import { createApp, defineComponent, h, createVNode, reactive, ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
// import App from './App.vue'
import App from './App'

const img = require('./assets/logo.png') //  eslint-disable-line

// createElement
// const App = defineComponent({
//   setup() {
//     const state = reactive({
//       name: 'cai',
//     })
//     const numberRef = ref(1)

//     setTimeout(() => {
//       state.name += '1'
//     }, 1000)
//     setTimeout(() => {
//       numberRef.value += 1
//     }, 1000)

//     return () => {
//       const number = numberRef.value
//       return h('div', { id: 'app' }, [
//         h('img', {
//           alt: 'Vue logo',
//           src: img,
//         }),
//         h('p', state.name + number),
//         // h(HelloWorld, {
//         //   msg: 'vue.js +  TypeScript App',
//         //   age: 12,
//         // }),
//       ])
//     }
//   },
// })

createApp(App).mount('#app')
