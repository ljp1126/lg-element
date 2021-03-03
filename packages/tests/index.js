import LgTests from './src/tests.vue'

LgTests.install = Vue => {
  Vue.component(LgTests.name, LgTests)
}

export default LgTests
