import LgInput from '../'

export default {
  title: 'LgInput',
  component: LgInput
}

export const Text = () => ({
  components: { LgInput },
  template: '<lg-inputs v-model="value"></lg-inputs>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { LgInput },
  template: '<lg-inputs type="password" v-model="value"></lg-inputs>',
  data () {
    return {
      value: 'admin'
    }
  }
})
